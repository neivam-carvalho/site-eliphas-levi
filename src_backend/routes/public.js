const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Obter conteúdos públicos
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
      prisma.publicContent.findMany({
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
      prisma.publicContent.count({ where })
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

// Obter conteúdo público por ID
router.get('/contents/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const content = await prisma.publicContent.findFirst({
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

// Obter categorias públicas
router.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        publicContents: {
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
            publicContents: {
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

// Endpoint para formulário de contato
router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    // TODO: Implementar envio de email ou salvar no banco
    console.log('Mensagem de contato recebida:', { name, email, subject, message });
    
    res.json({ message: 'Mensagem enviada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
