import { createSlice } from '@reduxjs/toolkit';
import { timeAgo } from '../../../helper/colckHelper/clockTimer';
import toast from 'react-hot-toast';
import { getCountryName } from '../../../helper/utils/index';

import {
  getActiveUserThunk,
  updateActiveUserStatusThunk,
} from '../../actions/activeUserAction/activeUserAction';

const initialState = {
  users: null,
  error: {
    isError: false,
    message: '',
  },
  isLoading: false,
  isUpdating: false,
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
    // update user status
    builder.addCase(updateActiveUserStatusThunk.pending, state => {
      state.isLoading = true;
      state.isUpdating = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(updateActiveUserStatusThunk.fulfilled, (state, action) => {
      const handleCloseModal = action.payload?.handleCloseModal;

      const formatData = state.users?.filter(
        item => item._id !== action.payload?.data?.data?.data?._id,
      );
      state.users = formatData;
      toast.success(action.payload.data.data.message);
      handleCloseModal();
      state.error = {
        isError: false,
        message: '',
      };
      state.isUpdating = false;
      state.isLoading = false;
    });
    builder.addCase(updateActiveUserStatusThunk.rejected, (state, action) => {
      console.log(action.payload.response.data.data.message);
      toast.error(action.payload.response.data.data.message);
      state.error = {
        isError: true,
        message: '',
      };
      state.isUpdating = false;
      state.isLoading = false;
    });
  },
});

export const { clearActiveUserErrorMassage } = activeUserSlice.actions;
export default activeUserSlice.reducer;
