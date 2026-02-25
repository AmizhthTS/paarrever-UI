import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const getStyles = () => {
  return {
    loaderDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      width: '100%',
      height: '100vh',
      position: 'fixed',
      zIndex: 9999
    },
    cartContainer: {
      position: 'relative',
      animation: `${rotate} 2s linear infinite`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px'
    },
    cartWheel: {
      width: '12px',
      height: '12px',
      backgroundColor: 'rgb(173, 29, 29)',
      borderRadius: '50%',
      margin: '0 5px'
    },
    mainLogoImg: {
      width: '160px',
      marginTop: '10px'
    },
    pulseStyle: {
      animation: `${pulse} 1.5s infinite`
    },
    loadingText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'rgb(173, 29, 29)',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      animation: `${fadeIn} 0.6s ease-in-out`
    },
    fadeIn: {
      animation: `${fadeIn} 0.6s ease-in-out`,
      display: 'flex',
      justifyContent: 'center'
    }
  };
};

export default getStyles;
