import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categorySave: {},
  categoryList: {},
  categoryDropdownList: {},
  categoryGet: {},
  categoryRemove: {},
  categoryNameGet: {},
  subCategoryList: {},
  subCategorySave: {},
  subCategoryGet: {},
  subCategoryRemove: {}
};

export const Category = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    getCategorySave() {},
    setCategorySave: (state, action) => {
      const data = action.payload;
      state.categorySave = data;
    },
    getCategoryList() {},
    setCategoryList: (state, action) => {
      const data = action.payload;
      state.categoryList = data;
    },
    getCategoryDropdownList() {},
    setCategoryDropdownList: (state, action) => {
      const data = action.payload;
      state.categoryDropdownList = data;
    },
    getCategoryGet() {},
    setCategoryGet: (state, action) => {
      const data = action.payload;
      state.categoryGet = data;
    },
    getCategoryRemove() {},
    setCategoryRemove: (state, action) => {
      const data = action.payload;
      state.categoryRemove = data;
    },
    getSubCategoryList() {},
    setSubCategoryList: (state, action) => {
      const data = action.payload;
      state.subCategoryList = data;
    },
    getSubCategoryGet() {},
    setSubCategoryGet: (state, action) => {
      const data = action.payload;
      state.subCategoryGet = data;
    },
    getSubCategoryRemove() {},
    setSubCategoryRemove: (state, action) => {
      const data = action.payload;
      state.subCategoryRemove = data;
    },
    getSubCategorySave() {},
    setSubCategorySave: (state, action) => {
      const data = action.payload;
      state.subCategorySave = data;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  getCategorySave,
  setCategorySave,
  getCategoryList,
  setCategoryList,
  getCategoryDropdownList,
  setCategoryDropdownList,
  getCategoryGet,
  setCategoryGet,
  getCategoryRemove,
  setCategoryRemove,
  getSubCategoryList,
  setSubCategoryList,
  getSubCategoryGet,
  setSubCategoryGet,
  getSubCategoryRemove,
  setSubCategoryRemove,
  getSubCategorySave,
  setSubCategorySave
} = Category.actions;

export default Category.reducer;
