import { createSlice } from '@reduxjs/toolkit';
import { timeAgo } from '../../../helper/colckHelper/clockTimer';
import toast from 'react-hot-toast';
import { getCountryName } from '../../../helper/utils/index';

import { getActiveUserThunk } from '../../actions/activeUserAction/activeUserAction';

const initialState = {
  users: null,
  error: {
    isError: false,
    message: '',
  },
  isLoading: false,
};

export const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    clearActiveUserErrorMassage: state => {
      state.error = {
        isError: false,
        message: '',
      };
    },
  },
  extraReducers: builder => {
    // get active user
    builder.addCase(getActiveUserThunk.pending, state => {
      state.isLoading = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(getActiveUserThunk.fulfilled, (state, action) => {
      const formatData = action.payload?.data?.data?.data?.map(item => {
        return {
          ...item,
          key: item._id,
          country: getCountryName(item?.countryCode),
          signedUp: timeAgo(item?.createdAt),
        };
      });
      state.users = formatData;
      state.error = {
        isError: false,
        message: '',
      };
      state.isLoading = false;
    });
    builder.addCase(getActiveUserThunk.rejected, (state, action) => {
      toast.error(action.payload.data.message);
      state.error = {
        isError: true,
        message: '',
      };
      state.isLoading = false;
    });
  },
});

export const { clearActiveUserErrorMassage } = activeUserSlice.actions;
export default activeUserSlice.reducer;
