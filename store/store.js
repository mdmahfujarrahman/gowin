import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import authReducer from './slices/authSlice/authSlice';

// combine reducers
const reducer = combineReducers({
  auth: authReducer,
});

// create store
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
