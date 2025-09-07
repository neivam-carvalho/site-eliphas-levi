const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateMason } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Autenticação de maçon (senha fixa)
router.post('/auth', authenticateMason, async (req, res) => {
  try {
    res.json({ message: 'Acesso autorizado para área de maçons' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Obter conteúdos para maçons (após autenticação)
router.post('/contents', authenticateMason, async (req, res) => {
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
      prisma.masonContent.findMany({
        where,
        include: {
          category: {
            select: { id: true, name: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: parseInt(limit)
      }),
      prisma.masonContent.count({ where })
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

// Obter conteúdo específico para maçons
router.post('/contents/:id', authenticateMason, async (req, res) => {
  const { id } = req.params;

  try {
    const content = await prisma.masonContent.findFirst({
      where: {
        id,
        published: true
      },
      include: {
        category: {
          select: { id: true, name: true }
        }
      }
    });

    if (!content) {
      return res.status(404).json({ message: 'Conteúdo não encontrado' });
    }

    res.json(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Obter categorias para maçons
router.post('/categories', authenticateMason, async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        masonContents: {
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
            masonContents: {
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
