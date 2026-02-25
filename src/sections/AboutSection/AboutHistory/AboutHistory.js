import { Box, Card, Chip, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import getStyles from './styles';
import 'aos/dist/aos.css';
import Aos from 'aos';

const AboutHistory = () => {
  const styles = getStyles();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description:
        'Founded with a mission to bring authentic South Indian products to every neighborhood'
    },
    {
      year: '2021',
      title: 'First Store',
      description:
        'Opened our flagship store in T. Nagar, Chennai, setting new standards for local grocery retail'
    },
    {
      year: '2022',
      title: 'Community Growth',
      description:
        'Expanded to 10 stores across Chennai and launched PAARR Club loyalty program'
    },
    {
      year: '2023',
      title: 'Tamil Nadu Expansion',
      description:
        'Reached 25 stores across Tamil Nadu, serving over 50,000 happy customers'
    },
    {
      year: '2024',
      title: 'Digital Innovation',
      description:
        'Launched our digital platform and sustainable packaging initiatives'
    }
  ];
  return (
    <>
      <Box sx={styles.timelineSection}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={styles.sectionTitle}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Journey
          </Typography>
          <Typography
            variant="body1"
            sx={styles.sectionSubtitle}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            From a single store to a trusted regional brand, here s how we ve
            grown together with our community
          </Typography>
          <Box sx={{ position: 'relative', py: 4 }}>
            <Box sx={styles.timelineLine} />
            {milestones.map((milestone, index) => (
              <Box key={index} sx={styles.milestoneContainer}>
                <Box sx={styles.milestoneContent}>
                  <Card
                    sx={styles.milestoneCard}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <Chip label={milestone.year} sx={styles.milestoneYear} />
                    <Typography variant="h6" sx={styles.milestoneTitle}>
                      {milestone.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={styles.milestoneDescription}
                    >
                      {milestone.description}
                    </Typography>
                  </Card>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box sx={styles.milestoneDot} />
                </Box>
                <Box sx={{ width: '50%' }} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutHistory;
