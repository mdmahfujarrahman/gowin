import { createAsyncThunk } from '@reduxjs/toolkit';
import { GowinService } from '../../../services/gowinService';

export const getDashboardStateThunk = createAsyncThunk(
  'gowin/dashboardStateThunk',
  async (payload, thunkAPI) => {
    try {
      // call sign up api
      const response = await GowinService.getDashboardStateReq();
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
