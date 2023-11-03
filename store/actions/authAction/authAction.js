import { createAsyncThunk } from '@reduxjs/toolkit';
import { GowinService } from '../../../services/gowinService';
import { generateRecaptcha } from '../../../helper/firebaseOtp/firebaseOtp';
import { signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../../lib/firebase/firebase.config';

export const isUserExistThunk = createAsyncThunk(
  'gowin/isUserExistThunk',
  async (payload, thunkAPI) => {
    try {
      const response = await GowinService.isUserExistReq(payload);
      if (response.data.data.data === "User doesn't exist") {
        thunkAPI.dispatch(
          requestOtpThunk({
            phoneNumber: payload.phoneNumber,
          }),
        );
      }
      return thunkAPI.fulfillWithValue({
        ...response.data,
        phoneNumber: payload.phoneNumber,
        countryCode: payload.countryCode,
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
        window.confirmationResult = res;
        return thunkAPI.fulfillWithValue(res);
      })
      .catch(err => {
        return thunkAPI.rejectWithValue(err);
      });
    return response;
  },
);
