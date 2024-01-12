'use client';
import React, { useState, useEffect } from 'react';
import Clock from '../Clock/Clock';
import Playing from '../ResultCard/Playing/Playing';
import Result from '../ResultCard/Result/Result';
import ResultCardHeading from '../ResultCard/ResultCardHeading/ResultCardHeading';
import ContactModal from '../ConcatModal/ConcatModal';
import CustomButton from '../../ui/CustomButton/CustomButton';

const GameLayout = ({ gameData, winnerInfo, contactInfo }) => {
  const [contactInfoModal, setContactInfoModal] = useState(false);
  const [status, setStatus] = useState(gameData?.timing?.status); // ['playing', 'result', "cancel"]
  const handleOpen = () => setContactInfoModal(true);
  const handleClose = () => setContactInfoModal(false);

  useEffect(() => {
    setStatus(gameData?.timing?.status);
  }, [gameData?.timing?.status]);

  return (
    <>
      {status === 'running' ? (
        <div className="flex items-center flex-col mb-5 py-18">
          <>
            {' '}
            <h1 className="text-4xl md:text-6xl text-center font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-3 mb-3">
              Game Winning Ticket
            </h1>
            <p className="text-xl md:text-3xl text-center text-primary-yellow font-bold">
              Any Time you can get your winning number
            </p>
            <CustomButton
              handleClick={handleOpen}
              btnClass="py-3 px-3 h-22 mt-5 rounded text-white text-xl bg-primary-green"
            >
              Contact Imo & Whatsapp
            </CustomButton>
          </>
        </div>
      ) : (
        <ResultCardHeading
          winnerInfo={winnerInfo}
          gameData={gameData}
          handleModal={handleOpen}
        />
      )}

      {status === 'running' && (
        <>
          <div className=" w-5/6 md:w-1/3 rounded p-4">
            <Clock />
          </div>
          <Playing handleOpen={handleOpen} />
        </>
      )}
      {status === 'result' && <Result resultData={gameData?.result} />}
      <ContactModal
        handleClose={handleClose}
        open={contactInfoModal}
        contactInfo={contactInfo}
      />
    </>
  );
};

export default React.memo(GameLayout);
