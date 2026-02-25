import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import getStyles from './styles';
import { TextInput } from '../../../components';
import { useForm } from 'react-hook-form';
import { isWhitespace } from '../../../utils/helper';
import MuiButton from '../../../components/Button/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '../../../redux/Reducer/Notification/Notification';
import loginJson from '../../../mocks/login.json';
import { getLogin } from '../../../redux/Reducer/Authenticate/Authenticate';
import { newMainLogo } from '../../../assets';

const Login = () => {
  const styles = getStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const authenticatedata = useSelector((state) => state?.authenticate ?? null);
  const loginResponse = authenticatedata?.login ?? null;
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({});
  const onSubmit = (data) => {
    const getform = data;
    getform.email = data.email;
    getform.password = data.password;
    dispatch(getLogin(getform));
    console.log(data);
  };

  useEffect(() => {
    if (loginResponse) {
      let data = loginResponse;
      localStorage.setItem('jwttoken', data.token);
      localStorage.setItem('userid', data.id);
      localStorage.setItem('role', data.role);
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('email', data.email);
      localStorage.setItem(
        'password',
        data.forceChangePassword ? data.forceChangePassword : false
      );
      localStorage.setItem(
        'profile',
        data.profileUpdated ? data.profileUpdated : false
      );
      dispatch(setNotification({ isActive: true, messageId: 1029 }));
      navigate('/admin/category/list');
    } else if (loginResponse?.responseMessage) {
      dispatch(
        setNotification({
          isActive: true,
          messageId: '',
          message: loginResponse.responseMessage
        })
      );
    }
    dispatch(getLogin({ clearData: true }));
  }, [loginResponse]);

  const onError = (event) => {
    console.log(event);
    dispatch(setNotification({ isActive: true, messageId: 101 }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const validateFunction = {
    email: {
      noWhitespace: (value) => !isWhitespace(value) || 'Empty Space Not Allow'
    }
  };

  return (
    <>
      <Grid sx={styles.loginSection}>
        <Grid sx={styles.logoContainer}>
          <img src={newMainLogo} alt="Logo" />
        </Grid>
        <Grid sx={styles.loginForm}>
          <Grid sx={styles.loginTitle}>
            <Typography variant="h2" sx={styles.loginHead}>
              Login
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {loginJson.map((data, index) => (
              <Grid sx={styles.loginlist} key={index}>
                <TextInput
                  control={control}
                  errors={errors}
                  variant="outlined"
                  type={
                    data.type === 'password' && showPassword
                      ? 'text'
                      : data.type
                  }
                  name={data.name}
                  textLable={data.textLable}
                  placeholderName={data.placeholderName}
                  requiredMsg={data.requiredMsg}
                  labelMandatory={data.labelMandatory}
                  validate={validateFunction[data.name]}
                  InputProps={{
                    endAdornment: data.type === 'password' && (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  style={styles.inputBox}
                />
              </Grid>
            ))}
            <Grid sx={styles.buttondiv}>
              <MuiButton
                lableName={'Login'}
                variant={'contained'}
                type="submit"
                fullWidth={false}
                style={styles.loginBtn}
              />
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
