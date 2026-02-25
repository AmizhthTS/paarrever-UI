const getStyles = () => {
  return {
    lableCss: {
      color: '#1976d2', // Border color when unchecked
      '&.Mui-checked': {
        color: '#1976d2' // Border and check color when checked
      }
    }
  };
};

export default getStyles;
