import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// icon
import { FaRegUser } from 'react-icons/fa';
// assets
import { gowinImages } from '../../public/assets';
import { getCurrentUser } from '../../lib/authOptions/authOptions';

import ProfileDropDown from '../ProfileDropDown/ProfileDropDown';

import NavLinks from './NavLinks';

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src={gowinImages.Logo}
            height={40}
            width={100}
            className="object-contain"
            alt="go win logo"
          />
        </Link>
      </div>
      <div className="flexCenter">
        <NavLinks session={session} />
        <div className="h-12 w-12 bg-primary-blue rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
          {session?.user?.image ? (
            <ProfileDropDown />
          ) : (
            <FaRegUser fill="yellow" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
