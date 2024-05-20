import React, { useState } from 'react';
import { Box, Typography, Button, Modal, Grid } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import CarouselContent from './CarouselContent'; // Carousel 컴포넌트
import { projects } from '../lib/db.js';

// ProjectsSection 컴포넌트
const ProjectsSection = () => {
    const [open, setOpen] = useState(false); // 모달의 열림 상태
    const [selectedProjectId, setSelectedProjectId] = useState(null); // 선택된 프로젝트 ID 상태

    const handleOpen = (projectId) => {
        setOpen(true);
        setSelectedProjectId(projectId);
    };

    const handleClose = () => setOpen(false);

    // 화면에 보이는 부분을 감지
    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: false,
    });

    return (
        <Box color="grey.800" bgcolor="#e8eaf6" p={5}>
            <Box maxWidth="lg" pt={15} pb={5} mx="auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant="h3" fontWeight="800" gutterBottom textAlign="center">
                        Projects
                    </Typography>
                    <Box sx={{ width: '10%', borderBottom: 1, borderColor: 'black', my: 7, mx: 'auto' }}></Box>
                </motion.div>
                {/* 프로젝트 목록 표시 */}
                <Grid container justifyContent="center" p={5}>
                    {projects.map((project) => (
                        <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ position: 'relative', '&:hover > div': { opacity: 1 } }}>
                            <img
                                src={project.img}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'block',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    bgcolor: 'rgba(255, 255, 255, 0.85)',
                                    opacity: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    transition: 'opacity 0.3s',
                                    '&:hover': {
                                        '.projectTitle, .projectDescription': {
                                            transform: 'translateY(0)',
                                            opacity: 1,
                                        },
                                        '.learnMoreButton': {
                                            transform: 'translateY(0)',
                                            opacity: 1,
                                        },
                                    },
                                    '.projectTitle': {
                                        transition: 'transform 0.5s, opacity 1s',
                                        transform: 'translateY(-50px)',
                                        opacity: 0,
                                    },
                                    '.projectDescription': {
                                        transition: 'transform 0.5s, opacity 0.5s',
                                        transform: 'translateY(-50px)',
                                        opacity: 0,
                                    },
                                    '.learnMoreButton': {
                                        transition: 'transform 0.5s, opacity 0.5s',
                                        transform: 'translateY(50px)',
                                        opacity: 0,
                                    },
                                }}
                            >
                                <Typography variant="h5" marginBottom={1} className="projectTitle" fontWeight={'600'}>{project.title}</Typography>
                                <Typography marginBottom={10} className="projectDescription" color={'#e91e63'} >{project.description}</Typography>
                                {/* 자세히 보기 버튼: 클릭 시 모달을 열고 프로젝트 ID 설정 */}
                                <Button
                                    variant="contained"
                                    className="learnMoreButton"
                                    sx={{
                                        color: 'white',
                                        background: '#e91e63',
                                        '&:hover': {
                                            background: '#d81b60',
                                        },
                                        '&:active': {
                                            background: '#c2185b',
                                        },
                                        transition: 'background-color 0.3s',
                                    }}
                                    onClick={() => handleOpen(project.id)}>
                                    자세히 보기
                                </Button>

                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* 모달 컴포넌트: 선택된 프로젝트의 상세 정보 표시 */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box bgcolor="background.paper" borderRadius={1} sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 736,
                    height: '100vh',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                }}>
                    <CarouselContent handleClose={handleClose} selectedProjectId={selectedProjectId} /> {/* 선택된 프로젝트 ID 전달 */}
                </Box>
            </Modal>
        </Box>
    );
}

export default ProjectsSection;
