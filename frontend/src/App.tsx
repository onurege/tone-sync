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
import { HelmetProvider } from 'react-helmet-async';

// Tema ayarları
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF0043',
      light: '#FF4D7F',
      dark: '#CC0036'
    },
    secondary: {
      main: '#FF0043',
      light: '#FF4D7F',
      dark: '#CC0036'
    },
    background: {
      default: '#0A0A0A',
      paper: '#141414'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3'
    },
    error: {
      main: '#FF3D3D',
      light: '#FF6666',
      dark: '#CC3333'
    },
    warning: {
      main: '#FFA726',
      light: '#FFB74D',
      dark: '#F57C00'
    },
    info: {
      main: '#29B6F6',
      light: '#4FC3F7',
      dark: '#0288D1'
    },
    success: {
      main: '#66BB6A',
      light: '#81C784',
      dark: '#388E3C'
    },
    divider: 'rgba(255, 0, 67, 0.12)'
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#FFFFFF'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#FFFFFF'
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#FFFFFF'
    },
    body1: {
      color: '#E0E0E0'
    },
    body2: {
      color: '#B3B3B3'
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
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LandingPage />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/login" /> : <RegisterPage />} />

            {/* Protected routes */}
            <Route element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/analysis" element={<AnalysisPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
