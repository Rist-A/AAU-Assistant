import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LocationOn, Schedule, ContactPhone, Description } from '@mui/icons-material';
import { Button } from '@mui/material';

const Services = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const servicesData = [
    {
      title: "Registration Services",
      items: [
        {
          name: "Registrar Office",
          description: "Handles all student registrations and academic records",
          location: "Main Administration Building, Arat Kilo Campus",
          hours: "Mon-Fri: 8:30 AM - 4:30 PM",
          requirements: "Admission letter, 2 passport photos, original educational documents"
        },
        {
          name: "ID Card Office",
          description: "Issues student identification cards",
          location: "Ground Floor, Arat Kilo Admin Building",
          hours: "Mon-Fri: 9:00 AM - 5:00 PM",
          requirements: "Registration slip, 1 passport photo"
        }
      ]
    },
    {
      title: "Academic Services",
      items: [
        {
          name: "Library Registration",
          description: "Provides access to all university library resources",
          location: "Online at library.aau.edu.et",
          hours: "24/7 online access",
          requirements: "Student ID number, active AAU email"
        },
        {
          name: "Department Offices",
          description: "Faculty-specific academic guidance",
          location: "Various locations depending on your department",
          hours: "Department specific - typically 8:30 AM - 5:00 PM",
          requirements: "None for general inquiries"
        }
      ]
    },
    {
      title: "Student Support Services",
      items: [
        {
          name: "Dormitory Office",
          description: "Handles housing assignments and issues",
          location: "Sidist Kilo Campus, Dormitory Administration Building",
          hours: "Mon-Fri: 8:00 AM - 5:00 PM",
          requirements: "Registration slip for assignment inquiries"
        },
        {
          name: "Cafeteria Services",
          description: "Provides meal services for dormitory students",
          location: "All campuses have cafeterias",
          hours: "7:00 AM - 7:00 PM daily",
          requirements: "Student ID for subsidized meals"
        }
      ]
    },
    {
      title: "Other Essential Services",
      items: [
        {
          name: "Health Center",
          description: "Provides medical services for students",
          location: "Sidist Kilo Campus, near the main library",
          hours: "24/7 emergency services",
          requirements: "Student ID for free services"
        },
        {
          name: "Printing Services",
          description: "Document printing and photocopying",
          location: "Beside the AAU main gate and various locations on campus",
          hours: "8:00 AM - 8:00 PM daily",
          requirements: "None"
        }
      ]
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
            mb: 2,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}>
            Student Services Directory
          </Typography>
          <Typography variant="h5" component="h2" sx={{ 
            mb: 6,
            color: theme.palette.text.secondary,
            fontSize: { xs: '1.2rem', md: '1.5rem' }
          }}>
            Everything you need to navigate AAU as a freshman
          </Typography>
        </motion.div>

        {/* Services */}
        {servicesData.map((serviceCategory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Box sx={{ mb: 8 }}>
              <Typography variant="h3" component="h2" sx={{ 
                fontWeight: 800,
                mb: 4,
                color: theme.palette.primary.main,
                fontSize: { xs: '1.8rem', md: '2.2rem' }
              }}>
                {serviceCategory.title}
              </Typography>
              
              <Grid container spacing={4}>
                {serviceCategory.items.map((item, itemIndex) => (
                  <Grid item xs={12} sm={6} key={itemIndex}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Box sx={{ 
                        p: { xs: 3, md: 4 },
                        height: '100%',
                        background: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.03)',
                        transition: 'all 0.3s ease'
                      }}>
                        <Typography variant="h5" component="h3" sx={{ 
                          fontWeight: 700,
                          mb: 2,
                          color: theme.palette.primary.main
                        }}>
                          {item.name}
                        </Typography>
                        <Typography paragraph sx={{ mb: 3 }}>
                          {item.description}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <LocationOn color="primary" sx={{ mr: 1 }} />
                          <Typography>{item.location}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Schedule color="primary" sx={{ mr: 1 }} />
                          <Typography>{item.hours}</Typography>
                        </Box>
                        {item.requirements && (
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Description color="primary" sx={{ mr: 1 }} />
                            <Typography>Requirements: {item.requirements}</Typography>
                          </Box>
                        )}
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ 
            mt: 4, 
            p: { xs: 3, md: 4 },
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            borderRadius: '16px',
            textAlign: 'center',
            color: 'white'
          }}>
            <Typography variant="h4" sx={{ 
              mb: 3,
              fontWeight: 700
            }}>
              Can't find what you're looking for?
            </Typography>
            <Typography sx={{ mb: 3, opacity: 0.9 }}>
              Our AI assistant can help you find any information about AAU services and procedures.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="contained" 
                color="secondary" 
                href="/chatbot"
                size="large"
                startIcon={<ContactPhone />}
                sx={{
                  px: 6,
                  py: 2,
                  fontWeight: 700,
                  borderRadius: '50px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                Ask the AAU Assistant
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Services;