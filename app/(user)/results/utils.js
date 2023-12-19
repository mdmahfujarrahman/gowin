import { envConfig } from '../../../lib/config/index.js';

const dailyUpdateResult = async () => {
  try {
    const response = await fetch(`${envConfig.serverUrl}/result/collectResult`);
    const data = await response?.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateStatus = async (status, info) => {
  const body = {
    id: info?.timing?._id,
    status: status,
    userId: 'system',
  };
  const res = await fetch(`${envConfig.serverUrl}/result/timing`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res?.json();
  const updateData = {
    timing: data?.data,
    result: info?.result,
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (info = updateData);
};

const collectprevData = async () => {
  try {
    const response = await fetch(
      `${envConfig.serverUrl}/result/previousResult`,
    );
    const data = await response?.json();
    return data?.data?.data[0];
  } catch (error) {
    console.log(error);
  }
};

const statusData = async () => {
  try {
    const response = await fetch(`${envConfig.serverUrl}/result/timing`, {
      next: { revalidate: 0 },
    });
    const data = await response?.json();
    const prev = await collectprevData();
    return {
      timing: data?.data?.data[0],
      result: prev,
    };
  } catch (error) {
    console.log(error);
  }
};

const getWinner = async (info, type) => {
  let data;
  const payload = {
    resultId: info?.result?._id,
    userId: 'system',
  };

  if (type === 'update') {
    const res = await fetch(`${envConfig.serverUrl}/admin/winner`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    data = await res?.json();
  }

  const updateInfo = {
    timing: info?.timing,
    result: {
      ...info?.result,
      winner: data?.data?.data,
    },
  };
  return updateInfo;
};

const collectResult = async (status, info) => {
  const timeData = await info?.timing;
  // collect  result and update bangladesh time
  const bdTime = new Date().toLocaleString('en-US', {
    timeZone: timeData?.timeZone || 'Asia/Dhaka',
  });

  // collect  result and update at 11:11 PM to 11:25 PM
  const collectDate = new Date(bdTime);
  const startCollect = new Date(collectDate);
  startCollect.setHours(
    timeData?.resultCollect.start.hours || 11,
    timeData?.resultCollect.start.minutes || 11,
    timeData?.resultCollect.start.seconds || 0,
  ); // 5:00 PM
  const endCollect = new Date(collectDate);
  endCollect.setHours(
    timeData?.resultCollect?.end?.hours || 11,
    timeData?.resultCollect?.end?.minutes || 25,
    timeData?.resultCollect?.end?.seconds || 0,
  ); // 5:10 PM
  // start running at 11:00 PM to 11:10 PM
  if (collectDate >= startCollect && collectDate <= endCollect) {
    const getResult = await dailyUpdateResult();
    if (getResult?.success) {
      const updateData = await updateStatus(status, info);
      await getWinner(updateData, 'update');
      return updateData;
    } else {
      const copyInfo = await statusData();
      const checkTime = new Date(copyInfo?.result?.createdAt).toLocaleString(
        'en-US',
        {
          timeZone: 'Asia/Dhaka',
        },
      );
      const checkDate = new Date(checkTime);
      const updateStart = new Date(checkDate);
      updateStart.setHours(
        timeData?.resultCollect.start.hours || 11,
        timeData?.resultCollect.start.minutes || 11,
        timeData?.resultCollect.start.seconds || 0,
      ); // 5:00 PM
      const updateEnd = new Date(checkDate);
      updateEnd.setHours(
        timeData?.resultCollect?.end?.hours || 11,
        timeData?.resultCollect?.end?.minutes || 25,
        timeData?.resultCollect?.end?.seconds || 0,
      ); // 5:10 PM
      if (checkDate >= updateStart && checkDate <= updateEnd) {
        const updateData = await updateStatus('result', copyInfo);
        await getWinner(updateData, 'update');
        return updateData;
      } else {
        collectResult('result', copyInfo);
      }
    }
  }
};

const startCountdown = async (status, info) => {
  const timeData = await info?.timing;
  // collect  result and update bangladesh time
  const bdTime = new Date().toLocaleString('en-US', {
    timeZone: timeData?.timeZone || 'Asia/Dhaka',
  });

  // collect  result and update at 11:11 PM to 11:25 PM
  const countdownDate = new Date(bdTime);
  const startCountdownTime = new Date(countdownDate);
  startCountdownTime.setHours(
    timeData?.startCountdown.start.hours || 17,
    timeData?.startCountdown.start.minutes || 0,
    timeData?.startCountdown.start.seconds || 0,
  ); // 5:00 PM
  const endCountdownTime = new Date(countdownDate);
  endCountdownTime.setHours(
    timeData?.startCountdown?.end?.hours || 17,
    timeData?.startCountdown?.end?.minutes || 10,
    timeData?.startCountdown?.end?.seconds || 0,
  ); // 5:10 PM
  // start running at 11:00 PM to 11:10 PM
  if (
    countdownDate >= startCountdownTime &&
    countdownDate <= endCountdownTime
  ) {
    const updateData = await updateStatus(status, info);

    return updateData;
  }

  return info;
};

export async function getData() {
  let info = await statusData();

  console.log(info);

  if (info?.timing?.status === 'running') {
    await collectResult('result', info);
  }
  if (info?.timing?.status === 'result') {
    await startCountdown('running', info);
  }

  return info;
}

const checkWinner = (winnerData, winnerType, userId) => {
  return winnerData?.find(item => item?.toString() === userId?.toString())
    ? winnerType
    : null;
};

const setWinner = (winnerType, resultInfor) => {
  const status = {
    isCadiate: true,
    isWinner: !!winnerType,
    isCancel: !winnerType,
    isUpdate: true,
    winnerType: winnerType || '',
  };

  resultInfor = status;
  return resultInfor;
};

const checkAndSetWinner = (winderData, userId, resultInfor) => {
  const { superSix, funFour, luckeyThree } = winderData;
  const winnerType =
    checkWinner(superSix, 'Super Six', userId) ||
    checkWinner(funFour, 'Fun Four', userId) ||
    checkWinner(luckeyThree, 'Luckey Three', userId);
  const updateStatus = setWinner(winnerType, resultInfor);
  return (resultInfor = updateStatus);
};

export const getWinnerData = async (resultId, userId, resultInfor) => {
  try {
    const response = await fetch(
      `${envConfig.serverUrl}/admin/winner?resultId=${resultId}&type=single`,
    );
    const data = await response?.json();
    if (data?.data?.data?.canditates?.length === 0) {
      const status = {
        isCadiate: false,
        isWinner: false,
        isCancel: false,
        isUpdate: true,
        winnerType: null,
      };
      resultInfor = status;
      return resultInfor;
    }
    const checkIsCaditaes = data?.data?.data?.canditates
      .map(item => item?.toString())
      .find(item => item === userId);
    if (!checkIsCaditaes) {
      //   console.log('checkIsCaditaes');
      const status = {
        isCadiate: false,
        isWinner: false,
        isCancel: false,
        isUpdate: true,
        winnerType: null,
      };
      resultInfor = status;

      return resultInfor;
    }

    const updateStatus = checkAndSetWinner(
      data?.data?.data?.winners,
      userId,
      resultInfor,
    );

    return (resultInfor = updateStatus);
  } catch (error) {
    console.log(error);
  }
};
