import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated, useTrail } from 'react-spring';

import { Box, Button, Grid, Typography } from '@mui/material';

const MainBanner = () => {
  const [opacity, setOpacity] = useState(1); // 스크롤에 따라 변경될 투명도 상태

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const newOpacity = Math.max(0, 1 - window.scrollY / 400);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fade = useSpring({
    opacity: opacity,
    from: { opacity: 0 },
  });

  const text = "안녕하세요 :)\n주니어 Full-Stack 개발자 정우희입니다.\n매 순간 스스로의 한계를 넘어서 도전하며, 코드 한 줄 한 줄에 나만의 가능성을 심어 성장해 나가는 개발자가 되겠습니다.";
  const items = text.split("");
  // 문자별 타이핑 애니메이션 효과 적용
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 5500, friction: 200 },
    opacity: opacity,
    x: opacity ? 20 : 0,
    height: opacity ? 20 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Box sx={{ flex: 1, mt: 12, mb: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ p: 12 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', textAlign: 'center' }}>
              <Typography as={animated.div} style={fade} variant="h3" gutterBottom color="white" sx={{ fontWeight: 800 }}>정우희</Typography>
              <Typography as={animated.div} style={fade} variant="h6" color="white">
                Web Developer
              </Typography>
              <Box sx={{ width: '10%', borderBottom: 1, borderColor: 'white', m: 4 }}></Box>
              {/* 소개 텍스트 부분, trail 애니메이션으로 타이핑 효과 적용 */}
              <Typography as={animated.div} variant="body1" color="white" sx={{ p: 2, lineHeight: '1.8' }}>
                {trail.map(({ x, height, ...rest }, index) => (
                  <animated.span
                    key={index}
                    style={{
                      ...rest,
                      transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
                      height,
                    }}
                  >
                    {items[index] === '\n' ? <br /> : items[index]}
                  </animated.span>
                ))}
              </Typography>
              {/* 프로젝트 보기 버튼 */}
              <Box sx={{ display: 'flex', mt: 3, justifyContent: 'center' }}>
                <Link
                  to="projects-section"
                  smooth={true}
                  duration={500}
                  offset={-63}
                >
                  <animated.div style={{ opacity }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#f57f17',
                        '&:hover': {
                          backgroundColor: '#ef6c00',
                        },
                        padding: '10px 20px',
                        borderRadius: '4px',
                      }}
                    >
                      view projects
                    </Button>
                  </animated.div>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MainBanner;

