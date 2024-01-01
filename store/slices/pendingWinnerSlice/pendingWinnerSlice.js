import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { getAllPendingWinnersThunk } from '../../actions/pendingWinnerAction/pendingWinnerAction';
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
      console.log(action.payload?.data?.data?.data.winners);
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
  },
});

export const { clearPendingWinnerErrorMassage } = pendingWinnerSlice.actions;

export default pendingWinnerSlice.reducer;
