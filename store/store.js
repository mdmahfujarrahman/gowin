import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import authReducer from './slices/authSlice/authSlice';
import dashboardReducer from './slices/dashboardSlice/dashboardSlice';
import pendingUserReducer from './slices/pendingUserSlice/pendingUserSlice';
import activeUserReducer from './slices/activeUserSlice/activeUserSlice';
import { envConfig } from '../lib/config';

// combine reducers
const reducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  pendingUser: pendingUserReducer,
  activeUser: activeUserReducer,
});

// create store
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: envConfig.env !== 'production',
});
