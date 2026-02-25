import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import getStyles from './styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';

const StoreSpecial = () => {
  const styles = getStyles();
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Box sx={styles.featuresSection}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={styles.featureTitle}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {t('storeLocator.specialTitle')}
        </Typography>
        {/* <Typography
          variant="body1"
          sx={styles.featureSubtitle}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Every PAARR store is designed to bring you the authentic taste of
          Tamil Nadu with modern convenience
        </Typography> */}

        <Grid container spacing={4} sx={styles.featureGrid}>
          <Grid item xs={12} md={4}>
            <Box
              sx={styles.featureItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Box sx={styles.featureIconContainer}>
                <AccessTimeIcon sx={styles.iconButton} />
              </Box>
              <Typography variant="h6" sx={styles.featureName}>
                {t('storeLocator.convenience')}
              </Typography>
              <Typography variant="body2" sx={styles.featureDescription}>
                {t('storeLocator.envisioned')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={styles.featureItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Box sx={styles.featureIconContainer}>
                <CategoryIcon sx={styles.iconButton} />
              </Box>
              <Typography variant="h6" sx={styles.featureName}>
                {t('storeLocator.assortment')}
              </Typography>
              <Typography variant="body2" sx={styles.featureDescription}>
                {t('storeLocator.range')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={styles.featureItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Box sx={styles.featureIconContainer}>
                <ShoppingCartIcon sx={styles.iconButton} />
              </Box>
              <Typography variant="h6" sx={styles.featureName}>
                {t('storeLocator.shoppingExperience')}
              </Typography>
              <Typography variant="body2" sx={styles.featureDescription}>
                {t('storeLocator.place')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StoreSpecial;
