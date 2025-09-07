import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Criar instância do axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token automaticamente
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para lidar com respostas de erro
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado ou inválido
      Cookies.remove('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Funções de autenticação
export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/api/auth/login', { email, password });
    const { token, user } = response.data;
    
    // Salvar token no cookie
    Cookies.set('token', token, { expires: 1 }); // Expira em 1 dia
    
    return { token, user };
  },

  register: async (name: string, email: string, password: string) => {
    const response = await api.post('/api/auth/register', { name, email, password });
    return response.data;
  },

  logout: () => {
    Cookies.remove('token');
    window.location.href = '/';
  },

  getToken: () => {
    return Cookies.get('token');
  },

  isAuthenticated: () => {
    return !!Cookies.get('token');
  }
};

// Funções para área pública
export const publicApi = {
  getContents: async (params?: { page?: number; limit?: number; category?: string; search?: string }) => {
    const response = await api.get('/api/public/contents', { params });
    return response.data;
  },

  getContent: async (id: string) => {
    const response = await api.get(`/api/public/contents/${id}`);
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get('/api/public/categories');
    return response.data;
  },

  sendContact: async (data: { name: string; email: string; subject: string; message: string }) => {
    const response = await api.post('/api/public/contact', data);
    return response.data;
  }
};

// Funções para área de maçons
export const masonApi = {
  authenticate: async (password: string) => {
    const response = await api.post('/api/mason/auth', { password });
    return response.data;
  },

  getContents: async (password: string, params?: { page?: number; limit?: number; category?: string; search?: string }) => {
    const response = await api.post('/api/mason/contents', { password }, { params });
    return response.data;
  },

  getContent: async (password: string, id: string) => {
    const response = await api.post(`/api/mason/contents/${id}`, { password });
    return response.data;
  },

  getCategories: async (password: string) => {
    const response = await api.post('/api/mason/categories', { password });
    return response.data;
  }
};

// Funções para área de membros
export const memberApi = {
  getProfile: async () => {
    const response = await api.get('/api/member/profile');
    return response.data;
  },

  updateProfile: async (data: { name?: string; phone?: string; address?: string; bio?: string }) => {
    const response = await api.put('/api/member/profile', data);
    return response.data;
  },

  getContents: async (params?: { page?: number; limit?: number; category?: string; search?: string }) => {
    const response = await api.get('/api/member/contents', { params });
    return response.data;
  },

  getContent: async (id: string) => {
    const response = await api.get(`/api/member/contents/${id}`);
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get('/api/member/categories');
    return response.data;
  }
};

// Funções para área administrativa
export const adminApi = {
  getDashboard: async () => {
    const response = await api.get('/api/admin/dashboard');
    return response.data;
  },

  getUsers: async (params?: { page?: number; limit?: number; search?: string }) => {
    const response = await api.get('/api/admin/users', { params });
    return response.data;
  },

  createUser: async (data: { name: string; email: string; password: string; role: string }) => {
    const response = await api.post('/api/admin/users', data);
    return response.data;
  },

  updateUser: async (id: string, data: { name?: string; email?: string; role?: string; isActive?: boolean }) => {
    const response = await api.put(`/api/admin/users/${id}`, data);
    return response.data;
  },

  getMasonPassword: async () => {
    const response = await api.get('/api/admin/mason-password');
    return response.data;
  },

  updateMasonPassword: async (password: string) => {
    const response = await api.put('/api/admin/mason-password', { password });
    return response.data;
  },

  getLogs: async (params?: { page?: number; limit?: number }) => {
    const response = await api.get('/api/admin/logs', { params });
    return response.data;
  }
};

export default api;
