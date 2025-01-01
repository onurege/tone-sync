import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Menu, MenuItem, Avatar, Button } from '@mui/material';
import { Outlet, Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { logout } from '../store/slices/authSlice';
import { authService } from '../services/authService';

const DRAWER_WIDTH = 240;

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector(state => state.auth);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error('Çıkış yapılırken hata oluştu:', error);
    }
    handleMenuClose();
  };

  const handleProfile = () => {
    navigate('/profile');
    handleMenuClose();
  };

  const menuItems = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Analiz', path: '/analysis' },
    { text: 'Raporlar', path: '/reports' },
    { text: 'Ayarlar', path: '/settings' },
  ];

  const drawer = (
    <Box>
      <Toolbar sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        background: 'linear-gradient(45deg, rgba(255, 0, 67, 0.03) 30%, rgba(255, 0, 67, 0.08) 90%)'
      }}>
        <Typography 
          variant="h6" 
          noWrap 
          component="div"
          sx={{
            background: 'linear-gradient(45deg, #FF0043 30%, #FF4D7F 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}
        >
          AnaliSync
        </Typography>
      </Toolbar>
      <List sx={{ px: 2, py: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={RouterLink}
            to={item.path}
            sx={{ 
              textDecoration: 'none', 
              color: 'inherit',
              borderRadius: 2,
              mb: 1,
              '&:hover': {
                bgcolor: 'rgba(255, 0, 67, 0.08)',
              }
            }}
          >
            <ListItemText 
              primary={item.text} 
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: 500
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ 
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` }, 
          ml: { sm: `${DRAWER_WIDTH}px` },
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            noWrap 
            component="div"
            sx={{
              background: 'linear-gradient(45deg, #FF0043 30%, #FF4D7F 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            AnaliSync Panel
          </Typography>
          
          {token ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={handleMenuOpen}
                sx={{ 
                  padding: 0.5,
                  '&:hover': {
                    bgcolor: 'rgba(255, 0, 67, 0.08)'
                  }
                }}
                aria-controls="user-menu"
                aria-haspopup="true"
              >
                <Avatar sx={{ 
                  bgcolor: '#FF0043',
                  fontWeight: 'bold'
                }}>
                  {user?.name ? user.name.charAt(0).toUpperCase() : '?'}
                </Avatar>
              </IconButton>
              <Menu
                id="user-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    mt: 1,
                    '& .MuiMenuItem-root': {
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      mx: 0.5,
                      my: 0.25,
                      '&:hover': {
                        bgcolor: 'rgba(255, 0, 67, 0.08)'
                      }
                    }
                  }
                }}
              >
                <MenuItem onClick={handleProfile}>Profil</MenuItem>
                <MenuItem onClick={handleLogout}>Çıkış Yap</MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box>
              <Button
                component={RouterLink}
                to="/login"
                color="inherit"
                sx={{ 
                  mr: 2,
                  px: 3,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'rgba(255, 0, 67, 0.08)'
                  }
                }}
              >
                Giriş Yap
              </Button>
              <Button
                component={RouterLink}
                to="/register"
                color="inherit"
                variant="outlined"
                sx={{ 
                  px: 3,
                  borderRadius: 2,
                  borderColor: '#FF0043',
                  '&:hover': {
                    borderColor: '#FF4D7F',
                    bgcolor: 'rgba(255, 0, 67, 0.08)'
                  }
                }}
              >
                Kayıt Ol
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: DRAWER_WIDTH,
              bgcolor: 'background.paper',
              borderRight: 1,
              borderColor: 'divider'
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: DRAWER_WIDTH,
              bgcolor: 'background.paper',
              borderRight: 1,
              borderColor: 'divider'
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          mt: '64px',
          bgcolor: 'background.default',
          minHeight: '100vh'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout; 