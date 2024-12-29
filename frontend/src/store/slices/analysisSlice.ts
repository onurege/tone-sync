import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { analysisService } from '../../services/analysis.service';
import type { Analysis } from '../../services/analysis.service';
import { AxiosError } from 'axios';

interface AnalysisState {
  analyses: Analysis[];
  currentAnalysis: Analysis | null;
  loading: boolean;
  error: string | null;
}

const initialState: AnalysisState = {
  analyses: [],
  currentAnalysis: null,
  loading: false,
  error: null
};

export const createAnalysis = createAsyncThunk(
  'analysis/create',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await analysisService.createAnalysis({ url });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || 'Analiz oluşturulamadı');
      }
      return rejectWithValue('Analiz oluşturulamadı');
    }
  }
);

export const getAnalysis = createAsyncThunk(
  'analysis/getOne',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await analysisService.getAnalysis(id);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || 'Analiz bulunamadı');
      }
      return rejectWithValue('Analiz bulunamadı');
    }
  }
);

export const getUserAnalyses = createAsyncThunk(
  'analysis/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await analysisService.getUserAnalyses();
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || 'Analizler alınamadı');
      }
      return rejectWithValue('Analizler alınamadı');
    }
  }
);

const analysisSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentAnalysis: (state) => {
      state.currentAnalysis = null;
    }
  },
  extraReducers: (builder) => {
    // Create Analysis
    builder.addCase(createAnalysis.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createAnalysis.fulfilled, (state, action) => {
      state.loading = false;
      state.analyses.unshift(action.payload);
      state.currentAnalysis = action.payload;
    });
    builder.addCase(createAnalysis.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Get Analysis
    builder.addCase(getAnalysis.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAnalysis.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAnalysis = action.payload;
    });
    builder.addCase(getAnalysis.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Get User Analyses
    builder.addCase(getUserAnalyses.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserAnalyses.fulfilled, (state, action) => {
      state.loading = false;
      state.analyses = action.payload;
    });
    builder.addCase(getUserAnalyses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  }
});

export const { clearError, clearCurrentAnalysis } = analysisSlice.actions;
export default analysisSlice.reducer; 