import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartService from '../services/cartService';
import { message } from 'antd';
import tokenMethod from '../utils/token';

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

export const handleUpdateCart = createAsyncThunk(
  'cart/handleUpdateCart',
  async (payload, { dispatch, getState, rejectWithValue }) => {
    const { addedId, addedColor, addedQuantity, addedPrice } = payload;
    const { cartInfo } = getState()?.cart || {};
    let addPayload = {};
    if (cartInfo?.id) {
      const matchIndex = cartInfo.product?.findIndex((product, index) => product.id === addedId && cartInfo.variant[index] === addedColor);
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
        message.success('Cart updated successfully');
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
