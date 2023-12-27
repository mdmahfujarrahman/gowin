import { Button } from 'antd';
import React from 'react';

const PendingUserMultiUserAction = ({
  hasSelected,
  selectedRowKeys,
  handleClick,
}) => {
  return (
    <div
      className={`mb-4 items-center justify-between ${
        hasSelected ? 'flex' : 'hidden'
      }`}
    >
      <span className="mr-2">
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
      </span>
      <div className="flex items-center">
        <Button
          onClick={() => handleClick('approve', selectedRowKeys)}
          className="mr-3"
          type="primary"
        >
          Approve
        </Button>
        <Button
          onClick={() => handleClick('reject', selectedRowKeys)}
          type="primary"
          danger
        >
          Reject
        </Button>
      </div>
      {/* <Button
        type="primary"
        onClick={start}
        disabled={!hasSelected}
        loading={loading}
      >
        Reload
      </Button> */}
    </div>
  );
};

export default PendingUserMultiUserAction;
