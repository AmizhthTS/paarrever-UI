// import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
// import { ChevronLeft, ChevronRight } from '@mui/icons-material';
// import { getStyles } from './styles';
import { LandingpageBanner } from '../../../assets';
// import { Banner1, Banner8, Banner6, Banner3 } from '../../../assets';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';

// const MotionBox = motion(Box);

const BannerSection = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const styles = getStyles();
  // const { t } = useTranslation();
  // const navigate = useNavigate();

  // const slides = [
  //   {
  //     image: Banner1,
  //     title: t('home.title1'),
  //     subtitle: t('home.subtitle1'),
  //     description: t('home.description1'),
  //     cta: t('home.cta1'),
  //     gradient: 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)',
  //     ctaLink: '/categories'
  //   },
  //   {
  //     image: Banner8,
  //     title: t('home.title2'),
  //     subtitle: t('home.subtitle2'),
  //     description: t('home.description2'),
  //     cta: t('home.cta2'),
  //     gradient: 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)',
  //     ctaLink: '/categories'
  //   },
  //   {
  //     image: Banner6,
  //     title: t('home.title3'),
  //     subtitle: t('home.subtitle3'),
  //     description: t('home.description3'),
  //     cta: t('home.cta3'),
  //     gradient: 'linear-gradient(90deg, #10B981 0%, #059669 100%)',
  //     ctaLink: '/categories'
  //   },
  //   {
  //     image: Banner3,
  //     title: t('home.title1'),
  //     subtitle: t('home.subtitle1'),
  //     description: t('home.description1'),
  //     cta: t('home.cta1'),
  //     gradient: 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)',
  //     ctaLink: '/categories'
  //   }
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [slides.length]);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  // const ref = useRef();

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start start', 'end start']
  // });
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  // const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  // const handleExploreClick = (link) => {
  //   navigate(link);
  // };
  return (
    <Box>
      <img
        src={LandingpageBanner}
        alt="Banner1"
        style={{ width: '100%', height: '100%' }}
      />
      {/*  {slides.map((slide, index) => (
        <MotionBox
          key={index}
          sx={{
            ...styles.slide,
            ...(index === currentSlide
              ? styles.activeSlide
              : styles.inactiveSlide)
          }}
        >
          <MotionBox
            sx={styles.imageContainer}
            animate={{
              x: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={styles.image}
            />
            <Box sx={styles.overlay} />
          </MotionBox>

          <Box sx={styles.contentContainer}>
            <Container maxWidth="lg" sx={styles.contentWrapper}>
              <MotionBox sx={styles.content} style={{ y: textY }}>  
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Typography variant="h1" sx={styles.title}>
                    {slide.title}
                  </Typography>
                </MotionBox>

                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Typography sx={styles.description}>
                    {slide.description}
                  </Typography>
                </MotionBox>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Box sx={styles.buttonGroup}>
                    <Button
                      variant="contained"
                      sx={styles.primaryButton}
                      onClick={() => handleExploreClick(slide.ctaLink)}
                    >
                      {slide.cta}
                    </Button>                    
                  </Box>
                </motion.div>
              </MotionBox>
            </Container>
          </Box>
        </MotionBox>
      ))} */}

      {/* Navigation Arrows */}
      {/* <Button onClick={prevSlide} sx={{ ...styles.navButton, left: '16px' }}>
        <ChevronLeft fontSize="large" />
      </Button>
      <Button onClick={nextSlide} sx={{ ...styles.navButton, right: '16px' }}>
        <ChevronRight fontSize="large" />
      </Button> */}

      {/* Slide Indicators */}
      {/* <Box sx={styles.indicators}>
        {slides.map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              ...styles.indicator,
              ...(index === currentSlide
                ? styles.activeIndicator
                : styles.inactiveIndicator),
              minWidth: 'auto',
              p: 0
            }}
          />
        ))}
      </Box> */}
    </Box>
  );
};

export default BannerSection;
