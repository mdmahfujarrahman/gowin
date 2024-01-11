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
  const winnerId = req?.searchParams?.winnerId;

  if (!resultId && !winnerId) {
    redirect('/results');
  }

  const id = winnerId ? winnerId : resultId;
  const type = winnerId ? 'winner' : 'result';

  const winnerDeatils = await getWinnerPageData(userInfo, id, type);

  if (!winnerDeatils?.success) {
    redirect('/results');
  }

  return (
    <div className="flexCenter flex-col my-5 bg-primary-blue">
      <ClaimPrize winnerDeatils={winnerDeatils} type={type} />
    </div>
  );
};

export default Winner;
