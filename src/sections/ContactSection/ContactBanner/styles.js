export const getStyles = () => {
  return {
    contactContainer: {
      backgroundColor: 'background.default'
    },
    heroSection: {
      position: 'relative',
      overflow: 'hidden',
      py: { xs: 4, sm: 5, md: 6 },
      background:
        'linear-gradient(90deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(245, 158, 11, 0.1) 100%)'
    },
    heroContent: {
      textAlign: 'center',
      px: { xs: 2, sm: 3, md: 0 }
    },
    heroTitle: {
      fontSize: {
        xs: '2rem', // 320px - 375px
        sm: '2.25rem', // 376px - 425px
        md: '2.5rem', // 426px - 768px
        lg: '3rem' // 769px - 1024px+
      },
      fontWeight: 700,
      mb: { xs: 1, md: 2 },
      background: 'linear-gradient(90deg, #9c0d0d 0%, #e0a113 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: { xs: 1.2, md: 1.3 }
    },
    heroSubtitle: {
      fontSize: {
        xs: '0.875rem', // 320px - 375px
        sm: '1rem', // 376px - 425px
        md: '1.125rem' // 426px+
      },
      color: 'text.secondary',
      maxWidth: '688px',
      mx: 'auto',
      px: { xs: 2, sm: 3, md: 0 },
      lineHeight: { xs: 1.4, md: 1.6 }
    },
    contactMethodsContainer: {
      padding: { xs: '32px 0', md: '48px 0' }
    },
    contactMethodCard: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      height: '100%',
      '&:hover': {
        boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
        transform: 'scale(1.05)'
      }
    },
    contactIconContainer: {
      width: { xs: '48px', sm: '56px', md: '64px' },
      height: { xs: '48px', sm: '56px', md: '64px' },
      margin: '0 auto 16px auto',
      borderRadius: '50%',
      background:
        'linear-gradient(to bottom right, primary.main, secondary.main)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'common.white',
      '&:hover': {
        animation: 'float 2s ease-in-out infinite'
      }
    },
    contactMethodTitle: {
      fontWeight: '600',
      fontSize: { xs: '1rem', sm: '1.125rem' },
      marginBottom: '8px'
    },
    contactMethodDescription: {
      fontSize: { xs: '0.8125rem', sm: '0.875rem' },
      color: 'text.secondary',
      marginBottom: '16px'
    },
    formContainer: {
      marginBottom: { xs: '32px', md: '48px' },
      px: { xs: 2, sm: 3, md: 0 }
    },
    formTitle: {
      fontSize: { xs: '1.25rem', sm: '1.5rem' },
      fontWeight: 'bold',
      marginBottom: { xs: '16px', sm: '24px' }
    },
    officeCard: {
      transition: 'box-shadow 0.3s ease',
      p: { xs: 2, sm: 3 },
      '&:hover': {
        boxShadow: '0px 5px 15px rgba(0,0,0,0.1)'
      }
    },
    officeTitle: {
      fontWeight: '600',
      fontSize: { xs: '1rem', sm: '1.125rem' },
      marginBottom: { xs: '8px', sm: '12px' }
    },
    faqSection: {
      padding: { xs: '32px 0', md: '48px 0' },
      background:
        'linear-gradient(to right, primary.lighter, secondary.lighter)'
    },
    faqTitle: {
      fontSize: { xs: '1.25rem', sm: '1.5rem' },
      fontWeight: 'bold',
      marginBottom: { xs: '12px', sm: '16px' },
      textAlign: 'center'
    },
    faqSubtitle: {
      color: 'text.secondary',
      textAlign: 'center',
      marginBottom: { xs: '24px', sm: '32px' },
      px: { xs: 2, sm: 3, md: 0 },
      fontSize: { xs: '0.875rem', sm: '1rem' }
    },
    faqCard: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      p: { xs: 2, sm: 3 },
      '&:hover': {
        boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
        transform: 'scale(1.05)'
      }
    },
    primaryButton: {
      marginTop: { xs: '12px', sm: '16px' },
      fontSize: { xs: '0.875rem', sm: '1rem' },
      background: 'rgba(173, 29, 29, 1)',
      color: 'white',
      '&:hover': {
        background: 'rgba(173, 29, 29, 1)'
      }
    },
    iconButton: {
      background:
        'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
      color: 'white',
      borderRadius: '50%',
      padding: { xs: '10px', sm: '12px' }
    }
  };
};
export default getStyles;
