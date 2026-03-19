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

const TermsConditions = () => {
  const styles = getStyles();
  const [activeSection, setActiveSection] = useState('acceptance');

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'eligibility', title: '2. Eligibility and Use' },
    { id: 'conflict', title: '3. No Conflict Clause' },
    { id: 'liability', title: '4. Limitation of Liability and Risk' },
    { id: 'modifications', title: '5. Service Modifications and Updates' },
    { id: 'governing', title: '6. Governing Law' },
    { id: 'contact', title: '7. Contact Information' }
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
            General Terms and Conditions
          </Typography>
          <Typography sx={styles.lastUpdated}>
            Last Updated: 19th March 2026
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
              <Box id="acceptance" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  1. Acceptance of Terms
                </Typography>
                <Typography sx={styles.text}>
                  By accessing our website, mobile application, or purchasing
                  products from PAAR EVER, you agree to be bound by these Terms.
                  If you do not agree to these terms, please discontinue use of
                  our services immediately.
                </Typography>
              </Box>

              <Box id="eligibility" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  2. Eligibility and Use
                </Typography>
                <List sx={styles.list}>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● You represent that you are at least 18 years of age or
                      are using the site under the supervision of a parent or
                      guardian.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● You agree to provide true, accurate, and complete
                      information when registering an account.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● We reserve the right to deactivate accounts if we learn
                      personal information was collected from users under the
                      age of 18 without proper consent.
                    </Typography>
                  </ListItem>
                </List>
              </Box>

              <Box id="conflict" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  3. No Conflict Clause
                </Typography>
                <Typography sx={styles.text}>
                  In the event of any contradiction or conflict between these
                  General Terms and any other specific service agreement or
                  promotional offer, these General Terms shall prevail and
                  govern the relationship between the User and the Company. No
                  oral explanation or oral information given by either party
                  shall alter the interpretation of these terms.
                </Typography>
              </Box>

              <Box id="liability" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  4. Limitation of Liability and Risk
                </Typography>
                <List sx={styles.list}>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Internet Security:</strong> While we use
                      industry-standard security measures, we cannot guarantee
                      that the internet itself or any online system is 100% fool
                      proof.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>User Risk:</strong> The transmission of any
                      personal information or data to and from our sites is done
                      at your own risk.
                    </Typography>
                  </ListItem>
                  <ListItem sx={styles.listItem}>
                    <Typography sx={styles.text}>
                      ● <strong>Third-Party Content:</strong> We are not
                      responsible for the content, privacy practices, or
                      security of any third-party websites linked to or from our
                      services.
                    </Typography>
                  </ListItem>
                </List>
              </Box>

              <Box id="modifications" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  5. Service Modifications and Updates
                </Typography>
                <Typography sx={styles.text}>
                  We reserve the right to update or change these terms at any
                  time to stay compliant with relevant laws. Any changes will be
                  effective immediately upon being posted on our platform. We
                  encourage users to review these terms frequently.
                </Typography>
              </Box>

              <Box id="governing" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  6. Governing Law
                </Typography>
                <Typography sx={styles.text}>
                  These terms and your use of the services are governed by and
                  construed in accordance with the laws of Republic of India.
                  Any legal action or proceeding shall be brought exclusively in
                  the courts located in Chennai.
                </Typography>
              </Box>

              <Box id="contact" sx={styles.section}>
                <Typography variant="h2" sx={styles.sectionTitle}>
                  7. Contact Information
                </Typography>
                <Typography sx={styles.text}>
                  For any questions regarding these Terms or to report any
                  issues, please contact us:
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
                  <Typography sx={{ mt: 2 }}>
                    ● <strong>Official Address:</strong>
                    <br />
                    3rd Floor, Old No. 105, New No. 75, Dr Radha Krishnan Salai,
                    <br />
                    Jagadambal Colony, Othavadi, Mylapore,
                    <br />
                    Chennai, Tamil Nadu 600004
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

export default TermsConditions;
