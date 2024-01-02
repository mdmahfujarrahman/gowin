import { redirect } from 'next/navigation';
import EditPendingWinner from '../../../../../components/admin/EditPendingwinner/EditPendingWinner';
import { getData } from '../../view/[id]/utils';

const page = async req => {
  const singleWinnersData = await getData(req);

  if (!singleWinnersData?.success) {
    redirect('/pending-winner');
    return;
  }
  return (
    <div className="mainWrapper">
      <div className="p-0 md:p-5 lg:p-5 flex flex-col ">
        <EditPendingWinner singleWinnersData={singleWinnersData?.data} />
      </div>
    </div>
  );
};

export default page;
