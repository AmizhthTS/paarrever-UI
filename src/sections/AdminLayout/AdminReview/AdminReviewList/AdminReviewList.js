import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  // DialogContentText,
  DialogTitle,
  Grid,
  // InputBase,
  IconButton,
  Paper,
  // styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
  Rating,
  CardMedia,
  Autocomplete,
  TextField,
  Backdrop
} from '@mui/material';
import React, { useEffect, useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import getStyles from './styles';
import { newMainLogo } from '../../../../assets';
import { useNavigate } from 'react-router-dom';
import { getReviewList } from '../../../../redux/Reducer/Review/Review';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getStoreList } from '../../../../redux/Reducer/Store/Store';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: '24px',
//   backgroundColor: 'rgb(255 255 255)',
//   border: '1px solid #00000017',
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto'
//   }
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: '#d9d9d9'
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   width: '100%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '19ch',
//       '&:focus': {
//         width: '20ch'
//       }
//     }
//   }
// }));

const AdminReviewList = () => {
  const styles = getStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  // const [searchInputValue, setSearchInputValue] = useState('');
  const [reviewList, setReviewList] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount] = useState(0);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedStore, setSelectedStore] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const reviewData = useSelector((state) => state?.review ?? null);
  const reviewListResponse = reviewData?.reviewList ?? null;

  const storeData = useSelector((state) => state?.store ?? null);
  const storeDropdownListResponse = storeData?.storeList ?? null;
  const storeDropDownListApi = () => {
    setStoreDropdownList([]);
    let req = {
      listSize: 1000,
      pageNumber: 1,
      searchString: ''
    };
    dispatch(getStoreList(req));
  };
  const [storeDropdownList, setStoreDropdownList] = useState([]);
  useEffect(() => {
    if (storeDropdownListResponse?.stores) {
      setStoreDropdownList(storeDropdownListResponse?.stores);
    }
  }, [storeDropdownListResponse]);

  useEffect(() => {
    if (!localStorage.getItem('jwttoken')) {
      navigate('/admin-login');
    } else {
      storeDropDownListApi();
    }
  }, []);

  useEffect(() => {
    listApi();
  }, [page, rowsPerPage, selectedStore]);

  const listApi = () => {
    setReviewList([]);
    let req = {
      listSize: rowsPerPage,
      pageNumber: page + 1
      // searchString: searchInputValue
    };
    if (selectedStore) req.branchName = selectedStore;
    dispatch(getReviewList(req));
  };
  const handleStoreDropdown = (event, value) => {
    if (value !== null) {
      setSelectedStore(value);
    } else {
      setSelectedStore('');
    }
    setPage(0);
  };
  useEffect(() => {
    if (reviewListResponse) {
      setCount(reviewListResponse.count || 0);
      setReviewList(reviewListResponse?.feedbacks || []);
    }
  }, [reviewListResponse]);

  const handleViewDetails = (val) => {
    var value = reviewList.find((list) => list.id === val);
    setSelected(value);
    setOpenViewModal(true);
  };

  const handleViewClose = () => {
    setOpenViewModal(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleSearch = (value) => {
  //   setSearchInputValue(value);
  //   setPage(0);
  // };

  return (
    <Box sx={styles.adminCategoryPage}>
      <Box sx={styles.secClrk}>
        <Box>
          <Typography variant="h6" sx={styles.categoryTitle}>
            Reviews & Feedback
          </Typography>
        </Box>
        <Box sx={styles.secFiltersk}>
          {/* <Box sx={styles.searchDiv}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={'Search Reviews'}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => handleSearch(e.target.value)}
                type="search"
              />
            </Search>
          </Box> */}
          {/* drop down based on store*/}

          {/* store dropdown */}
          {storeDropdownList && storeDropdownList.length > 0 ? (
            <Box sx={{ width: '200px' }}>
              <Autocomplete
                size="small"
                options={storeDropdownList.map((opt) => opt.storeName)}
                getOptionLabel={(option) => option}
                value={selectedStore}
                onChange={(e, value) => handleStoreDropdown(e, value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="All Stores"
                    InputProps={{
                      ...params.InputProps,
                      sx: {
                        padding: '5px 5px 5px 15px'
                        // color: theme.palette.text.secondary
                      }
                    }}
                    fullWidth
                    sx={styles.filterInput}
                  />
                )}
              />
            </Box>
          ) : null}
        </Box>
      </Box>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        spacing={4}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box sx={styles.eventDatasList}>
            {reviewList && reviewList.length > 0 ? (
              <>
                <TableContainer component={Paper}>
                  <Table
                    sx={{
                      borderCollapse: 'separate',
                      borderSpacing: '0 10px'
                    }}
                  >
                    <TableHead>
                      <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          #
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          Name
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          Email
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          Branch
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          Feedback
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {reviewList.map((list, index) => (
                        <TableRow
                          key={list.id}
                          sx={{
                            backgroundColor: '#ffffff',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                            '&:not(:last-of-type)': {
                              marginBottom: '10px'
                            }
                          }}
                        >
                          <TableCell align="center" sx={{ padding: '12px' }}>
                            {page * rowsPerPage + index + 1}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: '12px' }}>
                            {list.firstName || ''} {list.lastName || ''}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: '12px' }}>
                            {list.email || '-'}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: '12px' }}>
                            {list.branchName || '-'}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: '12px' }}>
                            {list.feedbackMessage ? (
                              list.feedbackMessage.length > 50 ? (
                                <>{list.feedbackMessage.slice(0, 50)}...</>
                              ) : (
                                <>{list.feedbackMessage}</>
                              )
                            ) : (
                              <>-</>
                            )}
                          </TableCell>
                          <TableCell align="center" sx={{ padding: '12px' }}>
                            <Box>
                              <Typography sx={styles.list2Ran}>
                                <Tooltip title="View Details" arrow>
                                  <VisibilityIcon
                                    onClick={() => handleViewDetails(list.id)}
                                    sx={{
                                      cursor: 'pointer',
                                      color: '#00023A'
                                    }}
                                  />
                                </Tooltip>
                              </Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <TablePagination
                    component="div"
                    count={count}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    style={{ float: 'right', margin: '0px' }}
                  />
                </TableContainer>
              </>
            ) : (
              <Box sx={styles.nodatacss_admin}>
                <Typography variant="h5" style={{ marginBottom: '40px' }}>
                  No Reviews found
                </Typography>
                <Box>
                  <img src={newMainLogo} alt="logo" style={styles.logo_dash} />
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
      <Dialog open={openViewModal} fullWidth={true} maxWidth="md">
        <DialogTitle>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: '25px',
              textAlign: 'center',
              marginBottom: '10px'
            }}
          >
            Review Details
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: 'bold' }}>Name:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>
                {selected?.firstName || ''} {selected?.lastName || ''}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: 'bold' }}>Email:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{selected?.email || '-'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: 'bold' }}>Phone:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{selected?.phoneNumber || '-'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: 'bold' }}>Branch:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{selected?.branchName || '-'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: 'bold' }}>Bought Items:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>
                {selected?.boughtItems && selected.boughtItems.length > 0
                  ? selected.boughtItems.join(', ')
                  : '-'}
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 'bold', mb: 1 }}>
                Ratings:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} display="flex" justifyContent="space-between">
                  <Typography>Menu:</Typography>
                  <Rating
                    value={selected?.menuRating || 0}
                    readOnly
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="space-between">
                  <Typography>Food:</Typography>
                  <Rating
                    value={selected?.foodRating || 0}
                    readOnly
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="space-between">
                  <Typography>Staff:</Typography>
                  <Rating
                    value={selected?.staffRating || 0}
                    readOnly
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="space-between">
                  <Typography>Service:</Typography>
                  <Rating
                    value={selected?.serviceRating || 0}
                    readOnly
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{ fontWeight: 'bold', mt: 1 }}>
                Feedback:
              </Typography>
              <Typography
                sx={{ mt: 1, p: 2, bgcolor: '#f9f9f9', borderRadius: '8px' }}
              >
                {selected?.feedbackMessage || 'No feedback provided.'}
              </Typography>
            </Grid>
            {selected?.imageName && (
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 'bold', mt: 1 }}>
                  Image:
                </Typography>
                <CardMedia
                  component="img"
                  image={selected?.imageName}
                  alt={selected?.imageName}
                  onClick={() => setLightboxOpen(true)}
                  sx={{
                    height: '300px',
                    width: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    mt: 1,
                    cursor: 'zoom-in',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.01)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.18)'
                    }
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    color: '#999',
                    mt: 0.5,
                    textAlign: 'center'
                  }}
                >
                  Click image to view full screen
                </Typography>
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions sx={styles.dialogActions}>
          <Button sx={styles.discardBtn} onClick={handleViewClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── Fullscreen Lightbox ── */}
      <Backdrop
        open={lightboxOpen}
        onClick={() => setLightboxOpen(false)}
        sx={{
          zIndex: 9999,
          backgroundColor: 'rgba(0,0,0,0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          cursor: 'zoom-out'
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={() => setLightboxOpen(false)}
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            color: '#fff',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            width: 44,
            height: 44,
            fontSize: '1.3rem',
            '&:hover': {
              background: 'rgba(255,75,43,0.7)'
            }
          }}
        >
          ✕
        </IconButton>

        {/* Image */}
        <Box
          component="img"
          src={selected?.imageName}
          alt="Review fullscreen"
          onClick={(e) => e.stopPropagation()}
          sx={{
            maxWidth: '92vw',
            maxHeight: '88vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
            cursor: 'default'
          }}
        />

        {/* Hint */}
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.78rem',
            mt: 2,
            letterSpacing: '0.06em'
          }}
        >
          Click anywhere outside to close
        </Typography>
      </Backdrop>
    </Box>
  );
};

export default AdminReviewList;
