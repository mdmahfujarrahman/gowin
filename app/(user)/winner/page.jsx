import { redirect } from 'next/navigation';
import { getCurrentUser } from '../../../lib/authOptions/authOptions.js';
import { getWinnerPageData } from './utils.js';
import ClaimPrize from '../../../components/ClaimPrize/ClaimPrize.jsx';

export const metadata = {
  title: 'Claim Your Prize - Go Win',
  description: 'Congratulations!! For your big win in "Go Win" Lottery',
};

const Winner = async req => {
  const userInfo = await getCurrentUser();
  const resultId = req?.searchParams?.result;
  const winnerDeatils = await getWinnerPageData(userInfo, resultId);

  if (!winnerDeatils?.success) {
    redirect('/results');
  }
  console.log('winnerDeatils', winnerDeatils);

  return (
    <div className="flexCenter flex-col my-5 bg-primary-blue">
      <ClaimPrize winnerDeatils={winnerDeatils} />
    </div>
  );
};

export default Winner;
