import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  styled,
  Tooltip,
  tooltipClasses,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  AccessTime as AccessTimeIcon,
  Directions as DirectionsIcon,
  Store as StoreIcon
} from '@mui/icons-material';
import getStyles from './styles';
import Aos from 'aos';
import './map.css';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { DistrictData } from './DistrictData';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreList } from '../../../redux/Reducer/Store/Store';
const DarkTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black
  }
}));
const StoreNearby = () => {
  const styles = getStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [district, setDistrict] = useState({});
  const [storeList, setStoreList] = useState([]);
  const storeData = useSelector((state) => state?.store ?? null);
  const storeListResponse = storeData?.storeList ?? null;

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  useEffect(() => {
    handleMap('Aminjikarai');
  }, []);

  let districtList = DistrictData;
  const handleMap = (districtName) => {
    const selected = districtList.find(
      (element) => element.title === districtName
    );
    if (selected) {
      setDistrict(selected);
    }
  };
  //  const handleMap = (value) => {
  //     districtList.forEach((element) => {
  //       if (element.name === value) {
  //         setDistrict(element);
  //       }
  //     });
  //   };
  useEffect(() => {
    listApi();
  }, []);

  const listApi = () => {
    setStoreList([]);
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
        setStoreList(storeListResponse?.stores);
      }
    }
  }, [storeListResponse]);

  const matchingStores =
    storeList?.filter(
      (store) => store.mainArea.toLowerCase() === district.title?.toLowerCase()
    ) || [];

  const hasStores = (districtName) => {
    if (storeList) {
      return storeList.some(
        (store) => store.mainArea?.toLowerCase() === districtName?.toLowerCase()
      );
    }
  };

  const handleReDirectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Container maxWidth="xl" sx={styles.contentContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid className="map_div">
              <Grid className="map_section_dev">
                {districtList.map((districtItem) => (
                  <Grid key={districtItem.id}>
                    <Grid
                      className={`hover-switch ${
                        districtItem.title === district.title ? 'actMap' : ''
                      } ${!hasStores(districtItem.title) ? 'no-hover' : ''}`}
                    >
                      {hasStores(districtItem.title) ? (
                        <img
                          src={districtItem.blueImage}
                          className={districtItem.styleBlue}
                          alt=""
                        />
                      ) : (
                        <img
                          src={districtItem.greyImage}
                          className={districtItem.styleBlue}
                          alt=""
                          style={{ opacity: 0.6 }}
                        />
                      )}
                      <DarkTooltip
                        title={t(districtItem.name)}
                        arrow
                        placement="top"
                        disableHoverListener={!hasStores(districtItem.title)}
                        disableFocusListener={!hasStores(districtItem.title)}
                        disableTouchListener={!hasStores(districtItem.title)}
                      >
                        <img
                          src={districtItem.yellowImage}
                          className={`${districtItem.styleYellow} ${
                            !hasStores(districtItem.title) ? 'disabled-map' : ''
                          }`}
                          alt=""
                          onClick={() => {
                            if (hasStores(districtItem.title)) {
                              handleMap(districtItem.title);
                            }
                          }}
                          style={{
                            cursor: hasStores(districtItem.title)
                              ? 'pointer'
                              : 'not-allowed',
                            pointerEvents: hasStores(districtItem.title)
                              ? 'auto'
                              : 'none'
                          }}
                        />
                      </DarkTooltip>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} sx={styles.storeList}>
            <Box
              sx={styles.storeHeader}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Typography variant="h4" sx={styles.storeTitle}>
                Nearby Stores
              </Typography>
              <Chip
                label={
                  matchingStores.length > 0
                    ? `${matchingStores.length} store${matchingStores.length > 1 ? 's' : ''} found`
                    : 'No stores found'
                }
                sx={styles.storeCount}
              />
            </Box>
            {matchingStores.length != 0 ? (
              <>
                {matchingStores.map((store) => (
                  <Card
                    key={store.id}
                    sx={styles.storeCard}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <CardContent>
                      <Box sx={styles.storeTitleContent}>
                        <Box>
                          <Typography variant="h6" sx={styles.storeName}>
                            {store.storeName}
                          </Typography>
                        </Box>
                        <Button
                          startIcon={<DirectionsIcon />}
                          variant="contained"
                          sx={styles.storeDirect}
                          onClick={() => handleReDirectClick(store.mapLink)}
                        >
                          Directions
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2
                        }}
                      >
                        <Box sx={styles.storeDetail}>
                          <LocationOnIcon fontSize="small" color="action" />
                          <Typography variant="body2">
                            {store.address}
                          </Typography>
                        </Box>
                        <Box sx={styles.storeDetail}>
                          <PhoneIcon fontSize="small" color="action" />
                          <Typography variant="body2">
                            {store.contactNumber}
                          </Typography>
                        </Box>
                        <Box sx={styles.storeDetail}>
                          <AccessTimeIcon fontSize="small" color="action" />
                          <Typography variant="body2">{store.time}</Typography>
                        </Box>
                        {/* <Box sx={styles.storeFeatureContainer}>
                          {store.features.map((feature, index) => (
                            <Chip
                              key={index}
                              label={feature}
                              sx={styles.storeFeatureBadge}
                            />
                          ))}
                        </Box> */}
                      </Box>
                      <Box sx={styles.storeActions}>
                        {/* <Button
                          sx={styles.storeCall}
                          fullWidth
                          startIcon={<PhoneIcon />}
                        >
                          Call
                        </Button> */}
                        <Button
                          sx={styles.storeDirect}
                          fullWidth
                          startIcon={<StoreIcon />}
                          variant="contained"
                          onClick={() => handleReDirectClick(store.mapLink)}
                        >
                          Visit Store
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </>
            ) : (
              <>
                <Card
                  sx={styles.storeCard}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={styles.storeName}>
                      {district.title
                        ? `Stores in ${district.title}`
                        : 'No District Selected'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mt={2}>
                      Coming Soon!
                    </Typography>
                  </CardContent>
                </Card>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default StoreNearby;
