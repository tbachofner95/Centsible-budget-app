import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// MOCK signupUser thunk — replace with real API or Firebase later
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({ email, password }, thunkAPI) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({ user: { email }, token: 'fake-signup-token' });
        } else {
          reject('Signup failed');
        }
      }, 1000);
    });
  }
);


// Example async thunk for login (mocked for now)
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    // TODO: Replace with real API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({ user: { email }, token: 'fake-jwt-token' });
        } else {
          reject('Invalid credentials');
        }
      }, 1000);
    });
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
    // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      
      // SIGNUP
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Signup failed';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
