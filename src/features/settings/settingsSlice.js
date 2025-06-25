// src/features/settings/settingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emailNotifications: true,
  currency: 'USD',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
