import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  Typography,
  Box,
  Container,
  Grid,
  Avatar,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// db.js 데이터
import { profileItems, iconBoxes, sections } from '../lib/db.js';

// "About Me" 섹션 컴포넌트
const AboutMeSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false, 
  });

  return (
    <Box color="grey.800" bgcolor="#fafafa">
      <Box maxWidth="lg" pt={15} pb={5} mx="auto">
        <Box textAlign="center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" fontWeight="800" gutterBottom>About Me</Typography>
            <Box sx={{ width: '10%', borderBottom: 1, borderColor: 'black', my: 7, mx: 'auto' }}></Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 10,
                mt: 5,
              }}
            >
              {iconBoxes.map((box, index) => (
                <HexagonIconBox
                  key={index}
                  text={box.text}
                  text2={box.text2}
                  icon={box.icon}
                  inView={inView}
                  index={index}
                />
              ))}
            </Box>
          </motion.div>
          {/* 사용자 프로필 컴포넌트 */}
          <UserProfile inView={inView} ref={ref} />
        </Box>
      </Box>
    </Box>
  );
}

// Hexagon 아이콘 박스 컴포넌트
const HexagonIconBox = ({ text, text2, icon, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 2, 
        }}
      >
        <Box
          sx={{
            width: 130,
            height: 145,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#e57373',
            color: 'white',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
          {text}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 400, whiteSpace: 'pre-line' }}>
          {text2}
        </Typography>
      </Box>
    </motion.div>
  );
};

// 사용자 프로필 컴포넌트
const UserProfile = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: false,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} 
      transition={{ duration: 1 }}
    >
      <Box py={{ xs: 4, md: 6, lg: 10 }}>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={5}>
              <Grid container justifyContent="center">
                <Box>
                {profileItems.map((item, index) => (
                    <ProfileItem key={index} icon={item.icon} text={item.text} subText={item.subText} />
                  ))}
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box width={'90%'}>
                {sections.map((section, index) => (
                  <SectionItem key={index} icon={section.icon} title={section.title} content={section.content} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

// 프로필 아이템 컴포넌트
const ProfileItem = ({ icon, text, subText }) => (
  <Grid item xs={12} container align="left" spacing={3} p={1}>
    <Grid item>
      <Avatar sx={{ bgcolor: '#6d6875' }}>{icon}</Avatar>
    </Grid>
    <Grid item xs container direction="column" justifyContent="center">
      <Typography style={{ display: 'flex', alignItems: 'center' }}>
        {text}
      </Typography>
      {subText && (
        <Typography variant="body2" sx={{ fontSize: '0.75rem', mt: 0.5 }} align="left">
          {subText}
        </Typography>
      )}
    </Grid>
  </Grid>
);

// 섹션 아이템 컴포넌트
const SectionItem = ({ icon, title, content }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid item xs={12} container align="left" spacing={3} p={1}>
      <Grid item>
        <Avatar sx={{ bgcolor: '#6d6875' }}>{icon}</Avatar>
      </Grid>
      <Grid item xs container direction="column" justifyContent="center">
        <Box sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onClick={handleClick}>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            {title}
          </Typography>
          <ExpandMoreIcon
            sx={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
            }}
          />
        </Box>
        <Collapse in={open}>
          <Box>{content}</Box>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default AboutMeSection;