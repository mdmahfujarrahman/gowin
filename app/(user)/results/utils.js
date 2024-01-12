export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import { envConfig } from '../../../lib/config/index.js';
import { getAllContact } from '../../../serverActions/admin/dashboard/index.js';

const dailyUpdateResult = async () => {
  try {
    const response = await fetch(
      `${envConfig.serverUrl}/result/collectResult`,
      {
        cache: 'no-store',
      },
    );
    const data = await response?.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateStatus = async (status, info) => {
  try {
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
      cache: 'no-store',
    });
    const data = await res?.json();
    const updateTiming = data?.data;
    const updateDataInfo = {
      timing: updateTiming,
      result: info?.result,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return updateDataInfo;
  } catch (error) {
    console.log(error);
  }
};

const collectPreviousResult = async () => {
  try {
    const response = await fetch(
      `${envConfig.serverUrl}/result/previousResult`,
      {
        cache: 'no-store',
      },
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
      cache: 'no-store',
    });
    const data = await response?.json();
    const previousResult = await collectPreviousResult();
    return {
      timing: data?.data?.data[0],
      result: previousResult,
    };
  } catch (error) {
    console.log(error);
  }
};

const getWinner = async (info, type) => {
  if (type !== 'update') {
    return {
      timing: info?.timing,
      result: {
        ...info?.result,
        winner: null,
      },
    };
  }
  try {
    const payload = {
      resultId: info?.result?._id,
      userId: 'system',
    };

    const res = await fetch(`${envConfig.serverUrl}/admin/winner`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error('Failed to update winner'); // Handle the error or log as needed
    }
    const data = await res?.json();
    return {
      timing: info?.timing,
      result: {
        ...info?.result,
        winner: data?.data?.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      timing: info?.timing,
      result: {
        ...info?.result,
      },
    };
  }
};

const getUpdateTimeInterval = (timeData, defaultTime) => {
  const start = timeData?.start || defaultTime?.start;
  const end = timeData?.end || defaultTime?.end;
  return { start, end };
};

const defaultCollectTime = {
  start: {
    hours: 11,
    minutes: 11,
    seconds: 0,
  },
  end: {
    hours: 11,
    minutes: 25,
    seconds: 0,
  },
};

const updateResultIfNeed = async (status, info, timeData) => {
  const { start, end } = getUpdateTimeInterval(
    timeData?.resultCollect,
    defaultCollectTime,
  );

  const bdTime = new Date().toLocaleString('en-US', {
    timeZone: timeData?.timeZone || 'Asia/Dhaka',
  });
  const collectDate = new Date(bdTime);
  const startCollect = new Date(collectDate);
  startCollect.setHours(
    start.hours || 11,
    start.minutes || 11,
    start.seconds || 0,
  ); // 5:00 PM
  const endCollect = new Date(collectDate);
  endCollect.setHours(end.hours || 11, end.minutes || 30, end.seconds || 0);
  if (collectDate >= startCollect && collectDate <= endCollect) {
    try {
      const getResult = await dailyUpdateResult();
      if (getResult?.success) {
        const updateData = await updateStatus(status, info);
        await getWinner(updateData, 'update');
        return updateData;
      } else {
        const copyStatusData = await statusData();
        const getLocalTime = new Date(
          copyStatusData?.result?.createdAt,
        ).toLocaleString('en-US', {
          timeZone: 'Asia/Dhaka',
        });
        const updateLocalDate = new Date(getLocalTime);

        const { start: updateStart, end: updateEnd } = getUpdateTimeInterval(
          timeData?.resultCollect,
          defaultCollectTime,
        );
        const updateStartCollect = new Date(updateLocalDate);
        updateStartCollect.setHours(
          updateStart.hours || 11,
          updateStart.minutes || 11,
          updateStart.seconds || 0,
        );
        const updateEndCollect = new Date(updateLocalDate);
        updateEndCollect.setHours(
          updateEnd.hours || 11,
          updateEnd.minutes || 25,
          updateEnd.seconds || 0,
        );

        if (
          updateLocalDate >= updateStartCollect &&
          updateLocalDate <= updateEndCollect
        ) {
          const updateData = await updateStatus('result', copyStatusData);
          await getWinner(updateData, 'update');
          return updateData;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const collectResult = async (status, info) => {
  const timeData = await info?.timing;

  await updateResultIfNeed(status, info, timeData);
};

const defaultStartCountdown = {
  start: {
    hours: 17,
    minutes: 0,
    seconds: 0,
  },
  end: {
    hours: 23,
    minutes: 10,
    seconds: 0,
  },
};

const startCountdown = async (status, info) => {
  const timeData = await info?.timing;
  const { start, end } = getUpdateTimeInterval(
    timeData?.startCountdown,
    defaultStartCountdown,
  );

  // collect  result and update bangladesh time
  const bdTime = new Date().toLocaleString('en-US', {
    timeZone: timeData?.timeZone || 'Asia/Dhaka',
  });

  // collect  result and update at 11:11 PM to 11:25 PM
  const countdownDate = new Date(bdTime);
  const startCountdownTime = new Date(countdownDate);
  startCountdownTime.setHours(
    start.hours || 11,
    start.minutes || 11,
    start.seconds || 0,
  ); // 5:00 PM
  const endCountdownTime = new Date(countdownDate);
  endCountdownTime.setHours(
    end.hours || 11,
    end.minutes || 25,
    end.seconds || 0,
  );

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

  if (info?.timing?.status === 'running') {
    await collectResult('result', info);
  }
  if (info?.timing?.status === 'result') {
    await startCountdown('running', info);
  }
  const contactInfo = await getAllContact();
  return {
    ...info,
    contactInfo,
  };
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

// const getWinner = async (info, type) => {
//   let data;
//   const payload = {
//     resultId: info?.result?._id,
//     userId: 'system',
//   };

//   if (type === 'update') {
//     const res = await fetch(`${envConfig.serverUrl}/admin/winner`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     });
//     data = await res?.json();
//   }

//   const updateInfo = {
//     timing: info?.timing,
//     result: {
//       ...info?.result,
//       winner: data?.data?.data,
//     },
//   };
//   return updateInfo;
// };

// const startCountdown = async (status, info) => {
//   const timeData = await info?.timing;
//   // collect  result and update bangladesh time
//   const bdTime = new Date().toLocaleString('en-US', {
//     timeZone: timeData?.timeZone || 'Asia/Dhaka',
//   });

//   // collect  result and update at 11:11 PM to 11:25 PM
//   const countdownDate = new Date(bdTime);
//   const startCountdownTime = new Date(countdownDate);
//   startCountdownTime.setHours(
//     timeData?.startCountdown.start.hours || 17,
//     timeData?.startCountdown.start.minutes || 0,
//     timeData?.startCountdown.start.seconds || 0,
//   ); // 5:00 PM
//   const endCountdownTime = new Date(countdownDate);
//   endCountdownTime.setHours(
//     timeData?.startCountdown?.end?.hours || 17,
//     timeData?.startCountdown?.end?.minutes || 10,
//     timeData?.startCountdown?.end?.seconds || 0,
//   ); // 5:10 PM
//   // start running at 11:00 PM to 11:10 PM
//   if (
//     countdownDate >= startCountdownTime &&
//     countdownDate <= endCountdownTime
//   ) {
//     const updateData = await updateStatus(status, info);

//     return updateData;
//   }

//   return info;
// };
