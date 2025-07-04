import React, { useEffect } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomePage = () => {
  // AAU Color Theme
  const aauColors = {
    primary: '#0033a0', // AAU dark blue
    secondary: '#0077c8', // AAU light blue
    accent: '#ffd100', // AAU gold
    background: '#f8fafc',
    text: '#1e293b'
  };

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Features data
  const features = [
    {
      title: "Registration Guide",
      description: "Step-by-step guidance for university registration",
      link: "/services",
      icon: "📝"
    },
    {
      title: "Campus Services",
      description: "Interactive map and directory for campus facilities",
      link: "/services",
      icon: "🏛️"
    },
    {
      title: "AI Assistant",
      description: "24/7 virtual assistant for freshman questions",
      link: "/chatbot",
      icon: "🤖"
    },
    {
      title: "University Guide",
      description: "Comprehensive AAU information and student life",
      link: "/about",
      icon: "📚"
    }
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100vw',
      overflowX: 'hidden',
      background: aauColors.background,
      position: 'relative'
    }}>
      {/* Hero Section Background Elements */}
      {/* Animated gradient mesh background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 30%, ${aauColors.primary} 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, ${aauColors.secondary} 0%, transparent 30%),
            radial-gradient(circle at 40% 80%, ${aauColors.accent} 0%, transparent 30%)
          `,
          backgroundBlendMode: 'overlay',
          zIndex: 0
        }}
      />

      {/* Floating animated shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${aauColors.primary} 0%, transparent 70%)`,
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${aauColors.secondary} 0%, transparent 70%)`,
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${aauColors.accent} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />

      {/* Animated grid lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(to right, ${aauColors.primary} 1px, transparent 1px),
            linear-gradient(to bottom, ${aauColors.primary} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" disableGutters sx={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <Box sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated floating particles with more variety */}
          {[...Array(30)].map((_, i) => {
            const size = Math.random() * 5 + 2;
            const delay = Math.random() * 5;
            const duration = Math.random() * 15 + 10;
            const color = i % 3 === 0 ? aauColors.primary : i % 3 === 1 ? aauColors.secondary : aauColors.accent;
            
            return (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0,
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{ 
                  opacity: [0, Math.random() * 0.4 + 0.1, 0],
                  x: Math.random() * 800 - 400,
                  y: Math.random() * 800 - 400,
                  rotate: Math.random() * 360
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: delay,
                  ease: "linear"
                }}
                style={{
                  position: 'absolute',
                  width: `${size}px`,
                  height: `${size}px`,
                  borderRadius: '50%',
                  background: color,
                  zIndex: 0,
                  mixBlendMode: 'overlay'
                }}
              />
            );
          })}

          {/* Enhanced title animation with floating effect */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              y: [0, -10, 0] // Floating effect
            }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              ease: [0.6, -0.05, 0.01, 0.99],
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Typography variant="h1" sx={{
              fontWeight: 900,
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
              lineHeight: 1,
              mb: 3,
              background: `linear-gradient(90deg, ${aauColors.primary}, ${aauColors.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.05em',
              position: 'relative',
              display: 'inline-block',
              textShadow: '0 5px 15px rgba(0,0,0,0.1)',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '0',
                width: '100%',
                height: '4px',
                background: `linear-gradient(90deg, ${aauColors.primary}, ${aauColors.secondary})`,
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.6s ease',
                borderRadius: '2px'
              },
              '&:hover::after': {
                transform: 'scaleX(1)'
              }
            }}>
              Welcome to AAU
            </Typography>
          </motion.div>

          {/* Subtitle with enhanced animation and floating effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              // y: 0,
              y: [0, -5, 0] // Floating effect
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: "easeOut",
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }
            }}
          >
            <Typography variant="h5" sx={{
              fontWeight: 400,
              color: aauColors.text,
              mb: 6,
              maxWidth: '700px',
              mx: 'auto',
              opacity: 0.8,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              textShadow: '0 2px 5px rgba(255,255,255,0.5)'
            }}>
              Freshman Orientation Portal for Addis Ababa University
            </Typography>
          </motion.div>

          {/* Enhanced CTA Button with glow effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              component={Link}
              to="/chatbot"
              variant="contained"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderRadius: '50px',
                background: `linear-gradient(90deg, ${aauColors.primary}, ${aauColors.secondary})`,
                color: 'white',
                boxShadow: `0 10px 30px rgba(0, 51, 160, 0.3)`,
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(90deg, ${aauColors.secondary}, ${aauColors.primary})`,
                  opacity: 0,
                  transition: 'opacity 0.6s ease',
                  zIndex: -1
                },
                '&:hover::before': {
                  opacity: 1,
                  boxShadow: `0 0 20px 10px rgba(0, 119, 200, 0.3)`
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  transition: 'all 0.6s ease'
                },
                '&:hover::after': {
                  left: '100%'
                }
              }}
            >
              Start Your Journey
            </Button>
          </motion.div>

          {/* Enhanced Scrolling indicator with animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              cursor: 'pointer'
            }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Typography variant="caption" sx={{
                color: aauColors.primary,
                mb: 1,
                fontWeight: 500,
                textShadow: '0 1px 2px rgba(255,255,255,0.5)'
              }}>
                Scroll Down
              </Typography>
              <motion.div
                style={{
                  width: '24px',
                  height: '40px',
                  borderRadius: '12px',
                  border: `2px solid ${aauColors.primary}`,
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '6px',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(5px)'
                }}
              >
                <motion.div
                  animate={{
                    y: [0, 8, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    width: '4px',
                    height: '8px',
                    borderRadius: '2px',
                    backgroundColor: aauColors.primary
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </Box>

        {/* Features Section with enhanced cards */}
        <Box sx={{ py: 12, px: { xs: 3, md: 6 }, position: 'relative' }}>
          {/* Animated background elements for features section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 1 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '20%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${aauColors.primary} 0%, transparent 70%)`,
              filter: 'blur(50px)',
              zIndex: 0
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 1.5 }}
            style={{
              position: 'absolute',
              bottom: '20%',
              right: '20%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${aauColors.secondary} 0%, transparent 70%)`,
              filter: 'blur(50px)',
              zIndex: 0
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{
              fontWeight: 800,
              mb: 8,
              textAlign: 'center',
              color: aauColors.primary,
              fontSize: { xs: '2rem', md: '2.5rem' },
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: `linear-gradient(90deg, ${aauColors.primary}, ${aauColors.secondary})`,
                borderRadius: '2px'
              }
            }}>
              How We Can Help You
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ mb: 8, position: 'relative', zIndex: 1 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Box sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 51, 160, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.4s ease',
                    backdropFilter: 'blur(10px)',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      boxShadow: `0 15px 40px rgba(0, 51, 160, 0.2)`,
                      transform: 'translateY(-5px)',
                      background: 'rgba(255, 255, 255, 0.9)'
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(135deg, ${aauColors.primary} 0%, ${aauColors.secondary} 100%)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: -1
                    },
                    '&:hover::before': {
                      opacity: 0.1
                    }
                  }}>
                    <motion.div
                      whileHover={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1.1, 1],
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Box sx={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '18px',
                        background: `linear-gradient(135deg, ${aauColors.primary} 0%, ${aauColors.secondary} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        boxShadow: `0 10px 20px rgba(0, 51, 160, 0.2)`,
                        fontSize: '28px'
                      }}>
                        {feature.icon}
                      </Box>
                    </motion.div>
                    <Typography variant="h5" sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: aauColors.primary,
                      fontSize: '1.4rem'
                    }}>
                      {feature.title}
                    </Typography>
                    <Typography sx={{
                      color: aauColors.text,
                      opacity: 0.8,
                      mb: 3,
                      fontSize: '1rem',
                      minHeight: '60px'
                    }}>
                      {feature.description}
                    </Typography>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      whileTap={{ x: 0 }}
                    >
                      <Button
                        component={Link}
                        to={feature.link}
                        sx={{
                          textTransform: 'none',
                          fontWeight: 600,
                          color: aauColors.primary,
                          px: 0,
                          '&:hover': {
                            background: 'transparent',
                            color: aauColors.secondary
                          }
                        }}
                      >
                        Learn more →
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Quick Start Section */}
        <Box sx={{ py: 12, px: { xs: 3, md: 6 }, position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{
              fontWeight: 800,
              mb: 6,
              textAlign: 'center',
              color: aauColors.primary,
              fontSize: { xs: '2rem', md: '2.5rem' },
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: `linear-gradient(90deg, ${aauColors.primary}, ${aauColors.secondary})`,
                borderRadius: '2px'
              }
            }}>
              Quick Start Guide
            </Typography>
          </motion.div>

          <Box sx={{
            maxWidth: '800px',
            mx: 'auto',
            position: 'relative'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{
                p: { xs: 3, md: 6 },
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '24px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                {[
                  "Complete registration at the registrar office",
                  "Obtain your student ID from Arat Kilo Admin Building",
                  "Register for library services online",
                  "Check your dormitory assignment"
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: index === 3 ? 0 : 4,
                      p: 3,
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255,255,255,0.5)',
                      '&:hover': {
                        background: 'rgba(0, 51, 160, 0.05)',
                        transform: 'translateX(5px)',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                      }
                    }}>
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Box sx={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, ${aauColors.primary} 0%, ${aauColors.secondary} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1.2rem',
                          flexShrink: 0,
                          mr: 3,
                          boxShadow: `0 5px 15px rgba(0, 51, 160, 0.2)`
                        }}>
                          {index + 1}
                        </Box>
                      </motion.div>
                      <Typography sx={{
                        fontWeight: 500,
                        color: aauColors.text,
                        fontSize: '1.1rem'
                      }}>
                        {step}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{
        py: 6,
        textAlign: 'center',
        position: 'relative',
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(10px)',
        borderTop: `1px solid rgba(0, 51, 160, 0.1)`
      }}>
        <Typography sx={{
          color: aauColors.text,
          opacity: 0.6,
          fontSize: '0.9rem'
        }}>
          © {new Date().getFullYear()} AAU Freshman Assistant
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;