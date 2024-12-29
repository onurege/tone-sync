import { Document, Types } from 'mongoose';

export interface AnalysisResults {
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

export interface IAnalysis extends Document {
  userId: Types.ObjectId;
  url: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  results?: AnalysisResults;
  error?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateAnalysisInput {
  url: string;
}

export interface AnalysisResponse {
  id: string;
  url: string;
  status: string;
  results?: AnalysisResults;
  error?: string;
  createdAt: Date;
} 