import { RxUpdate } from 'react-icons/rx';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { gowinImages } from '../../public/assets';

import ProfileChangePassword from '../ProfileChangePassword/ProfileChangePassword';
import CustomButton from '../../ui/CustomButton/CustomButton';
import toast from 'react-hot-toast';
import { envConfig } from '../../lib/config';

const updatePasswordAction = async (payload, setIsUpdating) => {
  try {
    const res = await fetch(`${envConfig.serverUrl}/auth/chnagepassword`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!data?.data.success) {
      setIsUpdating(false);
      toast.error(data?.data?.message);
      return;
    }
    return data;
  } catch (error) {
    setIsUpdating(false);
    console.log(error);
    toast.error(error.message);
  }
};

const ProfileRightSettings = () => {
  let { data } = useSession();
  const [inputData, setInputData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [setting, setSetting] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const updatePassword = async () => {
    if (
      !inputData.oldPassword ||
      !inputData.newPassword ||
      !inputData.confirmPassword
    ) {
      return toast.error('Please fill all the password fields');
    }
    if (inputData.newPassword !== inputData.confirmPassword) {
      return toast.error('New Password and confirm password not match');
    }
    setIsUpdating(true);
    const payload = {
      oldPassword: inputData.oldPassword,
      newPassword: inputData.newPassword,
      id: data?.user?._id,
    };
    const response = await updatePasswordAction(payload, setIsUpdating);
    if (response?.data?.success) {
      toast.success(response?.data.message);
      setSetting('');
      setInputData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setIsUpdating(false);
    }
  };
  return (
    <div className="flex flex-col w-full">
      <div className="p-3 flex justify-between items-center rounded-[10px] border-[2px] border-slate-400 w-full mb-5">
        <div
          onClick={() => setSetting('Change Password')}
          className="flex h-10 w-48 items-center justify-center bg-primaryLightBlue hover:primaryExtralightblue text-white rounded-md cursor-pointer"
        >
          <Image
            width={30}
            height={30}
            src={gowinImages.passwordIcon}
            alt="password icon"
            className="mr-2"
          />{' '}
          Change Password
        </div>
      </div>
      {setting && (
        <div className="p-4 flex flex-col rounded-[10px] border-[2px] border-slate-400">
          <div className="flex items-center justify-between mb-3">
            <h6 className="text-sm leading-5 font-semibold text-black">
              {setting}
            </h6>
            <div className="flex">
              <CustomButton
                handleClick={updatePassword}
                btnClass={
                  ' h-8 bg-primary-blue w-24 border-none text-white rounded-md flexCenter cursor-pointer mr-2'
                }
              >
                <RxUpdate className={`me-1 ${isUpdating && 'animate-spin'}`} />
                Update
              </CustomButton>
              <CustomButton
                handleClick={() => {
                  setSetting('');
                  setInputData({
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                  });
                }}
                btnClass={
                  ' h-8 bg-primaryLightBlue w-24 border-none text-white rounded-md flexCenter cursor-pointer'
                }
              >
                Cancel
              </CustomButton>
            </div>
          </div>

          <div className="flex flex-col">
            {setting === 'Change Password' && (
              <ProfileChangePassword
                inputData={inputData}
                setInputData={setInputData}
                setSetting={setSetting}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileRightSettings;
