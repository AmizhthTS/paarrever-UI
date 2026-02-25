import { useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Box
} from '@mui/material';
import { Phone as PhoneIcon, Mail as MailIcon } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import getStyles from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import {
  AutocompleteInput,
  CheckboxInput,
  TextInput
} from '../../../components';
import {
  isEmptyObject,
  isWhitespace,
  validateEmail,
  validateNumberonly
} from '../../../utils';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '../../../redux/Reducer/Notification/Notification';
import { getContactSave } from '../../../redux/Reducer/Contact/Contact';

const ContactMessage = () => {
  const styles = getStyles();
  const dispatch = useDispatch();
  const contactData = useSelector((state) => state?.contact ?? null);
  const contactDataSaveResponse = contactData?.contactSave ?? null;
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    clearErrors,
    watch,
    formState: { errors }
  } = useForm();
  let Checkbox = watch('Checkbox', false);
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const subjectType = [
    'General Inquiry',
    'Product Question',
    'Store Feedback',
    'Vendor / Product listing',
    'Business Partnership'
  ];

  const onSubmit = (data) => {
    console.log(data);
    dispatch(getContactSave(data));
  };

  useEffect(() => {
    if (
      !isEmptyObject(contactDataSaveResponse) &&
      contactDataSaveResponse !== ''
    ) {
      if (contactDataSaveResponse?.responseStatus === 'success') {
        reset({
          fullName: '',
          emailAddress: '',
          phoneNumber: '',
          subject: '',
          message: '',
          Checkbox: false
        });
        dispatch(
          setNotification({
            isActive: true,
            messageId: 110
          })
        );
      } else {
        dispatch(
          setNotification({
            isActive: true,
            messageId: contactDataSaveResponse
          })
        );
      }
    }
    dispatch(getContactSave({ clearData: true }));
  }, [contactDataSaveResponse]);

  const handleSelectSubject = (value) => {
    setValue('subject', value);
    clearErrors('subject');
  };

  const offices = [
    {
      title: 'Head Office',
      address:
        '3rd Floor, Old No. 105, New No. 75, Dr Radha Krishnan Salai, Jagadambal Colony, Othavadi, Mylapore, Chennai, Tamil Nadu 600004',
      phone: '044-46143999/991',
      email: 'care@paarrever.com',
      hours: '10:00 AM - 6:00 PM'
    }
    // {
    //   title: 'Distribution Center',
    //   address:
    //     'Kaleesuwari Retail World Pvt Ltd Second Floor, New No 1 Old No 5 Mambakkam Road, Vengaivasal 600126, TamilNadu',
    //   phone: '+91 95000 52427',
    //   email: 'dc1@paarrever.com',
    //   hours: '9:00 AM - 4:00 PM'
    // }
  ];

  const onError = (event) => {
    console.log(event);
    dispatch(setNotification({ isActive: true, messageId: 101 }));
  };

  return (
    <Box sx={styles.contactContainer}>
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              variant="h4"
              sx={styles.formTitle}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Get in touch
            </Typography>
            <Card data-aos="fade-up" data-aos-duration="1000">
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextInput
                        control={control}
                        errors={errors}
                        name="fullName"
                        type="text"
                        textLable="Full Name *"
                        placeholderName="Enter Full Name"
                        variant="outlined"
                        requiredMsg="Full Name is required"
                        validate={{
                          noWhitespace: (value) =>
                            !isWhitespace(value) || 'Whitespace not allowed'
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextInput
                        control={control}
                        errors={errors}
                        name="emailAddress"
                        type="text"
                        textLable="Email *"
                        placeholderName="Enter your Email"
                        variant="outlined"
                        requiredMsg="Email is required"
                        validate={{
                          validateEmail
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextInput
                        control={control}
                        errors={errors}
                        name="phoneNumber"
                        type="text"
                        textLable="Mobile Number *"
                        placeholderName="Enter your Mobile Number"
                        variant="outlined"
                        requiredMsg="Mobile Number is required"
                        onKeyDownData={validateNumberonly}
                        validate={{
                          noWhitespace: (value) =>
                            !isWhitespace(value) || 'Whitespace not allowed'
                        }}
                        inputProps={{ maxLength: 10 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <AutocompleteInput
                        name="subject"
                        control={control}
                        errors={errors}
                        onChange={(e, selectedOptions) =>
                          handleSelectSubject(selectedOptions)
                        }
                        textLable="Subject *"
                        // options={institutions.map((list) => list.label)}
                        options={subjectType}
                        disableClearable={true}
                        variant="outlined"
                        fullWidth={true}
                        requiredMsg="Subject is required"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextInput
                        control={control}
                        errors={errors}
                        name="message"
                        type="text"
                        textLable="Message *"
                        placeholderName="Enter Message"
                        variant="outlined"
                        requiredMsg="Message is required"
                        validate={{
                          noWhitespace: (value) =>
                            !isWhitespace(value) || 'Whitespace not allowed'
                        }}
                        rows={3}
                        multiline={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CheckboxInput
                        control={control}
                        errors={errors}
                        name="Checkbox"
                        textLable="I agree to be contacted by PAARR Ever or its representative through SMS/Email, RCS, whatsapp or call. This consent will override any registration for NDNC."
                        variant="outlined"
                        requiredMsg="Agree to be contacted is required"
                        value={Checkbox}
                        checked={Checkbox}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={styles.primaryButton}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              variant="h4"
              sx={styles.formTitle}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Our Offices
            </Typography>
            <Grid container spacing={3}>
              {offices.map((office, index) => (
                <Grid item xs={12} key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Card
                      sx={styles.officeCard}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <CardContent>
                        <Typography variant="h6" sx={styles.officeTitle}>
                          {office.title}
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Box display="flex" alignItems="flex-start" gap={1}>
                              <LocationOnIcon fontSize="small" color="action" />
                              <Typography variant="body2">
                                {office.address}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box display="flex" alignItems="center" gap={1}>
                              <PhoneIcon fontSize="small" color="action" />
                              <Typography variant="body2">
                                {office.phone}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box display="flex" alignItems="center" gap={1}>
                              <MailIcon fontSize="small" color="action" />
                              <Typography variant="body2">
                                {office.email}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box display="flex" alignItems="center" gap={1}>
                              <ScheduleIcon fontSize="small" color="action" />
                              <Typography variant="body2">
                                {office.hours}
                              </Typography>
                            </Box>
                          </Grid>
                          {/* <Grid
                            item
                            xs={12}
                            mt={2}
                            pt={2}
                            borderTop="1px solid"
                            borderColor="divider"
                          >
                            <Grid container spacing={1}>
                              <Grid item xs={6}>
                                <Button
                                  sx={styles.storeCall}
                                  fullWidth
                                  startIcon={<PhoneIcon />}
                                >
                                  Call
                                </Button>
                              </Grid>
                              <Grid item xs={6}>
                                <Button
                                  color="primary"
                                  variant="contained"
                                  fullWidth
                                  startIcon={<LocationOnIcon />}
                                  sx={styles.primaryButton}
                                >
                                  Directions
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid> */}
                        </Grid>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, sm: 350, md: 450 },
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              {' '}
              <iframe
                style={{ border: '0px', width: '100%' }}
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d124399.9154553653!2d80.15393841214225!3d13.003968698900755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spaarr%20ever%20supermarket!5e0!3m2!1sen!2sin!4v1764132183358!5m2!1sen!2sin"
                title="Paarr Ever Office Location"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </Box>{' '}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMessage;
