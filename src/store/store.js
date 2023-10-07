import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './apis/authApis';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    auth : authApi.reducer,
    authSlice : authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store