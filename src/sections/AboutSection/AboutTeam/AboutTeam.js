import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography
} from '@mui/material';
import React, { useEffect } from 'react';
import getStyles from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const AboutTeam = () => {
  const styles = getStyles();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      description:
        'Former retail executive with 15 years of experience in South Indian markets'
    },
    {
      name: 'Priya Venkatesh',
      position: 'Head of Sourcing',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
      description:
        'Expert in traditional ingredients with deep connections to local farming communities'
    },
    {
      name: 'Arjun Krishnan',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      description:
        'Supply chain specialist ensuring fresh products reach every PAARR store daily'
    }
  ];
  return (
    <>
      <Box sx={styles.teamSection}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={styles.sectionTitle}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Meet Our Team
          </Typography>
          <Typography variant="body1" sx={styles.sectionSubtitle}>
            The passionate people behind PAARR ever who work every day to bring
            you the best South Indian products
          </Typography>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Card
                    sx={styles.teamCard}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <CardContent>
                      <Box sx={styles.teamImageContainer}>
                        <Avatar
                          src={member.image}
                          alt={member.name}
                          sx={{ width: '100%', height: '100%' }}
                        />
                      </Box>
                      <Typography variant="h6" sx={styles.teamName}>
                        {member.name}
                      </Typography>
                      <Chip
                        label={member.position}
                        variant="outlined"
                        sx={styles.teamPosition}
                      />
                      <Typography variant="body2" sx={styles.teamDescription}>
                        {member.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutTeam;
