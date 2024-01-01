import React from 'react';
import PageHeader from '../../../components/admin/PageHeader/PageHeader';
import PendingWinnersTable from '../../../components/admin/PendingWinnersTable/PendingWinnersTable';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

const PendingWinner = () => {
  return (
    <div className="mainWrapper">
      <div className="mainWrapper flex flex-col">
        <PageHeader title="Pending Winners" route="/pending-winner/add-new" />
        <PendingWinnersTable />
      </div>
    </div>
  );
};

export default PendingWinner;
