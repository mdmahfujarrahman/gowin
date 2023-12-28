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
