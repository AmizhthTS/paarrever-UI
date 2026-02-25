const getStyles = () => {
  return {
    categoryAddDiv: {
      padding: '15px',
      border: '1px solid gainsboro',
      borderRadius: '10px',
      marginBottom: '40px'
    },
    inputBackground: {
      boxShadow: '0px 0px 25px #dcdcdc59',
      padding: '15px 20px',
      borderRadius: '10px',
      marginBottom: '40px'
    },
    categoryTitle: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '1rem'
    },
    textDanger: {
      color: '#ef4444',
      fontSize: '0.75rem'
    },
    uploadedBtn: {
      width: '90%',
      fontSize: '11px',
      textTransform: 'none',
      padding: '8px 0px',
      borderRadius: '20px',
      '@media (max-width: 320px)': {
        width: '100%'
      }
    },
    previewButton: {
      cursor: 'pointer',
      marginLeft: '10px',
      background:
        'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
      color: 'white',
      borderRadius: '20px'
    },
    fontsm1: {
      fontSize: ' 12px',
      color: '#ababab',
      display: 'flex',
      marginTop: '10px'
    },
    labelbtn: {
      borderRadius: '20px',
      background:
        'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
      color: 'white',
      fontWeight: 600,
      padding: '10px 20px',
      cursor: 'pointer',
      textTransform: 'none',
      fontSize: '14px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      marginLeft: 'auto',
      '&:hover': {
        background:
          'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        transform: 'translateY(-1px)'
      },
      '&:active': {
        transform: 'translateY(0)'
      },
      '&.Mui-disabled': {
        background: '#e5e7eb',
        color: '#9ca3af'
      }
    },
    recomended: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      marginTop: '1rem',
      marginBottom: '1rem'
    },
    fontsm: {
      fontSize: ' 12px',
      color: '#ababab'
    },
    discardBtn: {
      color: '#00023A',
      backgroundColor: 'white',
      borderRadius: '5px',
      border: '1px solid #00023A',
      padding: '10px 22px',
      fontWeight: 700,
      marginLeft: '10px'
    },
    saveBtn: {
      color: 'white',
      background:
        'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
      borderRadius: '5px',
      padding: '10px 22px',
      fontWeight: 700,
      border: 'none',
      marginLeft: '10px',
      '&:hover': {
        background:
          'linear-gradient(90deg,rgba(173, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)'
      }
    },
    uploadedBtnBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '8px',
      '@media (max-width: 576px)': {
        display: 'block'
      }
    }
  };
};

export default getStyles;
