import { Box, Grid, Paper, Typography } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Toplam Analiz
            </Typography>
            {/* Analiz istatistikleri buraya gelecek */}
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Son Analizler
            </Typography>
            {/* Son analiz listesi buraya gelecek */}
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Genel Ton Analizi
            </Typography>
            {/* Ton analizi grafiği buraya gelecek */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage; 