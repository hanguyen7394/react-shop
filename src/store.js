import { configureStore } from '@reduxjs/toolkit';
import { ENV } from './constant/enviroments';
import authReducer from './reducers/authReducer';
import mainReducer from './reducers/mainReducer';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    main: mainReducer,
    cart: cartReducer,
  },
  devTools: ENV === 'development',
});

export default store;
