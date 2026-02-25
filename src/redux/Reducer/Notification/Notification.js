import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notificationData: {}
};

export const Notification = createSlice({
  name: 'Notification',
  initialState,
  reducers: {
    getNotification() {},
    setNotification: (state, action) => {
      const data = action.payload;
      state.notificationData = data;
    }
  }
});

// Action creators are generated for each case reducer function
export const { getNotification, setNotification } = Notification.actions;

export default Notification.reducer;
