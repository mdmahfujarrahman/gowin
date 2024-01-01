import { createAsyncThunk } from '@reduxjs/toolkit';
import { GowinService } from '../../../services/gowinService';

export const getAllPendingWinnersThunk = createAsyncThunk(
  'gowin/getAllPendingWinners',
  async (payload, thunkAPI) => {
    try {
      const response = await GowinService.getPendingWinnerReq();
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
