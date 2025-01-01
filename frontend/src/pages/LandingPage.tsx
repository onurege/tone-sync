import { Box, Button, Container, Typography, Paper, Divider, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>AnaliSync - Yapay Zeka ile Web Site İçerik ve SEO Analizi | AI SEO Aracı</title>
        <meta name="description" content="AnaliSync, yapay zeka destekli web site içerik analizi ve SEO optimizasyon aracı. İçerik kalitesi, SEO uyumluluğu, marka tutarlılığı analizleri ve öneriler. Ücretsiz deneyin!" />
        <meta name="keywords" content="yapay zeka seo analizi, ai içerik analizi, web site analizi, seo optimizasyonu, içerik kalitesi, marka tutarlılığı, seo araçları, yapay zeka seo, web site seo analizi, içerik optimizasyonu, türkçe seo aracı, ücretsiz seo analizi" />
        <meta property="og:title" content="AnaliSync - Yapay Zeka ile Web Site İçerik ve SEO Analizi" />
        <meta property="og:description" content="Yapay zeka destekli SEO ve içerik analizi aracı. Web sitenizin içerik kalitesini artırın, SEO performansınızı yükseltin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://analisync.com" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="canonical" href="https://analisync.com" />
        
        {/* Ek SEO meta etiketleri */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="AnaliSync" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        
        {/* Yapısal veri işaretlemesi */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AnaliSync",
              "applicationCategory": "SEO Software",
              "description": "Yapay zeka destekli web site içerik analizi ve SEO optimizasyon aracı",
              "operatingSystem": "Web-based",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "TRY"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Header with Logo */}
      <Box sx={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        p: 3,
        zIndex: 1100,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}
      onClick={() => navigate('/')}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="AnaliSync Logo"
          sx={{
            height: 45,
            width: 45,
            borderRadius: 2,
            filter: 'none' // Filtreyi kaldırıyoruz
          }}
        />
        <Typography 
          variant="h6" 
          sx={{
            background: 'linear-gradient(45deg, #FF0043 30%, #FF4D7F 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            letterSpacing: 1
          }}
        >
          AnaliSync
        </Typography>
      </Box>

      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'background.paper', 
        color: 'text.primary',
        py: 12,
        borderBottom: 1,
        borderColor: 'divider'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #FF0043 30%, #FF4D7F 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Yapay Zeka ile SEO ve İçerik Analizi
              </Typography>
              <Typography 
                variant="h4" 
                component="h2"
                sx={{ 
                  color: 'text.secondary',
                  mb: 3 
                }}
              >
                Web Sitenizin SEO ve İçerik Performansını Artırın
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 4 }}>
                AnaliSync, yapay zeka teknolojisi ile web sitenizin SEO performansını analiz eder, 
                içerik kalitesini değerlendirir ve marka tutarlılığını ölçer. Detaylı raporlar ve 
                önerilerle web sitenizin arama motorlarındaki sıralamasını yükseltin.
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
                borderColor: 'divider',
                overflow: 'hidden'
              }}>
                <Box
                  component="img"
                  src="../demo.jpg"
                  alt="AnaliSync Demo Ekranı"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }}
                />
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
          <Grid container spacing={4}>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 