import Navbar from '../../../components/Navbar/Navbar.jsx';
import GameLayout from '../../../components/GameLayout/GameLayout.jsx';
import { envConfig } from '../../../lib/config/index.js';

export const fetchCache = 'force-no-store';
export const revalidate = 0;
export const dynamic = 'force-dynamic';

const dailyUpdateResult = async () => {
  try {
    const response = await fetch(`${envConfig.serverUrl}/result/getResult`);
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

const statusData = async () => {
  try {
    const response = await fetch(`${envConfig.serverUrl}/result/timing`, {
      next: { revalidate: 0 },
    });
    const prevData = await fetch(
      `${envConfig.serverUrl}/result/previousResult`,
      { next: { revalidate: 0 } },
    );
    const data = await response?.json();
    const prev = await prevData?.json();
    return {
      timing: data?.data?.data[0],
      result: prev?.data?.data[0],
    };
  } catch (error) {
    console.log(error);
  }
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

async function getData() {
  let info = await statusData();

  if (info?.timing?.status === 'running') {
    console.log('start collect');
    await collectResult('result', info);
    console.log('info result');
  }
  if (info?.timing?.status === 'result') {
    console.log('start countdown');
    await startCountdown('running', info);
    console.log('info end');
  }

  return info;
}

const Dashboard = async () => {
  const info = await getData();
  // console.log(info);
  return (
    <>
      <Navbar />
      <div className="flexCenter flex-col h-full my-5 bg-primary-blue">
        <GameLayout gameData={info} />
      </div>
    </>
  );
};

export default Dashboard;
