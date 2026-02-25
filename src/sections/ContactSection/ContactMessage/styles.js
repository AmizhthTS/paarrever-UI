export const getStyles = () => {
  return {
    contactContainer: {
      backgroundColor: 'background.default'
    },
    heroSection: {
      padding: '48px 0',
      background:
        'linear-gradient(to right, primary.light, secondary.light, culturalSaffron.light)'
    },
    heroTitle: {
      fontSize: { xs: '2.5rem', md: '3rem' },
      fontWeight: 'bold',
      marginBottom: '16px',
      background: 'linear-gradient(to right, primary.main, secondary.main)',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    heroSubtitle: {
      fontSize: '1.125rem',
      color: 'text.secondary',
      maxWidth: '800px',
      margin: '0 auto'
    },
    contactMethodsContainer: {
      padding: '48px 0'
    },
    contactMethodCard: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
        transform: 'scale(1.05)'
      }
    },
    contactIconContainer: {
      width: '64px',
      height: '64px',
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
      fontSize: '1.125rem',
      marginBottom: '8px'
    },
    contactMethodDescription: {
      fontSize: '0.875rem',
      color: 'text.secondary',
      marginBottom: '16px'
    },
    formContainer: {
      marginBottom: '48px'
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '24px'
    },
    officeCard: {
      transition: 'box-shadow 0.3s ease',
      '&:hover': {
        boxShadow: '0px 5px 15px rgba(0,0,0,0.1)'
      }
    },
    officeTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
      marginBottom: '12px'
    },
    faqSection: {
      padding: '48px 0',
      background:
        'linear-gradient(to right, primary.lighter, secondary.lighter)'
    },
    faqTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      textAlign: 'center'
    },
    faqSubtitle: {
      color: 'text.secondary',
      textAlign: 'center',
      marginBottom: '32px'
    },
    faqCard: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
        transform: 'scale(1.05)'
      }
    },
    primaryButton: {
      background: 'rgba(173, 29, 29, 1)',
      color: 'white',
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
    }
  };
};
export default getStyles;
