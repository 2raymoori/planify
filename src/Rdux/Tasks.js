import {createSlice} from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: null,
  },
  reducers: {
    setTasks: (state, action) => {
      // console.log("from task reducer/ slice :::>>> ",action);
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setTasks} = tasksSlice.actions;

export default tasksSlice.reducer;
