/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Table } from 'antd';
import { useState } from 'react';

const CustomTable = ({
  tableHead,
  tableData,
  tableId,
  handleClick,
  selectedRowKeys,
  setSelectedRowKeys,
  loading,
}) => {
  const onSelectChange = (keys, record) => {
    setSelectedRowKeys(keys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys?.length > 0;

  return (
    <div>
      {/* {tableId === 'pendinguser' && (
        <PendingUserMultiUserAction
          handleClick={handleClick}
          hasSelected={hasSelected}
          selectedRowKeys={selectedRows}
        />
      )} */}
      {/* {tableId === 'activeuser' && (
        <ActiveUserMultiUserAction
          handleClick={handleClick}
          hasSelected={hasSelected}
          selectedRowKeys={selectedRows}
        />
      )} */}
      <Table
        rowSelection={rowSelection}
        columns={tableHead}
        dataSource={tableData}
        loading={loading}
        // onChange={handleChnage}
      />
    </div>
  );
};

export default CustomTable;
