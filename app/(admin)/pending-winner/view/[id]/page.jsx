import React from 'react';
import { redirect } from 'next/navigation';
import { getData } from './utils';
import Head from 'next/head';

// Components

import ViewSinglePendingWinner from '../../../../../components/admin/ViewSinglePendingWinner/ViewSinglePendingWinner';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

// Meta data
// export const metadata = {
//   title: 'View Pending Winner - Go win',
//   description: 'View Pending Winner - Go win',
// };

const SinglePendingWinnrsView = async req => {
  const singleWinnersData = await getData(req);

  if (!singleWinnersData?.success) {
    redirect('/pending-winner');
    return;
  }
  console.log('singleWinnersData', singleWinnersData?.data);
  return (
    <>
      <Head>
        <title>{singleWinnersData?.data?.winner?.name}</title>
        <meta name="description" content="Go win dashboard" />
      </Head>
      <div className="mainWrapper">
        <div className="p-0 md:p-5 lg:p-5 flex flex-col ">
          <ViewSinglePendingWinner
            singleWinnersData={singleWinnersData?.data}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePendingWinnrsView;
