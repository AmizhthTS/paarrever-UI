import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  List,
  ListItem
} from '@mui/material';
import { getStyles } from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Privacypolicy = () => {
  const styles = getStyles();
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const sections = [
    { id: 'welcome', title: 'Welcome' },
    { id: 'collection', title: '1. Information We Collect' },
    { id: 'usage', title: '2. How We Use Your Information' },
    { id: 'sharing', title: '3. Sharing Your Information' },
    { id: 'security', title: '4. Data Security' },
    { id: 'children', title: '5. Children’s Privacy' },
    { id: 'updates', title: '6. Updates to This Policy' },
    { id: 'contact', title: '7. Contact Us' }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <Box sx={styles.root}>
      <Container maxWidth="lg">
        <Box sx={styles.heroSection} data-aos="fade-up">
          <Typography variant="h1" sx={styles.title}>
            Privacy Policy & Terms of Privacy
          </Typography>
          <Typography sx={styles.lastUpdated}>
            Last Updated: 17th March 2026
          </Typography>
        </Box>

        <Grid container spacing={6} sx={styles.contentGrid}>
          {/* Sidebar Navigation */}
          <Grid item md={4}>
            <Box sx={styles.sidebar}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
                Contents
              </Typography>
              {sections.map((section) => (
                <Box
                  key={section.id}
                  sx={{
                    ...styles.navItem,
                    ...(activeSection === section.id
                      ? styles.activeNavItem
                      : {})
                  }}
                  onClick={() => handleScroll(section.id)}
                >
                  {section.title}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Box data-aos="fade-left">
              <Box id="welcome" sx={styles.section}>
                <Typography sx={styles.text}>
                  Welcome to PAARR EVER. Your privacy is a priority for us, and
                  we are committed to being transparent about how we handle your
                  information. This policy explains what information we collect,
                  how we use it, and how we keep it safe when you use our
                  website, mobile app, or services.
                </Typography>
              </Box>

              <Box id="collection" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  1. Information We Collect
                </Typography>
                <Typography sx={styles.text}>
                  We collect information that helps us provide a better shopping
                  experience for you:
                </Typography>
                <List sx={styles.list}>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Voluntary Information:</strong> This includes
                      your name, email address, phone number, and delivery
                      address provided during registration or checkout.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Payment Data:</strong> We collect only necessary
                      data to process your payments. Most payment information is
                      managed securely by our third-party payment gateways.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Automated Information:</strong> When you visit
                      our site or app, we may automatically collect your IP
                      address, browser type, and device characteristics for
                      security and analytics.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>App Permissions:</strong> If you use our mobile
                      app, we may request access to your location, camera, or
                      push notifications to provide specific services, such as
                      finding the nearest store.
                    </Typography>
                  </ListItem>
                </List>
              </Box>

              <Box id="usage" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  2. How We Use Your Information
                </Typography>
                <Typography sx={styles.text}>
                  We use your data for legitimate business purposes, including:
                </Typography>
                <List sx={styles.list}>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Order Fulfilment:</strong> To manage your
                      purchases, payments, and deliveries.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Communication:</strong> To send you
                      administrative updates, marketing promotions (with your
                      consent), and respond to your inquiries.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Improvement:</strong> To analyse usage trends
                      and improve our product offerings.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Security:</strong> To protect our customers and
                      platform from fraud or unauthorized activity.
                    </Typography>
                  </ListItem>
                </List>
              </Box>

              <Box id="sharing" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  3. Sharing Your Information
                </Typography>
                <Typography sx={styles.text}>
                  We value your trust and do not sell or rent your personal
                  information to third parties. We only share information in the
                  following cases:
                </Typography>
                <List sx={styles.list}>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Service Providers:</strong> With trusted
                      partners (like delivery couriers or payment processors)
                      who help us operate our business.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Legal Requirements:</strong> When required by
                      law, such as responding to a court order or government
                      request.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Business Transfers:</strong> In the event of a
                      merger, sale, or acquisition of our company.
                    </Typography>
                  </ListItem>
                </List>
              </Box>

              <Box id="security" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  4. Data Security
                </Typography>
                <Typography sx={styles.text}>
                  We implement industry-standard technical and organizational
                  security measures to protect your data. While we strive for
                  maximum security, please note that no method of transmission
                  over the internet is 100% secure; therefore, your use of our
                  digital services is at your own risk.
                </Typography>
              </Box>

              <Box id="children" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  5. Children’s Privacy
                </Typography>
                <Typography sx={styles.text}>
                  Our services are intended for users who are at least 18 years
                  old. We do not knowingly collect personal data from minors. If
                  we discover such data has been collected, we will take steps
                  to delete it immediately.
                </Typography>
              </Box>

              <Box id="updates" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  6. Updates to This Policy
                </Typography>
                <Typography sx={styles.text}>
                  We may update this Privacy Policy from time to time to stay
                  compliant with changing laws. Any changes will be posted on
                  this page with an updated &quot;Revised&quot; date.
                </Typography>
              </Box>

              <Box id="contact" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  7. Contact Us
                </Typography>
                <Typography sx={styles.text}>
                  If you have any questions about this policy or wish to update
                  your information, please contact us at:
                </Typography>
                <Box sx={styles.contactBox}>
                  <Typography sx={{ mb: 1 }}>
                    ● <strong>Email:</strong>{' '}
                    <Link
                      href="mailto:care@paarrever.com"
                      sx={styles.contactLink}
                    >
                      care@paarrever.com
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Privacypolicy;
