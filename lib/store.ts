import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';

export const breifitStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
    },
  });
};

export type AppStore = ReturnType<typeof breifitStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];