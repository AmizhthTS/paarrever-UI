import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subscriptionplan: {},
  supportSave: {}
};

export const Admin = createSlice({
  name: 'Admin',
  initialState,
  reducers: {
    getSubscriptionPlan() {},
    setSubscriptionPlan: (state, action) => {
      const data = action.payload;
      state.subscriptionplan = data;
    },
    getSupportSave() {},
    setSupportSave: (state, action) => {
      const data = action.payload;
      state.supportSave = data;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  getSubscriptionPlan,
  setSubscriptionPlan,
  getSupportSave,
  setSupportSave
} = Admin.actions;

export default Admin.reducer;
