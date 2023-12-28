'use client';
import { useState } from 'react';
import Image from 'next/image';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { gowinImages } from '../../public/assets';

import PhoneInputs from '../PhoneInputs/PhoneInputs';

import Clock from '../Clock/Clock';

import CustomButton from '../../ui/CustomButton/CustomButton';
import CustomInput from '../../ui/CustomInput/CustomInput';

import notification from '../../helper/nottification/nottification';

import { manageAuthRoute } from '../../store/slices/authSlice/authSlice';
import Link from 'next/link';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);

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

  const handleLogin = async e => {
    e.preventDefault();
    setIsLoading(true);
    if (!inputData.phoneNumber || !inputData.password) {
      setIsLoading(false);
      notification('error', 'Please enter Phone Number and password');
      return;
    }
    const res = await signIn('credentials', {
      phoneNumber: inputData.phoneNumber,
      countryCode: inputData.countryCode,
      password: inputData.password,
      redirect: false,
    });
    if (res.error) {
      setIsLoading(false);
      const errors = JSON.parse(res.error);
      if (errors.message === 'Your account is not verified yet') {
        dispatch(manageAuthRoute('pending'));
        router.push('/signup');
      } else if (errors.message === 'Your account is rejected') {
        dispatch(manageAuthRoute('rejected'));
        router.push('/signup');
      } else {
        setIsLoading(false);
        notification('error', errors.message);
      }
    } else {
      const sessions = await getSession();
      notification('success', 'Login Successfull');
      if (sessions?.user?.role === 'admin') {
        console.log('Enter if');
        router.push('/dashboard');
        setIsLoading(false);
        return;
      } else {
        console.log('Enter else');
        router.push('/results');
        setIsLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="my-2 flex justify-center items-center  flex-col"
    >
      <Clock />
      <div className="flex items-center w-[320px] flex-col">
        <h2 className="flexCenter my-2 text-white text-2xl">
          Sign in your Go win
        </h2>
        <div className="w-full  flex flex-col relative">
          <label className="text-white" htmlFor="name">
            Phone Number
          </label>
          <PhoneInputs handleChange={handleChange} inputData={inputData} />
        </div>
        <div className="w-full  flex flex-col relative">
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
          isDisabled={false}
          btnClass={
            ' my-2 h-10 bg-primary-blue w-32 border-none text-white rounded-md flexCenter cursor-pointer'
          }
        >
          {loading ? <LoadingOutlined /> : 'Sign In'}
        </CustomButton>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white">
          Forgot Password? &nbsp;
          <Link className="text-primary-blue cursor-pointer" href="/reset">
            Click Here!
          </Link>
        </p>
      </div>
      <div className="w-full ">
        <Divider>
          <Image
            width={30}
            height={30}
            src={gowinImages.devider}
            alt="devider"
          />
        </Divider>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white">
          Don&rsquo;t Have an Account? &nbsp;
          <Link className="text-primary-blue cursor-pointer" href="/signup">
            Sign Up Here!
          </Link>{' '}
        </p>
      </div>
    </form>
  );
};

export default Login;
