import {configureStore} from '@reduxjs/toolkit';
import  userSlice  from "../User";
import  tasksSlice from "../Tasks";

export default configureStore({
  reducer: {
    user: userSlice,
    tasks: tasksSlice,
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({serializableCheck: false}),
});
