import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryList,
  getSubCategoryGet,
  getSubCategorySave
} from '../../../../redux/Reducer/Category/Category';
import { setNotification } from '../../../../redux/Reducer/Notification/Notification';
import { isEmptyObject, isWhitespace } from '../../../../utils/helper';
import { TextInput } from '../../../../components';
import getStyles from './styles';

const AdminSubCategoryAdd = ({
  actions,
  subcategoryId,
  setOpenSubCategoryModal,
  setActions,
  listApi
}) => {
  const styles = getStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const categoryData = useSelector((state) => state?.category ?? null);
  const categoryListResponse = categoryData?.categoryList ?? null;
  const subCategorySaveResponse = categoryData?.subCategorySave ?? null;
  const subCategoryGetResponse = categoryData?.subCategoryGet ?? null;
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({ values: formData });

  useEffect(() => {
    if (actions === 'update' && subcategoryId !== 0) {
      getApi();
    } else {
      setFormData({});
    }
  }, []);

  useEffect(() => {
    categoryListApi();
  }, []);

  const getApi = () => {
    setFormData({});
    dispatch(getSubCategoryGet(subcategoryId));
  };

  useEffect(() => {
    if (subCategoryGetResponse) {
      setFormData(subCategoryGetResponse);
      setCategoryId(subCategoryGetResponse.categoryId);
    }
  }, [subCategoryGetResponse]);

  const categoryListApi = () => {
    setCategoryList([]);
    let req = {
      listSize: 1000,
      pageNumber: 1,
      searchString: ''
    };
    dispatch(getCategoryList(req));
  };

  useEffect(() => {
    if (categoryListResponse) {
      if (categoryListResponse?.response?.responseStatus === 'Success') {
        setCategoryList(categoryListResponse?.categories);
      }
    }
  }, [categoryListResponse]);

  const onSubmit = (data) => {
    data.categoryId = categoryId;
    dispatch(getSubCategorySave(data));
  };

  useEffect(() => {
    if (
      !isEmptyObject(subCategorySaveResponse) &&
      subCategorySaveResponse !== ''
    ) {
      if (subCategorySaveResponse?.responseStatus === 'Success') {
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
          setNotification({
            isActive: true,
            messageId: subCategorySaveResponse
          })
        );
      }
    }
    dispatch(getSubCategorySave({ clearData: true }));
  }, [subCategorySaveResponse]);

  const onError = (event) => {
    console.log('error Data:', event);
    dispatch(setNotification({ isActive: true, messageId: 101 }));
  };

  const handleSelectSubCategory = (id) => {
    setCategoryId(id);
  };

  const handleCloseSubCategory = () => {
    reset();
    setOpenSubCategoryModal(false);
    setActions('');
    dispatch(getSubCategoryGet({ clearData: true }));
  };

  const backBtn = () => {
    reset();
    setOpenSubCategoryModal(false);
  };

  return (
    <Box sx={styles.categoryAddSection}>
      <Typography variant="h6" sx={styles.categoryTitle}>
        Subcategory Details
      </Typography>
      <Box>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Box sx={styles.categoryAddDiv}>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={styles.inputBackground}>
                  <Autocomplete
                    id="combo-box-demo"
                    value={
                      categoryList.find((option) => option.id === categoryId) ||
                      null
                    }
                    options={categoryList}
                    getOptionLabel={(option) => option.categoryName}
                    onChange={(e, selectedOption) => {
                      handleSelectSubCategory(
                        selectedOption ? selectedOption.id : null
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Category Name"
                        inputProps={{ ...params.inputProps }}
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={styles.inputBackground}>
                  <TextInput
                    control={control}
                    errors={errors}
                    name="subCategoryName"
                    type="text"
                    textLable="Subcategory Name *"
                    placeholderName="Enter your Subcategory Name"
                    variant="outlined"
                    requiredMsg="Subcategory Name is required"
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
                    textLable="Subcategory Description *"
                    placeholderName="Enter your Subcategory Description"
                    variant="outlined"
                    requiredMsg="Subcategory Description is required"
                    validate={{
                      noWhitespace: (value) =>
                        !isWhitespace(value) || 'Whitespace not allowed'
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              sx={styles.discardBtn}
              onClick={() => handleCloseSubCategory()}
            >
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

export default AdminSubCategoryAdd;
