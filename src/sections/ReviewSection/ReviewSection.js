import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  // Card,
  // CardContent,
  // Avatar,
  Rating,
  Button,
  // FormControl,
  // FormLabel,
  // FormGroup,
  // FormControlLabel,
  // Checkbox,
  // MobileStepper,
  LinearProgress,
  Chip
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
import getStyles from './styles';
import { TextInput, SelectInput } from '../../components';
import { isWhitespace, validateEmail, validateNumberonly } from '../../utils';
import {
  // getReviewList,
  getReviewSave
} from '../../redux/Reducer/Review/Review';
import { setNotification } from '../../redux/Reducer/Notification/Notification';
import { isEmptyObject } from '../../utils/helper';
import { getStoreList } from '../../redux/Reducer/Store/Store';
import { getCategoryDropdownList } from '../../redux/Reducer/Category/Category';

// ─── STEP DEFINITIONS ────────────────────────────────────────────────────────

const STEP_DEFS = [
  { labelKey: 'review.step0Label', icon: '👤', descKey: 'review.step0Desc' },
  { labelKey: 'review.step1Label', icon: '🏪', descKey: 'review.step1Desc' },
  { labelKey: 'review.step2Label', icon: '⭐', descKey: 'review.step2Desc' },
  { labelKey: 'review.step3Label', icon: '✍️', descKey: 'review.step3Desc' }
];

