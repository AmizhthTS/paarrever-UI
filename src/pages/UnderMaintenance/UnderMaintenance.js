import { Grid, IconButton, Typography } from '@mui/material';
import { useEffect } from 'react';
import getStyles from './styles';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { setLoading } from '../../redux/Reducer/Loader/Loader';

const UnderMaintenance = () => {
  const styles = getStyles();
  useEffect(() => {
    setLoading(false);
  }, []);
  // const footerData = JSON.parse(sessionStorage.getItem('footerData'));
  const handleReDirectClick = (name) => {
    if (name !== undefined) {
      const fullUrl =
        name.startsWith('http://') || name.startsWith('https://')
          ? name
          : 'https://' + name;
      window.open(fullUrl, '_blank');
    }
  };
  return (
    <Grid sx={styles.maintenance}>
      <Grid sx={styles.maintenance_contain}>
        <img
          src="https://demo.wpbeaveraddons.com/wp-content/uploads/2018/02/main-vector.png"
          alt="maintenance"
        />
        <span style={styles.ppinfoboxtitleprefix}>WE ARE COMING SOON</span>
        <Grid sx={styles.ppinfoboxtitlewrapper}>
          <Typography variant="h5" sx={styles.ppinfoboxtitle}>
            The website under maintenance!
          </Typography>
        </Grid>
        <Grid sx={styles.ppinfoboxdescription}>
          <Typography>
            Someone has kidnapped the famous Thalamz site. We are negotiation
            ransom and <br />
            will resolve this issue in 24/7 hours
          </Typography>{' '}
        </Grid>

        <>
          <span style={styles.titletext}>We are social</span>
          <Grid sx={styles.ppsocialicons}>
            <span style={styles.ppsocialicon}>
              <IconButton
                style={styles.faceBookI}
                onClick={() =>
                  handleReDirectClick('https://www.facebook.com/amizhth')
                }
              >
                <FaFacebookF />
              </IconButton>
            </span>
            <span style={styles.ppsocialicon}>
              <IconButton
                style={styles.twitterI}
                onClick={() =>
                  handleReDirectClick('https://twitter.com/amizhth')
                }
              >
                <XIcon />
              </IconButton>
            </span>
            <span style={styles.ppsocialicon}>
              <IconButton
                style={styles.instagramI}
                onClick={() =>
                  handleReDirectClick('https://www.instagram.com/amizhth')
                }
              >
                <FaInstagram />
              </IconButton>
            </span>
            <span style={styles.ppsocialicon}>
              <IconButton
                style={styles.linkedInI}
                onClick={() =>
                  handleReDirectClick(
                    'https://www.linkedin.com/company/amizhth'
                  )
                }
              >
                <FaLinkedinIn />
              </IconButton>
            </span>
            <span style={styles.ppsocialicon}>
              <IconButton
                style={styles.instagramI}
                onClick={() =>
                  handleReDirectClick(
                    'https://www.youtube.com/@amizhthtechnosolutions9301'
                  )
                }
              >
                <FaYoutube />
              </IconButton>
            </span>
          </Grid>
        </>
      </Grid>
    </Grid>
  );
};

export default UnderMaintenance;
