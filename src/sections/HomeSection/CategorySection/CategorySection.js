import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
  Container
} from '@mui/material';
import {
  Grain as WheatIcon,
  Restaurant as ChefHatIcon,
  LocalCafe as CoffeeIcon,
  CardGiftcard as GiftIcon,
  Category as PackageIcon
} from '@mui/icons-material';
import PetsIcon from '@mui/icons-material/Pets';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { getStyles } from './styles';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreList } from '../../../redux/Reducer/Store/Store';

const MotionBox = motion(Box);

const CategorySection = () => {
  const styles = getStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [store, setStore] = useState([]);
  const storeData = useSelector((state) => state?.store ?? null);
  const storeListResponse = storeData?.storeList ?? null;

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

  const categories = [
    {
      icon: WheatIcon,
      title: 'Packaged food',
      subtitle: 'Baking needs, Jams & Honey',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      clickCategory: '/categories'
    },
    {
      icon: ChefHatIcon,
      title: 'Snacking & Sweets',
      subtitle: 'Biscuits, Chips & Nachos',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      clickCategory: '/categories'
    },
    {
      icon: GiftIcon,
      title: 'Daily essentials',
      subtitle: 'Dry fruits & Nuts, Sugar',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      clickCategory: '/categories'
    },
    {
      icon: CoffeeIcon,
      title: 'Dairy',
      subtitle: 'Milk, Curd, Paneer',
      gradient: 'linear-gradient(135deg, #d97706 0%, #2563eb 100%)',
      clickCategory: '/categories'
    },
    {
      icon: ImportContactsIcon,
      title: 'Stationery',
      subtitle: 'School supplies',
      gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      clickCategory: '/categories'
    },
    {
      icon: ChildCareIcon,
      title: 'Baby care',
      subtitle: 'Baby accessories',
      gradient: 'linear-gradient(135deg, #1d4ed8 0%, #10b981 100%)',
      clickCategory: '/categories'
    },
    {
      icon: PetsIcon,
      title: 'Pet Care',
      subtitle: 'Pet accessories',
      gradient: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
      clickCategory: '/categories'
    },
    {
      icon: PackageIcon,
      title: 'More Categories',
      subtitle: 'Explore all items',
      gradient: 'linear-gradient(135deg, #4b5563 0%, #2563eb 100%)',
      clickCategory: '/categories'
    }
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  // Parallax effects
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ['0%', '8%'] : ['0%', '50%']
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, isMobile ? 0.9 : 0.2]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isMobile ? 0.98 : 0.95]
  );

  const handleCategoryClick = (link) => {
    navigate(link);
  };

  const handleCategory = () => {
    navigate('/categories');
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          ...styles.sectionContainer,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            sx={styles.headerContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Typography variant="h2" sx={styles.title}>
              {t('shop.title')}
            </Typography>
            <Typography sx={styles.subtitle}>{t('shop.subtitle')}</Typography>
          </MotionBox>
          <MotionBox
            style={{
              y,
              opacity,
              scale
            }}
            ref={ref}
          >
            <Grid
              container
              spacing={{ xs: 2, sm: 3, md: 4 }}
              sx={styles.gridContainer}
            >
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10
                      }}
                    >
                      <Card
                        sx={styles.categoryCard}
                        onClick={() =>
                          handleCategoryClick(category.clickCategory)
                        }
                      >
                        <CardContent sx={{ textAlign: 'center' }}>
                          <Box
                            sx={{
                              ...styles.iconContainer,
                              background: category.gradient
                            }}
                          >
                            <IconComponent
                              sx={{ color: 'white', fontSize: '2rem' }}
                            />
                          </Box>
                          <Typography variant="h3" sx={styles.categoryTitle}>
                            {category.title}
                          </Typography>
                          <Typography sx={styles.categorySubtitle}>
                            {category.subtitle}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </MotionBox>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              sx={styles.viewAllButton}
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategory()}
            >
              View All Categories
            </Button>
          </Box>
        </Container>
      </Box>
      <Box sx={styles.impactSection}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={styles.sectionTitle}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t('community.head')}
          </Typography>
          <Typography
            variant="body1"
            sx={styles.sectionSubtitle}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t('community.subHead')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box
                sx={styles.impactStat}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Typography
                  variant="h4"
                  sx={{ ...styles.impactNumber, color: 'primary.main' }}
                >
                  5000+
                </Typography>
                <Typography variant="h6" sx={styles.impactTitle}>
                  SKUs
                </Typography>
                <Typography variant="body2" sx={styles.impactDescription}>
                  {t('community.subTitle1')}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={styles.impactStat}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Typography
                  variant="h4"
                  sx={{ ...styles.impactNumber, color: '#dbaa39' }}
                >
                  16+
                </Typography>
                <Typography variant="h6" sx={styles.impactTitle}>
                  Categories
                </Typography>
                <Typography variant="body2" sx={styles.impactDescription}>
                  {t('community.subTitle2')}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={styles.impactStat}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Typography
                  variant="h4"
                  sx={{ ...styles.impactNumber, color: '#f39b2ade' }}
                >
                  {store ?? 0}
                </Typography>
                <Typography variant="h6" sx={styles.impactTitle}>
                  Store Locations
                </Typography>
                <Typography variant="body2" sx={styles.impactDescription}>
                  {t('community.subTitle3')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CategorySection;
