import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 

import { AppBar, Toolbar, Typography, useTheme, Box, Container } from '@mui/material';

const NavigationBar = () => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar position="fixed" color="default" elevation={0}
      sx={{
        backgroundColor: isScrolled ? '#fff' : 'transparent',
        transition: 'background-color 0.3s',
        color: isScrolled ? 'inherit' : '#fff'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <ScrollLink to="top-section" smooth={true} duration={500} offset={-100} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <Typography variant="h6" component="div">JWH'S Portfolio</Typography>
          </ScrollLink>
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 2 }}>
            <ScrollLink to="about-me-section" smooth={true} duration={500} offset={-63} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
              ABOUT ME
            </ScrollLink>
            <ScrollLink to="skills-section" smooth={true} duration={500} offset={-63} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
              SKILLS
            </ScrollLink>
            <ScrollLink to="projects-section" smooth={true} duration={500} offset={-63} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
              PROJECTS
            </ScrollLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;
