import React from 'react';
import Image from 'next/image';
import { gowinImages } from '../../public/assets/index.js';
import Clock from '../../components/Clock/Clock.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { getCurrentUser } from '../../lib/authOptions/authOptions.js';

const Dashboard = async () => {
  const session = await getCurrentUser();
  console.log(session, 'profile');
  return (
    <>
      <Navbar />
      <div className="flexCenter h-screen bg-primary-blue">
        <div className=" w-5/6 md:w-1/3  md:h-3/4 rounded p-4">
          <div className="flexCenter">
            <Image
              src={gowinImages.Logo}
              height={50}
              width={200}
              className="object-contain"
              alt="go win logo"
            />
          </div>
          <Clock />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
