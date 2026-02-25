import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  // LocationOn as MapPinIcon,
  // Search as SearchIcon,
  Menu as MenuIcon,
  Close as CloseIcon
  // Language as GlobeIcon
} from '@mui/icons-material';
import { getStyles } from './styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { newMainLogo } from '../../../assets';
import { useTranslation } from 'react-i18next';
import { Language } from '../../../components';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const styles = getStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setMobileOpen(open);
  };

  const navItems = [
    {
      label: t('navbar.home'),
      href: '/'
    },
    {
      label: t('navbar.categories'),
      href: '/categories'
    },
    {
      label: t('navbar.storeLocator'),
      href: '/store-locator'
    },
    { label: t('navbar.about'), href: '/about' },
    { label: t('navbar.contact'), href: '/contact' }
  ];

  const handleHomeClick = () => {
    navigate('/');
  };
  return (
    <AppBar position="sticky" elevation={0} sx={styles.header}>
      <Container maxWidth="xl" sx={styles.container}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={styles.logoContainer}>
            {/* <Typography
              variant="h1"
              sx={styles.logoText}
              onClick={() => handleHomeClick()}
            >
              PAARR ever
            </Typography> */}
            <img
              src={newMainLogo}
              alt="Logo"
              onClick={() => handleHomeClick()}
              style={{ width: '150px', cursor: 'pointer' }}
            />
          </Box>
          {!isMobile && (
            <Box sx={styles.desktopNav}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Button
                    key={item.href}
                    component={Link}
                    to={item.href}
                    sx={{
                      ...styles.navLink,
                      ...(isActive ? styles.activeNavLink : {})
                    }}
                  >
                    {item.label}
                    {isActive && <Box sx={styles.navUnderlineActive} />}
                  </Button>
                );
              })}
            </Box>
          )}
          <Box sx={styles.actionsContainer}>
            {!isMobile && <Language />}
            {/* <IconButton sx={styles.iconButton} size="small" aria-label="search">
              <SearchIcon fontSize="small" />
            </IconButton>
            <IconButton
              sx={styles.iconButton}
              size="small"
              aria-label="store locator"
            >
              <MapPinIcon fontSize="small" />
            </IconButton> */}

            {/* Mobile Menu Button */}
            <IconButton
              sx={styles.mobileMenuButton}
              size="small"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true // Better open performance on mobile
        }}
      >
        <Box
          sx={styles.mobileMenuContent}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <Button
                  component={Link}
                  to={item.href}
                  fullWidth
                  sx={{
                    ...styles.mobileNavLink,
                    ...(location.pathname === item.href
                      ? styles.activeMobileNavLink
                      : {})
                  }}
                >
                  {item.label}
                </Button>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Language />
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
