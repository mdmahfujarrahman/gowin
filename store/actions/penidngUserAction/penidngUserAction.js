import { createAsyncThunk } from '@reduxjs/toolkit';
import { GowinService } from '../../../services/gowinService';

export const getPendingUserThunk = createAsyncThunk(
  'gowin/pendingUser',
  async (payload, thunkAPI) => {
    try {
      const response = await GowinService.getPendingUserReq(payload);
      return thunkAPI.fulfillWithValue({ ...response, payload });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateUserStatusThunk = createAsyncThunk(
  'gowin/updateUserStatus',
  async (payload, thunkAPI) => {
    try {
      const response = await GowinService.updateUserStatusReq({
        userId: payload.userId,
        type: payload.type,
      });
      const updateResponse = {
        ...response,
        handleCloseModal: payload.handleCloseModal,
      };
      return thunkAPI.fulfillWithValue(updateResponse);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
