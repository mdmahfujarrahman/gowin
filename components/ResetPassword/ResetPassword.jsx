'use client';
import { LoadingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React, { useState } from 'react';
import CustomButton from '../../ui/CustomButton/CustomButton';
import PhoneInputs from '../PhoneInputs/PhoneInputs';
import Clock from '../Clock/Clock';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { isUserExistThunk } from '../../store/actions/authAction/authAction';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const [inputData, setInputData] = useState({
    phoneNumber: '',
    countryCode: '',
  });

  const handleChange = e => {
    const { name, value, code } = e.target;
    setInputData({ ...inputData, [name]: value, countryCode: code });
  };
  const handleResetPassword = e => {
    e.preventDefault();
    if (!inputData.phoneNumber || !inputData.countryCode) {
      toast.error('Please enter phone number');
      return;
    }
    dispatch(isUserExistThunk({ ...inputData, type: 'resetPassword' }));
  };
  return (
    <form
      onSubmit={handleResetPassword}
      className="my-2 flex justify-center items-center  flex-col"
    >
      <Clock />
      <div className="flex items-center w-[320px] flex-col">
        <h2 className="flexCenter my-2 text-white text-2xl">Reset Password</h2>
        <div className="w-full  flex flex-col relative">
          <label className="text-white" htmlFor="name">
            Phone Number
          </label>
          <PhoneInputs handleChange={handleChange} inputData={inputData} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <CustomButton
          isDisabled={false}
          btnClass={
            ' my-2 h-10 bg-primary-blue w-36 border-none text-white rounded-md flexCenter cursor-pointer'
          }
        >
          {auth.isLoading ? <LoadingOutlined /> : 'Reset Password'}
        </CustomButton>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white">
          Back to &nbsp;
          <Link className="text-primary-blue cursor-pointer" href="/">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default ResetPassword;
