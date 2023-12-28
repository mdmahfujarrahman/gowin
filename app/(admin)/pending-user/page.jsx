import React from 'react';
import PageHeader from '../../../components/admin/PageHeader/PageHeader';
import PendingUserTable from '../../../components/admin/PendingUserTable/PendingUserTable';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

const PendingUser = () => {
  return (
    <div className="mainWrapper flex flex-col">
      <PageHeader title="Pending Users" />
      <PendingUserTable />
    </div>
  );
};

export default PendingUser;
