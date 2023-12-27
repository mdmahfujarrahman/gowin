import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="text-2xl font-bold text-primaryBlue">{title}</div>
    </div>
  );
};

export default PageHeader;
