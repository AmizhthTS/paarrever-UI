import React from 'react';
import getStyles from './styles';
import { Grid, Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { newMainLogo } from '../../assets';

const Loader = ({ isLoading }) => {
  const {
    loaderDiv,
    cartContainer,
    pulseStyle,
    mainLogoImg,
    loadingText,
    fadeIn
  } = getStyles();

  return (
    <>
      {isLoading && (
        <Grid sx={loaderDiv}>
          <Box sx={cartContainer}>
            <ShoppingCartIcon
              sx={{ fontSize: 80, color: 'rgb(173, 29, 29)', ...pulseStyle }}
            />
          </Box>
          <Typography sx={loadingText}>
            Loading<span className="dots">...</span>
          </Typography>
          <Box sx={fadeIn}>
            <img src={newMainLogo} alt="PAARR Logo" style={mainLogoImg} />
          </Box>
        </Grid>
      )}
    </>
  );
};

export default Loader;
