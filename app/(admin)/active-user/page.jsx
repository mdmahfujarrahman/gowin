import React from 'react';
import PageHeader from '../../../components/admin/PageHeader/PageHeader';
import ActiveUserTable from '../../../components/admin/ActiveUserTable/ActiveUserTable';

const ActiveUser = () => {
  return (
    <div className="mainWrapper">
      <div className="mainWrapper flex flex-col">
        <PageHeader title="Active Users" />
        <ActiveUserTable />
      </div>
    </div>
  );
};

export default ActiveUser;
