/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Button } from 'antd';
import CustomModal from '../../../ui/CustomModal/CustomModal';
import DeleteAction from '../AdminModal/DeleteAction/DeleteAction';
import CustomTable from '../Table/CustomTable';
import { PendingWinnerTableHeaders } from '../../../constant/TableHeaders';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPendingWinnersThunk,
  updatePendingWinnersThunk,
} from '../../../store/actions/pendingWinnerAction/pendingWinnerAction';
import { useRouter } from 'next/navigation';

const PendingWinnersTable = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const PendingWinners = useSelector(state => state?.pendingWinner);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [stateData, setStateData] = useState({
    isModalOpen: false,
    actionType: '',
    data: null,
    isMultiUserAction: false,
  });
  const handleCloseModal = () => {
    setStateData({
      isModalOpen: false,
      actionType: '',
      data: null,
      isMultiUserAction: false,
    });
  };

  const handleUserAction = (type, record) => {
    setStateData({
      isModalOpen: true,
      actionType: type,
      data: record,
      isMultiUserAction: false,
    });
  };

  const handleDelete = (isMulti, userData) => {
    if (isMulti) {
      return;
    }

    setTimeout(() => {
      dispatch(
        updatePendingWinnersThunk({
          type: 'delete',
          winnerId: userData._id,
          handleCloseModal: handleCloseModal,
        }),
      );
      setSelectedRowKeys([]);
    }, 100);
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
        loading={PendingWinners?.isLoading}
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
                <div className="flex items-center">
                  <Button
                    onClick={() =>
                      router.push(`/pending-winner/view/${record._id}`)
                    }
                    type="primary"
                    className="mr-3"
                    style={{
                      backgroundColor: '#46D39D',
                    }}
                  >
                    View
                  </Button>
                  <Button
                    onClick={() =>
                      router.push(`/pending-winner/edit/${record._id}`)
                    }
                    type="primary"
                    className="mr-3"
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
              );
            },
          },
        ]}
      />
      <CustomModal
        customClass="actionModal"
        open={stateData?.isModalOpen}
        handleCancel={handleCloseModal}
      >
        {stateData.actionType === 'delete' && (
          <DeleteAction
            title="Delete Pending Winner"
            userData={stateData?.data}
            isLoading={PendingWinners.isUpdating}
            isMultiUserAction={stateData?.isMultiUserAction}
            handleReject={handleDelete}
            handleClose={handleCloseModal}
          />
        )}
      </CustomModal>
    </>
  );
};

export default PendingWinnersTable;
