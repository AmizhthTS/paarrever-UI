import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  // Button,
  Box
} from '@mui/material';
import { Phone as PhoneIcon, Mail as MailIcon } from '@mui/icons-material';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import getStyles from './styles';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
const MotionBox = motion(Box);

const ContactBanner = () => {
  const styles = getStyles();
  const ref = useRef();
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Call Us',
      description: 'Speak directly with our customer service team',
      contact: '044-46143999/991',
      hours: 'Mon-Sat: 10:00 AM - 6:00 PM',
      action: 'Call Now'
    },
    {
      icon: MailIcon,
      title: 'Email Support',
      description: "Send us your questions and we'll respond 24/7",
      contact: 'care@paarrever.com',
      hours: '24/7 Response',
      action: 'Send Email'
    }
    // {
    //   icon: WhatsAppIcon,
    //   title: 'WhatsApp',
    //   description: 'Quick support via WhatsApp for immediate assistance',
    //   contact: '+91 95006 89773',
    //   hours: 'Mon-Sat: 8:00 AM - 8:00 PM',
    //   action: 'Chat Now'
    // }
  ];

  return (
    <Box sx={styles.contactContainer}>
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
                  {t('contact.title')}
                </Typography>
                <Typography variant="body1" sx={styles.heroSubtitle}>
                  {t('contact.subTitle')}
                </Typography>
              </motion.div>
            </Box>
          </MotionBox>
        </Container>
      </Box>
      <Box sx={styles.contactMethodsContainer}>
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Card
                      sx={styles.contactMethodCard}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <CardContent>
                        <Box sx={styles.contactIconContainer}>
                          <Icon fontSize="large" sx={styles.iconButton} />
                        </Box>
                        <Typography variant="h6" sx={styles.contactMethodTitle}>
                          {method.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={styles.contactMethodDescription}
                        >
                          {method.description}
                        </Typography>
                        <Typography variant="body1" fontWeight="medium" mb={1}>
                          {method.contact}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          mb={2}
                        >
                          {method.hours}
                        </Typography>
                        {/* <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={styles.primaryButton}
                        >
                          {method.action}
                        </Button> */}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactBanner;
