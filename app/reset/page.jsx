'use client';
import { useSelector } from 'react-redux';
import OtpVarification from '../../components/OtpVarification/OtpVarification';
import ResetPassword from '../../components/ResetPassword/ResetPassword';
import PendingAccount from '../../components/PendingAccount/PendingAccount';
import RejectedAccount from '../../components/RejectedAccount/RejectedAccount';
import SetNewPassword from '../../components/SetNewPassword/SetNewPassword';

export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const ForgetPassword = () => {
  const { auth } = useSelector(state => state);

  return (
    <>
      {auth?.resetRoute === 'reset' ? <ResetPassword /> : ''}
      {auth?.resetRoute === 'otp' ? (
        <OtpVarification type="resetpassword" />
      ) : (
        ''
      )}
      {auth?.resetRoute === 'setnewpassword' ? <SetNewPassword /> : ''}
      {auth?.resetRoute === 'pending' ? <PendingAccount /> : ''}
      {auth?.resetRoute === 'rejected' ? <RejectedAccount /> : ''}
    </>
  );
};

export default ForgetPassword;
