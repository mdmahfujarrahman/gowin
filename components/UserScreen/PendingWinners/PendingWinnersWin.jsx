'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CustomButton from '../../../ui/CustomButton/CustomButton';
import ContactModal from '../../ConcatModal/ConcatModal';
import Image from 'next/image';
import { lottaryType } from '../../../public/assets';

const PendingWinnersWin = ({ pendingWinner }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleNavigate = () => {
    router.push(`/winner?winnerId=${pendingWinner?.winner?._id}`);
  };

  return (
    <>
      <div className="flex items-center flex-col mb-5 py-18 md:py-20">
        {' '}
        <h1 className="text-4xl animate-bounce text-center md:text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-3 mb-3">
          Congratulations!!
        </h1>
        <p className="text-xl md:text-3xl text-primary-yellow font-bold">
          Your are now pending winner
        </p>
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col justify-center mt-4 mb-4">
            <p className="text-xl text-center font-semibold text-white mb-3 uppercase">
              Winner Name
            </p>
            <h6 className="bg-primary-green w-full text-sm text-center text-white py-1 rounded-full">
              {pendingWinner?.winner?.name}
            </h6>
          </div>

          <div className="h-200 md:h-400 w-200 md:w-400 my-5 ">
            <Image
              width={400}
              height={400}
              src={pendingWinner?.winnerPhoto}
              className="rounded-md"
              alt="pending winner"
            />
          </div>
          <div className="flex flex-col justify-center mb-2">
            <p className="text-sm text-center font-semibold text-white mb-3 uppercase">
              Prize Type & Amount
            </p>
            <div className="bg-primary-green flex justify-center items-center flex-col w-full text-sm text-center text-white py-2 rounded-md">
              <Image
                src={lottaryType[pendingWinner?.prizeType]}
                alt={pendingWinner?.prizeType}
                width={200}
                className="mb-4"
                height={50}
              />
              <h6 className="text-2xl text-yellow-400 font-extrabold">
                AED{' '}
                <span className="text-4xl font-extrabold text-white ml-2">
                  {pendingWinner?.prizeAmount}
                </span>
              </h6>
            </div>
          </div>
        </div>
        <CustomButton
          handleClick={
            pendingWinner?.accessBankPage ? handleNavigate : handleOpen
          }
          btnClass={`py-3 px-3 h-22 mt-5 rounded text-white text-xl ${
            pendingWinner?.accessBankPage
              ? 'bg-primary-green'
              : 'bg-primaryLightBlue'
          }`}
        >
          Claim Prize
        </CustomButton>
      </div>
      <ContactModal handleClose={handleClose} open={isModalOpen} />
    </>
  );
};

export default PendingWinnersWin;
