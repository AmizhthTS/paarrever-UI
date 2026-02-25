import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
};

export const Loader = createSlice({
  name: 'Loader',
  initialState,
  reducers: {
    getLoading() {},
    setLoading: (state, action) => {
      const data = action.payload;
      state.isLoading = data;
    }
  }
});

// Action creators are generated for each case reducer function
export const { getLoading, setLoading } = Loader.actions;

export default Loader.reducer;
