export const getStyles = () => {
  return {
    aboutContainer: {
      backgroundColor: 'background.default',
      padding: '0px 22px'
    },
    joinSection: {
      borderRadius: '16px',
      p: { xs: 4, md: 6 },
      textAlign: 'center',
      color: 'common.white',
      background:
        'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)'
    },
    heroContent: {
      textAlign: 'center'
    },
    joinTitle: {
      fontSize: { xs: '1.5rem', md: '1.875rem' },
      fontWeight: 'bold',
      mb: 3
    },
    joinText: {
      fontSize: '1.125rem',
      opacity: 0.9,
      maxWidth: '800px',
      mx: 'auto',
      mb: 4
    },
    sectionTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      textAlign: 'center'
    },
    sectionSubtitle: {
      color: 'text.secondary',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 48px auto'
    },

    impactSection: {
      padding: '64px 0'
    },
    impactStat: {
      textAlign: 'center'
    },
    impactNumber: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    impactTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '8px'
    },
    impactDescription: {
      fontSize: '0.875rem',
      color: 'text.secondary'
    },
    joinButtons: {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: '16px',
      justifyContent: 'center'
    }
  };
};
export default getStyles;
