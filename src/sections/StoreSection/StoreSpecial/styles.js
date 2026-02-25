const getStyles = () => {
  return {
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
    iconButton: {
      background:
        'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
      color: 'white',
      borderRadius: '50%',
      padding: '12px',
      fontSize: '32px'
      // '&:hover': {
      //   background: 'linear-gradient(90deg, #1d4ed8 0%, #059669 100%)'
      // }
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
