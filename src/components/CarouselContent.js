import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography, Divider, IconButton } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';

import { carouselData } from '../lib/db.js';

// Carousel 내용 컴포넌트
function CarouselContent({ handleClose, selectedProjectId }) {
  const filteredData = carouselData.find(item => item.id === selectedProjectId);
  return (
    <Box sx={{ maxWidth: 736, margin: 'auto' }}>
      <Carousel
        autoPlay
        animation="slide"
        indicators
        navButtonsAlwaysVisible
        navButtonsProps={{
          style: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
          }
        }}
        NavButton={({ onClick, className, style, next, prev }) => (
          <Button onClick={onClick} className={className} style={{
            ...style,
            [next ? 'right' : 'left']: 10
          }}>
            {next && <KeyboardArrowRight />}
            {prev && <KeyboardArrowLeft />}
          </Button>
        )}
      >
        {Object.values(filteredData.img).map((imgPath, i) => (
          <Paper key={i} elevation={0} square>
            <Box
              component="img"
              sx={{
                height: 414,
                display: 'block',
                overflow: 'hidden',
                width: '100%',
              }}
              src={imgPath}
              alt={`Image ${i}`}
            />
          </Paper>
        ))}
      </Carousel>
      <Box sx={{ mt: 1, px: 5, maxHeight: '250px', overflowY: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          {filteredData.title}
        </Typography>
        <Typography variant="subtitle1" color={'grey'} gutterBottom>
          {filteredData.subtitle}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2">
          {filteredData.content.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          {(filteredData.codeUrl) && (
            <Box>
              {filteredData.codeUrl && (
                <Button
                  variant="contained"
                  color="secondary"
                  href={filteredData.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </Button>
              )}
            </Box>
          )}
          <Button
            onClick={handleClose}
            aria-label="close"
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

export default CarouselContent;
