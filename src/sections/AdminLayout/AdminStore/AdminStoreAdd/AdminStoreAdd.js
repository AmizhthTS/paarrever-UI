import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '../../../../redux/Reducer/Notification/Notification';

import { isEmptyObject, isWhitespace } from '../../../../utils/helper';
import { TextInput } from '../../../../components';
import getStyles from './styles';
import {
  getStoreGet,
  getStoreSave
} from '../../../../redux/Reducer/Store/Store';
import dayjs from 'dayjs';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const AdminStoreAdd = ({
  actions,
  storeId,
  setActions,
  setOpenStoreModal,
  listApi
}) => {
  const styles = getStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const storeData = useSelector((state) => state?.store ?? null);
  const storeSaveResponse = storeData?.storeSave ?? null;
  const storeGetResponse = storeData?.storeGet ?? null;
  const {
    handleSubmit,
    control,
    setValue,
    clearErrors,
    setError,
    reset,
    formState: { errors }
  } = useForm({ values: formData });

  useEffect(() => {
    if (actions === 'update' && storeId !== 0) {
      getApi();
    } else {
      setFormData({});
    }
  }, []);

  const getApi = () => {
    setFormData({});
    dispatch(getStoreGet(storeId));
  };

  useEffect(() => {
    if (storeGetResponse) {
      const data = storeGetResponse;
      const formattedData = {
        ...data,
        openingTime: dayjs(data.openingTime, 'HH:mm'),
        closingTime: dayjs(data.closingTime, 'HH:mm')
      };
      setFormData(formattedData);
      setStartTime(formattedData.openingTime);
      setEndTime(formattedData.closingTime);
    }
  }, [storeGetResponse]);

  const onSubmit = (data) => {
    data.openingTime = data.openingTime
      ? dayjs(data.openingTime).format('HH:mm')
      : null;
    data.closingTime = data.closingTime
      ? dayjs(data.closingTime).format('HH:mm')
      : null;
    dispatch(getStoreSave(data));
  };

  useEffect(() => {
    if (!isEmptyObject(storeSaveResponse) && storeSaveResponse !== '') {
      if (storeSaveResponse?.responseStatus === 'Success') {
        reset();
        backBtn();
        listApi();
        if (actions === 'update') {
          dispatch(
            setNotification({
              isActive: true,
              messageId: 108
            })
          );
        } else {
          dispatch(
            setNotification({
              isActive: true,
              messageId: 19
            })
          );
        }
      } else {
        dispatch(
          setNotification({ isActive: true, messageId: storeSaveResponse })
        );
      }
    }
    dispatch(getStoreSave({ clearData: true }));
  }, [storeSaveResponse]);

  const onError = (event) => {
    console.log('error Data:', event);
    dispatch(setNotification({ isActive: true, messageId: 101 }));
  };

  const handleCloseStore = () => {
    reset();
    setActions('');
    setOpenStoreModal(false);
    dispatch(getStoreGet({ clearData: true }));
  };

  const handleStartTimeFormat = (newValue) => {
    setStartTime(newValue);
    setValue('openingTime', newValue);
    clearErrors('openingTime');
  };

  const handleEndTimeFormat = (newValue) => {
    if (
      startTime &&
      (dayjs(newValue).isBefore(startTime) || dayjs(newValue).isSame(startTime))
    ) {
      dispatch(setNotification({ isActive: true, messageId: 17 }));
      setError('closingTime', {
        type: 'manual',
        message: 'End Time cannot be the same as or before Start Time'
      });
      return;
    }
    setEndTime(newValue);
    setValue('closingTime', newValue);
    clearErrors('closingTime');
  };

  const backBtn = () => {
    reset();
    setOpenStoreModal(false);
  };

  const validateNewPhoneNumber = (value) => {
    if (!value) {
      return 'Contact number is required';
    }
    const isMobile = /^\d{10}$/.test(value);
    const isLandline = /^\d{11}$/.test(value);
    const isLandlineWithDash = /^\d{3}-\d{8}$/.test(value);
    if (isMobile || isLandline || isLandlineWithDash) {
      return true; // ✅ Valid
    }
    if (!/^\d+$/.test(value.replace('-', ''))) {
      return 'Only numeric characters and a single dash (for landlines) are allowed';
    }

    if (value.includes('-')) {
      if (!/^\d{3}-\d{8}$/.test(value)) {
        return 'Landline must be in XXX-XXXXXXXX format (e.g., 044-46188596)';
      }
    } else if (value.length === 10) {
      return 'Mobile number must contain only digits (10 digits, no spaces or symbols)';
    } else if (value.length === 11) {
      return 'Landline number must be 11 digits with no dash (e.g., 04435095921)';
    } else {
      return 'Invalid contact number format';
    }
  };

  return (
    <Box sx={styles.categoryAddSection}>
      <Typography variant="h6" sx={styles.categoryTitle}>
        Store Details
      </Typography>
      <Box>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Box sx={styles.categoryAddDiv}>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={styles.inputBackground}>
                  <TextInput
                    control={control}
                    errors={errors}
                    name="storeName"
                    type="text"
                    textLable="Store Name *"
                    placeholderName="Enter your Store Name"
                    variant="outlined"
                    requiredMsg="Store Name is required"
                    validate={{
                      noWhitespace: (value) =>
                        !isWhitespace(value) || 'Whitespace not allowed'
                    }}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={styles.inputBackground}>
                  <TextInput
                    control={control}
                    errors={errors}
                    name="mainArea"
                    type="text"
                    textLable="Main Area Name *"
                    placeholderName="Enter your Main Area Name"
                    variant="outlined"
                    requiredMsg="Main Area Name is required"
                    validate={{
                      noWhitespace: (value) =>
                        !isWhitespace(value) || 'Whitespace not allowed'
                    }}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={styles.inputBackground}>
                  <TextInput
                    control={control}
                    errors={errors}
                    name="subArea"
                    type="text"
                    textLable="Sub Area Name *"
                    placeholderName="Enter your Sub Area Name"
                    variant="outlined"
                    requiredMsg="Sub Area Name is required"
                    validate={{
                      noWhitespace: (value) =>
                        !isWhitespace(value) || 'Whitespace not allowed'
                    }}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={styles.inputBackground}>
                  <TextInput
                    control={control}
                    errors={errors}
                    name="address"
                    type="text"
                    textLable="Address *"
                    placeholderName="Enter your Address"
                    variant="outlined"
                    requiredMsg="Address is required"
                    validate={{
                      noWhitespace: (value) =>
                        !isWhitespace(value) || 'Whitespace not allowed'
                    }}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={styles.inputBackground}>
                  <TextInput
                    control={control}
                    errors={errors}
                    name="contactNumber"
                    type="text"
                    textLable="Contact Number *"
                    placeholderName="Enter your Contact Number"
                    variant="outlined"
                    requiredMsg="Contact Number is required"
                    validate={{
                      validateNewPhoneNumber
                    }}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={styles.inputBackground}>
                  <TextInput
                    control={control}
                    errors={errors}
                    name="mapLink"
                    type="text"
                    textLable="Map Link *"
                    placeholderName="Enter Map Link"
                    variant="outlined"
                    requiredMsg="Map Link is required"
                    validate={{
                      noWhitespace: (value) =>
                        !isWhitespace(value) || 'Whitespace not allowed'
                    }}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={styles.inputBackground}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Controller
                          name="openingTime"
                          control={control}
                          rules={{ required: 'Opening Time is Required' }}
                          render={({ field }) => (
                            <TimePicker
                              label="Opening Time *"
                              value={startTime}
                              onChange={(newValue) => {
                                handleStartTimeFormat(newValue);
                                field.onChange(newValue);
                              }}
                              format="HH:mm"
                              sx={{ width: '100%' }}
                              slotProps={{
                                textField: {
                                  fullWidth: true,
                                  error: !!errors.openingTime,
                                  helperText: errors.openingTime?.message
                                }
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="closingTime"
                          control={control}
                          rules={{ required: 'Closing Time is Required' }}
                          render={({ field }) => (
                            <TimePicker
                              label="Closing Time *"
                              value={endTime}
                              onChange={(newValue) => {
                                handleEndTimeFormat(newValue);
                                field.onChange(newValue);
                              }}
                              format="HH:mm"
                              sx={{ width: '100%' }}
                              slotProps={{
                                textField: {
                                  fullWidth: true,
                                  error: !!errors.closingTime,
                                  helperText: errors.closingTime?.message
                                }
                              }}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </LocalizationProvider>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button sx={styles.discardBtn} onClick={() => handleCloseStore()}>
              Close
            </Button>
            <Button type="submit" variant="contained" sx={styles.saveBtn}>
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AdminStoreAdd;
