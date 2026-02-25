import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: null,
  logout: null
};

export const Authenticate = createSlice({
  name: 'Authenticate',
  initialState,
  reducers: {
    getLogin() {},
    setLogin: (state, action) => {
      const data = action.payload;
      state.login = data;
    },
    getLogout() {},
    setLogout: (state, action) => {
      const data = action.payload;
      state.logout = data;
    }
  }
});

// Action creators are generated for each case reducer function
export const { getLogin, setLogin, getLogout, setLogout } =
  Authenticate.actions;

export default Authenticate.reducer;
