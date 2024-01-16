import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  getPendingUserThunk,
  updateUserStatusThunk,
} from '../../actions/penidngUserAction/penidngUserAction';
import { timeAgo } from '../../../helper/colckHelper/clockTimer';
import { getCountryName } from '../../../helper/utils/index';

const initialState = {
  users: null,
  rejectUser: null,
  error: {
    isError: false,
    message: '',
  },
  isUpdating: false,
  isLoading: false,
};

export const pendingUserSlice = createSlice({
  name: 'pendingUser',
  initialState,
  reducers: {
    clearPendingUserErrorMassage: state => {
      state.error = {
        isError: false,
        message: '',
      };
    },
  },
  extraReducers: builder => {
    // get pending user
    builder.addCase(getPendingUserThunk.pending, state => {
      state.isLoading = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(getPendingUserThunk.fulfilled, (state, action) => {
      if (action?.payload?.payload == 'rejected') {
        const formatData = action.payload?.data?.data?.data?.map(item => {
          return {
            ...item,
            key: item._id,
            country: getCountryName(item?.countryCode),
            signedUp: timeAgo(item?.createdAt),
          };
        });
        state.rejectUser = formatData;
      }
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
    builder.addCase(getPendingUserThunk.rejected, (state, action) => {
      toast.error(action.payload.data.message);
      state.error = {
        isError: true,
        message: '',
      };
      state.isLoading = false;
    });
    // update user status
    builder.addCase(updateUserStatusThunk.pending, state => {
      state.isLoading = true;
      state.isUpdating = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(updateUserStatusThunk.fulfilled, (state, action) => {
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
    builder.addCase(updateUserStatusThunk.rejected, (state, action) => {
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

export const { clearDashboardErrorMassage } = pendingUserSlice.actions;

export default pendingUserSlice.reducer;
