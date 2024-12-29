import api from './api';

interface AnalysisResult {
  sentiment: {
    score: number;
    label: 'positive' | 'negative' | 'neutral';
    confidence: number;
  };
  tone: {
    formal: number;
    informal: number;
    friendly: number;
    professional: number;
  };
  content: {
    readability: number;
    seo: {
      score: number;
      suggestions: string[];
    };
    keywords: Array<{
      word: string;
      count: number;
      relevance: number;
    }>;
  };
  brandConsistency: {
    score: number;
    issues: string[];
  };
}

interface Analysis {
  id: string;
  url: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  results?: AnalysisResult;
  error?: string;
  createdAt: Date;
}

interface CreateAnalysisInput {
  url: string;
}

interface AnalysisResponse {
  success: boolean;
  data: Analysis;
}

interface AnalysesResponse {
  success: boolean;
  data: Analysis[];
}

class AnalysisService {
  async createAnalysis(input: CreateAnalysisInput): Promise<AnalysisResponse> {
    const response = await api.post<AnalysisResponse>('/analysis', input);
    return response.data;
  }

  async getAnalysis(id: string): Promise<AnalysisResponse> {
    const response = await api.get<AnalysisResponse>(`/analysis/${id}`);
    return response.data;
  }

  async getUserAnalyses(): Promise<AnalysesResponse> {
    const response = await api.get<AnalysesResponse>('/analysis');
    return response.data;
  }
}

export const analysisService = new AnalysisService();
export type { Analysis, AnalysisResult, CreateAnalysisInput }; 