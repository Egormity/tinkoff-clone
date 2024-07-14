import { createSlice } from '@reduxjs/toolkit';

const initialSatate = {
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialSatate,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

export default userSlice.reducer;
