import { createSlice } from '@reduxjs/toolkit';
import {
  isUserExistThunk,
  requestOtpThunk,
  signUpThunk,
  verifyOtpThunk,
} from '../../actions/authAction/authAction';
import notification from '../../../helper/nottification/nottification';

const initialState = {
  isUserExist: null,
  isOtpVerified: false,
  isResend: false,
  token: null,
  newUserData: null,
  route: 'register',
  resetRoute: 'reset',
  resetUser: null,
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
  reducers: {
    manageAuthRoute: (state, action) => {
      state.route = action.payload;
    },
    manageResetRoute: (state, action) => {
      state.resetRoute = action.payload;
      if (action.payload === 'reset') {
        state.resetUser = null;
      }
    },
    resendOtpThunk: state => {
      state.isResend = true;
    },
  },
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
        if (action.payload.payload.type === 'signup') {
          state.isUserExist = action.payload.data.data;
          state.newUserData = action.payload.payload;
          state.error = {
            isError: false,
            message: '',
          };
          state.isLoading = true;
        } else {
          notification('error', "User doesn't exist");
          state.error = {
            isError: false,
            message: '',
          };
          state.isLoading = false;
        }
      } else {
        if (action.payload.payload.type === 'resetPassword') {
          const payload = {
            ...action.payload.payload,
            userId: action?.payload?.data?.data?._id,
          };
          state.resetUser = payload;
          state.error = {
            isError: true,
            message: "User doesn't exist",
          };
          state.isLoading = true;
          return;
        } else if (action.payload.payload.type === 'signup') {
          notification('error', 'User already exist , Please login');
          state.isUserExist = action.payload.data.data;
          state.newUserData = action.payload.payload;
          state.error = {
            isError: false,
            message: '',
          };
          state.isLoading = false;
        }
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
      if (state.isResend) {
        state.isLoading = false;
      } else {
        state.isLoading = true;
      }
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(requestOtpThunk.fulfilled, (state, action) => {
      if (action.payload.isResend) {
        notification('success', 'OTP resent successfully');
        state.isResend = false;
      } else {
        if (action.payload.type === 'resetPassword') {
          const payload = {
            phoneNumber: action.payload.phoneNumber,
            countryCode: action.payload.countryCode,
            userId: action.payload.userId,
            type: action.payload.type,
          };
          notification('success', 'OTP sent successfully');
          state.resetUser = {
            ...state.resetUser,
            ...payload,
          };
          state.isOtpSent = true;
          state.isLoading = false;
        } else {
          notification('success', 'OTP sent successfully');
          state.isOtpSent = true;
          state.isLoading = false;
        }
      }
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(requestOtpThunk.rejected, (state, action) => {
      if (action.payload.code === 'auth/too-many-requests') {
        notification('error', 'Too many request, please try again later');
        state.error = {
          isError: true,
          message: 'Too many request, please try again later',
        };
        state.isLoading = false;
      } else if (action.payload.code === 'auth/invalid-phone-number') {
        notification('error', 'Invalid phone number');
        state.error = {
          isError: true,
          message: 'Invalid phone number',
        };
        state.isLoading = false;
      } else if (action.payload.code === 'auth/missing-phone-number') {
        notification('error', 'Please enter your phone number');
        state.error = {
          isError: true,
          message: 'Please enter your phone number',
        };
        state.isLoading = false;
      } else if (action.payload.code === 'auth/quota-exceeded') {
        notification('error', 'Quota exceeded, please try again later');
        state.error = {
          isError: true,
          message: 'Quota exceeded',
        };
        state.isLoading = false;
      } else if (action.payload.code === 'auth/user-disabled') {
        notification('error', 'User disabled');
        state.error = {
          isError: true,
          message: 'User disabled',
        };
        state.isLoading = false;
      } else if (action.payload.code === 'auth/operation-not-allowed') {
        notification('error', 'Operation not allowed');
        state.error = {
          isError: true,
          message: 'Operation not allowed',
        };
        state.isLoading = false;
      } else {
        notification('error', 'Something went wrong');
        state.error = {
          isError: true,
          message: 'Something went wrong',
        };
        state.isLoading = false;
      }
    });
    // Verify otp with firebase
    builder.addCase(verifyOtpThunk.pending, state => {
      state.isLoading = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(verifyOtpThunk.fulfilled, (state, action) => {
      if (action.payload.type === 'resetpassword') {
        notification('success', 'OTP verified successfully');
        state.isOtpVerified = true;
        state.resetUser = {
          ...state.resetUser,
          token: action.payload.token,
        };
        state.error = {
          isError: false,
          message: '',
        };
        state.isLoading = false;
      } else {
        notification('success', 'OTP verified successfully');
        state.isOtpVerified = true;
        state.error = {
          isError: false,
          message: '',
        };
        state.isLoading = true;
      }
    });
    builder.addCase(verifyOtpThunk.rejected, (state, action) => {
      if (action.payload.code === 'auth/invalid-verification-code') {
        notification('error', 'Invalid verification code');
        state.error = {
          isError: true,
          message: 'Invalid verification code',
        };
        state.isLoading = false;
      } else if (action.payload.code === 'auth/missing-verification-code') {
        notification('error', 'Missing verification code');
        state.error = {
          isError: true,
          message: 'Missing verification code',
        };
        state.isLoading = false;
      } else if (action.payload.code === 'auth/code-expired') {
        notification('error', 'Code expired, Please try again');
        state.error = {
          isError: true,
          message: 'Code expired',
        };
        state.isLoading = false;
      }
    });
    // Sign up
    builder.addCase(signUpThunk.pending, state => {
      state.isLoading = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      const { data } = action.payload;
      notification('success', data?.data?.message);
      state.route = 'pending';
      localStorage.setItem('user', data?.data?.data);
      state.user = data.data.data;
      state.error = {
        isError: false,
        message: '',
      };
      state.isLoading = false;
    });
    builder.addCase(signUpThunk.rejected, (state, action) => {
      notification('error', action.payload?.response?.data?.message);
      state.error = {
        isError: true,
        message: action.payload?.response?.data?.message,
      };
      state.isLoading = false;
    });
  },
});

export const { manageAuthRoute, resendOtpThunk, manageResetRoute } =
  authSlice.actions;

export default authSlice.reducer;
