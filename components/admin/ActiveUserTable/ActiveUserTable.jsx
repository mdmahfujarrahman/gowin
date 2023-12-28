'use client';
import { Button } from 'antd';
import CustomTable from '../Table/CustomTable';
import { useEffect, useState } from 'react';
import { getActiveUserThunk } from '../../../store/actions/activeUserAction/activeUserAction';
import { useDispatch, useSelector } from 'react-redux';
import { PendingTableHeaders } from '../../../constant/TableHeaders';

const ActiveUserTable = () => {
  const dispatch = useDispatch();
  const activeUser = useSelector(state => state?.activeUser);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    dispatch(getActiveUserThunk());
  }, []);

  return (
    <>
      <CustomTable
        tableId="activeuser"
        // handleClick={handleMultiUserAction}
        setSelectedRowKeys={setSelectedRowKeys}
        selectedRowKeys={selectedRowKeys}
        tableData={activeUser?.users}
        tableHead={[
          ...PendingTableHeaders,
          {
            title: 'Action',
            dataIndex: 'action',
            render: () => {
              return (
                <>
                  <div className="flex items-center">
                    <Button className="mr-3 bg-[#1677ff]" type="primary">
                      View
                    </Button>
                    <Button type="primary" danger>
                      Delete
                    </Button>
                  </div>
                </>
              );
            },
          },
        ]}
      />
    </>
  );
};

export default ActiveUserTable;
