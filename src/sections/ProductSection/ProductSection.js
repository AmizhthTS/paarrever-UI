import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  useTheme,
  useMediaQuery,
  Stack,
  Pagination,
  Autocomplete
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon
  // ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import getStyles from './styles';
import 'aos/dist/aos.css';
import Aos from 'aos';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence
} from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryDropdownList,
  getCategoryList,
  getSubCategoryList
} from '../../redux/Reducer/Category/Category';
import { newMainLogo } from '../../assets';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionGrid = motion(Grid);
const ProductSection = () => {
  const styles = getStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryDropdownList, setCategoryDropdownList] = useState([]);
  const [filterId, setFilterId] = useState('');
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filterVal, setFilterVal] = useState('');
  const categoryData = useSelector((state) => state?.category ?? null);
  const categoryListResponse = categoryData?.categoryList ?? null;
  const subCategoryListResponse = categoryData?.subCategoryList ?? null;
  const categoryDropdownListResponse =
    categoryData?.categoryDropdownList ?? null;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    listApi();
    sublistApi();
    dropDownListApi();
  }, [searchInputValue, page, filterVal, filterId]);

  const listApi = () => {
    setCategoryList([]);
    let req = {
      listSize: 1000,
      pageNumber: page,
      searchString: searchInputValue,
      categoryId: filterId
    };
    dispatch(getCategoryList(req));
  };

  const dropDownListApi = () => {
    setCategoryDropdownList([]);
    let req = {};
    dispatch(getCategoryDropdownList(req));
  };

  const sublistApi = () => {
    setSubCategoryList([]);
    let req = {
      listSize: 1000,
      pageNumber: 1,
      searchString: ''
    };
    dispatch(getSubCategoryList(req));
  };

  useEffect(() => {
    if (categoryListResponse) {
      if (categoryListResponse?.response?.responseStatus === 'Success') {
        setTotalPage(categoryListResponse.totalPages);
        setCategoryList(categoryListResponse?.categories);
      }
    }
  }, [categoryListResponse]);

  useEffect(() => {
    if (categoryDropdownListResponse) {
      if (
        categoryDropdownListResponse?.response?.responseStatus === 'Success'
      ) {
        setCategoryDropdownList(categoryDropdownListResponse?.categories);
      }
    }
  }, [categoryDropdownListResponse]);

  useEffect(() => {
    if (subCategoryListResponse) {
      if (subCategoryListResponse?.response?.responseStatus === 'Success') {
        setSubCategoryList(subCategoryListResponse?.subcategories);
      }
    }
  }, [subCategoryListResponse]);

  const handleSearch = (value) => {
    if (value.length > 0) {
      setSearchInputValue(value);
    } else {
      setSearchInputValue('');
    }
    setPage(1);
  };

  const handleCategory = (value) => {
    if (value !== null) {
      const selectedVal = categoryDropdownList.find(
        (option) => option.categoryName === value
      );
      setFilterVal(value);
      setFilterId(selectedVal.id);
      setPage(1);
    } else {
      setFilterVal('');
      setFilterId('');
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box sx={styles.pageContainer}>
      <Box sx={styles.heroSection} ref={ref}>
        <Container maxWidth="lg">
          <MotionBox sx={styles.content} style={{ y: textY }}>
            <Box sx={styles.heroContent}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography variant="h1" sx={styles.heroTitle}>
                  {t('category.title')}
                </Typography>
                <Typography
                  sx={styles.heroSubtitle}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {t('category.subtitle')}
                </Typography>
              </motion.div>
            </Box>
          </MotionBox>
        </Container>
      </Box>
      <Box sx={styles.filtersSection}>
        <Container maxWidth="lg">
          <Box sx={styles.filtersContainer}>
            <Box sx={styles.searchContainer}>
              <TextField
                placeholder="Search by Category"
                type="search"
                onChange={(e) => handleSearch(e.target.value)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={styles.searchIcon} />
                    </InputAdornment>
                  ),
                  sx: styles.searchInput
                }}
              />
            </Box>
            <Box sx={styles.filterContainer}>
              <FilterIcon sx={{ color: 'text.secondary' }} />
              <Autocomplete
                id="combo-box-demo"
                options={categoryDropdownList.map(
                  (option) => option.categoryName
                )}
                value={filterVal}
                onChange={(e, selectedOption) => {
                  handleCategory(selectedOption);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Shop by Category"
                    inputProps={{ ...params.inputProps, readOnly: true }}
                    sx={{ width: '300px' }}
                  />
                )}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={styles.productsGrid}>
        <Container maxWidth="xl">
          {categoryList && categoryList.length > 0 ? (
            <>
              <Grid container spacing={2} columns={5} sx={styles.gridContainer}>
                {categoryList &&
                  categoryList.map((product, index) => (
                    <MotionGrid
                      item
                      xs={12}
                      sm={12}
                      md={1}
                      lg={1}
                      key={index}
                      onHoverStart={() =>
                        !isMobile && setHoveredCard(product.id)
                      }
                      onHoverEnd={() => !isMobile && setHoveredCard(null)}
                      onClick={() =>
                        isMobile &&
                        setHoveredCard(
                          hoveredCard === product.id ? null : product.id
                        )
                      }
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <MotionCard
                        sx={styles.productCard}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        whileHover={
                          !isMobile
                            ? {
                                boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
                                scale: 1.02
                              }
                            : {}
                        }
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 10
                        }}
                      >
                        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                          <MotionBox
                            initial={{ filter: 'blur(0px)' }}
                            animate={{
                              filter:
                                hoveredCard === product.id
                                  ? 'blur(4px)'
                                  : 'blur(0px)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <CardMedia
                              component="img"
                              image={product.imageName}
                              alt={product.name}
                              sx={styles.productImage}
                            />
                          </MotionBox>
                          <AnimatePresence>
                            {hoveredCard === product.id && (
                              <MotionBox
                                initial={{ opacity: 0, y: '100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: '100%' }}
                                transition={{ duration: 0.3 }}
                                sx={{
                                  position: 'absolute',
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  background:
                                    'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                  color: 'white',
                                  p: 2,
                                  pt: 4
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  sx={{ mb: 1, fontWeight: 600 }}
                                >
                                  Available Products:
                                </Typography>
                                <Box
                                  sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1
                                  }}
                                >
                                  {subCategoryList.filter(
                                    (item) => item.categoryId === product.id
                                  ).length > 0 ? (
                                    subCategoryList
                                      .filter(
                                        (item) => item.categoryId === product.id
                                      )
                                      .map((item, i) => (
                                        <Chip
                                          key={i}
                                          label={item.subCategoryName}
                                          size="small"
                                          sx={{
                                            color: 'white',
                                            backgroundColor:
                                              'rgba(255,255,255,0.2)',
                                            backdropFilter: 'blur(5px)',
                                            border:
                                              '1px solid rgba(255,255,255,0.3)'
                                          }}
                                        />
                                      ))
                                  ) : (
                                    <Typography
                                      variant="body2"
                                      sx={{ opacity: 0.8 }}
                                    >
                                      No subcategories available
                                    </Typography>
                                  )}
                                </Box>
                              </MotionBox>
                            )}
                          </AnimatePresence>
                        </Box>
                        <CardContent sx={styles.productContent}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              mb: 2
                            }}
                          >
                            <Typography variant="h3" sx={styles.productTitle}>
                              {product.categoryName}
                            </Typography>
                          </Box>
                          <Typography sx={styles.productDescription}>
                            {product.description}
                          </Typography>
                          <Box sx={styles.productFooter}>
                            <Chip
                              label={product.categoryName}
                              variant="outlined"
                              size="small"
                              sx={styles.productCategory}
                            />
                            {/* <Button
                          variant="contained"
                          size="small"
                          sx={styles.primaryButton}
                          onClick={() => handleViewDetails(product.id)}
                        >
                          View Details
                        </Button> */}
                          </Box>
                        </CardContent>
                      </MotionCard>
                    </MotionGrid>
                  ))}
                {totalPage > 1 && (
                  <Grid item sm={12} md={12} lg={12}>
                    <Grid className="event-pagination">
                      <Stack spacing={2}>
                        <Pagination
                          count={totalPage}
                          page={page}
                          onChange={handleChange}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </>
          ) : (
            <>
              <Box sx={styles.nodatacss_admin}>
                <Typography variant="h5" style={{ marginBottom: '40px' }}>
                  No Records found
                </Typography>
                <Box>
                  <img
                    src={newMainLogo}
                    alt="blue horizontal.png"
                    style={styles.logo_dash}
                  />
                </Box>
              </Box>
            </>
          )}
        </Container>
      </Box>
      <Box sx={styles.storeNoticeSection}>
        <Container maxWidth="lg">
          <Box
            sx={styles.noticeCard}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Typography variant="h3" sx={styles.noticeTitle}>
              {t('category.available')}
            </Typography>
            <Typography sx={styles.noticeText}>
              {t('category.subavailable')}
            </Typography>
            {/* <Box sx={styles.noticeButtons}>
              <Button
                variant="contained"
                size="large"
                sx={styles.primaryButton}
              >
                Find Store
              </Button>
              <Button variant="outlined" size="large">
                Call Store
              </Button>
            </Box> */}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductSection;
