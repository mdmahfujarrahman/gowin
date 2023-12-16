import { CiEdit } from 'react-icons/ci';

import Image from 'next/image';

import { gowinImages } from '../../public/assets/index';

const ProfileRightPersonalDetails = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="p-3 flex justify-between items-center rounded-[10px] border-[2px] border-slate-400 w-full mb-5">
        <div className="flex items-center">
          <div className="w-16 h-16 me-4">
            <Image
              className="w-full h-full rounded-xl object-contain"
              src={gowinImages.dummyProfile}
              alt="profile iamge"
            />
          </div>
          <div className="flex flex-col">
            <h6 className="font-semibold text-sm leading-5 text-black">
              Mahfuj Ahmed
            </h6>
            <p className="text-slate-500">Bnagladesh</p>
            <span className="text-slate-500">+880 1786950046</span>
          </div>
        </div>
        {/* <div className="profilePersonalEdit">
                    <span>Edit</span>
                    <CiEdit />
                </div> */}
      </div>
      <div className="p-4 flex flex-col rounded-[10px] border-[2px] border-slate-400">
        <div className="flex items-center justify-between mb-3">
          <h6 className="text-sm leading-5 font-semibold text-black">
            Personal Information
          </h6>
          <div className="flex items-center py-1 px-3 rounded-[20px] border-[2px] border-slate-400 cursor-pointer">
            <span>Edit</span>
            <CiEdit />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <div className="flex flex-col me-5 w-6/12">
              <p>Name</p>
              <span className="text-slate-500 text-sm">Mahfuj ahmed</span>
            </div>
            <div className="flex flex-col  me-5 w-6/12">
              <p>Phone</p>
              <span className="text-slate-500 text-sm"> +8801786950046</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col  me-5 w-6/12">
              <p>Country</p>
              <span className="text-slate-500 text-sm">Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightPersonalDetails;
