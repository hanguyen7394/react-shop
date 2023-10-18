import { configureStore } from '@reduxjs/toolkit';
import { ENV } from './constant/enviroments';
import authReducer from './reducers/authReducer';
import mainReducer from './reducers/mainReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    main: mainReducer,
  },
  devTools: ENV === 'development',
});

export default store;
