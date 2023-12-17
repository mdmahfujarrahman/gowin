import Image from 'next/image';
import React, { useState } from 'react';

import { gowinImages } from '../../public/assets';
import CustomInput from '../../ui/CustomInput/CustomInput';

const ProfileChangePassword = ({ setInputData, inputData }) => {
  const [passShow, setPassShow] = useState(false);
  const [oldPasswordShow, setOldPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full flex flex-col relative md:me-3">
        <label className="text-black" htmlFor="name">
          Old Password
        </label>
        <CustomInput
          handleChange={handleChange}
          name="oldPassword"
          type={oldPasswordShow ? 'text' : 'password'}
          placeholder="Please Enter old password"
          value={inputData.oldPassword}
          className="my-2 h-10 w-full px-3 py-1 rounded-sm focus:outline-none border-slate-400 border-[2px]"
        />
        <div>
          <Image
            src={oldPasswordShow ? gowinImages.view : gowinImages.hide}
            height={20}
            width={20}
            onClick={() =>
              setOldPasswordShow(prevState => {
                return !prevState;
              })
            }
            className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer "
            alt="password show hide"
          />
        </div>
      </div>
      <div className="w-full flex flex-col relative md:me-3">
        <label className="text-black" htmlFor="name">
          New Password
        </label>
        <CustomInput
          handleChange={handleChange}
          name="newPassword"
          type={passShow ? 'text' : 'password'}
          placeholder="Please Enter new password"
          value={inputData.newPassword}
          className="my-2 h-10 w-full px-3 py-1 rounded-sm focus:outline-none border-slate-400 border-[2px]"
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
      <div className="w-full flex flex-col relative">
        <label className="text-black" htmlFor="name">
          Confirm New Password
        </label>
        <CustomInput
          handleChange={handleChange}
          name="confirmPassword"
          type={passShow ? 'text' : 'password'}
          placeholder="Please Enter confirm new password"
          value={inputData.confirmPassword}
          className="my-2 h-10 w-full px-3 py-1 rounded-sm focus:outline-none border-slate-400 border-[2px]"
        />
        <div>
          <Image
            src={confirmPasswordShow ? gowinImages.view : gowinImages.hide}
            height={20}
            width={20}
            onClick={() =>
              setConfirmPasswordShow(prevState => {
                return !prevState;
              })
            }
            className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer"
            alt="password show hide"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileChangePassword;
