'use client';
import { useSelector } from 'react-redux';

import SignUp from '../SignUp/SignUp';
import OtpVarification from '../OtpVarification/OtpVarification';
import PendingAccount from '../PendingAccount/PendingAccount';

const SignupLayout = () => {
  const { auth } = useSelector(state => state);

  return (
    <>
      {auth?.route === 'register' ? <SignUp /> : ''}
      {auth?.route === 'otp' ? <OtpVarification /> : ''}
      {auth?.route === 'pending' ? <PendingAccount /> : ''}
    </>
  );
};

export default SignupLayout;
