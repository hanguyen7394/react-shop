import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartService from '../services/cartService';
import { message } from 'antd';
import tokenMethod from '../utils/token';
import { handleShowModal } from './authReducer';
import { MODAL_TYPES } from '../constant/common';

const initialState = {
  cartInfo: {},
  cartLoading: false,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    updateCart: (state, action) => {
      state.cartInfo = action.payload || state.cartInfo;
    },
    clearCart: (state) => {
      state.cartInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGetCart.pending, (state) => {
        state.cartLoading = true;
      })
      .addCase(handleGetCart.fulfilled, (state) => {
        state.cartLoading = false;
      })
      .addCase(handleGetCart.rejected, (state) => {
        state.cartLoading = false;
      });
  },
});

export const handleGetCart = createAsyncThunk('cart/handleGetCart', async (_, { dispatch, rejectWithValue }) => {
  if (!!tokenMethod.get()) {
    try {
      const res = await cartService.getCart();
      if (res?.data?.data) {
        dispatch(updateCart(res?.data?.data));
        return res?.data?.data;
      }
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
});

export const handleRemoveCartThunk = createAsyncThunk(
  'cart/handleRemoveCartThunk',
  async (payload, { dispatch, getState, rejectWithValue }) => {
    const { removeIndex } = payload;
    const { cartInfo } = getState()?.cart || {};
    const { product, quantity, variant, totalProduct } = cartInfo || {};

    let newProduct = product?.map((product) => product.id);
    let newQuantity = [...quantity];
    let newVariant = [...variant];
    let newTotalProduct = [...totalProduct];
    newProduct.splice(removeIndex, 1);
    newQuantity.splice(removeIndex, 1);
    newVariant.splice(removeIndex, 1);
    newTotalProduct.splice(removeIndex, 1);

    const newSubTotal = [...newTotalProduct]?.reduce((sum, product) => Number(sum) + Number(product), 0) || 0;
    const newTotal = newSubTotal - (cartInfo?.discount ?? 0) + (cartInfo?.shipping?.price ?? 0);

    const removePayload = {
      ...cartInfo,
      variant: newVariant,
      subTotal: newSubTotal,
      total: newTotal,
      product: newProduct,
      quantity: newQuantity,
      totalProduct: newTotalProduct,
      shipping: newProduct?.length >  0 ? cartInfo?.shipping : {},
      discount: newProduct?.length >  0 ? cartInfo?.discount : 0,
    };

    try {
      const res = await cartService.updateCart(removePayload);
      if (res?.data?.data?.id) {
        dispatch(handleGetCart());
        message.success('Removed from cart successfully');
        return res?.data?.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const handleAddCartThunk = createAsyncThunk(
  'cart/handleAddCartThunk',
  async (payload, { dispatch, getState, rejectWithValue }) => {
    if (!tokenMethod.get()) {
      dispatch(handleShowModal(MODAL_TYPES.LOGIN));
      return;
    }
    const { addedId, addedColor, addedQuantity, addedPrice } = payload;
    const { cartInfo } = getState()?.cart || {};
    let addPayload = {};
    if (cartInfo?.id) {
      const matchIndex = cartInfo.product?.findIndex(
        (product, index) => product.id === addedId && cartInfo.variant[index] === addedColor
      );
      const newProduct = cartInfo.product?.map((product) => product.id);
      const newQuantity = [...(cartInfo.quantity ?? [])];
      const newVariant = [...(cartInfo.variant ?? [])];
      const newTotalProduct = [...(cartInfo.totalProduct ?? [])];

      if (matchIndex > -1) {
        newQuantity[matchIndex] = Number(newQuantity[matchIndex] + Number(addedQuantity));
        newVariant[matchIndex] = addedColor;
        newTotalProduct[matchIndex] = Number(newTotalProduct[matchIndex]) + addedPrice * addedQuantity;
      } else {
        newProduct.push(addedId);
        newQuantity.push(addedQuantity);
        newVariant.push(addedColor);
        newTotalProduct.push(addedPrice * addedQuantity);
      }

      const newSubTotal = newTotalProduct.reduce((sum, product) => Number(sum) + Number(product), 0) || 0;
      const newTotal = newSubTotal - cartInfo.discount;

      addPayload = {
        ...cartInfo,
        variant: newVariant,
        subTotal: newSubTotal,
        total: newTotal,
        product: newProduct,
        quantity: newQuantity,
        totalProduct: newTotalProduct,
      };
    } else {
      addPayload = {
        variant: addedColor,
        subTotal: addedPrice * addedQuantity,
        total: addedPrice * addedQuantity,
        product: [addedId],
        quantity: [addedQuantity],
        totalProduct: [addedPrice * addedQuantity],
        discount: 0,
        paymentMethod: '',
      };
    }

    try {
      const res = await cartService.updateCart(addPayload);
      if (res?.data?.data?.id) {
        dispatch(handleGetCart());
        message.success('Added to cart successfully');
        return res?.data?.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const { reducer: cartReducer, actions } = cartSlice;
export const { updateCart, clearCart } = actions;
export default cartReducer;
