import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import { RootState } from './store';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import AnalysisPage from './pages/analysis/AnalysisPage';
import LandingPage from './pages/LandingPage';

// Tema ayarları
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#94A3B8', // Slate-400
      light: '#CBD5E1', // Slate-300
      dark: '#64748B'  // Slate-500
    },
    secondary: {
      main: '#F59E0B', // Amber-500
      light: '#FCD34D', // Amber-300
      dark: '#D97706'  // Amber-600
    },
    background: {
      default: '#0F172A', // Slate-900
      paper: '#1E293B'    // Slate-800
    },
    text: {
      primary: '#E2E8F0',   // Slate-200
      secondary: '#94A3B8'  // Slate-400
    },
    error: {
      main: '#F87171',      // Red-400
      light: '#FCA5A5',     // Red-300
      dark: '#EF4444'       // Red-500
    },
    warning: {
      main: '#FBBF24',      // Amber-400
      light: '#FCD34D',     // Amber-300
      dark: '#F59E0B'       // Amber-500
    },
    info: {
      main: '#60A5FA',      // Blue-400
      light: '#93C5FD',     // Blue-300
      dark: '#3B82F6'       // Blue-500
    },
    success: {
      main: '#34D399',      // Emerald-400
      light: '#6EE7B7',     // Emerald-300
      dark: '#10B981'       // Emerald-500
    },
    divider: 'rgba(148, 163, 184, 0.12)' // Slate-400 with opacity
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#E2E8F0' // Slate-200
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#E2E8F0' // Slate-200
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#E2E8F0' // Slate-200
    },
    body1: {
      color: '#CBD5E1' // Slate-300
    },
    body2: {
      color: '#94A3B8' // Slate-400
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8
        }
      }
    }
  }
});

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.token !== null);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LandingPage />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <RegisterPage />} />

          {/* Protected routes */}
          <Route path="/" element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="analysis" element={<AnalysisPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
