'use client';
import React from 'react';
import CustomButton from '../../../ui/CustomButton/CustomButton';
import { useRouter } from 'next/navigation';

const ResultCardHeading = ({ winnerInfo, gameData, handleModal }) => {
  const router = useRouter();

  return (
    <div className="flex items-center flex-col mb-5 py-18 md:py-20">
      {gameData?.timing.status === 'result' &&
        winnerInfo?.isCadiate &&
        winnerInfo?.isWinner && (
          <>
            <h1 className="text-4xl animate-bounce text-center md:text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-3 mb-3">
              Congratulations!!
            </h1>
            <p className="text-xl md:text-3xl text-primary-yellow font-bold">
              For your big win in &quot;Go Win&quot; Lottery
            </p>
            <CustomButton
              handleClick={() =>
                router.push(`/winner?result=${gameData?.result?._id}`)
              }
              btnClass="py-2 px-3 mt-5 rounded text-white text-xl bg-primary-green"
            >
              Claim Your Prize
            </CustomButton>
          </>
        )}

      {gameData?.timing.status === 'result' &&
        winnerInfo?.isCadiate &&
        !winnerInfo?.isWinner && (
          <>
            {' '}
            <h1 className="text-4xl md:text-6xl text-center font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-3 mb-3">
              Winning Number Cancelled
            </h1>
            <p className="text-xl md:text-3xl text-center text-primary-yellow font-bold">
              Sorry, Your winning number has been cancelled.
            </p>
            <CustomButton
              handleClick={handleModal}
              btnClass="py-3 px-3 h-22 mt-5 rounded text-white text-xl bg-primary-green"
            >
              Our Contact Info
            </CustomButton>
          </>
        )}
      {gameData?.timing.status === 'result' && !winnerInfo?.isCadiate && (
        <>
          {' '}
          <h1 className="text-4xl md:text-6xl text-center font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-3 mb-3">
            Buy a ticket to win
          </h1>
          <p className="text-xl md:text-3xl text-center text-primary-yellow font-bold">
            You have not bought any ticket yet.
          </p>
          <CustomButton
            handleClick={handleModal}
            btnClass="py-3 px-3 h-22 mt-5 rounded text-white text-xl bg-primaryLightBlue"
          >
            Our Contact Info
          </CustomButton>
        </>
      )}
    </div>
  );
};

export default ResultCardHeading;
