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
    <>
      <div className="hidden md:flex lg:flex xl:flex 2xl:flex">
        <Link
          className={`${
            pathname.replace('/', '') === 'pending-winners'
              ? 'py-2 px-5 rounded-3xl bg-primary-blue text-primary-green border-[1px] border-primary-blue'
              : 'text-white hover:bg-primary-blue hover:text-primary-green hover:py-2 hover:px-5 rounded-3xl border-[1px] border-slate-50  hover:border-primary-blue'
          } me-6 px-5 py-2`}
          href="/pending-winners"
        >
          Pending Winners
        </Link>
        <Link
          className={`${
            pathname.replace('/', '') === 'winners'
              ? 'py-2 px-5 rounded-3xl bg-primary-blue text-primary-green border-[1px] border-primary-blue'
              : 'text-white hover:bg-primary-blue hover:text-primary-green hover:py-2 hover:px-5 rounded-3xl border-[1px] border-slate-50  hover:border-primary-blue'
          } me-6 px-5 py-2`}
          href="/winners"
        >
          Winners
        </Link>
        <Link
          className={`${
            pathname.replace('/', '') === 'results'
              ? 'py-2 px-5 rounded-3xl bg-primary-blue text-primary-green border-[1px] border-primary-blue '
              : 'text-white hover:bg-primary-blue hover:text-primary-green hover:py-2 hover:px-5 rounded-3xl border-[1px] border-slate-50 hover:border-primary-blue'
          } me-6 px-5 py-2`}
          href="/results"
        >
          Results
        </Link>
      </div>
      <div className="flex flex-col md:hidden lg:hidden xl:hidden 2xl:hidden">
        <Link
          className={`${
            pathname.replace('/', '') === 'pending-winners'
              ? 'py-2 px-3 rounded-3xl bg-primary-blue text-primary-green'
              : 'text-white hover:bg-primary-blue  hover:text-primary-green hover:py-2 hover:px-5 rounded-3xl border-[1px] border-slate-50 hover:border-primary-blue'
          }  px-3 py-2 order-2 text-center text-sm`}
          href="/pending-winners"
        >
          Pending Winners
        </Link>
        <div className="flex items-center order-1 mb-1">
          <Link
            className={`${
              pathname.replace('/', '') === 'winners'
                ? 'py-2 px-5 rounded-3xl bg-primary-blue text-primary-green '
                : 'text-white hover:bg-primary-blue hover:text-primary-green hover:py-2 hover:px-5 rounded-3xl border-[1px] border-slate-50 hover:border-primary-blue'
            } me-2 px-5 py-2 text-sm`}
            href="/winners"
          >
            Winners
          </Link>

          <Link
            className={`${
              pathname.replace('/', '') === 'results'
                ? 'py-2 px-5 rounded-3xl bg-primary-blue text-primary-green  '
                : 'text-white hover:bg-primary-blue hover:text-primary-green hover:py-2 hover:px-5 rounded-3xl border-[1px] border-slate-50 hover:border-primary-blue'
            } me-4 px-5 py-2 text-sm`}
            href="/results"
          >
            Results
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
