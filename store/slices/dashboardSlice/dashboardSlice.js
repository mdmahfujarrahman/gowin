import { createSlice } from '@reduxjs/toolkit';
import { getDashboardStateThunk } from '../../actions/dashboardAction/dashboardAction';
import toast from 'react-hot-toast';

const initialState = {
  dashboardState: {
    active: '',
    pending: '',
    rejected: '',
    pendingWinners: '',
  },
  error: {
    isError: false,
    message: '',
  },
  isLoading: false,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    clearDashboardErrorMassage: state => {
      state.error = {
        isError: false,
        message: '',
      };
    },
  },
  extraReducers: builder => {
    // check user exist
    builder.addCase(getDashboardStateThunk.pending, state => {
      state.isLoading = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(getDashboardStateThunk.fulfilled, (state, action) => {
      state.dashboardState = action.payload?.data?.data?.data;
      state.error = {
        isError: false,
        message: '',
      };
      state.isLoading = false;
    });
    builder.addCase(getDashboardStateThunk.rejected, (state, action) => {
      toast.error(action.payload.data.message);
      state.error = {
        isError: true,
        message: '',
      };
      state.isLoading = false;
    });
    // send otp with firebase
  },
});

export const { clearDashboardErrorMassage } = dashboardSlice.actions;

export default dashboardSlice.reducer;
