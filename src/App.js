import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
  Avatar,
  useTheme,
  Box,
  Grid,
  Container
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Element } from 'react-scroll';

import theme from './components/theme.js';
import NavigationBar from './components/NavigationBar.js';
import MainBanner from './components/MainBanner.js';
import AboutMeSection from './components/AboutMeSection.js';
import SkillsSection from './components/SkillsSection.js';
import ProjectsSection from './components/ProjectsSection.js';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box sx={{
          position: 'relative',
          backgroundImage: 'url(./img/laptop-4906312_1920.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1,
          }} />
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Element name="top-section">
              <NavigationBar />
            </Element>
            <MainBanner />
          </Box>
        </Box>
        <Element name="about-me-section">
          <AboutMeSection />
        </Element>
        <Element name="skills-section">
          <SkillsSection />
        </Element>
        <Element name="projects-section">
          <ProjectsSection />
        </Element>
      </Box>
    </ThemeProvider>
  );
}




export default App;
