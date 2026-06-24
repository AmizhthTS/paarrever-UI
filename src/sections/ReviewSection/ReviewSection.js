import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import getStyles from './styles';
import { TextInput, SelectInput } from '../../components';
import { isWhitespace, validateEmail, validateNumberonly } from '../../utils';
import { getReviewSave } from '../../redux/Reducer/Review/Review';
import { setNotification } from '../../redux/Reducer/Notification/Notification';
import { isEmptyObject } from '../../utils/helper';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Autocomplete, TextField, Card, CardContent } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getStoreList } from '../../redux/Reducer/Store/Store';

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const ReviewSection = () => {
  const styles = getStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [imageBase64, setImageBase64] = useState('');
  const [imageName, setImageName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const storeData = useSelector((state) => state?.store ?? null);
  const storeListResponse = storeData?.storeList ?? null;
  const reviewData = useSelector((s) => s?.review ?? null);
  const reviewSaveResponse = reviewData?.reviewSave ?? null;

  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();

  const [branches] = useState([
    'Product Availability',
    'Staff Service',
    'Billing Time',
    'Value for Money',
    'Store Experience',
    'Others                                 '
  ]);

  useEffect(() => {
    if (storeListResponse && storeListResponse.stores) {
      setStores(storeListResponse.stores);
      if (storeListResponse.stores.length > 0 && !selectedStore) {
        setSelectedStore(storeListResponse.stores[0]);
      }
    }
  }, [storeListResponse]);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
    dispatch(
      getStoreList({
        listSize: 1000,
        pageNumber: 1,
        searchString: ''
      })
    );
  }, []);

  useEffect(() => {
    if (!isEmptyObject(reviewSaveResponse)) {
      if (reviewSaveResponse?.responseStatus === 'Success') {
        reset({
          firstName: '',
          phoneNumber: '',
          email: '',
          branchName: '',
          feedbackMessage: ''
        });
        setImageBase64('');
        setImageName('');
        setIsSubmitted(true);
        dispatch(
          setNotification({
            isActive: true,
            messageId: 2100
          })
        );
      } else {
        dispatch(
          setNotification({
            isActive: true,
            message: reviewSaveResponse?.responseMessage
          })
        );
      }
      dispatch(getReviewSave({ clearData: true }));
    }
  }, [reviewSaveResponse]);

  const onSubmit = (data) => {
    // debugger;

    data.branchName = selectedStore?.storeName;
    console.log('selectedStore', data);
    dispatch(
      getReviewSave({
        ...data,
        image: imageBase64,
        imageName
      })
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <Box sx={styles.page}>
      <Box sx={styles.blob1} /> <Box sx={styles.blob2} />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        {/* ── Help Section ── */}
        <Box
          mb={6}
          data-aos="fade-down"
          data-aos-duration="900"
          sx={{
            backgroundColor: '#f8faff',
            borderRadius: '16px',
            p: { xs: 3, md: 5 },
            border: '1px solid #eef2f6'
          }}
        >
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#1a202c',
                mb: 1,
                fontSize: { xs: '1.75rem', md: '2rem' }
              }}
            >
              {t('review.helpTitle')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#64748b', fontSize: '1.1rem' }}
            >
              {t('review.helpSubtitle')}
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: '#fff',
              p: 2,
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            <Typography sx={{ fontWeight: 600, color: '#475569' }}>
              {t('review.storeLabel')}
            </Typography>

            <Autocomplete
              options={stores}
              getOptionLabel={(option) => option.storeName || ''}
              value={selectedStore}
              onChange={(e, newValue) => setSelectedStore(newValue)}
              disableClearable
              sx={{ width: { xs: '100%', sm: 350 } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  InputProps={{
                    ...params.InputProps,
                    // disableUnderline: true,
                    sx: { color: '#3b82f6', fontWeight: 500, paddingLeft: 1 }
                  }}
                />
              )}
            />
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  border: '1px solid #eef2f6',
                  height: '100%'
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#e6f4ea',
                      p: 1.5,
                      borderRadius: '50%',
                      display: 'flex'
                    }}
                  >
                    <LocalPhoneOutlinedIcon sx={{ color: '#1e8e3e' }} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: '#1a202c',
                        mb: 1,
                        fontSize: '1.1rem'
                      }}
                    >
                      {t('review.callUs')}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#1e8e3e',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        mb: 1
                      }}
                    >
                      {selectedStore
                        ? selectedStore.contactNumber
                        : t('review.notAvailable')}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#64748b',
                        gap: 0.5
                      }}
                    >
                      <AccessTimeIcon sx={{ fontSize: '1rem' }} />
                      <Typography variant="body2">
                        {t('review.timing')}{' '}
                        {selectedStore
                          ? selectedStore.time
                          : t('review.notAvailable')}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  border: '1px solid #eef2f6',
                  height: '100%'
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#e8f0fe',
                      p: 1.5,
                      borderRadius: '50%',
                      display: 'flex'
                    }}
                  >
                    <EmailOutlinedIcon sx={{ color: '#1a73e8' }} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: '#1a202c',
                        mb: 1,
                        fontSize: '1.1rem'
                      }}
                    >
                      {t('review.writeToUs')}
                    </Typography>
                    <Typography sx={{ color: '#475569', lineHeight: 1.6 }}>
                      {t('review.writeToUsDesc')}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* ── Form Card ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <Box sx={styles.formPanel}>
            {isSubmitted ? (
              <Box textAlign="center" py={5}>
                <Typography variant="h2" sx={{ fontSize: '4rem', mb: 2 }}>
                  🎉
                </Typography>
                <Typography
                  sx={styles.sectionTitle}
                  style={{ borderBottom: 'none' }}
                >
                  {t('review.successTitle', 'Thank you for your feedback!')}
                </Typography>
                <Typography sx={{ color: '#445', fontSize: '1.05rem', mb: 4 }}>
                  {t(
                    'review.successSub',
                    'Your review has been successfully submitted.'
                  )}
                </Typography>
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    reset();
                    setSelectedStore(storeListResponse.stores[0]);
                  }}
                  sx={{ ...styles.btnSubmit, width: 'auto', px: 4, mt: 0 }}
                >
                  {t('review.submitAnother', 'Submit Another Review')}
                </Button>
              </Box>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                  {/* Personal Info */}
                  {/* <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                      <Typography sx={styles.sectionTitle}>
                        {t('review.personalDetails', 'Personal Details')}
                      </Typography>
                    </motion.div>
                  </Grid> */}

                  <Grid item xs={12} sm={6}>
                    <motion.div variants={itemVariants}>
                      <TextInput
                        control={control}
                        errors={errors}
                        name="firstName"
                        type="text"
                        textLable={t('review.firstName')}
                        placeholderName={t('review.firstNamePlaceholder')}
                        variant="outlined"
                        requiredMsg={t('review.firstNameRequired')}
                        validate={{
                          noWhitespace: (v) =>
                            !isWhitespace(v) || t('review.noWhitespace')
                        }}
                      />
                    </motion.div>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <motion.div variants={itemVariants}>
                      <TextInput
                        control={control}
                        errors={errors}
                        name="phoneNumber"
                        type="text"
                        textLable={t('review.phoneNumber')}
                        placeholderName={t('review.phoneNumberPlaceholder')}
                        variant="outlined"
                        requiredMsg={t('review.phoneNumberRequired')}
                        onKeyDownData={validateNumberonly}
                        validate={{
                          noWhitespace: (value) =>
                            !isWhitespace(value) || t('review.noWhitespace')
                        }}
                        inputProps={{ maxLength: 10 }}
                      />
                    </motion.div>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <motion.div variants={itemVariants}>
                      <TextInput
                        control={control}
                        errors={errors}
                        name="email"
                        type="text"
                        textLable={t('review.email')}
                        placeholderName={t('review.emailPlaceholder')}
                        variant="outlined"
                        requiredMsg={t('review.emailRequired')}
                        validate={{
                          validateEmail,
                          noWhitespace: (value) =>
                            !isWhitespace(value) || t('review.noWhitespace')
                        }}
                      />
                    </motion.div>
                  </Grid>

                  {/* Visit Info */}
                  {/* <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                      <Typography sx={styles.sectionTitle}>
                        {t('review.visitDetails', 'Visit Details')}
                      </Typography>
                    </motion.div>
                  </Grid> */}

                  <Grid item xs={12} sm={6}>
                    <motion.div variants={itemVariants}>
                      <SelectInput
                        control={control}
                        errors={errors}
                        name="feedbackType"
                        textLable={t('review.whichBranch')}
                        options={branches}
                        requiredMsg={t('review.selectBranch')}
                      />
                    </motion.div>
                  </Grid>

                  {/* Feedback */}
                  {/* <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                      <Typography sx={styles.sectionTitle}>
                        {t('review.feedback', 'Feedback')}
                      </Typography>
                    </motion.div>
                  </Grid> */}

                  <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                      <TextInput
                        control={control}
                        errors={errors}
                        name="feedbackMessage"
                        type="text"
                        textLable={t('review.yourFeedback')}
                        placeholderName={t('review.feedbackPlaceholder')}
                        variant="outlined"
                        requiredMsg={t('review.feedbackRequired')}
                        rows={5}
                        multiline={true}
                      />
                    </motion.div>
                  </Grid>

                  <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                      <Box
                        sx={{
                          mb: 1,
                          display: 'flex',
                          alignItems: 'center',
                          color: '#546e7a',
                          fontWeight: 500,
                          fontSize: '0.9rem'
                        }}
                      >
                        <AttachFileIcon
                          sx={{
                            fontSize: '1.2rem',
                            mr: 0.5,
                            transform: 'rotate(45deg)'
                          }}
                        />
                        {t('review.uploadPhoto')}
                      </Box>
                      <Box
                        component="label"
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          py: 4,
                          px: 2,
                          borderRadius: '8px',
                          border: '1px dashed #b0bec5',
                          backgroundColor: '#fff',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: '#ff4b2b',
                            backgroundColor: 'rgba(255,75,43,0.02)'
                          }
                        }}
                      >
                        <CloudUploadOutlinedIcon
                          sx={{ fontSize: 48, color: '#90a4ae', mb: 1 }}
                        />
                        <Typography
                          sx={{
                            color: '#455a64',
                            fontWeight: 500,
                            mb: 1,
                            fontSize: '1.1rem'
                          }}
                        >
                          {imageName
                            ? imageName
                            : t(
                                'review.addOrDrop',
                                'Add file or drop file here'
                              )}
                        </Typography>
                        <Typography
                          sx={{
                            color: '#78909c',
                            fontSize: '0.85rem',
                            textAlign: 'center',
                            mb: 1
                          }}
                        >
                          {t(
                            'review.invalidImage',
                            'Support: JPG, JPEG, PNG, SVG, CSV, XLSX, DOC, DOCX, XLS, PDF, TXT, ODT, EML, APK (Max 20MB)'
                          )}
                        </Typography>
                        <Typography
                          sx={{
                            color: '#f57c00',
                            fontSize: '0.85rem',
                            fontWeight: 500
                          }}
                        >
                          {t(
                            'review.onlyOneFile',
                            'Note: Only one file allowed.'
                          )}
                        </Typography>

                        <input
                          type="file"
                          hidden
                          accept=".jpg,.jpeg,.png,.svg,.csv,.xlsx,.doc,.docx,.xls,.pdf,.txt,.odt,.eml,.apk"
                          onChange={(e) => {
                            const f = e.target.files[0];
                            if (!f) return;

                            if (f.size > 1024 * 1024 * 20) {
                              alert(
                                t(
                                  'review.imageTooLarge',
                                  'File is too large. Max allowed size is 20MB.'
                                )
                              );
                              return;
                            }
                            setImageName(f.name);
                            const r = new FileReader();
                            r.onloadend = () =>
                              setImageBase64(
                                r.result.replace(/^data:.*?;base64,/, '')
                              );
                            r.readAsDataURL(f);
                          }}
                        />
                      </Box>
                    </motion.div>
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <motion.div variants={itemVariants}>
                      <Button type="submit" sx={styles.btnSubmit}>
                        🎉 {t('review.submitReview')}
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>
              </form>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ReviewSection;
