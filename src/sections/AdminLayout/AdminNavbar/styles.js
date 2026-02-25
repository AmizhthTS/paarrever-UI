const getStyles = () => {
  return {
    // Logo styles
    logoImg: {
      width: '160px',
      height: '65px',
      objectFit: 'contain',
      padding: '5px',
      '@media (max-width: 575px)': {
        width: '125px'
      }
    },
    logoTanfundImg: {
      width: '110px',
      height: '65px',
      objectFit: 'contain',
      padding: '5px',
      marginLeft: '20px'
    },
    logoSml: {
      width: '60px',
      height: '65px',
      objectFit: 'contain',
      padding: '5px',
      marginLeft: '10px',
      '@media (max-width: 575px)': {
        marginLeft: '0'
      }
    },

    iconButton: {
      display: 'block',
      color: 'white !important'
    },
    username: {
      borderLeft: '1px solid gainsboro',
      paddingLeft: '15px'
    },
    appBar: {
      boxShadow: 'none'
    },
    linkBtn: {
      color: 'white',
      textDecoration: 'none'
    },
    linkBtnActive: {
      background: '#6b0000',
      fontWeight: 'bold',
      color: '#fff',
      padding: '6px 12px',
      borderRadius: '10px'
    },
    modalstyle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 2
    },
    menuBtn: {
      margin: '5px 20px',
      fontSize: '18px'
    },
    navTabMenu: {
      color: 'white !important'
    },
    topToTop: {
      boxShadow: '0px 0px 5px black !important'
    },

    // Button styles
    loginBtn: {
      color: '#0f1833 !important',
      textTransform: 'capitalize !important',
      fontSize: '18px !important',
      borderRadius: '8px !important',
      background: '#fcad17 !important',
      padding: '8px 16px !important',
      justifyContent: 'center !important',
      alignItems: 'center !important',
      gap: '8px',
      width: '111px',
      fontWeight: '600 !important',
      fontFamily: '"Poppins", sans-serif !important',
      '&:hover': {
        background: 'white !important',
        color: '#c4426d !important'
      }
    },
    addedBtn: {
      textTransform: 'none !important',
      fontFamily: '"Poppins" !important',
      borderRadius: '30px !important',
      padding: '10px 18px !important',
      background: '#253b80 !important'
    },
    savedBtn: {
      textTransform: 'none !important',
      fontFamily: '"Poppins" !important',
      borderRadius: '30px !important',
      padding: '10px 18px !important'
    },
    newOrderBtn: {
      textTransform: 'none !important',
      fontFamily: '"Poppins" !important',
      borderRadius: '30px !important',
      padding: '10px 18px !important'
    },

    // Form and layout styles
    addItems: {
      display: 'flex !important',
      justifyContent: 'center !important',
      gap: '10px !important',
      alignItems: 'center !important',
      marginTop: '16px'
    },
    formDiv: {
      padding: '35px',
      background: 'white',
      borderRadius: '15px',
      color: 'black !important',
      margin: '25px',
      boxShadow:
        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      '@media (max-width: 376px)': {
        padding: '25px',
        margin: '15px !important'
      },
      '@media (max-width: 360px)': {
        padding: '12px',
        margin: '10px !important'
      }
    },
    ordersed: {
      marginBottom: '0',
      fontSize: '24px',
      fontWeight: '600',
      '@media (max-width: 426px)': {
        textAlign: 'center'
      }
    },
    reportSupBtn: {
      '&.active': {
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '24px',
        fontWeight: '600'
      }
    },
    shipDates: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    },
    reportTabs: {
      margin: '0 auto !important',
      '@media (max-width: 426px)': {
        width: '246px !important'
      },
      '@media (max-width: 360px)': {
        width: '197px !important'
      }
    }
  };
};

export default getStyles;