// const branches = [
//   { value: 'Nungambakkam', label: 'Nungambakkam' },
//   { value: 'Anna Nagar', label: 'Anna Nagar' },
//   { value: 'T Nagar', label: 'T Nagar' },
//   { value: 'Adyar', label: 'Adyar' },
//   { value: 'Velachery', label: 'Velachery' }
// ];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const ReviewSection = () => {
  const styles = getStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const STEPS = STEP_DEFS.map((s) => ({
    ...s,
    label: t(s.labelKey),
    desc: t(s.descKey)
  }));
  const [activeStep, setActiveStep] = useState(0);
  const [menuRating, setMenuRating] = useState(0);
  const [foodRating, setFoodRating] = useState(0);
  const [staffRating, setStaffRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [boughtItems, setBoughtItems] = useState({});
  const [imageBase64, setImageBase64] = useState('');
  const [imageName, setImageName] = useState('');
  // const [setReviews] = useState([]);
  const storeData = useSelector((state) => state?.store ?? null);
  const storeListResponse = storeData?.storeList ?? null;
  const categoryData = useSelector((state) => state?.category ?? null);
  const categoryDropdownListResponse =
    categoryData?.categoryDropdownList ?? null;
  const reviewData = useSelector((s) => s?.review ?? null);
  // const reviewListResponse = reviewData?.reviewList ?? null;
  const reviewSaveResponse = reviewData?.reviewSave ?? null;

  const {
    // handleSubmit,
    control,
    reset,
    trigger,
    getValues,
    formState: { errors }
  } = useForm();

  const [branches, setBranches] = useState([]);

  useEffect(() => {
    if (storeListResponse) {
      console.log('storeListResponse', storeListResponse);
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
    if (categoryDropdownListResponse) {
      if (
        categoryDropdownListResponse?.response?.responseStatus === 'Success'
      ) {
        let boughtItemsObj = {};
        categoryDropdownListResponse?.categories.forEach((item) => {
          boughtItemsObj[item.categoryName] = false;
        });
        setBoughtItems(boughtItemsObj);
      }
    }
  }, [categoryDropdownListResponse]);
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
    dispatch(
      getCategoryDropdownList({
        listSize: 1000,
        pageNumber: 1,
        searchString: ''
      })
    );
  }, []);

  // useEffect(() => {
  //   if (reviewListResponse?.data) {
  //     setReviews(
  //       reviewListResponse.data.length
  //         ? reviewListResponse.data
  //         : [
  //             {
  //               id: 1,
  //               firstName: 'Arun',
  //               lastName: 'Pandi',
  //               branchName: 'Nungambakkam',
  //               foodRating: 4,
  //               serviceRating: 5,
  //               feedbackMessage:
  //                 'Absolutely loved the bakery items! Crispy, fresh, and the staff was super friendly.',
  //               createdAt: '2023-10-15T10:00:00Z'
  //             }
  //           ]
  //     );
  //   }
  // }, [reviewListResponse]);

  useEffect(() => {
    console.log(
      'reviewSaveResponse',
      isEmptyObject(reviewSaveResponse),
      reviewSaveResponse
    );

    if (!isEmptyObject(reviewSaveResponse)) {
      if (reviewSaveResponse?.responseStatus === 'Success') {
        reset({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          branchName: '',
          feedbackMessage: ''
        });
        setMenuRating(0);
        setFoodRating(0);
        setStaffRating(0);
        setServiceRating(0);
        setBoughtItems({
          Bakery: false,
          Savouries: false,
          'Food Court': false
        });
        setImageBase64('');
        setImageName('');
        setActiveStep(0);
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

  const stepFields = [
    ['firstName', 'lastName', 'phoneNumber', 'email'],
    ['branchName'],
    [],
    ['feedbackMessage']
  ];

  const handleNext = async () => {
    const valid = await trigger(stepFields[activeStep]);
    if (valid) setActiveStep((p) => Math.min(p + 1, STEPS.length - 1));
  };

  const handleBack = () => setActiveStep((p) => Math.max(p - 1, 0));

  const onSubmit = (data) => {
    dispatch(
      getReviewSave({
        ...data,
        boughtItems: Object.keys(boughtItems).filter((k) => boughtItems[k]),
        menuRating,
        foodRating,
        staffRating,
        serviceRating,
        image: imageBase64,
        imageName
      })
    );
  };

  // const formatDate = (d) =>
  //   d
  //     ? new Date(d).toLocaleDateString('en-US', {
  //         year: 'numeric',
  //         month: 'short',
  //         day: 'numeric'
  //       })
  //     : 'Recent';

  const progress = (activeStep / (STEPS.length - 1)) * 100;

  // ── STEP PANELS ────────────────────────────────────────────────────────────

  const panel0 = (
    <Grid container spacing={2.5}>
      <Grid item xs={12} sm={6}>
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
            noWhitespace: (v) => !isWhitespace(v) || t('review.noWhitespace')
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextInput
          control={control}
          errors={errors}
          name="lastName"
          type="text"
          textLable={t('review.lastName')}
          placeholderName={t('review.lastNamePlaceholder')}
          variant="outlined"
          requiredMsg={t('review.lastNameRequired')}
          validate={{
            noWhitespace: (v) => !isWhitespace(v) || t('review.noWhitespace')
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
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
      </Grid>
      <Grid item xs={12} sm={6}>
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
      </Grid>
    </Grid>
  );

  const panel1 = (
    <Box>
      <SelectInput
        control={control}
        errors={errors}
        name="branchName"
        textLable={t('review.whichBranch')}
        options={branches}
        requiredMsg={t('review.selectBranch')}
      />
      <Box mt={3}>
        <Typography
          sx={{
            fontWeight: 700,
            color: '#2b5876',
            mb: 1.5,
            fontSize: '0.95rem'
          }}
        >
          {t('review.whatDidYouBuy')}
        </Typography>
        <Box display="flex" gap={1.5} flexWrap="wrap">
          {Object.keys(boughtItems).map((item) => (
            <Chip
              key={item}
              label={item}
              clickable
              onClick={() =>
                setBoughtItems((p) => ({ ...p, [item]: !p[item] }))
              }
              sx={{
                fontWeight: 700,
                fontSize: '0.9rem',
                px: 1,
                py: 2.5,
                background: boughtItems[item]
                  ? 'linear-gradient(90deg,#ff416c,#ff4b2b)'
                  : '#f0f4f8',
                color: boughtItems[item] ? '#fff' : '#445',
                border: 'none',
                boxShadow: boughtItems[item]
                  ? '0 4px 12px rgba(255,75,43,0.3)'
                  : 'none',
                transition: 'all 0.25s',
                '&:hover': { opacity: 0.9 }
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );

  const ratingRows = [
    { label: `🍽️  ${t('review.menu')}`, val: menuRating, set: setMenuRating },
    { label: `😋  ${t('review.food')}`, val: foodRating, set: setFoodRating },
    {
      label: `👨‍🍳  ${t('review.staff')}`,
      val: staffRating,
      set: setStaffRating
    },
    {
      label: `🚀  ${t('review.service')}`,
      val: serviceRating,
      set: setServiceRating
    }
  ];

  const panel2 = (
    <Box>
      {ratingRows.map((r) => (
        <Box key={r.label} sx={styles.ratingBlock}>
          <Typography sx={styles.ratingLabel}>{r.label}</Typography>
          <Rating
            value={r.val}
            onChange={(_, v) => r.set(v)}
            size="large"
            sx={{ '& .MuiRating-iconFilled': { color: '#ff4b2b' } }}
          />
        </Box>
      ))}
    </Box>
  );

  const panel3 = (
    <Grid container spacing={2.5}>
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{
            textTransform: 'none',
            py: 1.8,
            borderRadius: '14px',
            borderColor: '#d0dae8',
            color: '#445',
            fontWeight: 600,
            fontSize: '0.95rem',
            gap: 1,
            '&:hover': {
              borderColor: '#ff4b2b',
              color: '#ff4b2b',
              background: 'rgba(255,75,43,0.04)'
            }
          }}
        >
          {imageName ? `📎 ${imageName}` : `📷 ${t('review.uploadPhoto')}`}
          <input
            type="file"
            hidden
            accept="image/jpeg,image/png,image/jpg"
            onChange={(e) => {
              const f = e.target.files[0];
              if (!f) return;
              if (!['image/jpeg', 'image/png', 'image/jpg'].includes(f.type)) {
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
                  r.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '')
                );
              r.readAsDataURL(f);
            }}
          />
        </Button>
      </Grid>
    </Grid>
  );

  const panels = [panel0, panel1, panel2, panel3];

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <Box sx={styles.page}>
      <Box sx={styles.blob1} /> <Box sx={styles.blob2} />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* ── Hero ── */}
        <Box
          textAlign="center"
          mb={7}
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

        <Grid container spacing={4} alignItems="flex-start">
          {/* ── LEFT: Stepper nav + Form ── */}
          <Grid item xs={12} md={12}>
            <Grid container spacing={3} alignItems="flex-start">
              {/* Vertical step nav — hidden on xs */}
              <Grid
                item
                xs={12}
                sm={3}
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                <Box sx={styles.stepperWrap}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      color: '#aab',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      mb: 2
                    }}
                  >
                    {t('review.steps')}
                  </Typography>
                  {STEPS.map((s, i) => (
                    <Box key={i}>
                      <Box
                        sx={styles.stepItem(i === activeStep, i < activeStep)}
                        onClick={() => i < activeStep && setActiveStep(i)}
                      >
                        <Box
                          sx={styles.stepCircle(
                            i === activeStep,
                            i < activeStep
                          )}
                        >
                          {i < activeStep ? '✓' : i + 1}
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '0.88rem',
                              color: '#0d1b2a',
                              lineHeight: 1.2
                            }}
                          >
                            {s.label}
                          </Typography>
                          <Typography
                            sx={{ fontSize: '0.72rem', color: '#99a' }}
                          >
                            {s.desc}
                          </Typography>
                        </Box>
                      </Box>
                      {i < STEPS.length - 1 && (
                        <Box sx={styles.stepConnector} />
                      )}
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* Form card */}
              <Grid item xs={12} sm={9}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Box sx={styles.formPanel}>
                    {/* Mobile stepper dots */}
                    <Box
                      sx={{
                        display: { xs: 'flex', sm: 'none' },
                        gap: 1,
                        mb: 2.5,
                        alignItems: 'center'
                      }}
                    >
                      {STEPS.map((_, i) => (
                        <Box
                          key={i}
                          sx={{
                            height: 6,
                            flex: i === activeStep ? 3 : 1,
                            borderRadius: 3,
                            background:
                              i <= activeStep
                                ? 'linear-gradient(90deg,#ff416c,#4e54c8)'
                                : '#e0e7ef',
                            transition: 'all 0.4s'
                          }}
                        />
                      ))}
                    </Box>

                    {/* Progress bar */}
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={styles.progressBar}
                    />

                    <Box sx={styles.stepBadge}>
                      {STEPS[activeStep].icon} {t('review.step')}{' '}
                      {activeStep + 1} {t('review.of')} {STEPS.length}
                    </Box>
                    <Typography sx={styles.stepTitle}>
                      {STEPS[activeStep].label}
                    </Typography>
                    <Typography
                      sx={{ color: '#778', fontSize: '0.9rem', mb: 3 }}
                    >
                      {STEPS[activeStep].desc}
                    </Typography>

                    <form>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeStep}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.3 }}
                        >
                          {panels[activeStep]}
                        </motion.div>
                      </AnimatePresence>

                      <Box sx={styles.navBtnRow}>
                        {activeStep > 0 && (
                          <Button onClick={handleBack} sx={styles.btnBack}>
                            ← {t('review.back')}
                          </Button>
                        )}
                        {activeStep < STEPS.length - 1 ? (
                          <Button onClick={handleNext} sx={styles.btnNext}>
                            {t('review.continue')} →
                          </Button>
                        ) : (
                          <Button
                            onClick={() => onSubmit(getValues())}
                            sx={styles.btnNext}
                          >
                            🎉 {t('review.submitReview')}
                          </Button>
                        )}
                      </Box>
                    </form>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>

          {/* ── RIGHT: Timeline reviews ── */}
          {/* <Grid item xs={12} md={5}>
            <Box data-aos="fade-left" data-aos-duration="800">
              <Box
                mb={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: '1.3rem',
                    color: '#0d1b2a',
                    fontFamily: '"DM Serif Display", Georgia, serif'
                  }}
                >
                  Recent Reviews
                </Typography>
                <Chip
                  label={`${reviews.length} Reviews`}
                  size="small"
                  sx={{
                    background: 'linear-gradient(90deg,#ff416c,#ff4b2b)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.75rem'
                  }}
                />
              </Box>

              <Box
                sx={{
                  maxHeight: '75vh',
                  overflowY: 'auto',
                  pr: 1,
                  '&::-webkit-scrollbar': { width: 4 },
                  '&::-webkit-scrollbar-track': { background: 'transparent' },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#d0dae8',
                    borderRadius: 4
                  }
                }}
              >
                <Box sx={styles.timelineWrap}>
                  {reviews.map((rv, i) => (
                    <motion.div
                      key={rv.id || i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.08 }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <Box sx={styles.timelineDot} />
                        <Box sx={styles.reviewCard}>
                          <Box display="flex" alignItems="center" mb={1.5}>
                            <Avatar sx={styles.avatar}>
                              {rv.firstName?.charAt(0)?.toUpperCase() || 'U'}
                            </Avatar>
                            <Box flex={1}>
                              <Typography
                                sx={{
                                  fontWeight: 800,
                                  fontSize: '1rem',
                                  color: '#0d1b2a'
                                }}
                              >
                                {rv.firstName} {rv.lastName || ''}
                              </Typography>
                              <Typography
                                sx={{ fontSize: '0.78rem', color: '#aab' }}
                              >
                                {rv.branchName || ''} ·{' '}
                                {formatDate(rv.createdAt)}
                              </Typography>
                            </Box>
                          </Box>

                          <Box display="flex" gap={2} mb={1.5} flexWrap="wrap">
                            {rv.foodRating > 0 && (
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '0.7rem',
                                    color: '#778',
                                    fontWeight: 600
                                  }}
                                >
                                  Food
                                </Typography>
                                <Rating
                                  value={rv.foodRating}
                                  readOnly
                                  size="small"
                                  sx={{
                                    '& .MuiRating-iconFilled': {
                                      color: '#ff4b2b'
                                    }
                                  }}
                                />
                              </Box>
                            )}
                            {rv.serviceRating > 0 && (
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: '0.7rem',
                                    color: '#778',
                                    fontWeight: 600
                                  }}
                                >
                                  Service
                                </Typography>
                                <Rating
                                  value={rv.serviceRating}
                                  readOnly
                                  size="small"
                                  sx={{
                                    '& .MuiRating-iconFilled': {
                                      color: '#4e54c8'
                                    }
                                  }}
                                />
                              </Box>
                            )}
                          </Box>

                          <Typography
                            sx={{
                              fontSize: '0.95rem',
                              color: '#445',
                              lineHeight: 1.7,
                              fontStyle: 'italic',
                              borderLeft: '3px solid #f0ddd9',
                              paddingLeft: '12px'
                            }}
                          >
                            {rv.feedbackMessage}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default ReviewSection;
