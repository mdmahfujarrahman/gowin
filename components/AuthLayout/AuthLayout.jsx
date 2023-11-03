'use client';
import { useState } from 'react';
import Image from 'next/image';
// assets
import { gowinImages } from '../../public/assets';
// components
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import OtpVarification from '../OtpVarification/OtpVarification';

const AuthLayout = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [authType, setAuthType] = useState('otp');

  return (
    <section className="flexCenter bg-primary-blue h-screen  lg:p-12">
      <div className="bg-primary-red w-[85%] md:w-1/3  h-auto rounded-xl p-4">
        <div className="flexCenter">
          <Image
            src={gowinImages.Logo}
            height={50}
            width={200}
            className="object-contain"
            alt="go win logo"
          />
        </div>
        {authType === 'login' ? <Login setAuthType={setAuthType} /> : ''}
        {authType === 'register' ? <SignUp setAuthType={setAuthType} /> : ''}
        {authType === 'otp' ? (
          <OtpVarification setAuthType={setAuthType} />
        ) : (
          ''
        )}
        {authType === 'forget' ? <ForgetPassword /> : ''}
      </div>
    </section>
  );
};

export default AuthLayout;
