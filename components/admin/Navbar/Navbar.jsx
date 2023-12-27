'';
import React from 'react';
import { gowinImages } from '../../../public/assets';
import Image from 'next/image';
import ProfileDropDown from '../ProfileDropDown/ProfileDropDown';

const Navbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <nav className="bg-primaryBlue h-full flex justify-between items-center px-3">
      <div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="w-14 h-9 flex md:hidden lg:hidden flex-col justify-around  "
      >
        <Image src={gowinImages.menu} alt="menu" />
      </div>

      <div className="flex justify-center items-center grid-cols-1 w-1/6">
        <div className="w-28 h-12 flex items-center">
          <Image priority src={gowinImages.Logo} alt="logo" />
        </div>
      </div>
      <div className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex justify-between items-center w-[10%] md:px-1 lg:px-3 xl:px-5 2xl:px-5">
        {/* <div className="w-5 h-5">
          <Image src={gowinImages.plusIcon} alt="add" />
        </div> */}
        <div className="w-5 h-5 cursor-pointer">
          <Image src={gowinImages.notification} alt="notification" />
        </div>
        <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
          <ProfileDropDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
