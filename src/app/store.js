import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import settingsReducer from '../features/settings/settingsSlice';
// ... import other reducers

export const store = configureStore({
  reducer: {
    auth: authReducer,
    settings: settingsReducer,
    // other reducers
  },
});
