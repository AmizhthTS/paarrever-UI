const getStyles = () => {
  return {
    maintenance: {
      backgroundImage:
        'url(https://demo.wpbeaveraddons.com/wp-content/uploads/2018/02/main-1.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'scroll',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
    maintenance_contain: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '15px',
      '& img': {
        width: 'auto',
        maxWidth: '100%'
      }
    },

    ppinfoboxtitleprefix: {
      fontWeight: 500,
      fontSize: '20px',
      color: '#000000',
      marginTop: '30px',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    },
    ppinfoboxtitle: {
      color: '#000000',
      fontFamily: 'sans-serif',
      fontWeight: 700,
      fontSize: '40px',
      marginTop: '10px',
      marginBottom: '10px',
      textAlign: 'center',
      display: 'block',
      wordBreak: 'break-word'
    },
    ppinfoboxdescription: {
      color: '#000000',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '18px',
      marginTop: '0px',
      marginBottom: '0px',
      textAlign: 'center',
      '& p': {
        margin: 0
      }
    },

    titletext: {
      color: '#000000',
      padding: '0px',
      fontFamily: 'sans-serif',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: 1.4,
      marginTop: '50px',
      marginBottom: '0px'
    },
    ppsocialicon: {
      margin: '10px',
      display: 'inline-block',
      lineHeight: 0,
      textAlign: 'center',
      '& a': {
        display: 'inline-block',
        height: '40px',
        width: '40px'
      }
    },
    faceBookI: {
      color: '#4b76bd',
      border: '2px solid #4b76bd',
      current: 'pointer',
      cursor: 'pointer',
      borderRadius: '100px',
      fontSize: '20px',
      padding: '5px',
      //   width: '40px',
      //   lineHeight: '40px',
      textAlign: 'center'
    },
    twitterI: {
      color: '#00c6ff',
      border: '2px solid #00c6ff',
      borderRadius: '100px',
      fontSize: '20px',
      padding: '5px',
      //   width: '40px',
      //   lineHeight: '40px',
      textAlign: 'center'
    },
    instagramI: {
      color: '#fb5245',
      border: '2px solid #fb5245',
      borderRadius: '100px',
      fontSize: '20px',
      padding: '5px',
      //   width: '40px',
      //   lineHeight: '40px',
      textAlign: 'center'
    },
    linkedInI: {
      color: '#158acb',
      border: '2px solid #158acb',
      borderRadius: '100px',
      fontSize: '20px',
      padding: '5px',
      //   width: '40px',
      //   lineHeight: '40px',
      textAlign: 'center'
    },
    ppsocialicons: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
};

export default getStyles;
