import { getData } from './utils';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import PendingWinnersWin from '../../../components/UserScreen/PendingWinners/PendingWinnersWin';
import PendingWinnersLost from '../../../components/UserScreen/PendingWinners/PendingWinnersLost';

export const metadata = {
  title: 'Pending Winners - Go Win',
  description: 'Find all pending winners of "Go Win" Lottery',
};

const PendingWinners = async () => {
  const pendingWinner = await getData();
  if (!pendingWinner.isLogin) {
    signOut();
    redirect('/');
  }

  return (
    <div className="flexCenter flex-col h-full my-5">
      {pendingWinner.success && (
        <PendingWinnersWin pendingWinner={pendingWinner?.data} />
      )}

      {!pendingWinner.success && <PendingWinnersLost />}
    </div>
  );
};

export default PendingWinners;
