/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState } from 'react';
import { gowinImages, lottaryType } from '../../public/assets/index';
import Image from 'next/image';

import CustomInput from '../../ui/CustomInput/CustomInput';
import CustomButton from '../../ui/CustomButton/CustomButton';

const ClaimPrizeStepOne = ({ winnerDeatils, type }) => {
  const [inputData, setInputData] = useState({});

  const [selected, setSelected] = useState('');

  const handleChange = e => {
    console.log(e);
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-sm p-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center font-bold text-primary-blue">
          Step 1
        </h1>
        <p className="text-xl text-center text-primary-blue mt-4">
          Select your preferred method to receive your prize money
        </p>
        <small className="text-sm text-center text-primary-blue mt-4">
          We will send your winning prize money your selected methods
        </small>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row mt-4">
        <div
          onClick={() => setSelected('bank')}
          className={`flex w-4/6 md:w-fit h-8 p-5 items-center justify-center rounded-sm mb-4 md:mb-0 md:me-3   cursor-pointer ${
            selected === 'bank' ? 'bg-green-500' : 'bg-primaryLightBlue'
          }`}
          tabIndex={0}
          onKeyDown={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              setSelected('bank');
            }
          }}
        >
          <Image
            width={30}
            height={30}
            src={gowinImages.bankTransfer}
            alt="bank transfer"
          />
          <h6 className="text-white ms-2 text-sm">Bank Transfer</h6>
        </div>
        <div
          onClick={() => setSelected('wire')}
          className={`flex w-4/6 md:w-fit h-8 p-5 items-center justify-center rounded-sm mb-4 md:mb-0 md:me-3   cursor-pointer ${
            selected === 'wire' ? 'bg-green-500' : 'bg-primaryLightBlue'
          }`}
          tabIndex={0}
          onKeyDown={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              setSelected('wire');
            }
          }}
        >
          <Image
            width={30}
            height={30}
            src={gowinImages.moneyTransfer}
            alt="Money transfer"
          />
          <h6 className="text-white ms-2 text-sm">Money Transfer</h6>
        </div>
      </div>
      {selected && (
        <div className="flex items-center flex-col md:flex-row mt-4">
          {selected === 'bank' && (
            <div className="flex justify-center items-center order-2 md:order-1 w-full md:w-6/12  flex-col mt-4">
              <div className="w-full flex flex-col relative">
                <label className="text-black" htmlFor="name">
                  Enter Your Bank Name
                </label>
                <CustomInput
                  handleChange={handleChange}
                  name="bankName"
                  value={inputData.bankName}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-4/6 px-3 py-1 rounded-sm focus:outline-none border-[2px] border-slate-400"
                />
              </div>
              <div className="w-full flex flex-col relative">
                <label className="text-black" htmlFor="name">
                  Enter Your Bank Account Number
                </label>
                <CustomInput
                  handleChange={handleChange}
                  name="bankName"
                  value={inputData.bankName}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-4/6 px-3 py-1 rounded-sm focus:outline-none border-[2px] border-slate-400"
                />
              </div>
              <div className="w-full flex flex-col relative">
                <label className="text-black" htmlFor="name">
                  Enter Your Bank Account Name
                </label>
                <CustomInput
                  handleChange={handleChange}
                  name="bankName"
                  value={inputData.bankName}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-4/6 px-3 py-1 rounded-sm focus:outline-none border-[2px] border-slate-400"
                />
              </div>
              <div className="w-full flex flex-col relative">
                <label className="text-black" htmlFor="name">
                  Enter Your Bank Branch Name
                </label>
                <CustomInput
                  handleChange={handleChange}
                  name="bankName"
                  value={inputData.bankName}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-4/6 px-3 py-1 rounded-sm focus:outline-none border-[2px] border-slate-400"
                />
              </div>
              <div className="w-full flex flex-col relative">
                <label className="text-black" htmlFor="name">
                  Enter Your Bank Branch Code
                </label>
                <CustomInput
                  handleChange={handleChange}
                  name="bankName"
                  value={inputData.bankName}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-4/6  px-3 py-1 rounded-sm focus:outline-none border-[2px] border-slate-400"
                />
              </div>
              <div className="w-full flex flex-col relative">
                <label className="text-black" htmlFor="name">
                  Enter Your Bank Swift Code
                </label>
                <CustomInput
                  handleChange={handleChange}
                  name="bankName"
                  value={inputData.bankName}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-4/6 px-3 py-1 rounded-sm focus:outline-none border-[2px] border-slate-400"
                />
              </div>

              <CustomButton
                btnClass={
                  ' my-2 h-10 bg-primary-blue w-32 border-none flexCenter text-white rounded-md'
                }
              >
                Continue
              </CustomButton>
            </div>
          )}
          {selected === 'wire' && (
            <div className="flex justify-center items-center order-2 md:order-1 w-full md:w-6/12  flex-col mt-4">
              <div className="w-full flex flex-col relative">
                <label className="text-black" htmlFor="name">
                  Enter Your Bank Name
                </label>
                <CustomInput
                  handleChange={handleChange}
                  name="bankName"
                  value={inputData.bankName}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-4/6 px-3 py-1 rounded-sm focus:outline-none border-[2px] border-slate-400"
                />
              </div>
              <div className="w-full flex flex-col relative">
                <label className="text-black" htmlFor="name">
                  Enter Your Bank Account Number
                </label>
                <CustomInput
                  handleChange={handleChange}
                  name="bankName"
                  value={inputData.bankName}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-4/6 px-3 py-1 rounded-sm focus:outline-none border-[2px] border-slate-400"
                />
              </div>
              <div className="w-full flex flex-col relative">
                <label className="text-black" htmlFor="name">
                  Enter Your Bank Account Name
                </label>
                <CustomInput
                  handleChange={handleChange}
                  name="bankName"
                  value={inputData.bankName}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-4/6 px-3 py-1 rounded-sm focus:outline-none border-[2px] border-slate-400"
                />
              </div>
              <div className="w-full flex flex-col relative">
                <label className="text-black" htmlFor="name">
                  Enter Your Bank Branch Name
                </label>
                <CustomInput
                  handleChange={handleChange}
                  name="bankName"
                  value={inputData.bankName}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-4/6 px-3 py-1 rounded-sm focus:outline-none border-[2px] border-slate-400"
                />
              </div>
              <CustomButton
                btnClass={
                  ' my-2 h-10 bg-primary-blue w-32 border-none flexCenter text-white rounded-md'
                }
              >
                Continue
              </CustomButton>
            </div>
          )}
          <div className="w-full px-2 flex items-center justify-center md:w-6/12  order-1 md:order-2">
            <div className="md:w-96 h-96 flex flex-col items-center bg-primary-blue rounded-md p-6">
              <div className="flex flex-col items-center justify-center">
                <h5 className="text-3xl font-extrabold text-yellow-500">
                  Lucky Winner{' '}
                </h5>
                <Image
                  src={
                    lottaryType[
                      type === 'winner'
                        ? winnerDeatils?.data?.prizeType
                        : winnerDeatils?.data?.winnerType
                    ]
                  }
                  alt={
                    type === 'winner'
                      ? winnerDeatils?.data.prizeType
                      : winnerDeatils?.data?.winnerType
                  }
                  width={100}
                  height={60}
                  className="mt-4"
                />

                <h2 className="text-5xl font-extrabold text-white mt-4">
                  AED{' '}
                  {type === 'winner'
                    ? winnerDeatils?.data?.prizeAmount
                    : '50000'}
                </h2>
              </div>
              <div className="flex items-center mt-4">
                <Image
                  width={100}
                  height={120}
                  className="rounded-md "
                  src={
                    type === 'winner'
                      ? winnerDeatils?.data?.winner?.profilePicture
                      : winnerDeatils.data.user.image
                  }
                  alt="bank transfer"
                />
                <div className="flex flex-col ml-3">
                  <div className="px-3 py-2 bg-primaryLightBlue rounded-full">
                    <h2 className="text-sm font-extrabold text-white">
                      {type === 'winner'
                        ? winnerDeatils?.data?.winner?.name
                        : winnerDeatils.data.user.name}
                    </h2>
                  </div>
                  <div className="px-3 py-2 bg-primaryLightBlue rounded-full mt-3">
                    <h2 className="text-sm text-center font-extrabold text-white uppercase">
                      {type === 'winner'
                        ? winnerDeatils?.data?.winner?.countryCode
                        : winnerDeatils.data.user.countryCode}
                    </h2>
                  </div>
                </div>
              </div>
              {type !== 'winner' && (
                <div className="px-3 py-2 bg-red-400 rounded-full mt-3">
                  <h2 className="text-sm font-extrabold text-white uppercase">
                    Winning Date: 17/12/2023
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClaimPrizeStepOne;
