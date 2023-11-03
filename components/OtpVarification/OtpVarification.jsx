import OTPInput from 'otp-input-react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CustomButton from '../../ui/CustomButton/CustomButton';

const OtpVarification = () => {
  const { auth } = useSelector(state => state);
  const [otpValue, setOtpValue] = useState('');

  const varifyOtp = () => {
    console.log(otpValue);
  };
  return (
    <div className="my-2 flex justify-center items-center  flex-col">
      <div className="flex items-center w-full flex-col">
        <h2 className="flexCenter my-2 text-white text-sm md:text-xl">
          Please enter the OTP sent to your mobile number
        </h2>
        <div className="w-full md:w-5/6 flex items-center flex-col relative">
          <label className="text-white text-center" htmlFor="otp">
            Enter OTP
          </label>
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
              {auth.isLoading ? 'Loading...' : 'Verify OTP'}
            </CustomButton>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3">
          <p className="text-white text-sm">
            Didn&apos;t receive the OTP?{' '}
            <span className="text-primary-blue cursor-pointer">Resend</span>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p>Or</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-white text-sm">
            Back to{' '}
            <span className="text-primary-blue cursor-pointer">Signup</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpVarification;
