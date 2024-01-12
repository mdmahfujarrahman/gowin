import { createAsyncThunk } from '@reduxjs/toolkit';
import { GowinService } from '../../../services/gowinService';
import { getAllContact } from '../../../serverActions/admin/dashboard/index';

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

export const getDashboardContactStateThunk = createAsyncThunk(
  'gowin/contactStateThunk',
  async (payload, thunkAPI) => {
    try {
      const response = await getAllContact();
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);
