import { createSlice } from '@reduxjs/toolkit';
import {
  isUserExistThunk,
  requestOtpThunk,
} from '../../actions/authAction/authAction';
import notification from '../../../helper/nottification/nottification';

const initialState = {
  isUserExist: null,
  isOtpSent: false,
  token: null,
  user: null,
  error: {
    isError: false,
    message: '',
  },
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // check user exist
    builder.addCase(isUserExistThunk.pending, state => {
      state.isLoading = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(isUserExistThunk.fulfilled, (state, action) => {
      if (action.payload.data.data === "User doesn't exist") {
        state.isUserExist = action.payload.data.data;
        state.error = {
          isError: false,
          message: '',
        };
        state.isLoading = true;
      } else {
        notification('error', 'User already exist , Please login');
        state.isUserExist = action.payload.data.data;
        state.error = {
          isError: false,
          message: '',
        };
        state.isLoading = false;
      }
    });
    builder.addCase(isUserExistThunk.rejected, (state, action) => {
      state.error = {
        isError: true,
        message: action.payload?.response?.data?.message,
      };
      state.isLoading = false;
    });
    // send otp with firebase
    builder.addCase(requestOtpThunk.pending, state => {
      state.isLoading = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(requestOtpThunk.fulfilled, state => {
      notification('success', 'OTP sent successfully');
      state.isOtpSent = true;
      state.error = {
        isError: false,
        message: '',
      };
      state.isLoading = false;
    });
    builder.addCase(requestOtpThunk.rejected, (state, action) => {
      if (action.payload.code === 'auth/too-many-requests') {
        notification('error', 'Too many request, please try again later');
        state.error = {
          isError: true,
          message: 'Too many request, please try again later',
        };
        state.isLoading = false;
        return;
      } else if (action.payload.code === 'auth/invalid-phone-number') {
        notification('error', 'Invalid phone number');
        state.error = {
          isError: true,
          message: 'Invalid phone number',
        };
        state.isLoading = false;
        return;
      } else if (action.payload.code === 'auth/missing-phone-number') {
        notification('error', 'Please enter your phone number');
        state.error = {
          isError: true,
          message: 'Please enter your phone number',
        };
        state.isLoading = false;
        return;
      } else if (action.payload.code === 'auth/quota-exceeded') {
        console.log('hello');
        notification('error', 'Quota exceeded, please try again later');
        state.error = {
          isError: true,
          message: 'Quota exceeded',
        };
        state.isLoading = false;
        return;
      } else if (action.payload.code === 'auth/user-disabled') {
        notification('error', 'User disabled');
        state.error = {
          isError: true,
          message: 'User disabled',
        };
        state.isLoading = false;
        return;
      } else if (action.payload.code === 'auth/operation-not-allowed') {
        notification('error', 'Operation not allowed');
        state.error = {
          isError: true,
          message: 'Operation not allowed',
        };
        state.isLoading = false;
        return;
      } else {
        notification('error', 'Something went wrong');
        state.error = {
          isError: true,
          message: 'Something went wrong',
        };
        state.isLoading = false;
        return;
      }
    });
  },
});

// export const {} = authSlice.actions;

export default authSlice.reducer;
