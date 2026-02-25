/* eslint-disable react/no-unescaped-entities */
// import { Box, Container } from '@mui/material';
// import React from 'react';
// import { paarpassportImg } from '../../assets';
// import getStyles from './styles';

// const PaarPassportSection = () => {
//   const styles = getStyles();
//   return (
//     <Box sx={styles.passportContainer}>
//       <Box sx={styles.faqSection}>
//         <Container maxWidth="lg">
//           <Box textAlign="center">
//             <img
//               src={paarpassportImg}
//               alt="PaarPassport"
//               style={{ width: '100%', maxWidth: '800px' }}
//             />
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default PaarPassportSection;
import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import getStyles from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { paarpassportImg } from '../../assets';

const PaarPassportSection = () => {
  const styles = getStyles();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <Box sx={styles.missionSection}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              style={{ display: 'flex', justifyContent: 'center' }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Box sx={styles.missionImageContainer}>
                <img
                  src={paarpassportImg}
                  alt="Traditional South Indian market"
                  width="100%"
                  height="auto"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Box sx={styles.missionImage}>
                <Typography sx={styles.missionTitle}>PAARR Passport</Typography>
              </Box>
              <Typography variant="body1" sx={styles.missionText}>
                Introducing PAARR Passport, an exciting activity for your kids
                to take part in. <br />
                Shop above Rs.100 and start the journey of stamps on the way to
                winning exciting gifts. <br />
                <br />
                <span style={{ fontWeight: 'bold' }}>But is that all?</span>
                <br />
                No! We also have puzzles and games for your kid's brainchild.
                <br />
                Ask for your PAARR Passport from our staff in the billing
                counter. See you in our stores!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PaarPassportSection;
