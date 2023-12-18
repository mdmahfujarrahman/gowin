'use client';
import Image from 'next/image';
import ClaimPrizeStepOne from './ClaimPrizeStepOne';
import ClaimPrizeStepTwo from './ClaimPrizeStepTwo';
import { gowinImages } from '../../public/assets';
import ContactModal from '../ConcatModal/ConcatModal';
import { useState } from 'react';

const ClaimPrize = ({ winnerDeatils }) => {
  const [contactInfoModal, setContactInfoModal] = useState(false); // ['playing', 'result', "cancel"]
  const handleOpen = () => setContactInfoModal(true);
  const handleClose = () => setContactInfoModal(false);

  return (
    <div className="flex flex-col wi-full px-4 md:px-10">
      <div className="flex items-center flex-col mb-5 py-8 md:py-12">
        <h1 className="text-4xl animate-bounce text-center md:text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-3 mb-3">
          Congratulations!!
        </h1>
        <p className="text-xl md:text-3xl text-center text-primary-yellow font-bold">
          For your big win in &quot;Go Win&quot; Lottery . Now follow all the
          steps to claim your prize.
        </p>
      </div>
      <ClaimPrizeStepOne winnerDeatils={winnerDeatils} />
      <div className="flex justify-center items-center my-3">
        <a href="#step2">
          <Image
            src={gowinImages.downArrow}
            alt="arrow down"
            width={100}
            height={100}
          />
        </a>
      </div>
      <ClaimPrizeStepTwo handleModal={handleOpen} />
      <ContactModal handleClose={handleClose} open={contactInfoModal} />
    </div>
  );
};

export default ClaimPrize;
