'use client';
import { Carousel } from 'antd';
import Image from 'next/image';
import React from 'react';
import { contactIcon } from '../../../constant';
import ContactStateBig from '../../../ui/SkeletonLoder/admin/Dashboard/ContactState/ContactStateLoder';
import { ContactStateLoderSmall } from '../../../ui/SkeletonLoder/admin/Dashboard/ContactState/ContactStateLoder';

const ContactStateCarusal = ({ contactInfoData, isLoading }) => {
  return (
    <div className="w-full flex justify-center md:justify-start items-center mt-5">
      {isLoading ? (
        <ContactStateBig />
      ) : contactInfoData?.length === 0 ? (
        <ContactStateBig />
      ) : (
        <div className="hidden md:flex lg:flex w-full flex-col gap-4">
          <div className="flex flex-wrap gap-4 justify-between">
            <div>
              <div className="flex   items-center">
                <div className="h-10 w-10 rounded-full bg-[#D2EAFF] flexCenter mr-2">
                  <Image
                    src={contactIcon[contactInfoData[0]?.type]}
                    height={20}
                    width={20}
                    alt={contactInfoData[0]?.type}
                  />
                </div>
                <h2 className="text-sm text-white">
                  +{contactInfoData[0]?.data}
                </h2>
              </div>
            </div>
            <div>
              <div className="flex   items-center">
                <div className="h-10 w-10 rounded-full bg-[#D2EAFF] flexCenter mr-2">
                  <Image
                    src={contactIcon[contactInfoData[1]?.type]}
                    height={20}
                    width={20}
                    alt={contactInfoData[1]?.type}
                  />
                </div>
                <h2 className="text-sm text-white">
                  +{contactInfoData[1]?.data}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-10 w-10 rounded-full bg-[#D2EAFF] flexCenter mr-2">
              <Image
                src={contactIcon[contactInfoData[2]?.type]}
                height={20}
                width={20}
                alt={contactInfoData[2]?.type}
              />
            </div>
            <h2 className="text-xm text-white">{contactInfoData[2]?.data}</h2>
          </div>
        </div>
      )}
      <div className="block md:hidden lg:hidden">
        {isLoading ? (
          <ContactStateLoderSmall />
        ) : contactInfoData?.length === 0 ? (
          <ContactStateLoderSmall />
        ) : (
          <Carousel autoplay className="max-w-[325px] flex">
            {contactInfoData?.map(item => (
              <div key={item._id} className="flex-col flexCenterImportant">
                <div className="h-12 w-12 rounded-full bg-[#D2EAFF] flexCenter mb-4">
                  <Image
                    src={contactIcon[item?.type]}
                    height={30}
                    width={30}
                    alt={item?.type}
                  />
                </div>
                <h2 className="text-xl text-white">
                  {item?.type === 'email' ? item?.data : `+${item?.data}`}
                </h2>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ContactStateCarusal;
