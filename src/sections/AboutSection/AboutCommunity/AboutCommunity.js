import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {
  People as PeopleIcon,
  AccessTime as AccessTimeIcon
} from '@mui/icons-material';
import getStyles from './styles';
import 'aos/dist/aos.css';
import Aos from 'aos';

const AboutCommunity = () => {
  const styles = getStyles();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <Box sx={styles.aboutContainer}>
        <Box sx={styles.impactSection}>
          <Container maxWidth="xl">
            <Typography
              variant="h3"
              sx={styles.sectionTitle}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Community Impact
            </Typography>
            <Typography
              variant="body1"
              sx={styles.sectionSubtitle}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Our commitment to Tamil Nadu goes beyond just business
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={styles.impactStat}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Typography
                    variant="h4"
                    sx={{ ...styles.impactNumber, color: 'primary.main' }}
                  >
                    200+
                  </Typography>
                  <Typography variant="h6" sx={styles.impactTitle}>
                    Local Farmers
                  </Typography>
                  <Typography variant="body2" sx={styles.impactDescription}>
                    Direct partnerships providing fair prices and sustainable
                    livelihoods
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={styles.impactStat}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Typography
                    variant="h4"
                    sx={{ ...styles.impactNumber, color: '#dbaa39' }}
                  >
                    50,000+
                  </Typography>
                  <Typography variant="h6" sx={styles.impactTitle}>
                    Happy Customers
                  </Typography>
                  <Typography variant="body2" sx={styles.impactDescription}>
                    Families who trust us for their daily essentials and special
                    occasions
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={styles.impactStat}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Typography
                    variant="h4"
                    sx={{ ...styles.impactNumber, color: '#f39b2ade' }}
                  >
                    25
                  </Typography>
                  <Typography variant="h6" sx={styles.impactTitle}>
                    Store Locations
                  </Typography>
                  <Typography variant="body2" sx={styles.impactDescription}>
                    Serving communities across Chennai and Tamil Nadu
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={styles.joinSection}>
          <Typography
            variant="h3"
            sx={styles.joinTitle}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Join the PAARR Family
          </Typography>
          <Typography
            variant="body1"
            sx={styles.joinText}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            We re always looking for passionate people who share our love for
            South Indian culture and commitment to quality. Explore career
            opportunities with us.
          </Typography>
          <Box
            sx={styles.joinButtons}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Button
              sx={{
                fontSize: '1.125rem',
                padding: '12px 24px',
                backgroundColor: '#FFC74F',
                color: 'common.black'
              }}
              startIcon={<PeopleIcon />}
            >
              View Careers
            </Button>
            <Button
              size="large"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'common.white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }
              }}
              startIcon={<AccessTimeIcon />}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutCommunity;
