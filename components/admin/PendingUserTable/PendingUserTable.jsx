'use client';
import { useState } from 'react';
import { PendingTableHeaders } from '../../../constant/TableHeaders.jsx';
import CustomModal from '../../../ui/CustomModal/CustomModal.jsx';
import CustomTable from '../Table/CustomTable';
import { Button } from 'antd';
import AcceptAction from '../AdminModal/AcceptAction/AcceptAction.jsx';
import RejectAction from '../AdminModal/RejectAction/RejectAction.jsx';
import toast from 'react-hot-toast';

const data = [];
for (let i = 0; i < 15; i++) {
  data.push({
    _id: i,
    key: i,
    image:
      'https://firebasestorage.googleapis.com/v0/b/gowinoffcial.appspot.com/o/files%2F336672754_968079451229097_8041909563150014048_n.jpg?alt=media&token=1b703f04-0b22-421a-8702-5611cbfc0e18',
    name: `Edward King ${i}`,
    phone: '+881786950046',
    country: `BD`,
    signedUp: `${i} days Ago`,
  });
}

const PendingUserTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableData, setTableData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setTableData(prevState =>
        prevState.filter(item => item._id !== userData._id),
      );
      toast.success(`${userData?.name} approved successfully`);
      setSelectedRowKeys([]);
      handleCloseModal();
    }, 1000);
  };

  const handleReject = (isMulti, userData) => {
    if (isMulti) {
      handleMultiUserReject(userData);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setTableData(prevState =>
        prevState.filter(item => item._id !== userData._id),
      );
      toast.success(`${userData?.name} rejected successfully`);
      setSelectedRowKeys([]);
      handleCloseModal();
    }, 1000);
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
  };

  const handleMultiUserReject = userData => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
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
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const filterData = tableData.filter(
        item => !userData.map(user => user?._id).includes(item?._id),
      );
      setTableData(filterData);
      toast.success(`${userData?.length} users approved successfully`);
      setSelectedRowKeys([]);
      handleCloseModal();
    }, 1000);
  };

  return (
    <>
      <CustomTable
        tableId="pendinguser"
        handleClick={handleMultiUserAction}
        setSelectedRowKeys={setSelectedRowKeys}
        selectedRowKeys={selectedRowKeys}
        tableData={tableData}
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
                      className="mr-3"
                      type="primary"
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleUserAction('reject', record)}
                      type="primary"
                      danger
                    >
                      Reject
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
            isLoading={isLoading}
            handleApprove={handleApprove}
            handleClose={handleCloseModal}
          />
        )}
        {stateData.actionType === 'reject' && (
          <RejectAction
            userData={stateData?.data}
            isLoading={isLoading}
            isMultiUserAction={stateData?.isMultiUserAction}
            handleReject={handleReject}
            handleClose={handleCloseModal}
          />
        )}
      </CustomModal>
    </>
  );
};

export default PendingUserTable;
