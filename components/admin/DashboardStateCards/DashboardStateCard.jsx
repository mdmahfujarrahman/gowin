import Image from 'next/image';
import React from 'react';

const DashboardStateCard = ({ title, bgColor, stateData, icon }) => {
  return (
    <div className="flex rounded-md shadow-lg p-4 w-full md:w-1/5 cursor-pointer">
      <div className={`h-14 w-14 mr-4 rounded-full  flexCenter ${bgColor}`}>
        <Image width={25} height={25} src={icon} alt="user" />
      </div>
      <div className="flex flex-col justify-center  items-start">
        <span className="text-xl font-bold text-primaryBlue">{stateData}</span>
        <small className="text-sm text-gray">{title}</small>
      </div>
    </div>
  );
};

export default DashboardStateCard;
