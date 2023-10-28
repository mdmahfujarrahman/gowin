'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';

import { gowinImages } from '../../public/assets';
import Clock from '../../components/Clock/Clock.jsx';
import Navbar from '../../components/Navbar/Navbar';

import CustomButton from '../../ui/CustomButton/CustomButton';
import CustomInput from '../../ui/CustomInput/CustomInput';
import CustomModal from '../../ui/CustomModal/CustomModal';
import CustomUpload from '../../ui/CustomUpload/CustomUpload';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleCancel = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Navbar />
      <div className="flexCenter h-screen bg-primary-blue">
        <div className=" w-5/6 md:w-1/3  md:h-3/4 rounded p-4">
          <div className="flexCenter">
            <Image
              src={gowinImages.Logo}
              height={50}
              width={200}
              className="object-contain"
              alt="go win logo"
            />
          </div>
          <Clock />
          <div className="flexCenter mt-2">
            <CustomButton
              handleClick={handleOpen}
              btnClass={
                'bg-primary-yellow rounded-md my-2 h-12 w-full md:w-3/4 text-lg font-semibold text-primary-red'
              }
            >
              Get Go Win Winning Number
            </CustomButton>
          </div>
        </div>
      </div>
      <CustomModal open={open} handleCancel={handleCancel}>
        <div className="flex flex-col">
          <div>
            <h2 className="text-lg">Complete This form</h2>
          </div>
          <div className="flex flex-col mt-4">
            <label className="my-2" htmlFor="name">
              Name
            </label>
            <CustomInput
              placeholder="Please Enter Your Name"
              type="text"
              className="h-12 rounded-md border border-primary-blue focus:outline-none focus:border-primary-blue"
            />
          </div>
          <div className="flex  flex-col md:flex-row gap-2 mt-4 w-full">
            <div className="flex w-full md:w-2/4 flex-col">
              <label className="my-2" htmlFor="name">
                Phone Number
              </label>
              <CustomInput
                type="text"
                placeholder="Please Enter Phone Numebr "
                className="h-12 rounded-md border border-primary-blue focus:outline-none focus:border-primary-blue"
              />
            </div>
            <div className="flex w-full md:w-2/4 flex-col">
              <label className="my-2" htmlFor="name">
                Bank Account
              </label>
              <CustomInput
                type="text"
                placeholder="A/C Number "
                className="h-12 rounded-md border border-primary-blue focus:outline-none focus:border-primary-blue"
              />
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label className="my-2" htmlFor="name">
              Image
            </label>
            <CustomUpload />
          </div>
          <div className="flex items-center justify-end mt-4">
            <CustomButton
              btnClass={
                'w-1/5 bg-primary-blue px-4 py-2 rounded-md text-white text-sm'
              }
            >
              Submit
            </CustomButton>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default Dashboard;
