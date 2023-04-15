import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("ACTION...!!! ",action);
      state.data = action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
