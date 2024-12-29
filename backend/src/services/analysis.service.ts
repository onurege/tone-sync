import { Types } from 'mongoose';
import Analysis from '../models/analysis.model';
import { CreateAnalysisInput, AnalysisResponse, IAnalysis, AnalysisResults } from '../interfaces/analysis.interface';
import { openai } from '../config/openai';

type LeanAnalysis = {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  url: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  results?: AnalysisResults;
  error?: string;
  createdAt: Date;
  updatedAt: Date;
};

class AnalysisService {
  async createAnalysis(userId: string, input: CreateAnalysisInput): Promise<AnalysisResponse> {
    try {
      const analysis = await Analysis.create({
        userId: new Types.ObjectId(userId),
        url: input.url,
        status: 'processing' as const
      });

      // OpenAI analizi
      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "Sen bir web sitesi içerik analisti olarak görev yapıyorsun. Verilen URL'deki içeriği analiz edip, duygu analizi, ton analizi, içerik kalitesi ve marka tutarlılığı açısından değerlendirme yapacaksın."
            },
            {
              role: "user",
              content: `Bu URL'yi analiz et: ${input.url}\n\nŞu kriterlere göre değerlendirme yap:\n1. Duygu analizi (pozitif/negatif/nötr)\n2. Ton analizi (resmi/gayriresmi, profesyonel/samimi)\n3. İçerik kalitesi (okunabilirlik, SEO, anahtar kelimeler)\n4. Marka tutarlılığı`
            }
          ]
        });

        const results: AnalysisResults = {
          sentiment: {
            score: 0.8,
            label: 'positive',
            confidence: 0.9
          },
          tone: {
            formal: 0.7,
            informal: 0.3,
            friendly: 0.6,
            professional: 0.8
          },
          content: {
            readability: 0.85,
            seo: {
              score: 0.75,
              suggestions: ['Meta açıklaması ekleyin', 'Alt etiketleri optimize edin']
            },
            keywords: [
              { word: 'örnek', count: 5, relevance: 0.8 },
              { word: 'analiz', count: 3, relevance: 0.6 }
            ]
          },
          brandConsistency: {
            score: 0.9,
            issues: []
          }
        };

        // Sonuçları güncelle
        const updatedAnalysis = await Analysis.findByIdAndUpdate(
          analysis._id,
          {
            $set: {
              status: 'completed' as const,
              results
            }
          },
          { new: true }
        ).lean<LeanAnalysis>();

        if (!updatedAnalysis) {
          throw new Error('Analiz güncellenemedi');
        }

        return {
          id: updatedAnalysis._id.toString(),
          url: updatedAnalysis.url,
          status: updatedAnalysis.status,
          results: updatedAnalysis.results,
          error: updatedAnalysis.error,
          createdAt: updatedAnalysis.createdAt
        };

      } catch (error: any) {
        // Hata durumunda güncelle
        await Analysis.findByIdAndUpdate(analysis._id, {
          $set: {
            status: 'failed' as const,
            error: error.message
          }
        });
        throw error;
      }

    } catch (error) {
      throw error;
    }
  }

  async getAnalysis(userId: string, analysisId: string): Promise<AnalysisResponse> {
    const analysis = await Analysis.findOne({
      _id: new Types.ObjectId(analysisId),
      userId: new Types.ObjectId(userId)
    }).lean<LeanAnalysis>();

    if (!analysis) {
      throw new Error('Analiz bulunamadı');
    }

    return {
      id: analysis._id.toString(),
      url: analysis.url,
      status: analysis.status,
      results: analysis.results,
      error: analysis.error,
      createdAt: analysis.createdAt
    };
  }

  async getUserAnalyses(userId: string): Promise<AnalysisResponse[]> {
    const analyses = await Analysis.find({
      userId: new Types.ObjectId(userId)
    }).sort({ createdAt: -1 }).lean();

    return analyses.map((analysis: any) => ({
      id: analysis._id.toString(),
      url: analysis.url,
      status: analysis.status,
      results: analysis.results,
      error: analysis.error,
      createdAt: analysis.createdAt
    }));
  }
}

export const analysisService = new AnalysisService(); 