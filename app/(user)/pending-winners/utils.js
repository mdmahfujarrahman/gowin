import { getCurrentUser } from '../../../lib/authOptions/authOptions';
import { PendingWinners } from '../../../model/pendingWinners/pendingWinners.model';
import { signOut } from 'next-auth/react';
import { getAllContact } from '../../../serverActions/admin/dashboard';

const checkWinnerExit = async userId => {
  try {
    const allPendingwinner = await PendingWinners.find({})
      .populate('winners.winner')
      .lean();

    if (allPendingwinner[0]?.winners?.length === 0) {
      return {
        success: false,
        isLogin: true,
        data: null,
      };
    }

    const pendingWinner = allPendingwinner[0]?.winners?.find(
      item => item.winner._id.toString() === userId,
    );

    if (!pendingWinner) {
      return {
        success: false,
        isLogin: true,
        data: null,
      };
    }

    return {
      success: true,
      isLogin: true,
      data: pendingWinner,
    };
  } catch (error) {
    return {
      success: false,
      isLogin: true,
      data: null,
    };
  }
};

export const getData = async () => {
  const { user } = await getCurrentUser();

  if (!user?._id) {
    signOut();
    return {
      success: false,
      isLogin: false,
      data: null,
    };
  }

  const isWinner = await checkWinnerExit(user?._id);
  const contactInfo = await getAllContact();
  return {
    success: true,
    isLogin: true,
    data: isWinner?.data,
    contactInfo,
  };
};
