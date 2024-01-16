import { createAsyncThunk } from '@reduxjs/toolkit';
import { GowinService } from '../../../services/gowinService';
import { generateRecaptcha } from '../../../helper/firebaseOtp/firebaseOtp';
import { signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../../lib/firebase/firebase.config';
import {
  manageAuthRoute,
  manageResetRoute,
} from '../../slices/authSlice/authSlice';

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
      if (
        response.data.data.data === "User doesn't exist" &&
        payload.type === 'signup'
      ) {
        thunkAPI.dispatch(
          requestOtpThunk({
            phoneNumber: payload.phoneNumber,
            isResend: false,
            type: payload?.type,
          }),
        );
      }
      if (response.data.data.data?._id && payload?.type === 'resetPassword') {
        if (response.data.data.data?.status === 'pending') {
          thunkAPI.dispatch(manageResetRoute('pending'));
        } else if (response.data.data.data?.status === 'rejected') {
          thunkAPI.dispatch(manageResetRoute('rejected'));
        } else {
          thunkAPI.dispatch(
            requestOtpThunk({
              phoneNumber: payload.phoneNumber,
              isResend: false,
              type: payload?.type,
              userData: response.data.data,
            }),
          );
        }
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

        if (payload?.type === 'resetPassword') {
          thunkAPI.dispatch(manageResetRoute('otp'));
        } else {
          thunkAPI.dispatch(manageAuthRoute('otp'));
        }

        return thunkAPI.fulfillWithValue({
          ...res,
          isResend: payload.isResend,
          type: payload.type,
          phoneNumber: payload.phoneNumber,
          countryCode: payload.countryCode,
          userId: payload?.userData?.data?._id,
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
      let token;
      if (payload.type === 'resetpassword') {
        const userId = state?.auth?.resetUser?.userId;
        try {
          const createToken = await GowinService.createResetToken({ userId });
          token = createToken.data.data.data.token;
          thunkAPI.dispatch(manageResetRoute('setnewpassword'));
        } catch (error) {
          console.log(error);
        }
      } else {
        // call sign up thunk
        thunkAPI.dispatch(signUpThunk(payloadData));
      }
      return thunkAPI.fulfillWithValue({
        ...res,
        type: payload.type,
        token: token,
      });
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
