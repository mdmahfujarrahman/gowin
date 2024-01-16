'use Client';
import { CiEdit } from 'react-icons/ci';
import { RxUpdate } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

import ImageUpload from '../ImageUpload/ImageUpload';
import CustomButton from '../../ui/CustomButton/CustomButton';
import CustomInput from '../../ui/CustomInput/CustomInput';
import toast from 'react-hot-toast';
import { envConfig } from '../../lib/config';
import { useRouter } from 'next/navigation';

const updateProfile = async (payload, setIsUpdating) => {
  try {
    const res = await fetch(`${envConfig.serverUrl}/auth/updateProfile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setIsUpdating(false);
    return data;
  } catch (error) {
    setIsUpdating(false);
    console.log(error);
    toast.error(error.message);
  }
};

const ProfileRightPersonalDetails = () => {
  const router = useRouter();
  let { data, status } = useSession();
  const [inputData, setInputData] = useState({
    name: '',
    profilePicture: '',
  });
  const [isRefresh, setIsRefresh] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoader, setIsLoader] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      setIsLoader(false);
    }
  }, [status]);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleUpdate = async () => {
    setIsUpdating(true);

    const updatePayload = {
      id: data?.user?._id,
      name: inputData.name || data?.user?.name,
      profilePicture: inputData.profilePicture || data?.user?.image,
    };
    const res = await updateProfile(updatePayload, setIsUpdating);
    if (res?.data?.success) {
      const session = await fetch(`${envConfig.serverUrl}/auth/session`);
      const sessionData = await session.json();
      data = sessionData;
      router?.refresh();
      setIsRefresh(true);
      toast.success(res?.data?.message);
      setIsEdit(false);
    }
  };

  useEffect(() => {
    if (isRefresh) {
      setIsRefresh(false);
      router?.refresh();
    }
  }, [isRefresh, router]);

  return (
    <div className="flex flex-col w-full">
      <div className="p-3 flex justify-between items-center rounded-[10px] border-[2px] border-slate-400 w-full mb-5">
        <div className="flex items-center">
          <div className="w-16 h-16 me-4 rounded-full">
            {isLoader ? (
              <div className="animate-pulse h-16 w-16 bg-slate-300 rounded-full" />
            ) : (
              <Image
                className="w-full h-full rounded-full object-contain"
                src={data?.user?.image}
                width={64}
                height={64}
                alt="profile iamge"
              />
            )}
          </div>
          {isLoader ? (
            <div className="flex flex-col">
              <div className="animate-pulse h-4 w-28 mb-1 bg-slate-300 rounded-sm" />
              <div className="animate-pulse h-4 w-20 mb-1 bg-slate-300 rounded-sm" />
              <div className="animate-pulse h-4 w-20 bg-slate-300 rounded-sm" />
            </div>
          ) : (
            <div className="flex flex-col">
              <h6 className="font-semibold text-sm leading-5 text-black">
                {data?.user?.name}
              </h6>
              <p className="text-slate-500 uppercase">
                {data?.user?.countryCode}
              </p>
              <span className="text-slate-500">+{data?.user?.phoneNumber}</span>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col rounded-[10px] border-[2px] border-slate-400">
        <div className="flex items-center justify-between mb-3">
          <h6 className="text-sm leading-5 font-semibold text-black">
            Personal Information
          </h6>
          {isEdit ? (
            <CustomButton
              handleClick={handleUpdate}
              btnClass={
                ' h-8 bg-primary-blue w-24 border-none text-white rounded-md flexCenter cursor-pointer'
              }
            >
              <RxUpdate className={`me-1 ${isUpdating && 'animate-spin'}`} />
              Update
            </CustomButton>
          ) : (
            <div
              onClick={() => setIsEdit(!isEdit)}
              className="flex items-center py-1 px-3 rounded-[20px] border-[2px] border-slate-400 cursor-pointer"
            >
              <span>Edit</span>
              <CiEdit />
            </div>
          )}
        </div>
        <div className="flex flex-col">
          {isEdit ? (
            <div className="flex items-center justify-start flex-col md:flex-row mb-4">
              <div className="flex flex-col  md:me-5 w-full md:w-6/12">
                <p>Profile Image</p>
                <ImageUpload
                  setInputData={setInputData}
                  inputData={inputData}
                />
              </div>
              <div className="flex flex-col  md:me-5 w-full md:w-6/12">
                <p>Name</p>
                <CustomInput
                  handleChange={handleChange}
                  name="name"
                  value={data?.user?.name}
                  placeholder="Please Enter your name"
                  className="my-2 h-10 w-full md:w-6/12 px-3 py-1 rounded-sm border-[1px] border-slate-300 focus:outline-none"
                />
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center mb-4">
                <div className="flex flex-col me-5 w-6/12">
                  <p>Name</p>
                  {isLoader ? (
                    <div className="animate-pulse h-4 w-20 bg-slate-300 rounded-sm" />
                  ) : (
                    <span className="text-slate-500 text-sm">
                      {' '}
                      {data?.user?.name}
                    </span>
                  )}
                </div>
                <div className="flex flex-col  me-5 w-6/12">
                  <p>Phone</p>
                  {isLoader ? (
                    <div className="animate-pulse h-4 w-20 bg-slate-300 rounded-sm" />
                  ) : (
                    <span className="text-slate-500 text-sm">
                      {' '}
                      +{data?.user?.phoneNumber}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col  me-5 w-6/12">
                  <p>Country</p>
                  {isLoader ? (
                    <div className="animate-pulse h-4 w-20 bg-slate-300 rounded-sm" />
                  ) : (
                    <span className="text-slate-500 text-sm uppercase">
                      {' '}
                      {data?.user?.countryCode}
                    </span>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileRightPersonalDetails;
