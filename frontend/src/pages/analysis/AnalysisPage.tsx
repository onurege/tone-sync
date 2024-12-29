import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  Paper,
  Stack,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Chip
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createAnalysis, getUserAnalyses } from '../../store/slices/analysisSlice';
import type { Analysis } from '../../services/analysis.service';

const AnalysisPage = () => {
  const dispatch = useAppDispatch();
  const { analyses, loading, error } = useAppSelector(state => state.analysis);
  const [url, setUrl] = useState('');

  useEffect(() => {
    dispatch(getUserAnalyses());
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      await dispatch(createAnalysis(url));
      setUrl('');
    }
  };

  const renderAnalysisStatus = (status: Analysis['status']) => {
    const colors: Record<Analysis['status'], 'warning' | 'info' | 'success' | 'error'> = {
      pending: 'warning',
      processing: 'info',
      completed: 'success',
      failed: 'error'
    };

    return (
      <Chip
        label={status.toUpperCase()}
        color={colors[status]}
        size="small"
      />
    );
  };

  const renderAnalysisResults = (analysis: Analysis) => {
    if (!analysis.results || analysis.status !== 'completed') return null;

    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Duygu Analizi
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip
            label={`${analysis.results.sentiment.label} (${Math.round(analysis.results.sentiment.score * 100)}%)`}
            color={analysis.results.sentiment.label === 'positive' ? 'success' : analysis.results.sentiment.label === 'negative' ? 'error' : 'default'}
          />
          <Chip label={`Güven: ${Math.round(analysis.results.sentiment.confidence * 100)}%`} variant="outlined" />
        </Box>

        <Typography variant="subtitle2" gutterBottom>
          Ton Analizi
        </Typography>
        <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ mb: 2 }}>
          <Chip label={`Resmi: ${Math.round(analysis.results.tone.formal * 100)}%`} />
          <Chip label={`Gayriresmi: ${Math.round(analysis.results.tone.informal * 100)}%`} />
          <Chip label={`Samimi: ${Math.round(analysis.results.tone.friendly * 100)}%`} />
          <Chip label={`Profesyonel: ${Math.round(analysis.results.tone.professional * 100)}%`} />
        </Stack>

        <Typography variant="subtitle2" gutterBottom>
          İçerik Analizi
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Chip label={`Okunabilirlik: ${Math.round(analysis.results.content.readability * 100)}%`} sx={{ mr: 1 }} />
          <Chip label={`SEO Skoru: ${Math.round(analysis.results.content.seo.score * 100)}%`} />
        </Box>

        {analysis.results.content.seo.suggestions.length > 0 && (
          <>
            <Typography variant="subtitle2" gutterBottom>
              SEO Önerileri
            </Typography>
            <List dense>
              {analysis.results.content.seo.suggestions.map((suggestion, index) => (
                <ListItem key={index}>
                  <ListItemText primary={suggestion} />
                </ListItem>
              ))}
            </List>
          </>
        )}

        <Typography variant="subtitle2" gutterBottom>
          Anahtar Kelimeler
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {analysis.results.content.keywords.map((keyword, index) => (
            <Chip
              key={index}
              label={`${keyword.word} (${keyword.count})`}
              variant="outlined"
              size="small"
            />
          ))}
        </Box>

        <Typography variant="subtitle2" gutterBottom>
          Marka Tutarlılığı
        </Typography>
        <Chip label={`Skor: ${Math.round(analysis.results.brandConsistency.score * 100)}%`} />
        
        {analysis.results.brandConsistency.issues.length > 0 && (
          <List dense>
            {analysis.results.brandConsistency.issues.map((issue, index) => (
              <ListItem key={index}>
                <ListItemText primary={issue} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    );
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          İçerik Analizi
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              disabled={loading}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading || !url}
              startIcon={loading && <CircularProgress size={20} />}
            >
              Analiz Et
            </Button>
          </Box>
        </Paper>

        <Typography variant="h5" gutterBottom>
          Analizlerim
        </Typography>

        {analyses.length === 0 ? (
          <Alert severity="info">
            Henüz bir analiz yapmadınız. URL girerek yeni bir analiz başlatabilirsiniz.
          </Alert>
        ) : (
          <Stack spacing={3}>
            {analyses.map((analysis) => (
              <Paper elevation={2} sx={{ p: 3 }} key={analysis.id}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" component="div" sx={{ wordBreak: 'break-all' }}>
                    {analysis.url}
                  </Typography>
                  {renderAnalysisStatus(analysis.status)}
                </Box>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {new Date(analysis.createdAt).toLocaleString()}
                </Typography>

                {analysis.error && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {analysis.error}
                  </Alert>
                )}

                {renderAnalysisResults(analysis)}
              </Paper>
            ))}
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default AnalysisPage; 