import Image from 'next/image';
import React from 'react';
import { Button } from 'antd';
import { adminIcons } from '../../../../public/assets';

const AcceptAction = ({
  userData,
  isLoading,
  handleApprove,
  handleClose,
  isMultiUserAction,
}) => {
  return (
    <div className="w-full">
      <div className="flexCenter">
        <div className="rounded-full flexCenter h-36 w-36 bg-[#bbfaca]">
          <Image
            width={100}
            height={100}
            src={adminIcons.approve}
            alt="approve icon"
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center mt-4 uppercase">
          Approve User
        </h1>
        {isMultiUserAction ? (
          <p className="text-center mt-2">
            Are you sure you want to approve all{' '}
            <span className="text-yellow-600"> {userData?.length}</span> users ?
          </p>
        ) : (
          <p className="text-center mt-2">
            Are you sure you want to approve{' '}
            <span className="text-yellow-600"> {userData?.name}</span> from{' '}
            <span className="text-yellow-600">{userData.country}</span> ?
          </p>
        )}
      </div>
      <div className="flex justify-end items-center mt-4">
        <Button
          onClick={() => handleApprove(isMultiUserAction, userData)}
          className="mr-3 w-24 bg-[#1677ff]"
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

export default AcceptAction;
