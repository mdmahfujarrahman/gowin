'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { gowinImages } from '../../public/assets';

import PhoneInputs from '../PhoneInputs/PhoneInputs';

import CustomButton from '../../ui/CustomButton/CustomButton';
import CustomInput from '../../ui/CustomInput/CustomInput';
import notification from '../../helper/nottification/nottification';

const Login = ({ setAuthType }) => {
  const router = useRouter();
  const [passShow, setPassShow] = useState(false);
  const [inputData, setInputData] = useState({
    phoneNumber: '',
    countryCode: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value, code } = e.target;
    if (code) {
      setInputData({ ...inputData, [name]: value, countryCode: code });
      return;
    }
    setInputData({ ...inputData, [name]: value });
  };

  const handleLogin = () => {
    if (!inputData.email || !inputData.password) {
      notification('error', 'Please enter email and password');
      return;
    }
    router.push('/fillup');
  };

  return (
    <div className="my-2 flex justify-center items-center  flex-col">
      <div className="flex items-center w-full flex-col">
        <h2 className="flexCenter my-2 text-white text-2xl">
          Sign in your Go win
        </h2>
        <div className="w-full md:w-5/6 flex flex-col relative">
          <label className="text-white" htmlFor="name">
            Phone Number
          </label>
          <PhoneInputs handleChange={handleChange} inputData={inputData} />
        </div>
        <div className="w-full md:w-5/6 flex flex-col relative">
          <label className="text-white" htmlFor="name">
            Password
          </label>
          <CustomInput
            handleChange={handleChange}
            name="password"
            type={passShow ? 'text' : 'password'}
            placeholder="Please Enter your password"
            className="my-2 h-10 w-full px-3 py-1 rounded-sm focus:outline-none"
          />
          <div>
            <Image
              src={passShow ? gowinImages.view : gowinImages.hide}
              height={20}
              width={20}
              onClick={() =>
                setPassShow(prevState => {
                  return !prevState;
                })
              }
              className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer"
              alt="password show hide"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <CustomButton
          handleClick={handleLogin}
          isDisabled={false}
          btnClass={
            ' my-2 h-10 bg-primary-blue w-32 border-none text-white rounded-md cursor-pointer'
          }
        >
          Sign In
        </CustomButton>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white">
          Don&rsquo;t Have an Account?
          <span
            onClick={() => setAuthType('register')}
            className="text-primary-blue cursor-pointer"
          >
            {' '}
            Sign Up Here!
          </span>{' '}
        </p>
      </div>
    </div>
  );
};

export default Login;
