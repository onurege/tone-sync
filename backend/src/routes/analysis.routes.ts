import { Router } from 'express';
import { analysisController } from '../controllers/analysis.controller';
import { protect } from '../middlewares/auth.middleware';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate.middleware';

const router = Router();

// Validasyon kuralları
const createAnalysisValidation = [
  body('url')
    .trim()
    .isURL()
    .withMessage('Geçerli bir URL giriniz')
];

// Routes
router.post('/', protect, createAnalysisValidation, validateRequest, analysisController.createAnalysis);
router.get('/', protect, analysisController.getUserAnalyses);
router.get('/:id', protect, analysisController.getAnalysis);

export default router; 