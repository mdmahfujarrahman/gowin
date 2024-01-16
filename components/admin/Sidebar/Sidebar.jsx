import React from 'react';
import { SidebarList } from '../../../constant';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import ClockWized from '../ClockWized/ClockWized';
import { adminSidebarImage } from '../../../public/assets';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      {SidebarList.map(item => {
        return (
          <div
            onClick={() => {
              router.push(item.route);
              setIsSidebarOpen(false);
            }}
            onKeyDown={() => {
              router.push(item.route);
              setIsSidebarOpen(false);
            }}
            className={`cursor-pointer px-[10px] h-[50px] flex items-center ${
              pathName.includes(item.route) && 'bg-primaryThinlightblue'
            } ${
              isSidebarOpen &&
              pathName.includes(item.route) &&
              'bg-primaryLightBlue'
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
      <div
        onClick={() => {
          signOut({
            callbackUrl: `/`,
          });
        }}
        onKeyDown={() => {
          signOut({
            callbackUrl: `/`,
          });
        }}
        className={`cursor-pointer  px-[10px] h-[50px] flex md:hidden lg:hidden items-center hover:bg-primaryThinlightblue `}
      >
        <div className="block md:hidden lg:hidden w-5 h-5 mr-[10px]">
          <Image src={adminSidebarImage.exitWhite} alt="exit" />
        </div>
        <h4 className="d-block d-sm-block d-md-none d-lg-block d-xl-block d-xxl-block">
          Log out
        </h4>
      </div>
      <ClockWized />
    </div>
  );
};

export default Sidebar;
