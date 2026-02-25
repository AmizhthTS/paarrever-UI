export const getStyles = () => {
  return {
    pageContainer: {
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
      padding: '3px',
      background: 'linear-gradient(90deg, #9c0d0d 0%, #e0a113 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroSubtitle: {
      fontSize: '1.125rem',
      color: 'text.secondary',
      maxWidth: '835px',
      mx: 'auto'
    },
    nodatacss_admin: {
      background: 'white',
      borderRadius: '25px',
      boxShadow: '0px 0px 5px gainsboro',
      padding: '25px',
      margin: '25px 3px',
      textAlign: 'center'
    },
    logo_dash: {
      width: '280px'
    },
    filtersSection: {
      py: 4,
      borderBottom: '1px solid',
      borderColor: 'divider'
    },
    filtersContainer: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 3,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    searchContainer: {
      position: 'relative',
      width: { xs: '100%', md: '320px' }
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'text.secondary'
    },
    searchInput: {
      pl: '40px'
    },
    filterContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 1
    },
    productsGrid: {
      py: 6
    },
    productCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      minHeight: '400px !important',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: 3,
        transform: 'scale(1.05)'
      }
    },
    productImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.1)'
      }
    },
    productContent: {
      p: 3
    },
    productTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      mb: 1
    },
    productDescription: {
      fontSize: '0.875rem',
      color: 'text.secondary',
      mb: 3
    },
    productFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    productCategory: {
      fontSize: '0.75rem'
    },
    storeNoticeSection: {
      py: 6,
      background:
        'linear-gradient(90deg, rgba(37, 99, 235, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)'
    },
    noticeCard: {
      backgroundColor: 'background.paper',
      borderRadius: 2,
      p: 4,
      maxWidth: '900px',
      mx: 'auto',
      boxShadow: 1
    },
    noticeTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      mb: 2,
      textAlign: 'center'
    },
    noticeText: {
      color: 'text.secondary',
      mb: 4,
      textAlign: 'center'
    },
    noticeButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: 2
    },
    primaryButton: {
      background: 'rgba(173, 29, 29, 1)',
      color: 'white',
      '&:hover': {
        background: 'rgba(173, 29, 29, 1)'
      }
    },
    productPrice: {
      backgroundColor: '#FFC74F',
      color: 'common.black',
      fontWeight: 'bold'
    }
  };
};
export default getStyles;
