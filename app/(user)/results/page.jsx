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

const startRunning = async (status, info) => {
  const bdTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Dhaka',
  });
  const bdDate = new Date(bdTime);
  const start = new Date(bdDate);
  start.setHours(12, 0, 0); // 5:00 PM
  const end = new Date(bdDate);
  end.setHours(13, 59, 0); // 5:10 PM
  //
  if (bdDate >= start && bdDate <= end) {
    const getResult = await dailyUpdateResult();
    if (getResult?.success) {
      console.log('if');
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
      console.log(checkTime);
      const checkDate = new Date(checkTime);
      const updateStart = new Date(checkDate);
      updateStart.setHours(12, 0, 0); // 5:00 PM
      const updateEnd = new Date(checkDate);
      updateEnd.setHours(13, 59, 0); // 5:10 PM
      if (checkDate >= updateStart && checkDate <= updateEnd) {
        const updateData = await updateStatus('result', copyInfo);
        return updateData;
      } else {
        startRunning();
      }
    }
  }
};

async function getData() {
  let info = await statusData();
  console.log('info rrunning');
  if (info?.timing?.status === 'running') {
    await startRunning('result', info);
    console.log('info result');
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
