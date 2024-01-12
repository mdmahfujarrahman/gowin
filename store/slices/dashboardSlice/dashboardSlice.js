import { createSlice } from '@reduxjs/toolkit';
import {
  getDashboardContactStateThunk,
  getDashboardStateThunk,
} from '../../actions/dashboardAction/dashboardAction';
import toast from 'react-hot-toast';

const initialState = {
  dashboardState: {
    active: '',
    pending: '',
    rejected: '',
    pendingWinners: '',
  },
  contactState: [],
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
    updateContactState: (state, action) => {
      state.contactState = action.payload;
    },
  },
  extraReducers: builder => {
    //
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
    //
    builder.addCase(getDashboardContactStateThunk.pending, state => {
      console.log('pending');
      state.isLoading = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(
      getDashboardContactStateThunk.fulfilled,
      (state, action) => {
        state.contactState = action?.payload;
        state.error = {
          isError: false,
          message: '',
        };
        state.isLoading = false;
      },
    );
    builder.addCase(getDashboardContactStateThunk.rejected, (state, action) => {
      toast.error(action.payload);
      console.log(action.payload);
      state.error = {
        isError: true,
        message: '',
      };
      state.isLoading = false;
    });
  },
});

export const { clearDashboardErrorMassage, updateContactState } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
