import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Collapse } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { frontendTechnologies, backendTechnologies, mobileTools, collaborationTools } from '../lib/db.js';

// SkillsSection 컴포넌트
const SkillsSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // 화면에 보이는 부분을 감지
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  return (
    <Box color="black" bgcolor="#efebe9">
      <Box maxWidth="lg" pt={15} pb={5} mx="auto">
        <Box textAlign="center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" fontWeight="800" gutterBottom>Skills</Typography>
            <Box sx={{ width: '10%', borderBottom: 1, borderColor: 'black', my: 7, mx: 'auto' }}></Box>
          </motion.div>
          <Container sx={{ py: 4 }}>
            <TechStackSection title="Frontend Technologies" items={frontendTechnologies} />
            <TechStackSection title="Backend Technologies" items={backendTechnologies} />
            <TechStackSection title="Moblie Technologies" items={mobileTools} />
            <CollaborationToolsSection title="Collaboration Tools" items={collaborationTools} />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

// TechStackItem 컴포넌트: 개별 기술 스택 아이템
const TechStackItem = ({ name, imgSrc, description, index, setHoveredItem, hoveredItem }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const isHovered = hoveredItem === index; // 마우스 오버 상태 확인

  return (
    <Grid
      item
      xs={12}
      md={6}
      onMouseEnter={() => setHoveredItem(index)}
      onMouseLeave={() => setHoveredItem(null)}
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
          backgroundColor: 'grey.100',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'white',
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          },
          filter: hoveredItem !== null && !isHovered ? 'brightness(30%)' : 'none',
          marginBottom: isHovered ? 2 : 0,
        }}
      >
        <img src={imgSrc} alt={name} style={{ width: 60, height: 60, marginRight: 40 }} />
        <Typography variant="body1">{name}</Typography>
      </Paper>
      {/* 마우스 오버 시 기술 설명 표시 */}
      <Collapse in={isHovered} timeout="auto" unmountOnExit>
        <Box
          sx={{
            borderTop: 5,
            borderColor: '#f73378',
            backgroundColor: 'white',
            p: 2,
            mt: -0.5,
            mb: 2,
          }}
        >
          {description.map((desc, i) => (
            <Typography key={i} variant="subtitle2" textAlign={'left'} sx={{ color: 'black' }}>
              - {desc}
            </Typography>
          ))}
        </Box>
      </Collapse>

    </Grid>
  );
}

// TechStackSection 컴포넌트: 각 기술 스택 섹션
function TechStackSection({ title, items }) {
  const [hoveredItem, setHoveredItem] = useState(null); 

  return (
    <Box sx={{ mb: 10 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'left' }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <TechStackItem
            key={index}
            name={item.name}
            imgSrc={item.imgSrc}
            description={item.description}
            index={index}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
        ))}
      </Grid>
    </Box>
  );
}

// CollaborationToolsSection 컴포넌트
function CollaborationToolsSection({ title, items }) {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'left' }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                backgroundColor: 'grey.100',
              }}
            >
              <img src={item.imgSrc} alt={item.name} style={{ width: 60, height: 60, marginRight: 40 }} />
              <Typography variant="h6">{item.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SkillsSection;
