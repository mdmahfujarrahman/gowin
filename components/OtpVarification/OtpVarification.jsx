'use client';
import OTPInput from 'otp-input-react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

import CustomButton from '../../ui/CustomButton/CustomButton';
import {
  requestOtpThunk,
  verifyOtpThunk,
} from '../../store/actions/authAction/authAction';
import notification from '../../helper/nottification/nottification';
import {
  manageAuthRoute,
  resendOtpThunk,
} from '../../store/slices/authSlice/authSlice';

const OtpVarification = ({ type }) => {
  const [counter, setCounter] = useState(30);
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const [otpValue, setOtpValue] = useState('');

  const varifyOtp = () => {
    if (otpValue.length < 6)
      return notification('error', 'Please enter valid OTP');
    dispatch(verifyOtpThunk({ otp: otpValue, type }));
  };

  const handleResendOtp = () => {
    dispatch(resendOtpThunk());
    dispatch(
      requestOtpThunk({
        phoneNumber: auth.newUserData.phoneNumber,
        isResend: true,
        type,
      }),
    );
    setInterval(() => {
      setCounter(prev => prev - 1);
    }, 1000);

    clearInterval(counter === 0);
  };

  return (
    <div className="my-2 flex justify-center items-center  flex-col">
      <div className="flex items-center w-full flex-col">
        <h2 className="flexCenter my-2 text-white text-center text-sm md:text-xl">
          Please enter the OTP sent to your mobile number
        </h2>
        <div className="w-full md:w-5/6 flex items-center flex-col relative">
          <div className="my-3">
            <OTPInput
              className="otp-form"
              onChange={e => setOtpValue(e)}
              autoComplete={false}
              value={otpValue}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
            />
          </div>
          <div className="flex items-center justify-center">
            <CustomButton
              handleClick={varifyOtp}
              // isDisabled={true}
              btnClass={
                ' my-2 h-10 bg-primary-blue w-32 border-none text-white rounded-md'
              }
            >
              {auth.isLoading ? 'Verifing...' : 'Verify OTP'}
            </CustomButton>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3">
          <p className="text-white text-sm">
            Didn&apos;t receive the OTP?
            <CustomButton
              handleClick={handleResendOtp}
              btnClass={'w-20 h-9  bg-primary-blue rounded-md ms-2'}
            >
              {auth.isResend ? <LoadingOutlined /> : 'Resend'}
            </CustomButton>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p>Or</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-white text-sm">
            Back to
            <span
              onClick={() => dispatch(manageAuthRoute('register'))}
              className="text-primary-blue cursor-pointer ms-8"
              onKeyDown={() => dispatch(manageAuthRoute('register'))}
            >
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpVarification;
