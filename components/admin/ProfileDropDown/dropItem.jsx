'use client';
import Image from 'next/image';
import { gowinImages } from '../../../public/assets';
import { signOut } from 'next-auth/react';
import Cookies from 'js-cookie';

export const items = [
  {
    label: (
      <p
        className="flex items-center"
        onClick={() => {
          signOut({
            callbackUrl: `/`,
          });
          Cookies.remove('user');
        }}
      >
        <Image
          src={gowinImages.logout}
          width={30}
          height={30}
          className="object-contain mr-3"
          alt="profile icon"
        />
        Logout
      </p>
    ),
    key: '1',
  },
];
