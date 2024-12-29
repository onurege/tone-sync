import jwt from 'jsonwebtoken';
import { CreateUserInput, LoginInput, UserResponse, IUser } from '../interfaces/user.interface';
import User from '../models/user.model';

class AuthService {
  async register(input: CreateUserInput): Promise<UserResponse> {
    try {
      // E-posta kontrolü
      const existingUser = await User.findOne({ email: input.email });
      if (existingUser) {
        throw new Error('Bu e-posta adresi zaten kullanılıyor');
      }

      // Yeni kullanıcı oluştur
      const user = await User.create(input);

      return this.formatUserResponse(user);
    } catch (error) {
      throw error;
    }
  }

  async login(input: LoginInput): Promise<{ user: UserResponse; token: string }> {
    try {
      // Kullanıcıyı bul
      const user = await User.findOne({ email: input.email }).select('+password');
      if (!user) {
        throw new Error('Geçersiz e-posta veya şifre');
      }

      // Şifre kontrolü
      const isMatch = await user.comparePassword(input.password);
      if (!isMatch) {
        throw new Error('Geçersiz e-posta veya şifre');
      }

      // Son giriş tarihini güncelle
      user.lastLogin = new Date();
      await user.save();

      // Token oluştur
      const token = this.generateToken(user._id.toString());

      return {
        user: this.formatUserResponse(user),
        token
      };
    } catch (error) {
      throw error;
    }
  }

  private generateToken(userId: string): string {
    return jwt.sign(
      { userId },
      process.env.JWT_SECRET || 'default-secret',
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );
  }

  private formatUserResponse(user: IUser): UserResponse {
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt
    };
  }
}

export const authService = new AuthService(); 