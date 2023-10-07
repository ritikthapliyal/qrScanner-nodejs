import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './apis/authApis'
import authSlice from './authSlice'
import { dashboardApi } from './apis/dashboardApis'

const store = configureStore({
  reducer: {
    auth : authApi.reducer,
    dashboard : dashboardApi.reducer,
    authSlice : authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(dashboardApi.middleware),
})

export default store