import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../api/userService';

// Async Thunks for API calls
export const registerUser = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await userService.registerUser(data);
      localStorage.setItem('yoga_user', JSON.stringify(response));
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }

  // async(data)=>{}
);



export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await userService.loginUser(credentials);
      localStorage.setItem('yoga_user', JSON.stringify(response));
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await userService.updateUserProfile(id, data);
      localStorage.setItem('yoga_user', JSON.stringify(response));
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Update failed');
    }
  }
);

export const deleteAccount = createAsyncThunk(
  'auth/delete',
  async (id, { rejectWithValue }) => {
    try {
      await userService.deleteUser(id);
      localStorage.removeItem('yoga_user');
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Delete failed');
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem('yoga_user')) || null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('yoga_user');
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Update
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      // Delete
      .addCase(deleteAccount.fulfilled, (state) => {
        state.user = null;
      });
  }
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
