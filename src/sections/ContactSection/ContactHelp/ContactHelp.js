import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Box
} from '@mui/material';
import { Phone as PhoneIcon } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import InfoIcon from '@mui/icons-material/Info';
import getStyles from './styles';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const ContactHelp = () => {
  const styles = getStyles();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <Box sx={styles.contactContainer}>
      <Box sx={styles.faqSection}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              sx={styles.faqTitle}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Quick Help
            </Typography>
            <Typography
              variant="body1"
              sx={styles.faqSubtitle}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Need immediate answers? Check out our frequently asked questions
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Card
                  sx={styles.faqCard}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <CardContent>
                    <InfoIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                    <Typography variant="h6" gutterBottom>
                      Order Tracking
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      Track your orders and delivery status
                    </Typography>
                    <Button fullWidth sx={styles.storeCall}>
                      Track Order
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Card
                  sx={styles.faqCard}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <CardContent>
                    <ChatBubbleOutlineIcon
                      color="secondary"
                      sx={{ fontSize: 48, mb: 2, color: '#dbaa39' }}
                    />
                    <Typography variant="h6" gutterBottom>
                      PAARR Club
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      Loyalty program questions and support
                    </Typography>
                    <Button fullWidth sx={styles.storeCall}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Card
                  sx={styles.faqCard}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <CardContent>
                    <LocationOnIcon
                      sx={{ fontSize: 48, mb: 2, color: '#f39b2ade' }}
                    />
                    <Typography variant="h6" gutterBottom>
                      Store Hours
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      Find opening hours for all locations
                    </Typography>
                    <Button fullWidth sx={styles.storeCall}>
                      View Hours
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Card
                  sx={styles.faqCard}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <CardContent>
                    <PhoneIcon
                      sx={{ fontSize: 48, mb: 2, color: '#278721de' }}
                    />
                    <Typography variant="h6" gutterBottom>
                      Return Policy
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      Information about returns and exchanges
                    </Typography>
                    <Button fullWidth sx={styles.storeCall}>
                      Read Policy
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactHelp;
