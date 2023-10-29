'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { formValidation } from '../../helper/formValidation/formValidation';

import PhoneInputs from '../PhoneInputs/PhoneInputs';
import ImageUpload from '../ImageUpload/ImageUpload';

import CustomInput from '../../ui/CustomInput/CustomInput';
import CustomButton from '../../ui/CustomButton/CustomButton';
import { gowinImages } from '../../public/assets';

const SignUp = ({ setAuthType }) => {
  const router = useRouter();
  const [passShow, setPassShow] = useState(false);
  const [inputData, setInputData] = useState({
    name: '',
    phoneNumber: '',
    countryCode: '',
    password: '',
    profilePicture: '',
  });

  console.log(inputData);
  const handleChange = e => {
    const { name, value, code } = e.target;
    if (code) {
      setInputData({ ...inputData, [name]: value, countryCode: code });
      return;
    }
    setInputData({ ...inputData, [name]: value });
  };

  const handleLogin = async () => {
    const valid = formValidation.Signup(inputData);
    if (!valid) return;
    try {
      router.push('/fillup');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-2 flex justify-center items-center  flex-col">
      <div className="flex items-center w-full flex-col">
        <h2 className="flexCenter my-2 text-white text-2xl">
          Sign Up New Go win
        </h2>
        <div className="w-full md:w-5/6 flex flex-col relative">
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <CustomInput
            handleChange={handleChange}
            name="name"
            placeholder="Please Enter your name"
            className="my-2 h-10 w-full px-3 py-1 rounded-sm focus:outline-none"
          />
        </div>
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
      <div className="flex  w-full flex-col">
        <div className="flex flex-col gap-2 pl-0 md:pl-[32px]">
          <label className="text-white" htmlFor="name">
            Profile Image
          </label>
          <ImageUpload setInputData={setInputData} inputData={inputData} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <CustomButton
          handleClick={handleLogin}
          // isDisabled={true}
          btnClass={
            ' my-2 h-10 bg-primary-blue w-32 border-none text-white rounded-md'
          }
        >
          Sign Up
        </CustomButton>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white">
          Already have a Account?{' '}
          <span
            onClick={() => setAuthType('login')}
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
