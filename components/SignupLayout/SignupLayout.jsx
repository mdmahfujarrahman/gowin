'use client';
import { useSelector } from 'react-redux';

import SignUp from '../SignUp/SignUp';
import OtpVarification from '../OtpVarification/OtpVarification';
import PendingAccount from '../PendingAccount/PendingAccount';
import RejectedAccount from '../RejectedAccount/RejectedAccount';

const SignupLayout = () => {
  const { auth } = useSelector(state => state);

  return (
    <>
      {auth?.route === 'register' ? <SignUp /> : ''}
      {auth?.route === 'otp' ? <OtpVarification type="resetpassword" /> : ''}
      {auth?.route === 'pending' ? <PendingAccount /> : ''}
      {auth?.route === 'rejected' ? <RejectedAccount /> : ''}
    </>
  );
};

export default SignupLayout;
