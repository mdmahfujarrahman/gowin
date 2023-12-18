'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const NavLinks = ({ session }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (session?.user) {
      Cookies.set('user', session?.user?._id);
    }
  }, []);

  return (
    <Link
      className={`${
        pathname.replace('/', '') === 'results'
          ? 'py-1 px-4 rounded-2xl bg-primary-blue'
          : ''
      } me-6`}
      href="/results"
    >
      <p className="text-white text-xl cursor-pointer">Results</p>
    </Link>
  );
};

export default NavLinks;
