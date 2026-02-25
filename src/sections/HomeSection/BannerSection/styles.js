export const getStyles = () => {
  return {
    carouselContainer: {
      position: 'relative',
      width: '100%',
      height: '70vh',
      overflow: 'hidden',
      '@media (max-width: 768px)': {
        height: '60vh'
      },
      '@media (max-width: 426px)': {
        height: '80vh'
      }
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      transition: 'opacity 1s ease'
    },
    activeSlide: {
      opacity: 1
    },
    inactiveSlide: {
      opacity: 0
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: { xs: 'center center', md: 'center bottom' } // Responsive positioning
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    contentContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: { xs: 'center', md: 'center' }, // Responsive alignment
      px: { xs: 2, sm: 4, md: 6, lg: 8 } // Responsive padding
    },
    contentWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      maxWidth: { xs: '90%', sm: '80%', md: '100%' }, // Responsive width
      color: 'white',
      textAlign: { xs: 'center', md: 'center' } // Responsive text alignment
    },
    badge: {
      display: 'inline-block',
      px: 2,
      py: 1,
      borderRadius: '9999px',
      fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive font size
      fontWeight: 500,
      mb: { xs: 2, md: 3 }, // Responsive margin
      background: 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)'
    },
    title: {
      fontSize: { xs: '2rem', sm: '2.25rem', md: '3rem', lg: '50px' }, // Enhanced responsive sizes
      fontWeight: 700,
      mb: { xs: 1.5, md: 2 }, // Responsive margin
      lineHeight: 1.2,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
    },
    description: {
      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }, // Enhanced responsive sizes
      opacity: 0.9,
      mb: { xs: 3, md: 4 }, // Responsive margin
      lineHeight: { xs: 1.5, md: 1.6 }, // Responsive line height
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: 1.5, sm: 2 }, // Responsive gap
      justifyContent: { xs: 'center', md: 'center' } // Responsive alignment
    },
    primaryButton: {
      fontSize: { xs: '1rem', sm: '1.125rem' }, // Responsive font size
      px: { xs: 3, sm: 4 }, // Responsive padding
      py: { xs: 1.5, sm: 2 }, // Responsive padding
      background: 'rgba(173, 29, 29, 1)',
      color: 'white',
      '&:hover': {
        background: 'rgba(173, 29, 29, 1)'
      }
    },
    secondaryButton: {
      fontSize: { xs: '1rem', sm: '1.125rem' }, // Responsive font size
      px: { xs: 3, sm: 4 }, // Responsive padding
      py: { xs: 1.5, sm: 2 }, // Responsive padding
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
        // borderColor: 'rgba(255, 255, 255, 0.3)'
      }
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      p: 1,
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
      },
      display: { xs: 'none', sm: 'flex' } // Hide on mobile
    },
    indicators: {
      position: 'absolute',
      bottom: { xs: '16px', sm: '24px' }, // Responsive position
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 1
    },
    indicator: {
      width: { xs: '10px', sm: '12px' }, // Responsive size
      height: { xs: '10px', sm: '12px' }, // Responsive size
      borderRadius: '50%',
      transition: 'background-color 0.3s ease'
    },
    activeIndicator: {
      backgroundColor: 'white'
    },
    inactiveIndicator: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
  };
};
export default getStyles;
