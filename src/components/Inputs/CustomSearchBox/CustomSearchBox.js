import React, { useEffect } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

const CustomSearchBox = ({
  onSearch,
  searchTerm,
  setSearchTerm,
  colorMode,
  Placeholder
}) => {
  // Debounce logic
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  // Conditional styles based on colorMode
  const inputStyles = {
    color: colorMode === 'white' ? '#fff' : '#000',
    backgroundColor: colorMode === 'white' ? '#000' : '#fff',
    borderRadius: 4
  };

  const placeholderStyles = {
    '& .MuiInputBase-input::placeholder': {
      color: colorMode === 'white' ? '#ccc' : '#888'
    }
  };

  return (
    <TextField
      variant="outlined"
      placeholder={Placeholder ?? 'Search...'}
      size="small"
      fullWidth
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search style={{ color: inputStyles.color }} />
          </InputAdornment>
        ),
        endAdornment: searchTerm && (
          <InputAdornment position="end">
            <IconButton onClick={() => setSearchTerm('')} size="small">
              <Clear style={{ color: inputStyles.color }} />
            </IconButton>
          </InputAdornment>
        ),
        style: inputStyles
      }}
      sx={placeholderStyles}
    />
  );
};

export default CustomSearchBox;
