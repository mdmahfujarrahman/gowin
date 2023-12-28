import { createAsyncThunk } from '@reduxjs/toolkit';
import { GowinService } from '../../../services/gowinService';
import { generateRecaptcha } from '../../../helper/firebaseOtp/firebaseOtp';
import { signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../../lib/firebase/firebase.config';
import { manageAuthRoute } from '../../slices/authSlice/authSlice';

/**
 * @param {object} payload - phoneNumber, countryCode
 * @param {object} thunkAPI - dispatch, getState, rejectWithValue, fulfillWithValue
 * @returns {object} - response
 */

export const isUserExistThunk = createAsyncThunk(
  'gowin/isUserExistThunk',
  async (payload, thunkAPI) => {
    try {
      // call is user exist api
      const response = await GowinService.isUserExistReq({
        phoneNumber: payload.phoneNumber,
        countryCode: payload.countryCode,
      });
      // if user doesn't exist then call request otp thunk
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

/**
 * @param {object} payload - phoneNumber, isResend
 * @param {object} thunkAPI - dispatch, getState, rejectWithValue, fulfillWithValue
 * @returns {object} - response
 */

export const requestOtpThunk = createAsyncThunk(
  'gowin/requestOtp',
  async (payload, thunkAPI) => {
    // generate recaptcha
    generateRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    // call request otp api
    const response = signInWithPhoneNumber(
      auth,
      '+' + payload.phoneNumber,
      appVerifier,
    )
      .then(res => {
        window.confirmationResult = res;
        // dispatch manage auth route
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

/**
 * @param {object} payload - otp, newUserData
 * @param {object} thunkAPI - dispatch, getState, rejectWithValue, fulfillWithValue
 * @returns {object} - response
 */

export const verifyOtpThunk = createAsyncThunk(
  'gowin/verifyOtp',
  async (payload, thunkAPI) => {
    let confirmationResult = window.confirmationResult;

    try {
      // get state
      const state = thunkAPI.getState();
      // get newUserData from state
      const payloadData = state?.auth?.newUserData;
      //  confirm otp
      const res = await confirmationResult.confirm(payload.otp);
      // if otp is verified then sign up
      if (res.user.accessToken) {
        // call sign up thunk
        thunkAPI.dispatch(signUpThunk(payloadData));
      }
      return thunkAPI.fulfillWithValue(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

/**
 * @param {object} payload - newUserData
 * @param {object} thunkAPI - dispatch, getState, rejectWithValue, fulfillWithValue
 * @returns {object} - response
 */

export const signUpThunk = createAsyncThunk(
  'gowin/signUp',
  async (payload, thunkAPI) => {
    try {
      // call sign up api
      const response = await GowinService.signUpReq(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
