import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryGet,
  getCategorySave
} from '../../../../redux/Reducer/Category/Category';
import { setNotification } from '../../../../redux/Reducer/Notification/Notification';
import {
  isEmptyObject,
  isWhitespace,
  validateNumberonly,
  VisuallyHiddenInput
} from '../../../../utils/helper';
import { TextInput, ViewDocument } from '../../../../components';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import getStyles from './styles';

const AdminCategoryAdd = ({
  actions,
  categoryId,
  setOpenCategoryModal,
  setActions,
  listApi
}) => {
  const styles = getStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);
  const [viewImage, setViewImage] = useState('');
  const [viewImageName, setViewImageName] = useState('');
  const categoryData = useSelector((state) => state?.category ?? null);
  const categorySaveResponse = categoryData?.categorySave ?? null;
  const categoryGetResponse = categoryData?.categoryGet ?? null;
  const {
    handleSubmit,
    control,
    setValue,
    clearErrors,
    getValues,
    reset,
    formState: { errors }
  } = useForm({ values: formData });

  useEffect(() => {
    if (actions === 'update' && categoryId !== 0) {
      getApi();
    } else {
      setFormData({});
    }
  }, []);

  const getApi = () => {
    setFormData({});
    dispatch(getCategoryGet(categoryId));
  };

  useEffect(() => {
    if (categoryGetResponse) {
      setFormData(categoryGetResponse);
    }
  }, [categoryGetResponse]);

  const onSubmit = (data) => {
    dispatch(getCategorySave(data));
  };

  useEffect(() => {
    if (!isEmptyObject(categorySaveResponse) && categorySaveResponse !== '') {
      if (categorySaveResponse?.responseStatus === 'Success') {
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
          setNotification({ isActive: true, messageId: categorySaveResponse })
        );
      }
    }
    dispatch(getCategorySave({ clearData: true }));
  }, [categorySaveResponse]);

  let logoselecetdFile = '';
  const handleFileUpload = (event, filekey, fileName, fileUrl, format) => {
    if (event !== null) {
      if (event.target === undefined) {
        logoselecetdFile = event;
      } else {
        logoselecetdFile = event.target.files[0];
      }
      const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes
      if (logoselecetdFile) {
        if (logoselecetdFile.size < maxFileSize) {
          var reader = new FileReader();
          var imagetype = logoselecetdFile.type;
          var imagedatatype = imagetype.split('/');
          var img_crt_type = imagedatatype[1];
          if (
            (format === 'file' &&
              (img_crt_type === 'jpeg' ||
                img_crt_type === 'jpg' ||
                img_crt_type === 'png' ||
                img_crt_type === 'pdf')) ||
            (format === 'image' &&
              (img_crt_type === 'jpeg' ||
                img_crt_type === 'jpg' ||
                img_crt_type === 'png'))
          ) {
            setValue(filekey, '');
            setValue(fileName, '');
            setValue(fileUrl, '');
            var fileValue = logoselecetdFile;
            reader.readAsDataURL(logoselecetdFile);
            reader.onload = () => {
              var logourl1 = reader.result;
              var spl = logourl1.split(',');
              var ImageValue = spl[1];
              var img_name = fileValue.name;
              setValue(filekey, ImageValue);
              setValue(fileName, img_name);
              setValue(fileUrl, logourl1);
              clearErrors(filekey);
              clearErrors(fileName);
              clearErrors(fileUrl);
            };
          } else {
            dispatch(setNotification({ isActive: true, messageId: 12 }));
          }
        } else {
          dispatch(setNotification({ isActive: true, messageId: 14 }));
        }
      }
    }
  };

  const handleClickOpen = (value, name) => {
    setViewImage(value);
    setViewImageName(name);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onError = (event) => {
    console.log('error Data:', event);
    dispatch(setNotification({ isActive: true, messageId: 101 }));
  };

  const validateNumber = (value) => {
    if (!/^\d{1,4}$/.test(value)) {
      return 'Sequence Number must contain only numbers and can have 1 to 4 digits';
    }
  };

  const handleCloseCategory = () => {
    reset();
    setOpenCategoryModal(false);
    setActions('');
    dispatch(getCategoryGet({ clearData: true }));
  };

  const backBtn = () => {
    reset();
    setOpenCategoryModal(false);
  };

  return (
    <Box sx={styles.categoryAddSection}>
      <Typography variant="h6" sx={styles.categoryTitle}>
        Category Details
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
                    name="categoryName"
                    type="text"
                    textLable="Category Name *"
                    placeholderName="Enter your Category Name"
                    variant="outlined"
                    requiredMsg="Category Name is required"
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
                    name="description"
                    type="text"
                    textLable="Category Description *"
                    placeholderName="Enter your Category Description"
                    variant="outlined"
                    requiredMsg="Category Description is required"
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
                    name="sequence"
                    type="text"
                    textLable="Sequence Number *"
                    placeholderName="Enter Sequence Number"
                    variant="outlined"
                    requiredMsg="Sequence Number is required"
                    onKeyDownData={validateNumberonly}
                    validate={{
                      validateNumber
                    }}
                    inputProps={{ minLength: 1, maxLength: 4 }}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                {getValues('imageName') ? (
                  <>
                    <Box sx={styles.inputBackground}>
                      <Typography
                        sx={{ marginBottom: '20px', textAlign: 'center' }}
                      >
                        Uploaded Category Image
                        <span style={styles.textDanger}> *</span>
                      </Typography>
                      <Box sx={styles.uploadedBtnBox}>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          sx={{ marginBottom: '20px', textAlign: 'center' }}
                        >
                          <Controller
                            name="imageName"
                            control={control}
                            defaultValue=""
                            rules={{
                              required: 'Category Image is required'
                            }}
                            render={({ field }) => (
                              <Button
                                component="label"
                                variant="contained"
                                color="success"
                                {...field}
                                sx={styles.uploadedBtn}
                                onChange={(e) =>
                                  handleFileUpload(
                                    e,
                                    'image',
                                    'imageName',
                                    'imageUrl',
                                    'image'
                                  )
                                }
                                startIcon={<CloudDoneIcon />}
                                href="#file-upload"
                              >
                                Uploaded ( Click to Change)
                                <VisuallyHiddenInput type="file" />
                              </Button>
                            )}
                          />
                        </Grid>
                        <Grid
                          item
                          lg={6}
                          md={6}
                          sm={12}
                          xs={12}
                          sx={{ marginBottom: '20px' }}
                        >
                          <Button
                            style={styles.previewButton}
                            size="medium"
                            sx={{ width: '95%' }}
                            variant="contained"
                            onClick={() =>
                              handleClickOpen(
                                getValues('image'),
                                getValues('imageUrl') || getValues('imageName')
                              )
                            }
                          >
                            Preview
                          </Button>
                        </Grid>
                      </Box>
                      <Box>
                        <Typography style={styles.fontsm1}>
                          Maximum 5 mb allowed doc (Accepted Format: png, jpg,
                          jpeg)
                          <span sx={styles.textDanger}> *</span>
                        </Typography>
                      </Box>
                    </Box>
                  </>
                ) : (
                  <Box sx={styles.inputBackground}>
                    <Controller
                      name="imageName"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'Category Image is required' }}
                      render={({ field }) => (
                        <TextField
                          variant="outlined"
                          label="Upload Category Image *"
                          placeholder="Upload Category Image"
                          fullWidth
                          type="text"
                          {...field}
                          disabled
                        />
                      )}
                    />
                    <FormHelperText sx={styles.textDanger}>
                      {errors.imageName && errors.imageName.message}
                    </FormHelperText>
                    <Box sx={styles.recomended}>
                      <Typography sx={styles.fontsm}>
                        Maximum 5 mb allowed doc (Accepted Format: png, jpg,
                        jpeg)
                      </Typography>
                      <label
                        style={styles.labelbtn}
                        onChange={(e) =>
                          handleFileUpload(
                            e,
                            'image',
                            'imageName',
                            'imageUrl',
                            'image'
                          )
                        }
                        href="#file-upload"
                      >
                        Upload
                        <VisuallyHiddenInput type="file" />
                      </label>
                    </Box>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              sx={styles.discardBtn}
              onClick={() => handleCloseCategory()}
            >
              Close
            </Button>
            <Button type="submit" variant="contained" sx={styles.saveBtn}>
              Save
            </Button>
          </Box>
        </form>
      </Box>
      <ViewDocument
        viewImage={viewImage}
        viewImageName={viewImageName}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default AdminCategoryAdd;
