export const getStyles = () => {
  return {
    container: {
      py: 8,
      background:
        'linear-gradient(to right, primary.lighter, secondary.lighter, culturalSaffron.lighter)'
    },
    header: {
      textAlign: 'center',
      mb: 6
    },
    badge: {
      mb: 3,
      px: 3,
      py: 1.5,
      fontSize: '1rem',
      backgroundColor: '#f39b2ade',
      color: 'common.black',
      fontWeight: 'bold'
    },
    title: {
      fontSize: { xs: '1.875rem', md: '2.25rem' },
      fontWeight: 'bold',
      mb: 2
    },
    subtitle: {
      fontSize: '1.125rem',
      color: 'text.secondary',
      maxWidth: '800px',
      mx: 'auto'
    },
    benefitsGrid: {
      mb: 6
    },
    benefitCard: {
      textAlign: 'center',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: 6,
        transform: 'scale(1.05)'
      }
    },
    benefitIconContainer: {
      width: '64px',
      height: '64px',
      mx: 'auto',
      mb: 3,
      borderRadius: '50%',
      background:
        'linear-gradient(to bottom right, background.paper, background.default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        animation: 'float 2s ease-in-out infinite'
      }
    },
    benefitTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
      mb: 1
    },
    benefitDescription: {
      fontSize: '0.875rem',
      color: 'text.secondary'
    },
    ctaBanner: {
      // background: '#0078d4',
      background:
        'linear-gradient(90deg,rgba(0, 120, 212, 1) 0%, rgba(153, 176, 163, 1) 46%, rgba(255, 199, 79, 1) 100%)',
      borderRadius: '16px',
      p: { xs: 4, md: 6 },
      textAlign: 'center',
      color: 'common.white'
    },
    ctaTitle: {
      fontSize: { xs: '1.5rem', md: '1.875rem' },
      fontWeight: 'bold',
      mb: 3
    },
    ctaText: {
      fontSize: '1.125rem',
      opacity: 0.9,
      maxWidth: '800px',
      mx: 'auto',
      mb: 4
    },
    ctaButtons: {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: 2,
      justifyContent: 'center'
    },
    ctaFootnote: {
      fontSize: '0.875rem',
      opacity: 0.75,
      mt: 2
    }
  };
};
export default getStyles;
