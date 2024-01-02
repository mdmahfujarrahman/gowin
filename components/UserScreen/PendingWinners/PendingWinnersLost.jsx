'use client';
import { useState } from 'react';
import CustomButton from '../../../ui/CustomButton/CustomButton';
import ContactModal from '../../ConcatModal/ConcatModal';

const PendingWinnersLost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex items-center flex-col mb-5 py-18 md:py-20">
        {' '}
        <h1 className="text-4xl md:text-6xl text-center font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-3 mb-3">
          Buy a ticket to win
        </h1>
        <p className="text-xl md:text-3xl text-center text-primary-yellow font-bold">
          You have not bought any ticket yet.
        </p>
        <CustomButton
          handleClick={handleOpen}
          btnClass="py-3 px-3 h-22 mt-5 rounded text-white text-xl bg-primaryLightBlue"
        >
          Our Contact Info
        </CustomButton>
      </div>
      <ContactModal handleClose={handleClose} open={isModalOpen} />
    </>
  );
};

export default PendingWinnersLost;
