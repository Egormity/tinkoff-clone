import { createSlice } from '@reduxjs/toolkit';

const initialSatate = {
  loginStage: 'notStarted',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialSatate,
  reducers: {
    startLogin(state) {
      state.loginStage = 'inProcess';
    },
  },
});

export const { startLogin } = userSlice.actions;
export default userSlice.reducer;
