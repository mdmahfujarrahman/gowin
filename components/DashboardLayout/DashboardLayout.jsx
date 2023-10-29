'use client';

import { useRouter } from 'next/navigation';
const DashboardLayout = ({ session }) => {
  const router = useRouter();
  return session.isLogin
    ? session.role === 'user'
      ? router.push('/fillup')
      : router.push('/dashboard')
    : router.push('/');
};
export default DashboardLayout;
