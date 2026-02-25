export const getStyles = () => {
  return {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      width: '100%',
      borderBottom: '1px solid',
      borderColor: 'divider',
      backgroundColor: 'background.paper',
      backdropFilter: 'blur(20px)',
      background: 'rgba(255, 255, 255, 0.8)'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    logoText: {
      fontSize: '1.25rem',
      fontWeight: 700,
      background:
        'linear-gradient(90deg,rgba(0, 120, 212, 1) 0%, rgba(153, 176, 163, 1) 46%, rgba(255, 199, 79, 1) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      cursor: 'pointer'
    },
    desktopNav: {
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      gap: 4
    },
    navLink: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'text.primary',
      position: 'relative',
      '&:hover': {
        color: 'rgba(173, 29, 29, 1)'
      }
    },
    navUnderline: {
      position: 'absolute',
      bottom: -4,
      left: 0,
      width: 0,
      height: '2px',
      backgroundColor: 'primary.main',
      transition: 'width 0.3s ease',
      '.MuiButtonBase-root:hover &': {
        width: '100%'
      }
    },
    actionsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 1
    },
    iconButton: {
      minWidth: 'auto',
      padding: '8px'
    },
    cartButton: {
      position: 'relative',
      background: 'linear-gradient(90deg, #2563eb 0%, #9333ea 100%)',
      color: 'white',
      '&:hover': {
        background: 'linear-gradient(90deg, #1d4ed8 0%, #7e22ce 100%)'
      }
    },
    cartBadge: {
      position: 'absolute',
      top: -8,
      right: -8,
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'secondary.main',
      color: 'secondary.contrastText',
      fontSize: '0.75rem',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mobileMenuButton: {
      display: { md: 'none' }
    },
    mobileMenuContent: {
      width: { xs: '300px', sm: '400px' },
      p: 3
    },
    mobileNavLink: {
      fontSize: '1.125rem',
      fontWeight: 500,
      color: 'text.primary',
      '&:hover': {
        color: 'rgba(173, 29, 29, 1)'
      }
    },
    languageButton: {
      justifyContent: 'flex-start',
      color: 'rgba(173, 29, 29, 1)',
      width: '100%',
      mt: 2,
      pt: 2,
      borderTop: '1px solid',
      borderColor: 'divider'
    },
    activeNavLink: {
      color: 'rgba(173, 29, 29, 1)',
      fontWeight: 600
    },
    navUnderlineActive: {
      position: 'absolute',
      bottom: -4,
      left: 0,
      height: '2px',
      width: '100%',
      backgroundColor: 'rgba(173, 29, 29, 1)'
    },
    activeMobileNavLink: {
      color: 'rgba(173, 29, 29, 1)',
      fontWeight: 600
    }
  };
};
export default getStyles;
