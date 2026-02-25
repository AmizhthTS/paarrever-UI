import { Box, Container, Typography } from '@mui/material';
import React, { useRef } from 'react';
// import { Search as SearchIcon } from '@mui/icons-material';
import getStyles from './styles';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const MotionBox = motion(Box);

const StoreBanner = () => {
  const styles = getStyles();
  // const [searchLocation, setSearchLocation] = useState('');
  const ref = useRef();
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
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
                  {t('storeLocator.title')}
                </Typography>
                <Typography variant="body1" sx={styles.heroSubtitle}>
                  {t('storeLocator.subtitle')}
                </Typography>
              </motion.div>
            </Box>
          </MotionBox>
        </Container>
      </Box>
      {/* <Box sx={styles.searchSection}>
        <Container maxWidth="xl">
          <Box sx={styles.searchContainer}>
            <TextField
              fullWidth
              placeholder="Enter ZIP code or city..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              sx={styles.searchInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <Button size="small" sx={styles.searchButton}>
                    Search
                  </Button>
                )
              }}
            />
          </Box>
        </Container>
      </Box> */}
    </>
  );
};

export default StoreBanner;
