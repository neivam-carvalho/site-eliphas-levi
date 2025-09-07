const express = require('express');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken, requireRole } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Middleware para todas as rotas de admin
router.use(authenticateToken);
router.use(requireRole(['ADMIN']));

// Dashboard - estatísticas gerais
router.get('/dashboard', async (req, res) => {
  try {
    const [
      totalUsers,
      totalPublicContents,
      totalMasonContents,
      totalMemberContents,
      recentAccesses
    ] = await Promise.all([
      prisma.user.count({ where: { isActive: true } }),
      prisma.publicContent.count({ where: { published: true } }),
      prisma.masonContent.count({ where: { published: true } }),
      prisma.memberContent.count({ where: { published: true } }),
      prisma.accessLog.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: { name: true, email: true }
          }
        }
      })
    ]);

    res.json({
      stats: {
        totalUsers,
        totalPublicContents,
        totalMasonContents,
        totalMemberContents
      },
      recentAccesses
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Gerenciar usuários
router.get('/users', async (req, res) => {
  const { page = 1, limit = 10, search } = req.query;
  const skip = (page - 1) * parseInt(limit);

  try {
    const where = search ? {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } }
      ]
    } : {};

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          isActive: true,
          createdAt: true
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: parseInt(limit)
      }),
      prisma.user.count({ where })
    ]);

    res.json({
      users,
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

// Criar usuário
router.post('/users', [
  body('name').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'),
  body('role').isIn(['MEMBER', 'ADMIN']).withMessage('Role inválido')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, role } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Atualizar usuário
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, role, isActive } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id },
      data: { name, email, role, isActive },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true
      }
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Gerenciar senha de maçons
router.get('/mason-password', async (req, res) => {
  try {
    const masonAccess = await prisma.masonAccess.findFirst();
    res.json({ hasPassword: !!masonAccess });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

router.put('/mason-password', [
  body('password').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { password } = req.body;

  try {
    await prisma.masonAccess.upsert({
      where: { id: 'unique' }, // Assumindo que só há um registro
      update: { password },
      create: { password }
    });

    res.json({ message: 'Senha atualizada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Logs de acesso
router.get('/logs', async (req, res) => {
  const { page = 1, limit = 50 } = req.query;
  const skip = (page - 1) * parseInt(limit);

  try {
    const [logs, total] = await Promise.all([
      prisma.accessLog.findMany({
        include: {
          user: {
            select: { name: true, email: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: parseInt(limit)
      }),
      prisma.accessLog.count()
    ]);

    res.json({
      logs,
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

module.exports = router;
