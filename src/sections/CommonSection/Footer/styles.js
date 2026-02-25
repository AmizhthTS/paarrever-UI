export const getStyles = () => {
  return {
    footerContainer: {
      background:
        'linear-gradient(to bottom, rgba(244, 244, 245, 0.3) 0%, rgba(244, 244, 245, 0.6) 100%)',
      pt: 8,
      pb: 4
    },
    newsletterContainer: {
      textAlign: 'center',
      mb: 6
    },
    newsletterTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      mb: 2
    },
    newsletterText: {
      color: 'text.secondary',
      mb: 3,
      maxWidth: '500px',
      mx: 'auto'
    },
    newsletterForm: {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: 'center',
      gap: '30px',
      maxWidth: '500px',
      justifyContent: 'center',
      mx: 'auto'
    },
    newsletterInput: {
      width: '280px',
      flex: 1,
      py: 1,
      px: 2,
      borderRadius: 1,
      '& .MuiOutlinedInput-input': {
        padding: '10px 10px'
      }
      // backgroundColor: 'background.paper',
    },
    newsletterButton: {
      background: 'rgba(173, 29, 29, 1)',
      color: 'white',
      padding: '10px 14px',
      mt: 1,
      '&:hover': {
        background: 'rgba(173, 29, 29, 1)'
      }
    },
    sucessImage: {
      width: '100%',
      maxWidth: '200px'
    },
    inputContainer: {
      mt: 2,
      display: 'flex',
      flexDirection: 'row', // horizontal alignment
      alignItems: 'flex-start', // vertically top align
      gap: '0.5rem',
      '@media (max-width: 426px)': {
        display: 'block'
      }
    },
    separator: {
      my: 6,
      backgroundColor: 'divider'
    },
    brandSection: {
      gridColumn: { xs: 'span 2', md: 'span 4', lg: 'span 1' }
    },
    logoText: {
      fontSize: '1.25rem',
      fontWeight: 700,
      background:
        'linear-gradient(90deg,rgba(0, 120, 212, 1) 0%, rgba(153, 176, 163, 1) 46%, rgba(255, 199, 79, 1) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      mb: 2
    },
    brandDescription: {
      fontSize: '0.875rem',
      color: 'text.secondary',
      mb: 3
    },
    socialButtons: {
      display: 'flex',
      gap: 1
    },
    socialButton: {
      minWidth: 'auto',
      width: '32px',
      height: '32px'
    },
    sectionTitle: {
      fontWeight: 600,
      mb: 2,
      fontSize: '20px'
    },
    footerLink: {
      textDecoration: 'none',
      fontSize: '0.875rem',
      color: '#64748B',
      '&:hover': {
        color: 'primary.main'
      }
    },
    // contactGrid: {
    //   display: 'grid',
    //   gridTemplateColumns: {
    //     xs: '1fr',
    //     md: 'repeat(3, 1fr)',
    //     lg: 'repeat(3, 1fr)'
    //   },
    //   gap: 2,
    //   mb: 4
    // },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2
    },
    contactIcon: {
      p: 1,
      borderRadius: '50%',
      background:
        'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
      color: 'white',
      width: '20px',
      height: '20px'
    },
    contactTitle: {
      fontWeight: 500
    },
    contactText: {
      fontSize: '0.875rem',
      color: 'text.secondary'
    },
    bottomBar: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 2,
      mb: 3
    },
    legalLinks: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 3,
      fontSize: '0.875rem',
      color: 'text.secondary',
      textDecoration: 'none'
    },
    legalLink: {
      textDecoration: 'none',
      color: '#64748B',
      '&:hover': {
        color: 'primary.main'
      }
    },
    madeWithLove: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      fontSize: '0.875rem',
      color: 'text.secondary'
    },
    heartIcon: {
      color: 'error.main',
      fontSize: '1rem'
    },
    copyright: {
      textAlign: 'center',
      fontSize: '0.875rem',
      color: 'text.secondary',
      mt: 4
    }
  };
};
export default getStyles;
