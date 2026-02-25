import React from 'react';
import getStyles from './styles';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  const styles = getStyles();
  return (
    <Grid sx={styles.mainDiv}>
      <Grid sx={styles.Square404}>
        <Grid sx={styles.Square}>
          <Typography variant="h2">404</Typography>
        </Grid>
      </Grid>
      <Grid sx={styles.texts}>
        <Typography variant="h5">Oops! page not found</Typography>
        <Typography>
          The page you are looking for does not exist. Go back to the main page
          or search.
        </Typography>
        <Link to="/" style={styles.btn}>
          Back to Home
        </Link>
        {/* <label for="search_box"></label><input type="search" name="search" id="search_box" placeholder="Search"> */}
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
