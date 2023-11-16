import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tokenMethod from '../utils/token';
import authService from '../services/authService';
import { message } from 'antd';
import { handleGetCart } from './cartReducer';
import { updateWishlist } from './wishlistReducer';

const initialState = {
  showedModal: '',
  profile: null,
  loading: {
    login: false,
    register: false,
    getProfile: false,
  },
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    handleShowModal: (state, action) => {
      state.showedModal = action.payload;
    },
    handleCloseModal: (state) => {
      state.showedModal = '';
    },
    handleLogout: (state) => {
      state.profile = null;
      tokenMethod.remove();
      state.showedModal = '';
      message.success('Signed out successfully');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleRegister.pending, (state) => {
        state.loading.register = true;
      })
      .addCase(handleRegister.fulfilled, (state) => {
        state.loading.register = false;
      })
      .addCase(handleRegister.rejected, (state) => {
        state.loading.register = false;
      })

      .addCase(handleLogin.pending, (state) => {
        state.loading.login = true;
      })
      .addCase(handleLogin.fulfilled, (state) => {
        state.loading.login = false;
        state.showedModal = '';
      })
      .addCase(handleLogin.rejected, (state) => {
        state.loading.login = false;
      })

      .addCase(handleGetProfile.pending, (state) => {
        state.loading.getProfile = true;
      })
      .addCase(handleGetProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading.getProfile = false;
      })
      .addCase(handleGetProfile.rejected, (state) => {
        state.loading.getProfile = false;
      });
  },
});

export const handleLogin = createAsyncThunk('auth/handleLogin', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const res = await authService.login(payload);
    const { token: accessToken, refreshToken } = res?.data?.data || {};
    tokenMethod.set({
      accessToken,
      refreshToken,
    });
    dispatch(handleGetProfile());
    dispatch(handleGetCart());
    message.success('Signed in successfully');
    return true;
  } catch (error) {
    const errorInfo = error?.response?.data;
    if (errorInfo.error === 'Not Found') {
      message.error('Username or password is incorrect');
    }
    return rejectWithValue(errorInfo);
  }
});

export const handleRegister = createAsyncThunk('auth/register', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const res = await authService.register(payload);
    if (res?.data?.data?.id) {
      dispatch(
        handleLogin({
          email: payload.email,
          password: payload.password,
        })
      );
      message.success('Registered successfully');
    }
  } catch (error) {
    const errorInfo = error?.response?.data;
    if (errorInfo.error === 'Forbidden') {
      message.error('Email already exists');
    }
    return rejectWithValue(errorInfo);
  }
});

export const handleGetProfile = createAsyncThunk('auth/handleGetProfile', async (_, { dispatch, rejectWithValue }) => {
  if (!!tokenMethod.get()) {
    try {
      const res = await authService.getProfile();
      if (res?.data?.data) {
        dispatch(updateWishlist(res?.data?.data?.whiteList));
        return res?.data?.data;
      }
    } catch (error) {
      dispatch(handleLogout());
      return rejectWithValue(error?.response?.data);
    }
  }
});

const { reducer: authReducer, actions } = authSlice;
export const { handleShowModal, handleLogout, handleCloseModal } = actions;
export default authReducer;
