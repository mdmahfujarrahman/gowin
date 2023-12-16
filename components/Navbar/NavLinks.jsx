'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = () => {
  const pathname = usePathname();

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
