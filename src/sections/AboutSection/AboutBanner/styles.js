export const getStyles = () => {
  return {
    aboutContainer: {
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
      maxWidth: '800px',
      mx: 'auto'
    },
    findStoreButton: {
      background: 'rgba(173, 29, 29, 1)',
      color: 'white',
      padding: '10px 18px',
      '&:hover': {
        background: 'rgba(173, 29, 29, 1)'
      }
    },
    missionSection: {
      padding: '64px 0'
    },
    missionBadge: {
      marginBottom: '16px',
      backgroundColor: '#f39b2ade',
      color: 'common.black'
    },
    missionTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '24px'
    },
    missionText: {
      color: 'text.secondary',
      marginBottom: '24px',
      lineHeight: '1.75'
    },
    missionImageContainer: {
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      width: '75%',
      height: '294px',
      boxShadow: 3,
      '@media (max-width: 426px)': {
        width: '100%',
        height: 'auto'
      }
    },
    missionImageOverlay: {
      width: '100%',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'
    }
  };
};
export default getStyles;
