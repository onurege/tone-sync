import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Paper, TextField, Button, Typography, Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { login, clearError, clearSuccessMessage } from '../../store/slices/authSlice';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, successMessage } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        dispatch(clearSuccessMessage());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, dispatch]);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) dispatch(clearError());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login(formData)).unwrap();
      if (resultAction) {
        navigate('/dashboard');
      }
    } catch {
      // Hata zaten Redux state'inde
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      bgcolor: 'background.default' 
    }}>
      <Helmet>
        <title>Giriş Yap | AnaliSync</title>
        <meta name="description" content="AnaliSync hesabınıza giriş yapın ve web sitenizin içerik analizine hemen başlayın." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Giriş Yap | AnaliSync" />
        <meta property="og:description" content="AnaliSync hesabınıza giriş yapın ve web sitenizin içerik analizine hemen başlayın." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Container maxWidth="sm">
        <Paper elevation={0} sx={{ p: 4, borderRadius: 2, border: 1, borderColor: 'divider' }}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{ 
              mb: 4,
              background: 'linear-gradient(45deg, #CBD5E1 30%, #F59E0B 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Giriş Yap
          </Typography>

          {successMessage && successMessage.length > 0 && (
            <Alert 
              severity="success" 
              sx={{ mb: 2 }}
              onClose={() => dispatch(clearSuccessMessage())}
            >
              {successMessage}
            </Alert>
          )}

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="E-posta"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              autoComplete="email"
            />
            <TextField
              fullWidth
              label="Şifre"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
              autoComplete="current-password"
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              disabled={loading}
              sx={{ mt: 3 }}
            >
              {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </Button>
          </form>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Hesabınız yok mu?{' '}
              <Button 
                color="secondary" 
                onClick={() => navigate('/register')}
                sx={{ textTransform: 'none' }}
              >
                Kayıt Ol
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage; 