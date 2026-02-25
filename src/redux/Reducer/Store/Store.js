import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  storeSave: {},
  storeList: {},
  storeGet: {},
  storeRemove: {},
  storeMainArea: {},
  storeSubArea: {}
};

export const Store = createSlice({
  name: 'Store',
  initialState,
  reducers: {
    getStoreSave() {},
    setStoreSave: (state, action) => {
      const data = action.payload;
      state.storeSave = data;
    },
    getStoreList() {},
    setStoreList: (state, action) => {
      const data = action.payload;
      state.storeList = data;
    },
    getStoreGet() {},
    setStoreGet: (state, action) => {
      const data = action.payload;
      state.storeGet = data;
    },
    getStoreRemove() {},
    setStoreRemove: (state, action) => {
      const data = action.payload;
      state.storeRemove = data;
    },
    getStoreMain() {},
    setStoreMain: (state, action) => {
      const data = action.payload;
      state.storeMainArea = data;
    },
    getStoreSub() {},
    setStoreSub: (state, action) => {
      const data = action.payload;
      state.storeSubArea = data;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  getStoreSave,
  setStoreSave,
  getStoreList,
  setStoreList,
  getStoreGet,
  setStoreGet,
  getStoreRemove,
  setStoreRemove,
  getStoreMain,
  setStoreMain,
  getStoreSub,
  setStoreSub
} = Store.actions;

export default Store.reducer;
