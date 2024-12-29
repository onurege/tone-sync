import api from './api';
import { AxiosError } from 'axios';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  name: string;
}

interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      this.setToken(response.data.token);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/auth/register', data);
      this.setToken(response.data.token);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout');
    } finally {
      this.removeToken();
    }
  }

  async refreshToken(): Promise<string> {
    try {
      const response = await api.post<{ token: string }>('/auth/refresh-token');
      this.setToken(response.data.token);
      return response.data.token;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private removeToken(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private handleError(error: unknown): Error {
    if (error instanceof AxiosError && error.response) {
      // API'den gelen hata
      const message = error.response.data.message || 'Bir hata oluştu';
      return new Error(message);
    }
    return new Error('Sunucuya bağlanılamadı');
  }
}

export const authService = new AuthService();
export type { LoginCredentials, RegisterData, AuthResponse }; 