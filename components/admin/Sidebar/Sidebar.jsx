import React from 'react';
import { SidebarList } from '../../../constant';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import ClockWized from '../ClockWized/ClockWized';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName.replace('/', ''));
  return (
    <div className="flex flex-col w-full">
      {SidebarList.map(item => {
        return (
          <div
            onClick={() => {
              router.push(item.route);
              setIsSidebarOpen(false);
            }}
            className={`cursor-pointer px-[10px] h-[50px] flex items-center ${
              pathName === item.route && 'bg-primaryThinlightblue'
            } ${
              isSidebarOpen && pathName === item.route && 'bg-primaryLightBlue'
            }`}
            key={item.id}
          >
            <div className="hidden md:block lg:block w-5 h-5 mr-[10px]">
              <Image src={item.icon} alt={item.name} />
            </div>
            <div className="block md:hidden lg:hidden w-5 h-5 mr-[10px]">
              <Image src={item.iconWhite} alt={item.name} />
            </div>
            <h4 className="d-block d-sm-block d-md-none d-lg-block d-xl-block d-xxl-block">
              {item.name}
            </h4>
          </div>
        );
      })}
      <ClockWized />
    </div>
  );
};

export default Sidebar;
