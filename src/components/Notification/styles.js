const getStyles = () => {
  return {
    info: {
      '& >  div': {
        color: '#004085',
        background: '#cce5ff',
        borderColor: '#b8daff',
        fontWeight: 'bold',
        letterSpacing: '1px'
      }
    },
    danger: {
      '& >  div': {
        color: '#721c24',
        background: '#f8d7da',
        borderColor: '#f5c6cb',
        fontWeight: 'bold',
        letterSpacing: '1px'
      }
    },
    success: {
      '& >  div': {
        color: '#155724',
        background: '#d4edda',
        borderColor: '#c3e6cb',
        fontWeight: 'bold',
        letterSpacing: '1px'
      }
    },
    warning: {
      '& >  div': {
        color: '#856404',
        background: '#fff3cd',
        borderColor: '#ffeeba',
        fontWeight: 'bold',
        letterSpacing: '1px'
      }
    },
    styleCss: {
      '& >  div': {
        color: '#004085',
        background: '#cce5ff',
        borderColor: '#b8daff',
        fontWeight: 'bold',
        letterSpacing: '1px'
      }
    }
  };
};

export default getStyles;
