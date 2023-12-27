'use client';
import { Table } from 'antd';
import { useState } from 'react';
import PendingUserMultiUserAction from '../PendingUserTable/PendingUserMultiUserAction';

const CustomTable = ({
  tableHead,
  tableData,
  tableId,
  handleClick,
  selectedRowKeys,
  setSelectedRowKeys,
}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const onSelectChange = (keys, record) => {
    setSelectedRows(record);
    setSelectedRowKeys(keys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys?.length > 0;

  return (
    <div>
      {tableId === 'pendinguser' && (
        <PendingUserMultiUserAction
          handleClick={handleClick}
          hasSelected={hasSelected}
          selectedRowKeys={selectedRows}
        />
      )}
      <Table
        rowSelection={rowSelection}
        columns={tableHead}
        dataSource={tableData}
        // onChange={handleChnage}
      />
    </div>
  );
};

export default CustomTable;
