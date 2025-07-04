
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LocationOn, Schedule, School, Groups, LibraryBooks, SportsSoccer } from '@mui/icons-material';
import React, { useState, useRef, useEffect } from 'react';
const AboutAAU = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const facts = [
    {
      icon: <School fontSize="large" />,
      title: "Founded",
      value: "1950",
      description: "Ethiopia's oldest and largest higher education institution"
    },
    {
      icon: <Groups fontSize="large" />,
      title: "Students",
      value: "48,000+",
      description: "Undergraduate and graduate students across all campuses"
    },
    {
      icon: <LibraryBooks fontSize="large" />,
      title: "Libraries",
      value: "12",
      description: "Including the largest academic library in Ethiopia"
    },
    {
      icon: <SportsSoccer fontSize="large" />,
      title: "Sports Facilities",
      value: "Multiple",
      description: "Including stadiums, gyms, and various sports fields"
    }
  ];

  const campuses = [
    {
      name: "Arat Kilo Campus",
      location: "Central Addis Ababa",
      focus: "Social Sciences, Humanities, Administration",
      landmark: "Main Administration Building"
    },
    {
      name: "Sidist Kilo Campus",
      location: "North Addis Ababa",
      focus: "Natural Sciences, Technology, Main Library",
      landmark: "Ras Mekonnen Hall"
    },
    {
      name: "Amist Kilo Campus",
      location: "West Addis Ababa",
      focus: "Health Sciences, Medicine",
      landmark: "Black Lion Hospital"
    },
    {
      name: "5 Kilo Campus",
      location: "East Addis Ababa",
      focus: "Engineering, Technology",
      landmark: "Technology Faculty Building"
    }
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100vw',
      overflowX: 'hidden',
      background: theme.palette.background.default,
      position: 'relative',
      py: 8,
      px: { xs: 3, md: 6 }
    }}>
      {/* Floating background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          zIndex: 0
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Title with special animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" sx={{ 
            fontWeight: 900,
            mb: 4,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}>
            About Addis Ababa University
          </Typography>
        </motion.div>

        {/* University Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ 
            mb: 8,
            p: { xs: 3, md: 4 },
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <Typography variant="h4" component="h2" sx={{ 
              fontWeight: 700,
              mb: 3,
              color: theme.palette.primary.main
            }}>
              University Overview
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              Addis Ababa University (AAU) is Ethiopia's oldest and most prestigious higher education institution. 
              Established in 1950, it has grown to become the largest university in the country with multiple campuses across the capital city.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              AAU is committed to excellence in teaching, research, and community services. It offers undergraduate and graduate programs 
              in various fields including natural and social sciences, engineering, medicine, humanities, and arts.
            </Typography>
          </Box>
        </motion.div>

        {/* Key Facts */}
        <Typography variant="h3" component="h2" sx={{ 
          fontWeight: 800,
          mb: 6,
          color: theme.palette.primary.main,
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}>
          Key Facts
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {facts.map((fact, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Box sx={{
                  p: 4,
                  height: '100%',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: `0 15px 40px rgba(0, 51, 160, 0.1)`,
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Box sx={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      color: 'white'
                    }}>
                      {fact.icon}
                    </Box>
                  </motion.div>
                  <Typography variant="h5" sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: theme.palette.primary.main
                  }}>
                    {fact.value}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {fact.title}
                  </Typography>
                  <Typography sx={{
                    color: theme.palette.text.secondary,
                    fontSize: '1rem'
                  }}>
                    {fact.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Main Campuses */}
        <Typography variant="h3" component="h2" sx={{ 
          fontWeight: 800,
          mb: 6,
          color: theme.palette.primary.main,
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}>
          Main Campuses
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {campuses.map((campus, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: `0 15px 40px rgba(0, 51, 160, 0.1)`,
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <Typography variant="h4" component="h3" sx={{ 
                    fontWeight: 700,
                    mb: 3,
                    color: theme.palette.primary.main
                  }}>
                    {campus.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOn color="primary" sx={{ mr: 1 }} />
                    <Typography>{campus.location}</Typography>
                  </Box>
                  <Typography paragraph sx={{ mb: 2 }}>
                    <strong>Focus:</strong> {campus.focus}
                  </Typography>
                  <Typography>
                    <strong>Landmark:</strong> {campus.landmark}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* University History */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ 
            p: { xs: 3, md: 4 },
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <Typography variant="h4" component="h2" sx={{ 
              fontWeight: 700,
              mb: 3,
              color: theme.palette.primary.main
            }}>
              University History
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              Addis Ababa University was originally named University College of Addis Ababa at its founding in 1950. 
              It began with just 33 students and expanded rapidly in the following decades.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              In 1962, it was renamed Haile Selassie I University and gained full university status. 
              After the 1974 revolution, it took its current name - Addis Ababa University.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              Today, AAU continues to be Ethiopia's leading institution for higher education and research, 
              producing graduates who contribute significantly to the nation's development.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutAAU;