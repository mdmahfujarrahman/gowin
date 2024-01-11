'use client';
import { Button } from 'antd';
import CustomTable from '../Table/CustomTable';
import { useEffect, useState } from 'react';
import {
  getActiveUserThunk,
  updateActiveUserStatusThunk,
} from '../../../store/actions/activeUserAction/activeUserAction';
import { useDispatch, useSelector } from 'react-redux';
import { PendingTableHeaders } from '../../../constant/TableHeaders';
import DeleteAction from '../AdminModal/DeleteAction/DeleteAction';
import CustomModal from '../../../ui/CustomModal/CustomModal';

const ActiveUserTable = () => {
  const dispatch = useDispatch();
  const activeUser = useSelector(state => state?.activeUser);
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
      handleMultiUserDelete(userData);
      return;
    }
    setTimeout(() => {
      dispatch(
        updateActiveUserStatusThunk({
          type: 'delete',
          userId: userData._id,
          handleCloseModal: handleCloseModal,
          isMultiUserAction: false,
        }),
      );
      setSelectedRowKeys([]);
    }, 100);
  };

  const handleMultiUserDelete = userData => {
    setTimeout(() => {
      try {
        userData.forEach(async user => {
          await dispatch(
            updateActiveUserStatusThunk({
              type: 'delete',
              userId: user._id,
              handleCloseModal: handleCloseModal,
              isMultiUserAction: true,
            }),
          );
        });
      } catch (error) {
        console.log(error);
      }

      setSelectedRowKeys([]);
    }, 100);
  };

  useEffect(() => {
    dispatch(getActiveUserThunk());
  }, []);

  return (
    <>
      <CustomTable
        tableId="activeuser"
        handleClick={handleMultiUserAction}
        setSelectedRowKeys={setSelectedRowKeys}
        selectedRowKeys={selectedRowKeys}
        tableData={activeUser?.users}
        loading={activeUser?.isLoading}
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
      <CustomModal
        customClass="actionModal"
        open={stateData?.isModalOpen}
        handleCancel={handleCloseModal}
      >
        {stateData.actionType === 'delete' && (
          <DeleteAction
            title="Delete Active User"
            userData={stateData?.data}
            isLoading={activeUser.isUpdating}
            isMultiUserAction={stateData?.isMultiUserAction}
            handleReject={handleDelete}
            handleClose={handleCloseModal}
          />
        )}
      </CustomModal>
    </>
  );
};

export default ActiveUserTable;
