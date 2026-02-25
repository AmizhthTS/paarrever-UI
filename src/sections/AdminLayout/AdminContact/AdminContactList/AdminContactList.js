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
import { useDispatch, useSelector } from 'react-redux';
import getStyles from './styles';
import { newMainLogo } from '../../../../assets';
import { useNavigate } from 'react-router-dom';
import { getContactList } from '../../../../redux/Reducer/Contact/Contact';
import VisibilityIcon from '@mui/icons-material/Visibility';

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

const AdminContactList = () => {
  const styles = getStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [contactList, setContactList] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount] = useState(0);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const contactData = useSelector((state) => state?.contact ?? null);
  const contactListResponse = contactData?.contactList ?? null;

  useEffect(() => {
    if (!localStorage.getItem('jwttoken')) {
      navigate('/admin-login');
    }
  }, []);

  useEffect(() => {
    listApi();
  }, [searchInputValue, page, rowsPerPage]);

  const listApi = () => {
    setContactList([]);
    let req = {
      listSize: rowsPerPage,
      pageNumber: page + 1,
      searchString: searchInputValue
    };
    dispatch(getContactList(req));
  };

  useEffect(() => {
    if (contactListResponse) {
      if (contactListResponse) {
        setCount(contactListResponse.count);
        setContactList(contactListResponse?.data);
      }
    }
  }, [contactListResponse]);

  const handleViewDetails = (val) => {
    var value = contactList.find((list) => list.id === val);
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
            Enquiries
          </Typography>
        </Box>
        <Box sx={styles.secFiltersk}>
          <Box sx={styles.searchDiv}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={'Search Enquiries'}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => handleSearch(e.target.value)}
                type="search"
              />
            </Search>
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
            {contactList && contactList.length > 0 ? (
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
                          Email
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          Subject
                        </TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                          Message
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {contactList &&
                        contactList.map((list, index) => (
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
                                {list.fullName ? (
                                  list.fullName.length > 100 ? (
                                    <>{list.fullName.slice(0, 80)}...</>
                                  ) : (
                                    <>{list.fullName}</>
                                  )
                                ) : (
                                  <>-</>
                                )}
                              </TableCell>
                              <TableCell
                                align="center"
                                sx={{ padding: '12px' }}
                              >
                                {list.emailAddress ? list.emailAddress : '-'}
                              </TableCell>
                              <TableCell
                                align="center"
                                sx={{ padding: '12px' }}
                              >
                                {list.subject ? list.subject : '-'}
                              </TableCell>
                              <TableCell
                                align="center"
                                sx={{ padding: '12px' }}
                              >
                                <Box>
                                  <Typography sx={styles.list2Ran}>
                                    <Tooltip title="View" arrow>
                                      <VisibilityIcon
                                        onClick={() =>
                                          handleViewDetails(list.id)
                                        }
                                        sx={{
                                          cursor: 'pointer',
                                          mr: 2
                                        }}
                                      />
                                    </Tooltip>
                                  </Typography>
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
      <Dialog open={openViewModal} fullWidth={true}>
        <DialogTitle>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: '25px',
              textAlign: 'center',
              marginBottom: '22px'
            }}
          >
            Message
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography
              sx={{
                fontSize: '16px',
                wordBreak: 'break-word',
                textAlign: 'center',
                marginBottom: '20px'
              }}
            >
              {selected?.message}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={styles.dialogActions}>
          <Button sx={styles.discardBtn} onClick={() => handleViewClose()}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminContactList;
