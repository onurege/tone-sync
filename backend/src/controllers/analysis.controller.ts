import { Request, Response } from "express";
import { analysisService } from "../services/analysis.service";
import { AuthenticatedRequest } from "../interfaces/auth.interface";

class AnalysisController {
  async createAnalysis(req: AuthenticatedRequest, res: Response) {
    try {
      const analysis = await analysisService.createAnalysis(
        req.user!._id.toString(),
        req.body
      );
      res.status(201).json({
        success: true,
        data: analysis,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Analiz oluşturulurken bir hata oluştu",
      });
    }
  }

  async getAnalysis(req: AuthenticatedRequest, res: Response) {
    try {
      const analysis = await analysisService.getAnalysis(
        req.user!._id.toString(),
        req.params.id
      );
      res.status(200).json({
        success: true,
        data: analysis,
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message || "Analiz bulunamadı",
      });
    }
  }

  async getUserAnalyses(req: AuthenticatedRequest, res: Response) {
    try {
      const analyses = await analysisService.getUserAnalyses(
        req.user!._id.toString()
      );
      res.status(200).json({
        success: true,
        data: analyses,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || "Analizler alınırken bir hata oluştu",
      });
    }
  }
}

export const analysisController = new AnalysisController();
