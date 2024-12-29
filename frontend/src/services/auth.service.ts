import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

interface AuthResponse {
  success: boolean;
  data: {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      createdAt: string;
    };
  };
  message?: string;
}

const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post<AuthResponse>(`${API_URL}/login`, credentials);
    if (response.data.success && response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data) {
      return error.response.data;
    }
    throw error;
  }
};

const register = async (userData: { name: string; email: string; password: string }) => {
  try {
    const response = await axios.post<AuthResponse>(`${API_URL}/register`, userData);
    if (response.data.success && response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data) {
      return error.response.data;
    }
    throw error;
  }
};

const getProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get<AuthResponse>(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data) {
      return error.response.data;
    }
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};

export const authService = {
  login,
  register,
  getProfile,
  logout
}; 