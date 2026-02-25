import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputBase,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSubCategoryList,
  getSubCategoryRemove
} from '../../../../redux/Reducer/Category/Category';
import getStyles from './styles';
import { attentionImg, newMainLogo } from '../../../../assets';
import { useNavigate } from 'react-router-dom';
import AdminSubCategoryAdd from '../AdminSubCategoryAdd';
import { setNotification } from '../../../../redux/Reducer/Notification/Notification';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '24px',
  backgroundColor: 'rgb(255 255 255)',
  border: '1px solid #00000017',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#d9d9d9'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '19ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

const AdminSubCategoryList = () => {
  const styles = getStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openSubCategoryModal, setOpenSubCategoryModal] = useState(false);
  const [subcategoryId, setSubCategoryId] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount] = useState(0);
  const [actions, setActions] = useState('');
  const categoryData = useSelector((state) => state?.category ?? null);
  const subCategoryListResponse = categoryData?.subCategoryList ?? null;
  const subCategoryRemoveResponse = categoryData?.subCategoryRemove ?? null;

  useEffect(() => {
    if (!localStorage.getItem('jwttoken')) {
      navigate('/admin-login');
    }
  }, []);

  useEffect(() => {
    listApi();
  }, [searchInputValue, page, rowsPerPage]);

  const listApi = () => {
    setSubCategoryList([]);
    let req = {
      listSize: rowsPerPage,
      pageNumber: page + 1,
      searchString: searchInputValue
    };
    dispatch(getSubCategoryList(req));
  };

  const handleDeleteSubCategoryDetails = () => {
    dispatch(getSubCategoryRemove(subcategoryId));
  };

  useEffect(() => {
    if (subCategoryListResponse) {
      if (subCategoryListResponse?.response?.responseStatus === 'Success') {
        setCount(subCategoryListResponse.count);
        setSubCategoryList(subCategoryListResponse?.subcategories);
      }
    }
  }, [subCategoryListResponse]);

  useEffect(() => {
    if (subCategoryRemoveResponse) {
      if (subCategoryRemoveResponse?.responseStatus === 'Success') {
        handleCloseModal();
        listApi();
        dispatch(
          setNotification({
            isActive: true,
            messageId: 111
          })
        );
      }
    }
    dispatch(getSubCategoryRemove({ clearData: true }));
  }, [subCategoryRemoveResponse]);

  const handleEditSubCategoryDetails = (val, id) => {
    setOpenSubCategoryModal(true);
    setActions(val);
    if (val === 'update') {
      setSubCategoryId(id);
    }
  };
  const handleOpenModal = (id) => {
    setOpenModal(true);
    setSubCategoryId(id);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (value) => {
    if (value.length > 0) {
      setSearchInputValue(value);
    } else {
      setSearchInputValue('');
    }
    setPage(0);
  };

  return (
    <Box sx={styles.adminCategoryPage}>
      <Box sx={styles.secClrk}>
        <Box>
          <Typography variant="h6" sx={styles.categoryTitle}>
            Subcategory
          </Typography>
        </Box>
        <Box sx={styles.secFiltersk}>
          <Box sx={styles.searchDiv}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={'Search Subcategory'}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => handleSearch(e.target.value)}
                type="search"
              />
            </Search>
          </Box>
          <Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={styles.categoryBtn}
              onClick={() => handleEditSubCategoryDetails('add')}
            >
              Add Subcategory
            </Button>
          </Box>
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
            {subCategoryList && subCategoryList.length > 0 ? (
              <>
                <TableContainer component={Paper}>
                  <Table
                    sx={{
                      borderCollapse: 'collapse',
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
                          Description
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {subCategoryList &&
                        subCategoryList.map((list, index) => (
                          <>
                            <TableRow
                              key={list.id}
                              sx={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                '&:not(:last-of-type)': {
                                  marginBottom: '10px'
                                }
                              }}
                            >
                              <TableCell
                                align="center"
                                sx={{ padding: '12px' }}
                              >
                                {page * rowsPerPage + index + 1}
                              </TableCell>
                              <TableCell
                                align="center"
                                sx={{ padding: '12px' }}
                              >
                                {list.subCategoryName ? (
                                  list.subCategoryName.length > 100 ? (
                                    <>{list.subCategoryName.slice(0, 80)}...</>
                                  ) : (
                                    <>{list.subCategoryName}</>
                                  )
                                ) : (
                                  <>-</>
                                )}
                              </TableCell>
                              <TableCell
                                align="center"
                                sx={{ padding: '12px' }}
                              >
                                {list.description ? (
                                  list.description.length > 100 ? (
                                    <>{list.description.slice(0, 80)}...</>
                                  ) : (
                                    <>{list.description}</>
                                  )
                                ) : (
                                  <>-</>
                                )}
                              </TableCell>
                              <TableCell align="center">
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}
                                >
                                  <Typography sx={styles.list2Ran}>
                                    <Tooltip title="Edit" arrow>
                                      <EditIcon
                                        onClick={() =>
                                          handleEditSubCategoryDetails(
                                            'update',
                                            list.id
                                          )
                                        }
                                      />
                                    </Tooltip>
                                  </Typography>
                                  <Tooltip title="Delete" arrow>
                                    <DeleteIcon
                                      onClick={() => handleOpenModal(list.id)}
                                      sx={{
                                        color: 'red',
                                        cursor: 'pointer',
                                        ml: 2
                                      }}
                                    />
                                  </Tooltip>
                                </Box>
                              </TableCell>
                            </TableRow>
                          </>
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
                    sx={{ margin: 0 }}
                  />
                </TableContainer>
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
          </Box>
        </Grid>
      </Grid>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth={'sm'}
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <center>
            <img src={attentionImg} alt="" style={styles.alertimage} />
          </center>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              Are you sure ?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={styles.dialogActions}>
          <Button sx={styles.removeApiModalCancel} onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            sx={styles.removeApiModalConfirm}
            onClick={() => handleDeleteSubCategoryDetails()}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openSubCategoryModal} maxWidth={'lg'} fullWidth>
        <DialogContent sx={{ padding: '15px 40px' }}>
          <AdminSubCategoryAdd
            listApi={listApi}
            setOpenSubCategoryModal={setOpenSubCategoryModal}
            subcategoryId={subcategoryId}
            actions={actions}
            setActions={setActions}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AdminSubCategoryList;
