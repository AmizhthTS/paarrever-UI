import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import { Modal } from '@mui/material';
import { newMainLogo, userLogo } from '../../../assets';
import getStyles from './styles';
import { NavLink, useNavigate } from 'react-router-dom';
const appBarCss = {
  background: 'linear-gradient(90deg, rgb(204 20 20) 50%, rgb(236 151 32) 100%)'
  // boxShadow: "none",
};
const AdminNavbar = () => {
  const styles = getStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openPasswordMsg, setOpenPasswordMsg] = useState(false);
  const userName = localStorage.getItem('name');
  const openMenu = Boolean(anchorEl);

  //   const [passLable, setPassLable] = useState('Old Password');
  //   useEffect(() => {
  //     if (localStorage.getItem('forcePassword') === 'true') {
  //       setOpenPassword(true);
  //       setPassLable('OTP');
  //     }
  //   }, [userName]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const logoutBtn = () => {
    localStorage.clear();
    navigate('/admin-login');
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const [openPassword, setOpenPassword] = useState(false);

  //   const handlePasswordClose = () => {
  //     setOpenPassword(false);
  //     if (sessionStorage.getItem('forcePassword') === 'true') {
  //       setOpenPasswordMsg(true);
  //     } else {
  //       sessionStorage.setItem('forcePassword', false);
  //     }
  //   };

  const handlePasswordMsgClose = () => {
    setOpenPasswordMsg(false);
    logoutBtn();
  };

  return (
    <>
      <AppBar position="sticky" sx={appBarCss}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={newMainLogo}
              alt="blue horizontal.png"
              style={styles.logoImg}
            />
          </Typography>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem
                component={NavLink}
                to="/admin/category/list"
                onClick={handleCloseNavMenu}
              >
                Category
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/admin/subcategory/list"
                onClick={handleCloseNavMenu}
              >
                Subcategory
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/admin/store/list"
                onClick={handleCloseNavMenu}
              >
                Store
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/admin/enquiries/list"
                onClick={handleCloseNavMenu}
              >
                Enquiries
              </MenuItem>
              <Divider />
              <MenuItem onClick={logoutBtn}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
              <Divider />
            </Menu>
          </Box>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            <Button sx={styles.menuBtn}>
              <NavLink
                style={({ isActive }) => ({
                  ...styles.linkBtn,
                  ...(isActive ? styles.linkBtnActive : {})
                })}
                to="/admin/category/list"
              >
                Category
              </NavLink>
            </Button>
            <Button sx={styles.menuBtn}>
              <NavLink
                style={({ isActive }) => ({
                  ...styles.linkBtn,
                  ...(isActive ? styles.linkBtnActive : {})
                })}
                to="/admin/subcategory/list"
              >
                Subcategory
              </NavLink>
            </Button>
            <Button sx={styles.menuBtn}>
              <NavLink
                style={({ isActive }) => ({
                  ...styles.linkBtn,
                  ...(isActive ? styles.linkBtnActive : {})
                })}
                to="/admin/store/list"
              >
                Store
              </NavLink>
            </Button>
            <Button sx={styles.menuBtn}>
              <NavLink
                style={({ isActive }) => ({
                  ...styles.linkBtn,
                  ...(isActive ? styles.linkBtnActive : {})
                })}
                to="/admin/enquiries/list"
              >
                Enquiries
              </NavLink>
            </Button>
            <Typography sx={styles.username}>{userName}</Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <Avatar alt={userName} src={userLogo} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openMenu}
              onClick={handleCloseMenu}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={logoutBtn}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Modal open={openPassword}>
        <Box sx={styles.modalstyle}>
          <Changepassword
            handlePasswordClose={handlePasswordClose}
            passLable={passLable}
          />
        </Box>
      </Modal> */}
      <Modal open={openPasswordMsg}>
        <Box sx={styles.modalstyle}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" className="mb-3">
              Password Updated.
            </Typography>
            <Typography textAlign={'center'}>
              Password updated successfully. Please login with the new password.
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              sx={styles.log_btn_sesstion}
              onClick={handlePasswordMsgClose}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AdminNavbar;
