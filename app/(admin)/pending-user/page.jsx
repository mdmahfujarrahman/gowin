import React from 'react';
import PageHeader from '../../../components/admin/PageHeader/PageHeader';
import PendingUserTable from '../../../components/admin/PendingUserTable/PendingUserTable';

const PendingUser = () => {
  return (
    <div className="mainWrapper flex flex-col">
      <PageHeader title="Pending Users" />
      <PendingUserTable />
    </div>
  );
};

export default PendingUser;
