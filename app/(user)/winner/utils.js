import { envConfig } from '../../../lib/config';
import dbConnect from '../../../lib/db/db.connect';
import { PendingWinners } from '../../../model/pendingWinners/pendingWinners.model';

const checkWinner = (winnerData, winnerType, userId) => {
  return winnerData?.find(item => item?.toString() === userId?.toString())
    ? winnerType
    : null;
};

const setWinner = (winnerType, userData) => {
  const status = {
    success: true,
    data: {
      user: userData.user,
      winnerType: winnerType,
    },
  };
  return status;
};

const checkAndSetWinner = (winderData, user) => {
  const { superSix, funFour, luckeyThree } = winderData;
  const winnerType =
    checkWinner(superSix, 'Super Six', user?.user?._id) ||
    checkWinner(funFour, 'Fun Four', user?.user?._id) ||
    checkWinner(luckeyThree, 'Luckey Three', user?.user?._id);
  const updateStatus = setWinner(winnerType, user);
  return updateStatus;
};

const checkWinners = async (user, resultId) => {
  try {
    const res = await fetch(
      `${envConfig.serverUrl}/admin/winner?type=single&resultId=${resultId}`,
    );
    const data = await res?.json();
    if (!data?.data?.success) {
      return {
        success: false,
        message: "Result doesn't exist",
        data: null,
      };
    }
    const checkIsCaditaes = data?.data?.data?.canditates
      .map(item => item?.toString())
      .find(item => item === user?.user?._id);
    if (!checkIsCaditaes) {
      return {
        success: false,
        message: "You're not a candidate",
        data: null,
      };
    }

    const getWinner = checkAndSetWinner(data?.data?.data.winners, user);
    return getWinner;
  } catch (error) {
    return {
      success: false,
      data: null,
    };
  }
};

const fetchResultWinner = async (user, id) => {
  try {
    const res = await fetch(
      `${envConfig.serverUrl}/result/getResult?type=single&resultId=${id}`,
    );
    const data = await res?.json();
    if (!data?.data?.success) {
      return {
        success: false,
        message: "Result doesn't exist",
        data: null,
      };
    }

    const getWinner = await checkWinners(user, data?.data?.data.title);
    return getWinner;
  } catch (error) {
    return {
      success: false,
      data: null,
    };
  }
};

const getPenidngWinner = async (user, id) => {
  try {
    if (!user?.user?._id === id) {
      return {
        success: false,
        data: null,
      };
    }
    await dbConnect();
    const getAllPeningWinner = await PendingWinners.find({})
      .populate('winners.winner')
      .lean();

    if (!getAllPeningWinner) {
      return {
        success: false,
        data: null,
      };
    }

    if (getAllPeningWinner[0].winners.length === 0) {
      return {
        success: false,
        data: null,
      };
    }

    const isExit = getAllPeningWinner[0].winners.find(
      item => item.winner._id.toString() === id,
    );

    if (!isExit) {
      return {
        success: false,
        message: "winner doesn't exist",
        data: null,
      };
    }

    return {
      success: true,
      data: isExit,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
    };
  }
};

export const getWinnerPageData = async (user, id, type) => {
  if (type == 'winner') {
    const response = await getPenidngWinner(user, id);
    return response;
  } else {
    const response = await fetchResultWinner(user, id);
    return response;
  }
};
