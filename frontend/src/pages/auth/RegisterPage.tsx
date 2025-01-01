import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Paper, TextField, Button, Typography, Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { register, clearError } from '../../store/slices/authSlice';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
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
      await dispatch(register(formData)).unwrap();
      navigate('/login', { replace: true });
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
        <title>Ücretsiz Kayıt Ol | AnaliSync</title>
        <meta name="description" content="AnaliSync'e ücretsiz kayıt olun ve web sitenizin içerik analizine hemen başlayın. Yapay zeka destekli SEO ve içerik analizi araçlarına erişin." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Ücretsiz Kayıt Ol | AnaliSync" />
        <meta property="og:description" content="AnaliSync'e ücretsiz kayıt olun ve web sitenizin içerik analizine hemen başlayın." />
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
            Kayıt Ol
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Ad Soyad"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              autoComplete="name"
            />
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
              autoComplete="new-password"
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
              {loading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
            </Button>
          </form>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Zaten hesabınız var mı?{' '}
              <Button 
                color="secondary" 
                onClick={() => navigate('/login')}
                sx={{ textTransform: 'none' }}
              >
                Giriş Yap
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterPage; 