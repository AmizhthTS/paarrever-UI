import { loginBackImg } from '../../../assets';

const getStyles = () => {
  return {
    loginSection: {
      backgroundImage: `url(${loginBackImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoContainer: {
      position: 'absolute',
      top: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      '& img': {
        width: '100%',
        maxWidth: '170px',
        height: 'auto'
      }
    },
    logsFormings: {
      marginTop: '80px'
    },
    loginForm: {
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'blur(15px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
      borderRight: '1px solid rgba(255, 255, 255, 0.25)',
      borderRadius: '20px',
      boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.1)',
      padding: '2rem',
      width: '30rem',
      '& h2': {
        color: '#8f2c24',
        fontSize: '40px',
        fontWeight: 600,
        marginBottom: '1.5rem',
        textAlign: 'center'
      }
    },
    inputBox: {
      marginBottom: '1.5rem',
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#fff',
        borderRadius: '5px',
        '& fieldset': {
          border: 'none'
        },
        '&:hover fieldset': {
          border: 'none'
        },
        '&.Mui-focused fieldset': {
          border: 'none'
        },
        '& input': {
          fontSize: '1rem',
          padding: '1rem',
          outline: 'none',
          width: '100%'
        }
      }
    },
    loginBtn: {
      background:
        'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
      color: '#fff',
      cursor: 'pointer',
      fontWeight: 500,
      letterSpacing: '1px',
      padding: '10px',
      border: 'none',
      fontSize: '18px',
      borderRadius: '5px',
      width: '100%'
    },
    inputAdornment: {
      backgroundColor: '#fff'
    },
    // Responsive styles
    '@media (max-width: 1200px)': {
      loginForm: {
        width: '30rem',
        '& h2': {
          fontSize: '2rem'
        }
      },
      logoContainer: {
        '& img': {
          maxWidth: '115px'
        }
      }
    },
    '@media (max-width: 992px)': {
      loginForm: {
        width: '20rem',
        padding: '1.5rem',
        '& h2': {
          fontSize: '1.75rem'
        }
      },
      loginBtn: {
        padding: '0.75rem'
      }
    },
    '@media (max-width: 768px)': {
      loginForm: {
        width: '28rem',
        '& h2': {
          fontSize: '1.5rem'
        }
      },
      logoContainer: {
        '& img': {
          maxWidth: '120px'
        }
      },
      loginBtn: {
        padding: '0.5rem'
      }
    },
    '@media (max-width: 576px)': {
      loginForm: {
        width: '100%',
        padding: '1rem',
        '& h2': {
          fontSize: '1.25rem'
        }
      },
      logsFormings: {
        marginTop: '55px'
      },
      logoContainer: {
        '& img': {
          maxWidth: '100px'
        }
      },
      loginBtn: {
        padding: '0.5rem',
        fontSize: '0.9rem'
      }
    }
  };
};

export default getStyles;
