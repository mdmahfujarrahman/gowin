import { createAsyncThunk } from '@reduxjs/toolkit';
import { GowinService } from '../../../services/gowinService';

export const getActiveUserThunk = createAsyncThunk(
  'gowin/activeUser',
  async (payload, thunkAPI) => {
    try {
      const response = await GowinService.getActiveUserReq();
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateActiveUserStatusThunk = createAsyncThunk(
  'gowin/updateActiveUserStatus',
  async (payload, thunkAPI) => {
    try {
      const response = await GowinService.updateActiveUserStatusReq({
        userId: payload.userId,
        type: payload.type,
      });
      const updateResponse = {
        ...response,
        handleCloseModal: payload.handleCloseModal,
        isMultiUserAction: payload.isMultiUserAction,
      };
      return thunkAPI.fulfillWithValue(updateResponse);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
