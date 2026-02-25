import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import getStyles from './styles';
import { motion, useScroll, useTransform } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Banner4 } from '../../../assets';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const MotionBox = motion(Box);

const AboutBanner = () => {
  const styles = getStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const handleFindStoreClick = () => {
    navigate('/store-locator');
  };

  return (
    <>
      <Box sx={styles.heroSection} ref={ref}>
        <Container maxWidth="xl">
          <MotionBox sx={styles.content} style={{ y: textY }}>
            <Box textAlign="center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography variant="h1" sx={styles.heroTitle}>
                  {t('about.title')}
                </Typography>
                {/* <Typography variant="body1" sx={styles.heroSubtitle}>
                  Bringing authentic South Indian flavors to every household
                  while supporting our local communities and preserving culinary
                  traditions
                </Typography> */}
              </motion.div>
            </Box>
          </MotionBox>
        </Container>
      </Box>
      <Box sx={styles.missionSection}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* <Chip label="Our Mission" sx={styles.missionBadge} /> */}
              {/* <Typography variant="h3" sx={styles.missionTitle}>
                Celebrating Tamil Nadu, One Household at a Time
              </Typography> */}
              <Typography variant="body1" sx={styles.missionText}>
                {t('about.subtitle')}
              </Typography>
              {/* <Typography variant="body1" sx={styles.missionText}>
                {t('about.subtitle1')}
              </Typography> */}
              {/* <Typography variant="body1" sx={styles.missionText}>
                From sourcing the finest rice from Thanjavur fields to carefully
                selecting spices that carry the essence of Tamil cuisine, every
                product in our stores tells a story of heritage, quality, and
                community.
              </Typography> */}
              <Button
                sx={styles.findStoreButton}
                variant="contained"
                startIcon={<LocationOnIcon />}
                onClick={handleFindStoreClick}
              >
                Find Your Store
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: 'flex', justifyContent: 'center' }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Box sx={styles.missionImageContainer}>
                <img
                  src={Banner4}
                  alt="Traditional South Indian market"
                  width="100%"
                  height="auto"
                />
                <Box sx={styles.missionImageOverlay} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutBanner;
