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
export const updatePendingWinnersThunk = createAsyncThunk(
  'gowin/updatePendingWinners',
  async (payload, thunkAPI) => {
    try {
      const response = await GowinService.updatePendingWinnerReq({
        winnerId: payload.winnerId,
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
