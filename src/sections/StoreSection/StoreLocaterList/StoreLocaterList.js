import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
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
// import './map.css';
import 'aos/dist/aos.css';
// import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreList } from '../../../redux/Reducer/Store/Store';

const StoreLocaterList = () => {
  const styles = getStyles();
  // const { t } = useTranslation();
  const dispatch = useDispatch();
  const [storeList, setStoreList] = useState([]);
  const storeData = useSelector((state) => state?.store ?? null);
  const storeListResponse = storeData?.storeList ?? null;
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
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
      if (storeListResponse?.stores) {
        setStoreList(storeListResponse?.stores || []);
      }
    } else {
      setStoreList([]);
    }
  }, [storeListResponse]);

  const handleReDirectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  //   const groupedStores = storeList.reduce((acc, store) => {
  //     const key =
  //       store.mainArea === 'Nelson Manickam Road'
  //         ? store.subArea
  //         : store.mainArea;
  //     if (!acc[key]) {
  //       acc[key] = [];
  //     }
  //     acc[key].push(store);
  //     return acc;
  //   }, {});

  return (
    <Container maxWidth="xl">
      <div className="store-locator-list">
        <Box sx={styles.storeList}>
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
                storeList.length > 0
                  ? `${storeList.length} store${storeList.length > 1 ? 's' : ''} found`
                  : 'No stores found'
              }
              sx={styles.storeCount}
            />
          </Box>
          {storeList.length !== 0 ? (
            <Grid container spacing={3}>
              {storeList.map((store) => (
                <Grid item key={store.id} xs={12} sm={6} md={4}>
                  <Card
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
                      </Box>
                      <Box sx={styles.storeActions}>
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
                </Grid>
              ))}
            </Grid>
          ) : (
            <Card
              sx={styles.storeCard}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={styles.storeName}>
                  Coming Soon!
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      </div>
    </Container>
  );
};

export default StoreLocaterList;
