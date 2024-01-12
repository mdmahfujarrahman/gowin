import GameLayout from '../../../components/GameLayout/GameLayout.jsx';
import { getCurrentUser } from '../../../lib/authOptions/authOptions.js';
import { getData, getWinnerData } from './utils.js';

export const dynamic = 'force-dynamic';

const Dashboard = async () => {
  let winnerInfo = {
    isCadiate: null,
    isWinner: null,
    isCancel: null,
    isUpdate: false,
    winnerType: null,
  };
  const info = await getData();
  const userInfo = await getCurrentUser();

  if (info?.timing?.status === 'result') {
    const res = await getWinnerData(
      info?.result?.title,
      userInfo?.user?._id,
      winnerInfo,
    );
    winnerInfo = res;
  }

  console.log(info);

  return (
    <>
      <div className="flexCenter flex-col h-full my-5 bg-primary-blue">
        <GameLayout
          winnerInfo={winnerInfo}
          gameData={info}
          contactInfo={info.contactInfo}
        />
      </div>
    </>
  );
};

export default Dashboard;
