const getStyles = () => {
  return {
    container: {
      minHeight: '100vh',
      backgroundColor: 'background.default'
    },
    heroSection: {
      py: 6,
      background:
        'linear-gradient(to right, primary.light, secondary.light, culturalSaffron.light)'
    },
    heroTitle: {
      fontSize: { xs: '2.5rem', md: '3rem' },
      fontWeight: 'bold',
      mb: 2,
      background: 'linear-gradient(to right, primary.main, secondary.main)',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    heroSubtitle: {
      fontSize: '1.125rem',
      color: 'text.secondary',
      maxWidth: '800px',
      mx: 'auto'
    },
    storeCount: {
      backgroundColor: '#f39b2ade',
      color: 'common.black'
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
      pl: 5
    },
    searchButton: {
      position: 'absolute',
      right: 8,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    contentContainer: {
      py: 6
    },
    mapCard: {
      height: { xs: '384px', lg: '600px' },
      order: { xs: 2, lg: 1 }
    },
    mapContent: {
      height: '100%',
      p: 0
    },
    mapPlaceholder: {
      height: '100%',
      background:
        'linear-gradient(to bottom right, primary.light, secondary.light)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    mapOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundImage:
        'url(https://images.unsplash.com/photo-1577717903315-1691ae25ab3f)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.2
    },
    mapText: {
      zIndex: 10,
      textAlign: 'center'
    },
    storeList: {
      order: { xs: 1, lg: 2 },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 4
    },
    storeHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      mb: 2
    },
    storeTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    storeTitleContent: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      mb: 3,
      '@media (max-width: 426px)': {
        display: 'block',
        textAlign: 'center'
      }
    },
    storeCard: {
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: 6
      }
    },
    storeName: {
      fontWeight: '600',
      fontSize: '1.125rem',
      mb: 1,
      transition: 'color 0.3s ease',
      '&:hover': {
        color: 'primary.main'
      }
    },
    storeDistance: {
      mt: 1
    },
    mapButton: {
      background: 'rgba(173, 29, 29, 1)',
      color: 'white',
      padding: '12px 18px',
      borderRadius: '6px',
      '&:hover': {
        background: 'rgba(173, 29, 29, 1)'
      }
    },
    storeDirect: {
      background: 'rgba(173, 29, 29, 1)',
      color: 'white',
      padding: '6px 18px',
      borderRadius: '6px',
      '&:hover': {
        background: 'rgba(173, 29, 29, 1)'
      }
    },
    storeCall: {
      border: '1px solid',
      borderColor: 'grey.300',
      padding: '6px 18px',
      borderRadius: '6px',
      '&:hover': {
        background: 'rgba(173, 29, 29, 1)',
        color: 'white'
      }
    },
    storeDetail: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 2,
      mb: 1
    },
    storeFeatureContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 1,
      pt: 2
    },
    storeFeatureBadge: {
      fontSize: '0.75rem',
      backgroundColor: '#f39b2ade',
      color: 'common.black'
    },
    storeActions: {
      display: 'flex',
      gap: 2,
      alignItems: 'center',
      mt: 3,
      pt: 3,
      borderTop: '1px solid',
      borderColor: 'divider'
    },
    featuresSection: {
      py: 6,
      background:
        'linear-gradient(to right, primary.lighter, secondary.lighter)'
    },
    featureTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      mb: 2,
      textAlign: 'center'
    },
    featureSubtitle: {
      color: 'text.secondary',
      maxWidth: '800px',
      mx: 'auto',
      mb: 4,
      textAlign: 'center'
    },
    featureGrid: {
      mt: 4
    },
    featureItem: {
      textAlign: 'center'
    },
    featureIconContainer: {
      width: '64px',
      height: '64px',
      mx: 'auto',
      mb: 2,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    featureName: {
      fontWeight: '600',
      fontSize: '1.125rem',
      mb: 1
    },
    featureDescription: {
      fontSize: '0.875rem',
      color: 'text.secondary'
    }
  };
};

export default getStyles;
