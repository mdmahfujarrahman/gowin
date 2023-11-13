'use client';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Image from 'next/image';

import { formValidation } from '../../helper/formValidation/formValidation';

import PhoneInputs from '../PhoneInputs/PhoneInputs';
import ImageUpload from '../ImageUpload/ImageUpload';

import CustomInput from '../../ui/CustomInput/CustomInput';
import CustomButton from '../../ui/CustomButton/CustomButton';

import { gowinImages } from '../../public/assets';

import Clock from '../Clock/Clock';

import { isUserExistThunk } from '../../store/actions/authAction/authAction';
import { useRouter } from 'next/navigation';
import { LoadingOutlined } from '@ant-design/icons';

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const [passShow, setPassShow] = useState(false);
  const [inputData, setInputData] = useState({
    name: '',
    phone: '',
    countryCode: '',
    password: '',
    profilePicture: '',
  });

  const handleChange = e => {
    const { name, value, code } = e.target;
    if (code) {
      setInputData({ ...inputData, [name]: value, countryCode: code });
      return;
    } else {
      setInputData({ ...inputData, [name]: value });
    }
  };

  const handleSignup = async () => {
    const valid = formValidation.Signup(inputData);
    if (!valid) return;
    dispatch(isUserExistThunk(inputData));
  };

  return (
    <div className="my-2 flex justify-center items-center  flex-col">
      <Clock />
      <div className="flex items-center w-[320px] flex-col">
        <h2 className="flexCenter my-2 text-white text-2xl">
          Sign Up New Go win
        </h2>
        <div className="w-full flex flex-col relative">
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <CustomInput
            handleChange={handleChange}
            name="name"
            value={inputData.name}
            placeholder="Please Enter your name"
            className="my-2 h-10 w-full px-3 py-1 rounded-sm focus:outline-none"
          />
        </div>
        <div className="w-full  flex flex-col relative">
          <label className="text-white" htmlFor="name">
            Phone Number
          </label>
          <PhoneInputs handleChange={handleChange} inputData={inputData} />
        </div>
        <div className="w-full flex flex-col relative">
          <label className="text-white" htmlFor="name">
            Password
          </label>
          <CustomInput
            handleChange={handleChange}
            name="password"
            type={passShow ? 'text' : 'password'}
            placeholder="Please Enter your password"
            value={inputData.password}
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
      <div className="flex  w-[320px] flex-col">
        <div className="flex flex-col gap-2 ">
          <label className="text-white" htmlFor="name">
            Profile Image
          </label>
          <ImageUpload setInputData={setInputData} inputData={inputData} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <CustomButton
          handleClick={handleSignup}
          // isDisabled={true}
          btnClass={
            ' my-2 h-10 bg-primary-blue w-32 border-none flexCenter text-white rounded-md'
          }
        >
          {auth.isLoading ? <LoadingOutlined /> : 'Sign Up'}
        </CustomButton>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white">
          Already have a Account?{' '}
          <span
            onClick={() => router.push('/')}
            className="text-primary-blue cursor-pointer"
          >
            {' '}
            Login Here!
          </span>{' '}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
