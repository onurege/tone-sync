import { Request, Response } from 'express';
import { authService } from '../services/auth.service';

class AuthController {
  constructor() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  async register(req: Request, res: Response) {
    try {
      const user = await authService.register(req.body);
      res.status(201).json({
        success: true,
        data: user
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Kayıt işlemi başarısız'
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { user, token } = await authService.login(req.body);
      res.status(200).json({
        success: true,
        data: { user, token }
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message || 'Giriş işlemi başarısız'
      });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      res.status(200).json({
        success: true,
        data: req.user
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Profil bilgileri alınamadı'
      });
    }
  }
}

export const authController = new AuthController(); 