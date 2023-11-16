import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import authService from '../services/authService';
import { handleGetProfile, handleShowModal } from './authReducer';
import tokenMethod from '../utils/token';
import { MODAL_TYPES } from '../constant/common';

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  initialState,
  name: 'wishlist',
  reducers: {
    updateWishlist: (state, action) => {
      state.wishlist = action.payload || state.wishlist;
    },
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const handleAddWishlistThunk = createAsyncThunk(
  'wishlist/handleAddWishlistThunk',
  async ({ productId }, { dispatch, rejectWithValue }) => {
    if (!tokenMethod.get()) {
      dispatch(handleShowModal(MODAL_TYPES.LOGIN));
      return;
    }

    const payload = {
      product: productId,
    };

    try {
      const res = await authService.addToWishList(payload);
      console.log('res :>> ', res);
      if (res?.data?.data?.id) {
        dispatch(handleGetProfile());
        message.success('Add to wishlist successfully');
        return res?.data?.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleRemoveWishlistThunk = createAsyncThunk(
  'wishlist/handleRemoveWishlistThunk',
  async ({ productId }, { dispatch, rejectWithValue }) => {
    if (!tokenMethod.get()) {
      dispatch(handleShowModal(MODAL_TYPES.LOGIN));
      return;
    }

    const payload = {
      product: productId,
    };

    try {
      const res = await authService.removeFromWishList(payload);
      if (res?.data?.data?.id) {
        dispatch(handleGetProfile());
        message.success('Remove to wishlist successfully');
        return res?.data?.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const { reducer: wishlistReducer, actions } = wishlistSlice;
export const { updateWishlist, clearWishlist } = actions;
export default wishlistReducer;
