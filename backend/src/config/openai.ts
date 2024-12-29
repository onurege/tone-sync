import OpenAI from 'openai';
import dotenv from 'dotenv';

// Ortam değişkenlerini yükle
dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('OPENAI_API_KEY ortam değişkeni bulunamadı');
}

export const openai = new OpenAI({
  apiKey: apiKey
}); 