/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Button } from 'antd';

import CustomTable from '../Table/CustomTable';
import { PendingWinnerTableHeaders } from '../../../constant/TableHeaders';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPendingWinnersThunk } from '../../../store/actions/pendingWinnerAction/pendingWinnerAction';

const PendingWinnersTable = () => {
  const dispatch = useDispatch();
  const PendingWinners = useSelector(state => state?.PendingWinners);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [stateData, setStateData] = useState({
    isModalOpen: false,
    actionType: '',
    data: null,
    isMultiUserAction: false,
  });
  //   const handleCloseModal = () => {
  //     setStateData({
  //       isModalOpen: false,
  //       actionType: '',
  //       data: null,
  //       isMultiUserAction: false,
  //     });
  //   };

  const handleUserAction = (type, record) => {
    setStateData({
      isModalOpen: true,
      actionType: type,
      data: record,
      isMultiUserAction: false,
    });
  };

  const handleMultiUserAction = (type, userData) => {
    if (type === 'delete') {
      setStateData({
        isModalOpen: true,
        actionType: type,
        data: userData,
        isMultiUserAction: true,
      });
    }
  };

  useEffect(() => {
    dispatch(getAllPendingWinnersThunk());
  }, []);

  return (
    <>
      <CustomTable
        tableId="pendingwinner"
        handleClick={handleMultiUserAction}
        setSelectedRowKeys={setSelectedRowKeys}
        selectedRowKeys={selectedRowKeys}
        tableData={PendingWinners?.users}
        tableHead={[
          ...PendingWinnerTableHeaders,
          {
            title: 'Action',
            dataIndex: 'action',
            render: (text, record) => {
              return (
                <>
                  <div className="flex items-center">
                    <Button
                      onClick={() => handleUserAction('delete', record)}
                      type="primary"
                      danger
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleUserAction('delete', record)}
                      type="primary"
                      danger
                    >
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

export default PendingWinnersTable;
