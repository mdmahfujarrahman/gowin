import { CronJob } from 'cron';
import Navbar from '../../../components/Navbar/Navbar.jsx';
import GameLayout from '../../../components/GameLayout/GameLayout.jsx';
import { envConfig } from '../../../lib/config/index.js';

const updateStatus = async (id, status, info) => {
  const body = {
    id: id,
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (info = data);
};

async function getData() {
  let info;
  const res = await fetch(`${envConfig.serverUrl}/result/timing`);
  info = await res?.json();

  const job = new CronJob(
    '59 * * * * *', //
    async () => {
      const id = info?.data?.data[0]?._id;
      if (id) {
        await updateStatus(id, 'result', info);
      }
    },
    null,
    true,
    'Asia/Dubai',
  );

  job.start();
  console.log(info);
  return info;
}

const Dashboard = async () => {
  const info = await getData();

  return (
    <>
      <Navbar />
      <div className="flexCenter flex-col h-full my-5 bg-primary-blue">
        <GameLayout gameData={info?.data?.data[0]} />
      </div>
    </>
  );
};

export default Dashboard;
