import { useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import getStyles from './styles';
import { timeout } from '../../assets';
const SesstionTimeout = () => {
  const styles = getStyles();
  useEffect(() => {
    // setTimeout(() => {
    //   logout();
    // }, 5000);
  }, []);
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    // window.location.assign('/');
  };
  return (
    <Grid sx={styles.sesstion_Grid}>
      <Grid sx={styles.center}>
        <img src={timeout} sx={styles.gifimg} />
        <Typography variant="h5">Session Timeout</Typography>
        <Typography>
          You weren&apos;t clicking around any more, so we logged you out for
          security reasons. To get back in, just login again
        </Typography>
        <Grid sx={styles.center}>
          <Button
            variant="contained"
            sx={styles.log_btn_sesstion}
            onClick={() => logout()}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SesstionTimeout;
