import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  IconButton,
  Dialog,
  DialogContent
} from '@mui/material';
import {
  // Facebook,
  Instagram,
  Phone as PhoneIcon,
  Mail as MailIcon,
  LocationOn as MapPinIcon
  // Favorite as HeartIcon
} from '@mui/icons-material';
import { getStyles } from './styles';
import { Link, useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import { newMainLogo, successImg } from '../../../assets';
import MuiButton from '../../../components/Button/Button';
import { TextInput } from '../../../components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsletterSubscribtionSave } from '../../../redux/Reducer/Newsletter/Newsletter';
import { setNotification } from '../../../redux/Reducer/Notification/Notification';
import { isEmptyObject, validateEmail } from '../../../utils';
import { useTranslation } from 'react-i18next';
import { getStoreList } from '../../../redux/Reducer/Store/Store';

const Footer = () => {
  const styles = getStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [store, setStore] = useState([]);
  const storeData = useSelector((state) => state?.store ?? null);
  const storeListResponse = storeData?.storeList ?? null;
  const newsletterData = useSelector((state) => state?.newsletter ?? null);
  const newsletterSaveResponse =
    newsletterData?.newsletterSubscribtionSave ?? null;
  const {
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  useEffect(() => {
    reset();
  }, [location.pathname]);

  useEffect(() => {
    listApi();
  }, []);

  const listApi = () => {
    setStore([]);
    let req = {
      listSize: 1000,
      pageNumber: 1,
      searchString: ''
    };
    dispatch(getStoreList(req));
  };

  useEffect(() => {
    if (storeListResponse) {
      if (storeListResponse) {
        setStore(storeListResponse?.count);
      }
    }
  }, [storeListResponse]);

  useEffect(() => {
    if (
      !isEmptyObject(newsletterSaveResponse) &&
      newsletterSaveResponse !== ''
    ) {
      if (newsletterSaveResponse?.responseStatus === 'Success') {
        reset();
        setValue('email', '');
        newsOpen();
      } else {
        dispatch(
          setNotification({ isActive: true, messageId: newsletterSaveResponse })
        );
      }
    }
    dispatch(getNewsletterSubscribtionSave({ clearData: true }));
  }, [newsletterSaveResponse]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(getNewsletterSubscribtionSave(data));
  };

  const newsOpen = () => {
    setNewsletterOpen(true);
    setTimeout(() => {
      newsClose();
    }, 1500);
  };
  const newsClose = () => {
    setNewsletterOpen(false);
  };

  const footerSections = [
    {
      title: 'Quick links',
      links: [
        { label: 'Home', path: '/' },
        { label: 'Store locator', path: '/store-locator' },
        { label: 'About us', path: '/about' },
        { label: 'Contact page', path: '/contact' }
      ]
    },
    {
      title: 'Kids engagement',
      links: [{ label: 'PAARR Passport', path: '/paarr-passport' }]
    },
    {
      title: 'Legal & Policies',
      links: [
        { label: 'Privacy policy', path: '/privacy-policy' },
        { label: 'Terms & Conditions', path: '/terms-conditions' }
      ]
    }
  ];

  const socialLinks = [
    // {
    //   icon: Facebook,
    //   name: 'Facebook'
    // },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/paarr_ever?igsh=dmRsd2Ywa29rY2Rq'
    }
  ];

  return (
    <>
      <Box component="footer" sx={styles.footerContainer}>
        <Container maxWidth="xl">
          <Box sx={styles.newsletterContainer}>
            <Typography
              variant="h3"
              sx={styles.newsletterTitle}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {t('footer.titleConnected')}
            </Typography>
            <Typography
              sx={styles.newsletterText}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {t('footer.subTitleConnected')}
            </Typography>
            <Box
              component="form"
              sx={styles.newsletterForm}
              data-aos="fade-up"
              data-aos-duration="1000"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Box sx={styles.inputContainer}>
                <TextInput
                  control={control}
                  errors={errors}
                  type="text"
                  name="email"
                  validate={validateEmail}
                  placeholderName="Enter Email"
                  requiredMsg="Email is required"
                  style={styles.newsletterInput}
                />
                <Box>
                  <MuiButton
                    type="submit"
                    variant={'contained'}
                    style={styles.newsletterButton}
                    lableName={'Subscribe'}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider sx={styles.separator} />
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={styles.footerGrid}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Grid item xs={12} sm={6} md={3} lg={2.4} sx={styles.brandSection}>
              <img src={newMainLogo} alt="Logo" style={{ width: '120px' }} />
              <Typography sx={styles.brandDescription}>
                {t('footer.logoTitle')}
              </Typography>
              <Box sx={styles.socialButtons}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    size="small"
                    sx={styles.socialButton}
                    aria-label={social.name}
                    onClick={() =>
                      window.open(social.url, '_blank', 'noopener noreferrer')
                    }
                  >
                    <social.icon fontSize="small" />
                  </IconButton>
                ))}
              </Box>
            </Grid>
            {footerSections.map((section, index) => (
              <Grid item xs={12} sm={12} md={3} lg={2} key={index}>
                <Typography variant="h4" sx={styles.sectionTitle}>
                  {section.title}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {section.links.map((link, linkIndex) => (
                    <Box component="li" key={linkIndex} sx={{ mb: 1 }}>
                      <Link to={link.path} style={styles.footerLink}>
                        {link.label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
          <Divider sx={styles.separator} />
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={styles.contactGrid}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box sx={styles.contactItem}>
                <Box sx={styles.contactIcon}>
                  <PhoneIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography sx={styles.contactTitle}>Call Us</Typography>
                  <Typography sx={styles.contactText}>
                    044-46143999/991
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box sx={styles.contactItem}>
                <Box sx={styles.contactIcon}>
                  <MailIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography sx={styles.contactTitle}>Email Us</Typography>
                  <Typography sx={styles.contactText}>
                    care@paarrever.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box sx={styles.contactItem}>
                <Box sx={styles.contactIcon}>
                  <MapPinIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography sx={styles.contactTitle}>Find Stores</Typography>
                  <Typography sx={styles.contactText}>
                    {store ?? 0} locations in Chennai
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={styles.separator} />
          {/* <Box sx={styles.bottomBar}>
            <Box sx={styles.legalLinks}>
              <Typography
                component="a"
                href="#"
                onClick={handlePdfOpen}
                style={styles.legalLink}
              >
                Privacy Policy
              </Typography>
              <Typography
                component="a"
                href="#"
                onClick={handlePdfOpen}
                style={styles.legalLink}
              >
                Terms of Privacy
              </Typography>
              <Link to="/" style={styles.legalLink}>
                Cookie Policy
              </Link>
              <Link to="/" style={styles.legalLink}>
                Accessibility
              </Link>
            </Box>
           
          </Box> */}
          <Box sx={styles.madeWithLove}>
            <Typography sx={styles.copyright}>
              © 2025 PAARR ever. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Dialog
        open={newsletterOpen}
        onClose={newsClose}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogContent>
          <Grid textAlign={'center'}>
            <img
              src={successImg}
              alt="Success-Image"
              style={styles.sucessImage}
            />
            <Typography variant="h4" gutterBottom>
              Subscription Confirmed!
            </Typography>
            <Typography variant="body1">
              Thank you for subscribing to our newsletter.
              <br />
              You will now receive the latest updates, offers, and news directly
              to your inbox.
            </Typography>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
