import { Schema, model } from 'mongoose';
import { IAnalysis } from '../interfaces/analysis.interface';

const analysisSchema = new Schema<IAnalysis>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  url: {
    type: String,
    required: [true, 'URL zorunludur'],
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed'],
    default: 'pending'
  },
  results: {
    sentiment: {
      score: Number,
      label: {
        type: String,
        enum: ['positive', 'negative', 'neutral']
      },
      confidence: Number
    },
    tone: {
      formal: Number,
      informal: Number,
      friendly: Number,
      professional: Number
    },
    content: {
      readability: Number,
      seo: {
        score: Number,
        suggestions: [String]
      },
      keywords: [{
        word: String,
        count: Number,
        relevance: Number
      }]
    },
    brandConsistency: {
      score: Number,
      issues: [String]
    }
  },
  error: String
}, {
  timestamps: true
});

// URL'yi normalize et
analysisSchema.pre('save', function(next) {
  if (this.isModified('url')) {
    try {
      const url = new URL(this.url);
      this.url = url.toString();
    } catch (error) {
      next(new Error('Geçersiz URL formatı'));
      return;
    }
  }
  next();
});

const Analysis = model<IAnalysis>('Analysis', analysisSchema);

export default Analysis; 