const getStyles = () => {
  return {
    adminCategoryPage: {
      padding: '35px',
      background: 'white',
      borderRadius: '15px',
      color: 'black',
      margin: '25px',
      boxShadow:
        '0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 2px 6px 2px rgba(60, 64, 67, 0.15)',
      '@media (max-width: 376px)': {
        padding: '25px',
        background: 'white',
        borderRadius: '15px',
        color: 'black',
        margin: '15px',
        boxShadow:
          '0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 2px 6px 2px rgba(60, 64, 67, 0.15)'
      }
    },
    secClrk: {
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '0px 0px 10px 10px',
      '@media (max-width: 768px)': {
        display: 'block'
      }
    },
    secFiltersk: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
      padding: '20px',
      '@media (max-width: 768px)': {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '20px'
      }
    },
    titles1: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px 30px',
      backgroundColor: '#d9d9d91f',
      borderRadius: '15px',
      gap: '73px',
      color: '#020671',
      fontSize: '16px'
    },
    SupList: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: '30px',
      backgroundColor: 'white',
      border: '0.1px solid #00000014',
      padding: '23px',
      borderRadius: '35px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer'
    },
    list2Ran: {
      color: '#00023A'
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
      width: '100%',
      maxWidth: '280px'
    },
    alertimage: {
      width: '100%',
      maxWidth: '155px'
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
    dialogActions: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px'
    },
    removeApiModalCancel: {
      backgroundColor: '#ef2929',
      color: 'white'
    },
    removeApiModalConfirm: {
      backgroundColor: '#00a100',
      color: 'white'
    },
    categoryTitle: {
      marginBottom: 0,
      fontSize: '24px',
      fontWeight: 600
    }
  };
};

export default getStyles;
