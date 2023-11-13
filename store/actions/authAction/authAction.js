import { createAsyncThunk } from '@reduxjs/toolkit';
import { GowinService } from '../../../services/gowinService';
import { generateRecaptcha } from '../../../helper/firebaseOtp/firebaseOtp';
import { signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../../lib/firebase/firebase.config';
import { manageAuthRoute } from '../../slices/authSlice/authSlice';

export const isUserExistThunk = createAsyncThunk(
  'gowin/isUserExistThunk',
  async (payload, thunkAPI) => {
    try {
      const response = await GowinService.isUserExistReq({
        phoneNumber: payload.phoneNumber,
        countryCode: payload.countryCode,
      });
      if (response.data.data.data === "User doesn't exist") {
        thunkAPI.dispatch(
          requestOtpThunk({
            phoneNumber: payload.phoneNumber,
            isResend: false,
          }),
        );
      }
      return thunkAPI.fulfillWithValue({
        ...response.data,
        payload,
      });
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const requestOtpThunk = createAsyncThunk(
  'gowin/requestOtp',
  async (payload, thunkAPI) => {
    generateRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const response = signInWithPhoneNumber(
      auth,
      '+' + payload.phoneNumber,
      appVerifier,
    )
      .then(res => {
        console.log(payload);
        window.confirmationResult = res;
        thunkAPI.dispatch(manageAuthRoute('otp'));
        return thunkAPI.fulfillWithValue({
          ...res,
          isResend: payload.isResend,
        });
      })
      .catch(err => {
        return thunkAPI.rejectWithValue({
          ...err,
          isResend: payload.isResend,
        });
      });
    return response;
  },
);

export const verifyOtpThunk = createAsyncThunk(
  'gowin/verifyOtp',
  async (payload, thunkAPI) => {
    let confirmationResult = window.confirmationResult;
    try {
      const state = thunkAPI.getState();
      const payloadData = state?.auth?.newUserData;
      const res = await confirmationResult.confirm(payload.otp);
      if (res.user.accessToken) {
        thunkAPI.dispatch(signUpThunk(payloadData));
      }
      return thunkAPI.fulfillWithValue(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const signUpThunk = createAsyncThunk(
  'gowin/signUp',
  async (payload, thunkAPI) => {
    try {
      const response = await GowinService.signUpReq(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
