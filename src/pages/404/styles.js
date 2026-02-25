const getStyles = () => {
  return {
    mainDiv: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '16px',
      fontFamily: '"vazir", sans-serif',
      background: '#1E0D37',
      color: 'rgba(255, 255, 255, 0.8)',
      overflow: 'hidden !important',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      }
    },
    texts: {
      zIndex: 5,
      padding: '0.8rem',
      margin: '0.3rem',
      width: '500px',
      '& h4': {
        fontSize: '1.5rem'
      },
      '@media (max-width: 768px)': { width: '100%' }
    },
    Square404: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      '@media (max-width: 768px)': { width: '100%' }
    },
    Square: {
      width: '20vw',
      height: '20vw',
      position: 'absolute',
      borderRadius: '1.2rem',
      background: '#C2146D',
      boxShadow:
        '#760D50 0 0 5px 30px, #4D0E45 0 0 10px 60px, #320C3B 0 0 15px 90px, #280C3D 0 0 20px 120px, #1E0D37 0 0 25px 150px',
      transform: 'rotateZ(-21deg)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      '& h2': {
        fontSize: '10vw',
        color: '#1E0D37',
        transform: 'translateZ(90px)',
        textShadow: '0 0 2px rgba(0, 0, 0, 0.6)',
        userSelect: 'none',
        '@media (max-width: 768px)': { fontSize: '70px' }
      },
      '@media (max-width: 768px)': { width: '150px', height: '150px' }
    },

    btn: {
      cursor: 'pointer',
      display: 'inline-block',
      fontWeight: 400,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      border: '#f8f9fa 1px solid',
      padding: '0.375rem 0.75rem',
      margin: '0.375rem',
      fontSize: '1rem',
      borderRadius: '0.25rem',
      color: '#f8f9fa',
      transition: 'all 0.5s ease-in-out',
      userSelect: 'none',
      '&:hover': {
        color: '#212529',
        backgroundColor: '#f8f9fa',
        borderColor: '#f8f9fa'
      }
    }
  };
};

export default getStyles;
