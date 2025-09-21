const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken, requireRole } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Middleware para todas as rotas de membros
router.use(authenticateToken);
router.use(requireRole(['MEMBER', 'ADMIN']));

// Obter perfil do membro
router.get('/profile', async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: {
        profile: true
      }
    });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      profile: user.profile
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Atualizar perfil do membro
router.put('/profile', async (req, res) => {
  const { name, phone, address, bio } = req.body;

  try {
    // Atualizar dados do usuário
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: { name },
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    });

    // Atualizar ou criar perfil
    const profile = await prisma.profile.upsert({
      where: { userId: req.user.id },
      update: { phone, address, bio },
      create: {
        userId: req.user.id,
        phone,
        address,
        bio
      }
    });

    res.json({
      user: updatedUser,
      profile
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Obter conteúdos para membros
router.get('/contents', async (req, res) => {
  const { page = 1, limit = 10, category, search } = req.query;
  const skip = (page - 1) * parseInt(limit);

  try {
    const where = {
      published: true,
      ...(category && { categoryId: category }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { body: { contains: search, mode: 'insensitive' } }
        ]
      })
    };

    const [contents, total] = await Promise.all([
      prisma.memberContent.findMany({
        where,
        include: {
          category: {
            select: { id: true, name: true }
          },
          user: {
            select: { id: true, name: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: parseInt(limit)
      }),
      prisma.memberContent.count({ where })
    ]);

    res.json({
      contents,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Obter conteúdo específico para membros
router.get('/contents/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const content = await prisma.memberContent.findFirst({
      where: {
        id,
        published: true
      },
      include: {
        category: {
          select: { id: true, name: true }
        },
        user: {
          select: { id: true, name: true }
        }
      }
    });

    if (!content) {
      return res.status(404).json({ message: 'Conteúdo não encontrado' });
    }

    // Registrar log de acesso
    await prisma.accessLog.create({
      data: {
        userId: req.user.id,
        action: `VIEW_CONTENT_${id}`
      }
    });

    res.json(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Obter categorias para membros
router.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        memberContents: {
          some: {
            published: true
          }
        }
      },
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            memberContents: {
              where: { published: true }
            }
          }
        }
      }
    });

    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
