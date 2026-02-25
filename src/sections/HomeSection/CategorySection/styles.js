export const getStyles = () => {
  return {
    sectionContainer: {
      py: { xs: 6, md: 8 },
      background: 'linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%)'
    },
    headerContainer: {
      textAlign: 'center',
      mb: { xs: 4, md: 6 }
    },
    title: {
      fontSize: { xs: '2rem', md: '2.5rem' },
      fontWeight: 700,
      mb: 2
    },
    subtitle: {
      fontSize: { xs: '1rem', md: '1.125rem' },
      color: 'text.secondary',
      maxWidth: '800px',
      mx: 'auto',
      px: { xs: 2, md: 0 }
    },
    gridContainer: {
      overflow: 'hidden'
    },
    categoryCard: {
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      height: '100%',
      '&:hover': {
        boxShadow: 3,
        transform: 'scale(1.05)'
      }
    },
    iconContainer: {
      width: { xs: '56px', md: '64px' },
      height: { xs: '56px', md: '64px' },
      mx: 'auto',
      mb: 3,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    },
    categoryTitle: {
      fontSize: { xs: '1rem', md: '1.125rem' },
      fontWeight: 600,
      mb: 1,
      textAlign: 'center',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: 'primary.main'
      }
    },
    categorySubtitle: {
      fontSize: { xs: '0.8125rem', md: '0.875rem' },
      color: 'text.secondary',
      textAlign: 'center',
      transition: 'color 0.3s ease',
      '&:hover': {
        opacity: 0.8
      }
    },
    viewAllButton: {
      mt: { xs: 4, md: 6 },
      px: { xs: 4, md: 6 },
      py: { xs: 1.5, md: 2 },
      fontSize: { xs: '1rem', md: '1.125rem' },
      background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
      color: '#000',
      '&:hover': {
        background: 'linear-gradient(90deg, #d97706 0%, #b45309 100%)'
      }
    },
    sectionTitle: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '16px',
      textAlign: 'center'
    },
    sectionSubtitle: {
      color: '18px',
      textAlign: 'center',
      maxWidth: '718px',
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
      fontSize: '1rem',
      color: 'text.secondary'
    }
  };
};
export default getStyles;
