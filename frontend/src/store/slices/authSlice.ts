import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { authService } from '../../services/auth.service';
import { AxiosError } from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  loading: false,
  error: null,
  successMessage: null
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      if (!response.success) {
        return rejectWithValue(response.message || 'Giriş başarısız');
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || 'Giriş başarısız');
      }
      return rejectWithValue('Giriş başarısız');
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authService.register(userData);
      if (!response.success) {
        return rejectWithValue(response.message || 'Kayıt başarısız');
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || 'Kayıt başarısız');
      }
      return rejectWithValue('Kayıt başarısız');
    }
  }
);

export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.getProfile();
      if (!response.success) {
        return rejectWithValue(response.message || 'Profil bilgileri alınamadı');
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || 'Profil bilgileri alınamadı');
      }
      return rejectWithValue('Profil bilgileri alınamadı');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSuccessMessage: (state, action: PayloadAction<string>) => {
      state.successMessage = action.payload;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.successMessage = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Register
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.loading = false;
      state.successMessage = 'Kayıt işleminiz başarıyla tamamlandı. Lütfen giriş yapın.';
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.successMessage = null;
    });

    // Get Profile
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  }
});

export const { clearError, setSuccessMessage, clearSuccessMessage, logout } = authSlice.actions;
export default authSlice.reducer; 