import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowNavbar: false,
  selectedTab: 'main',
};

const mainSlice = createSlice({
  initialState,
  name: 'main',
  reducers: {
    handleToggleNavbar: (state, action) => {
      state.isShowNavbar = typeof action.payload !== "undefined" ? action.payload : !state.isShowNavbar;
    },
    handleChangeTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

const { reducer: mainReducer, actions } = mainSlice;
export const { handleToggleNavbar, handleChangeTab } = actions;
export default mainReducer;
