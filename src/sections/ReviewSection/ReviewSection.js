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

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();

  const [branches, setBranches] = useState([]);

  useEffect(() => {
    if (storeListResponse) {
      if (storeListResponse?.stores) {
        let branchArr = storeListResponse?.stores.map((item) => {
          return { value: item.storeName, label: item.storeName };
        });
        setBranches(branchArr);
      }
    } else {
      setBranches([]);
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
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* ── Hero ── */}
        <Box
          textAlign="center"
          mb={6}
          data-aos="fade-down"
          data-aos-duration="900"
        >
          <Box sx={styles.heroLabel}>{t('review.heroLabel')}</Box>
          <Typography sx={styles.heroTitle}>
            {t('review.heroTitle1')}
            <br />
            {t('review.heroTitle2')}
          </Typography>
          <Typography sx={styles.heroSub}>{t('review.heroSub')}</Typography>
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
                  onClick={() => setIsSubmitted(false)}
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
                        textLable={t('review.name', 'Name')}
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
                        placeholderName="+91 XXXXX XXXXX"
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
                        name="branchName"
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
                      <Button
                        variant="outlined"
                        component="label"
                        fullWidth
                        sx={{
                          textTransform: 'none',
                          py: 2,
                          borderRadius: '16px',
                          border: '2px dashed #d0dae8',
                          color: '#445',
                          fontWeight: 600,
                          fontSize: '1rem',
                          gap: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: '#ff4b2b',
                            color: '#ff4b2b',
                            background: 'rgba(255,75,43,0.04)',
                            transform: 'scale(1.01)'
                          }
                        }}
                      >
                        {imageName
                          ? `📎 ${imageName}`
                          : `📷 ${t('review.uploadPhoto')}`}
                        <input
                          type="file"
                          hidden
                          accept="image/jpeg,image/png,image/jpg"
                          onChange={(e) => {
                            const f = e.target.files[0];
                            if (!f) return;
                            if (
                              ![
                                'image/jpeg',
                                'image/png',
                                'image/jpg'
                              ].includes(f.type)
                            ) {
                              alert(t('review.invalidImage'));
                              return;
                            }
                            if (f.size > 1024 * 1024 * 5) {
                              alert(t('review.imageTooLarge'));
                              return;
                            }
                            setImageName(f.name);
                            const r = new FileReader();
                            r.onloadend = () =>
                              setImageBase64(
                                r.result.replace(
                                  /^data:image\/(png|jpeg|jpg);base64,/,
                                  ''
                                )
                              );
                            r.readAsDataURL(f);
                          }}
                        />
                      </Button>
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
