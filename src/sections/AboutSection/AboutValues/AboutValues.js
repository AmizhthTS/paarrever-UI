import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography
} from '@mui/material';
import React, { useEffect } from 'react';
import {
  Favorite as FavoriteIcon,
  People as PeopleIcon
} from '@mui/icons-material';
import getStyles from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutValues = () => {
  const styles = getStyles();
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const values = [
    {
      icon: FavoriteIcon,
      title: t('about.missionTitle'),
      description: t('about.missionSubTitle'),
      color: 'primary.main'
    },
    {
      icon: PeopleIcon,
      title: t('about.visionTitle'),
      description: t('about.visionSubTitle'),
      color: '#dbaa39'
    }
  ];
  return (
    <>
      <Box sx={styles.valuesSection}>
        <Container maxWidth="lg">
          {/* <Typography
            variant="h3"
            sx={styles.sectionTitle}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Values
          </Typography>
          <Typography
            variant="body1"
            sx={styles.sectionSubtitle}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            These core principles guide every decision we make and every
            relationship we build
          </Typography> */}
          <Grid container spacing={2}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Card
                      sx={styles.valueCard}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <CardContent>
                        <Box sx={styles.valueIconContainer}>
                          <Icon sx={{ fontSize: 32, color: value.color }} />
                        </Box>
                        <Typography variant="h3" sx={styles.valueTitle}>
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={styles.valueDescription}
                        >
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutValues;
