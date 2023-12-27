import React from 'react';
import { adminIcons } from '../../../../public/assets';
import Image from 'next/image';
import { Button } from 'antd';

const RejectAction = ({
  userData,
  isLoading,
  handleReject,
  handleClose,
  isMultiUserAction,
}) => {
  return (
    <div className="w-full">
      <div className="flexCenter">
        <div className="rounded-full flexCenter h-36 w-36 bg-[#f6afaf]">
          <Image
            width={100}
            height={100}
            src={adminIcons.reject}
            alt="approve icon"
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center mt-4 uppercase">
          Reject User
        </h1>
        {isMultiUserAction ? (
          <p className="text-center mt-2">
            Are you sure you want to reject all{' '}
            <span className="text-yellow-600"> {userData?.length}</span> users ?
          </p>
        ) : (
          <p className="text-center mt-2">
            Are you sure you want to reject{' '}
            <span className="text-yellow-600"> {userData?.name}</span> from{' '}
            <span className="text-yellow-600">{userData.country}</span> ?
          </p>
        )}
      </div>
      <div className="flex justify-end items-center mt-4">
        <Button
          onClick={() => handleReject(isMultiUserAction, userData)}
          className="mr-3 w-24"
          loading={isLoading}
          type="primary"
        >
          Yes
        </Button>
        <Button className="w-24" onClick={handleClose} type="primary" danger>
          No
        </Button>
      </div>
    </div>
  );
};

export default RejectAction;
