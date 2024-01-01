import { Button } from 'antd';
import React from 'react';

const ActiveUserMultiUserAction = ({
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
          onClick={() => handleClick('delete', selectedRowKeys)}
          className="mr-3 bg-[#1677ff]"
          type="primary"
          danger
        >
          Delete
        </Button>
        {/* <Button
          onClick={() => handleClick('reject', selectedRowKeys)}
          type="primary"
          danger
        >
          Reject
        </Button> */}
      </div>
    </div>
  );
};

export default ActiveUserMultiUserAction;
