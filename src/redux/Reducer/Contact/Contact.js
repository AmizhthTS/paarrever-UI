import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactSave: {},
  contactList: {}
};

export const Contact = createSlice({
  name: 'Contact',
  initialState,
  reducers: {
    getContactSave() {},
    setContactSave: (state, action) => {
      const data = action.payload;
      state.contactSave = data;
    },
    getContactList() {},
    setContactList: (state, action) => {
      const data = action.payload;
      state.contactList = data;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  getContactSave,
  setContactSave,
  getContactList,
  setContactList
} = Contact.actions;

export default Contact.reducer;
