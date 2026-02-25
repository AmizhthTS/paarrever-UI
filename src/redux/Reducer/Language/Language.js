import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: localStorage.getItem('lang') || 'en'
};

export const Language = createSlice({
  name: 'Language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('lang', action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { setLanguage } = Language.actions;

export default Language.reducer;
