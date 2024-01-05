import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getData } from './utils';
import Winners from '../../../components/UserScreen/Winners/Winners';
import { signOut } from 'next-auth/react';

const Page = async () => {
  const winnerData = await getData();

  if (!winnerData.success) {
    signOut();
  }
  return (
    <div className="flexCenter flex-col my-5 bg-primary-blue ">
      <Winners winnerData={winnerData.data} />
    </div>
  );
};

export default Page;
