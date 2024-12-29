import { Box, Button, Container, Typography, Grid, Paper, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LanguageIcon from '@mui/icons-material/Language';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: 'secondary.light' }} />,
      title: 'Gelişmiş İçerik Analizi',
      description: 'Yapay zeka destekli içerik analizi ile web sitenizin ton ve duygusunu analiz edin.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'secondary.light' }} />,
      title: 'Güvenli ve Hızlı',
      description: 'Modern teknolojiler ile güvenli ve hızlı analiz sonuçları elde edin.'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'secondary.light' }} />,
      title: 'Detaylı Raporlama',
      description: 'SEO, okunabilirlik ve marka tutarlılığı için detaylı raporlar alın.'
    }
  ];

  const analysisDetails = [
    {
      icon: <SentimentSatisfiedAltIcon sx={{ fontSize: 40, color: 'secondary.light' }} />,
      title: 'Duygu Analizi',
      description: 'İçeriğinizin duygusal tonunu ölçün',
      details: [
        'Pozitif/Negatif/Nötr duygu skorları',
        '%90\'a varan doğruluk oranı',
        'Güvenilirlik puanlaması'
      ]
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'secondary.light' }} />,
      title: 'Ton Analizi',
      description: 'İçerik tonunuzu değerlendirin',
      details: [
        'Resmiyet seviyesi ölçümü',
        'Profesyonellik değerlendirmesi',
        'Samimiyet ve arkadaşça ton analizi'
      ]
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 40, color: 'secondary.light' }} />,
      title: 'İçerik Kalitesi',
      description: 'SEO ve okunabilirlik analizi',
      details: [
        'Detaylı SEO önerileri',
        'Okunabilirlik puanı',
        'Anahtar kelime analizi ve önerileri'
      ]
    },
    {
      icon: <BrandingWatermarkIcon sx={{ fontSize: 40, color: 'secondary.light' }} />,
      title: 'Marka Tutarlılığı',
      description: 'Marka kimliğinizi koruyun',
      details: [
        'Marka uyumluluk skoru',
        'İyileştirme önerileri',
        'Tutarlılık raporu'
      ]
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'background.paper', 
        color: 'text.primary',
        py: 12,
        borderBottom: 1,
        borderColor: 'divider'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ 
                  background: 'linear-gradient(45deg, #CBD5E1 30%, #F59E0B 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Tone Sync
              </Typography>
              <Typography variant="h5" paragraph sx={{ color: 'text.secondary' }}>
                Web içeriklerinizi yapay zeka ile analiz edin
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 4 }}>
                Tone Sync, web sitenizin içerik tonunu, duygusunu ve kalitesini analiz ederek 
                daha etkili içerikler oluşturmanıza yardımcı olur.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  onClick={() => navigate('/register')}
                  sx={{ 
                    mr: 2,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}
                >
                  Ücretsiz Başla
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{ 
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}
                >
                  Giriş Yap
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                width: '100%', 
                height: 400, 
                bgcolor: 'background.default',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 1,
                borderColor: 'divider'
              }}>
                {/* Buraya bir görsel veya animasyon eklenebilir */}
                <Typography variant="h4" sx={{ color: 'text.secondary' }}>Demo Görsel</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            mb: 8,
            background: 'linear-gradient(45deg, #CBD5E1 30%, #F59E0B 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Özellikler
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 4,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                {feature.icon}
                <Typography variant="h5" component="h3" sx={{ my: 2, color: 'text.primary' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Analysis Details Section */}
      <Box sx={{ 
        bgcolor: 'background.default', 
        py: 12,
        borderTop: 1,
        borderBottom: 1,
        borderColor: 'divider'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              mb: 8,
              background: 'linear-gradient(45deg, #CBD5E1 30%, #F59E0B 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Detaylı Analiz Raporu
          </Typography>
          <Grid container spacing={4}>
            {analysisDetails.map((detail, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    bgcolor: 'background.paper',
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      boxShadow: '0 0 15px rgba(245, 158, 11, 0.1)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {detail.icon}
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h5" component="h3" sx={{ color: 'text.primary' }}>
                        {detail.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {detail.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Box component="ul" sx={{ 
                    listStyle: 'none', 
                    p: 0, 
                    m: 0,
                    '& li': {
                      position: 'relative',
                      pl: 3,
                      py: 0.5,
                      '&::before': {
                        content: '"•"',
                        position: 'absolute',
                        left: 0,
                        color: 'secondary.main'
                      }
                    }
                  }}>
                    {detail.details.map((item, idx) => (
                      <li key={idx}>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ 
        bgcolor: 'background.paper', 
        color: 'text.primary',
        py: 12,
        borderTop: 1,
        borderColor: 'divider'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{ 
              mb: 2,
              background: 'linear-gradient(45deg, #CBD5E1 30%, #F59E0B 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Hemen Başlayın
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ color: 'text.secondary', mb: 4 }}>
            Web içeriklerinizi analiz etmek için ücretsiz hesap oluşturun.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              onClick={() => navigate('/register')}
              sx={{ 
                px: 6,
                py: 2,
                fontSize: '1.1rem'
              }}
            >
              Ücretsiz Hesap Oluştur
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 