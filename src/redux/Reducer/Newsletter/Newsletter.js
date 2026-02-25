import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsletterSubscribtionSave: {},
  settingGet: {},
  privacyDisclaimersSave: {},
  privacyDisclaimersGet: {},
  customHeaderList: {},
  notificationPublicList: {},
  seoGet: {},
  appointmentGet: {},
  appointmentSave: {},
  purposeList: {},
  dateList: {},
  eventList: {},
  testimonialSave: {},
  testimonialList: {}
};

export const Newsletter = createSlice({
  name: 'Newsletter',
  initialState,
  reducers: {
    getNewsletterSubscribtionSave() {},
    setNewsletterSubscribtionSave: (state, action) => {
      const data = action.payload;
      state.newsletterSubscribtionSave = data;
    }
  }
});

// Action creators are generated for each case reducer function
export const { getNewsletterSubscribtionSave, setNewsletterSubscribtionSave } =
  Newsletter.actions;

export default Newsletter.reducer;
