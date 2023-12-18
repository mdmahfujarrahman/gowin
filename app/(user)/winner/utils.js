import { envConfig } from '../../../lib/config';

const checkWinner = (winnerData, winnerType, userId) => {
  return winnerData?.find(item => item?.toString() === userId?.toString())
    ? winnerType
    : null;
};

const setWinner = (winnerType, userData) => {
  console.log(winnerType);
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

export const getWinnerPageData = async (user, resultId) => {
  try {
    const res = await fetch(
      `${envConfig.serverUrl}/result/getResult?type=single&resultId=${resultId}`,
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
