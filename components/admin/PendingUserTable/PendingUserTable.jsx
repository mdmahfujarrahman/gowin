'use client';
import { useEffect, useState } from 'react';
import { PendingTableHeaders } from '../../../constant/TableHeaders.jsx';
import CustomModal from '../../../ui/CustomModal/CustomModal.jsx';
import CustomTable from '../Table/CustomTable';
import { Button } from 'antd';
import AcceptAction from '../AdminModal/AcceptAction/AcceptAction.jsx';
import RejectAction from '../AdminModal/RejectAction/RejectAction.jsx';
import DeleteAction from '../AdminModal/DeleteAction/DeleteAction.jsx';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPendingUserThunk,
  updateUserStatusThunk,
} from '../../../store/actions/penidngUserAction/penidngUserAction.js';
import { useSearchParams } from 'next/navigation';

const PendingUserTable = () => {
  const params = useSearchParams();
  const searchParams = params.get('status');
  const dispatch = useDispatch();
  const pendingUser = useSelector(state => state?.pendingUser);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableData, setTableData] = useState([]);
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
  const handleApprove = (isMulti, userData) => {
    if (isMulti) {
      handleMultiUserApprove(userData);
      return;
    }
    setTimeout(() => {
      dispatch(
        updateUserStatusThunk({
          type: 'approve',
          userId: userData._id,
          handleCloseModal: handleCloseModal,
        }),
      );
      if (searchParams) {
        params.delete('status');
      }
      setSelectedRowKeys([]);
    }, 100);
  };

  const handleDelete = (isMulti, userData) => {
    if (isMulti) {
      handleMultiUserDelete(userData);
      return;
    }
    setTimeout(() => {
      dispatch(
        updateUserStatusThunk({
          type: 'delete',
          userId: userData._id,
          handleCloseModal: handleCloseModal,
        }),
      );
      setSelectedRowKeys([]);
    }, 100);
  };

  const handleReject = (isMulti, userData) => {
    if (isMulti) {
      handleMultiUserReject(userData);
      return;
    }
    setTimeout(() => {
      dispatch(
        updateUserStatusThunk({
          type: 'reject',
          userId: userData._id,
          handleCloseModal: handleCloseModal,
        }),
      );
    }, 100);
  };

  const handleMultiUserAction = (type, userData) => {
    if (type === 'approve') {
      setStateData({
        isModalOpen: true,
        actionType: type,
        data: userData,
        isMultiUserAction: true,
      });
    }
    if (type === 'reject') {
      setStateData({
        isModalOpen: true,
        actionType: type,
        data: userData,
        isMultiUserAction: true,
      });
    }
    if (type === 'delete') {
      setStateData({
        isModalOpen: true,
        actionType: type,
        data: userData,
        isMultiUserAction: true,
      });
    }
  };

  const handleMultiUserReject = userData => {
    setTimeout(() => {
      const filterData = tableData.filter(
        item => !userData.map(user => user?._id).includes(item?._id),
      );
      setTableData(filterData);
      toast.success(`${userData?.length} users rejected successfully`);
      setSelectedRowKeys([]);
      handleCloseModal();
    }, 1000);
  };

  const handleMultiUserApprove = userData => {
    setTimeout(() => {
      const filterData = tableData.filter(
        item => !userData.map(user => user?._id).includes(item?._id),
      );
      setTableData(filterData);
      toast.success(`${userData?.length} users approved successfully`);
      setSelectedRowKeys([]);
      handleCloseModal();
    }, 1000);
  };

  const handleMultiUserDelete = userData => {
    setTimeout(() => {
      const filterData = tableData.filter(
        item => !userData.map(user => user?._id).includes(item?._id),
      );
      setTableData(filterData);
      toast.success(`${userData?.length} users deleted successfully`);
      setSelectedRowKeys([]);
      handleCloseModal();
    }, 1000);
  };

  useEffect(() => {
    dispatch(getPendingUserThunk());
  }, []);

  useEffect(() => {
    if (searchParams) {
      dispatch(getPendingUserThunk(searchParams));
    }
  }, []);

  return (
    <>
      <CustomTable
        tableId="pendinguser"
        handleClick={handleMultiUserAction}
        setSelectedRowKeys={setSelectedRowKeys}
        selectedRowKeys={selectedRowKeys}
        loading={pendingUser?.isLoading}
        tableData={searchParams ? pendingUser?.rejectUser : pendingUser?.users}
        tableHead={[
          ...PendingTableHeaders,
          {
            title: 'Action',
            dataIndex: 'action',
            render: (text, record) => {
              return (
                <>
                  <div className="flex items-center">
                    <Button
                      onClick={() => handleUserAction('approve', record)}
                      className="mr-3  bg-primary-green"
                      type="primary"
                      style={{ backgroundColor: '#46D39D' }}
                    >
                      Approve
                    </Button>

                    {record.status !== 'rejected' && (
                      <Button
                        onClick={() => handleUserAction('reject', record)}
                        type="primary"
                      >
                        Reject
                      </Button>
                    )}
                    <Button
                      onClick={() => handleUserAction('delete', record)}
                      type="primary"
                      className="ml-3"
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
      <CustomModal
        customClass="actionModal"
        open={stateData?.isModalOpen}
        handleCancel={handleCloseModal}
      >
        {stateData.actionType === 'approve' && (
          <AcceptAction
            userData={stateData?.data}
            isMultiUserAction={stateData?.isMultiUserAction}
            isLoading={pendingUser.isUpdating}
            handleApprove={handleApprove}
            handleClose={handleCloseModal}
          />
        )}
        {stateData.actionType === 'reject' && (
          <RejectAction
            userData={stateData?.data}
            isLoading={pendingUser.isUpdating}
            isMultiUserAction={stateData?.isMultiUserAction}
            handleReject={handleReject}
            handleClose={handleCloseModal}
          />
        )}
        {stateData.actionType === 'delete' && (
          <DeleteAction
            title="Delete Pending User"
            userData={stateData?.data}
            isLoading={pendingUser.isUpdating}
            isMultiUserAction={stateData?.isMultiUserAction}
            handleReject={handleDelete}
            handleClose={handleCloseModal}
          />
        )}
      </CustomModal>
    </>
  );
};

export default PendingUserTable;
