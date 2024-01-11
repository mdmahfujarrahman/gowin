import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  getAllPendingWinnersThunk,
  updatePendingWinnersThunk,
} from '../../actions/pendingWinnerAction/pendingWinnerAction';
import { getCountryName } from '../../../helper/utils/index';

const initialState = {
  users: null,
  error: {
    isError: false,
    message: '',
  },
  isUpdating: false,
  isLoading: false,
};

export const pendingWinnerSlice = createSlice({
  name: 'pendingWinner',
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
    builder.addCase(getAllPendingWinnersThunk.pending, state => {
      state.isLoading = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(getAllPendingWinnersThunk.fulfilled, (state, action) => {
      const formatData = action.payload?.data?.data?.data.winners?.map(item => {
        return {
          _id: item._id,
          key: item._id,
          name: item.winner.name,
          phoneNumber: item.winner.phoneNumber,
          country: getCountryName(item?.winner.countryCode),
          ...item,
        };
      });
      state.users = formatData;
      state.error = {
        isError: false,
        message: '',
      };
      state.isLoading = false;
    });
    builder.addCase(getAllPendingWinnersThunk.rejected, (state, action) => {
      toast.error(action.payload.data.message);
      state.error = {
        isError: true,
        message: '',
      };
      state.isLoading = false;
    });
    // update user status
    builder.addCase(updatePendingWinnersThunk.pending, state => {
      state.isLoading = true;
      state.isUpdating = true;
      state.error = {
        isError: false,
        message: '',
      };
    });
    builder.addCase(updatePendingWinnersThunk.fulfilled, (state, action) => {
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
    builder.addCase(updatePendingWinnersThunk.rejected, (state, action) => {
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

export const { clearPendingWinnerErrorMassage } = pendingWinnerSlice.actions;

export default pendingWinnerSlice.reducer;
