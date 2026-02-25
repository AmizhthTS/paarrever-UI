const getStyles = () => {
  return {
    container: {
      minHeight: '100vh',
      backgroundColor: 'background.default'
    },
    heroSection: {
      position: 'relative',
      overflow: 'hidden',
      py: 6,
      background:
        'linear-gradient(90deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(245, 158, 11, 0.1) 100%)'
    },
    heroContent: {
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: { xs: '2.5rem', md: '3rem' },
      fontWeight: 700,
      mb: 2,
      background: 'linear-gradient(90deg, #9c0d0d 0%, #e0a113 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroSubtitle: {
      fontSize: '1.125rem',
      color: 'text.secondary',
      maxWidth: '660px',
      mx: 'auto'
    },
    searchSection: {
      py: 4,
      borderBottom: '1px solid',
      borderColor: 'divider'
    },
    searchContainer: {
      maxWidth: 'md',
      mx: 'auto'
    },
    searchInput: {
      pl: 5,
      '@media (max-width: 426px)': {
        paddingLeft: '0px'
      }
    },
    searchButton: {
      background:
        'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
      color: 'white',
      position: 'absolute',
      right: 8,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  };
};

export default getStyles;
