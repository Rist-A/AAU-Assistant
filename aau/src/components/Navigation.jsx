import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Services from './Services';
import Chatbot from './Chatbot';
import AboutAAU from './AboutAAU';
import logo from "../assets/aau.jpeg"
const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Assistant', path: '/chatbot' },
    { name: 'About', path: '/about' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ 
      textAlign: 'center', 
      width: 250,
      height: '100vh',
      background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      color: 'white'
    }}>
      <Typography variant="h6" sx={{ my: 4, fontWeight: 'bold' }}>
        AAU Freshman Guide
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.name} 
            component={Link} 
            to={item.path}
            sx={{
              '&:hover': {
                background: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{ fontWeight: 'medium' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0} 
        sx={{ 
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid rgba(0,0,0,0.05)`,
          color: theme.palette.primary.main,
          zIndex: theme.zIndex.drawer + 1
        }}
      >
        <Toolbar sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          maxWidth: 'lg',
          mx: 'auto',
          width: '100%'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >

              <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
>
  <motion.div
    whileHover={{ rotate: 15, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{
      width: 50,
      height: 50,
      borderRadius: '50%',
      border: `3px solid ${theme.palette.primary.main}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}
  >
    <img 
      src={logo}
      alt="AAU Logo" 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover' 
      }} 
    />
  </motion.div>

  <Typography 
    variant="h5" 
    component="div" 
    sx={{ 
      fontWeight: 'bold',
      color: '#0033a0',
      textShadow: '0 2px 4px rgba(0,0,0,0.05)'
    
    }}
  >
    AAU ASSISTANT
  </Typography>
</motion.div>
       
            </motion.div>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to={item.path}
                  sx={{ 
                    color: theme.palette.primary.main, 
                    mx: 1,
                    fontWeight: 'medium',
                    '&:hover': {
                      background: 'rgba(0,0,0,0.05)'
                    }
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 250,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ pt: '64px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/about" element={<AboutAAU />} />
        </Routes>
      </Box>
    </>
  );
};

export default Navigation;