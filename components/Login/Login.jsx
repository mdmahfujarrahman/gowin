'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomButton from '../../ui/CustomButton/CustomButton';
import CustomInput from '../../ui/CustomInput/CustomInput';
import useNotification from '../../hooks/useNotification';

const Login = () => {
  const router = useRouter();
  const Notification = useNotification();
  const [inputData, setInputData] = useState({});

  const handleChange = e => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!inputData.email || !inputData.password)
      return Notification('error', 'Please enter email and password');
    router.push('/fillup');
  };

  return (
    <div className="my-2 flex items-center justify-center flex-col">
      <CustomInput
        handleChange={handleChange}
        name="email"
        placeholder="Enter Email"
        className="my-2 h-12 w-full md:w-5/6 px-3 py-1 focus:outline-none"
      />
      <label className="w-full md:w-5/6 relative">
        <CustomInput
          handleChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter Password"
          className="my-2 h-12 px-3 py-1 w-full focus:outline-none"
        />
      </label>
      <CustomButton
        handleClick={handleLogin}
        btnClass={
          ' my-2 h-12 bg-primary-blue w-1/2 border-none text-white rounded-md'
        }
      >
        Login
      </CustomButton>
    </div>
  );
};

export default Login;
