'use client';
import { useEffect, useState } from 'react';
import Clock from '../Clock/Clock';
import Playing from '../ResultCard/Playing/Playing';
import Result from '../ResultCard/Result/Result';
import ResultCardHeading from '../ResultCard/ResultCardHeading/ResultCardHeading';
import ContactModal from '../ConcatModal/ConcatModal';
import { envConfig } from '../../lib/config';

const GameLayout = ({ gameData, userInfo }) => {
  const [singleWinner, setSingleWinner] = useState({
    isCadiate: null,
    isWinner: null,
    isCancel: null,
    isUpdate: false,
    winnerType: null,
  }); // ['single', 'multiple'
  const [contactInfoModal, setContactInfoModal] = useState(false);
  const [status, setStatus] = useState(gameData?.timing?.status); // ['playing', 'result', "cancel"]
  const handleOpen = () => setContactInfoModal(true);
  const handleClose = () => setContactInfoModal(false);

  useEffect(() => {
    setStatus(gameData?.timing?.status);
  }, [gameData?.timing?.status]);

  const checkWinner = (winnerData, winnerType) => {
    return winnerData?.find(
      item => item?.toString() === userInfo?._id?.toString(),
    )
      ? winnerType
      : null;
  };

  const setWinner = winnerType => {
    setSingleWinner({
      isCadiate: true,
      isWinner: !!winnerType,
      isCancel: !winnerType,
      isUpdate: true,
      winnerType: winnerType || '',
    });
  };

  const checkAndSetWinner = winderData => {
    const { superSix, funFour, luckeyThree } = winderData;

    const winnerType =
      checkWinner(superSix, 'Super Six') ||
      checkWinner(funFour, 'Fun Four') ||
      checkWinner(luckeyThree, 'Luckey Three');

    setWinner(winnerType);
  };

  const getWinnerData = async id => {
    try {
      const response = await fetch(
        `${envConfig.serverUrl}/admin/winner?resultId=${id}&type=single`,
      );
      const data = await response?.json();

      console.log(data?.data?.data?.canditates);

      const checkIsCaditaes = data?.data?.data?.canditates
        .map(item => item?.toString())
        .find(item => item === userInfo?._id?.toString());
      if (!checkIsCaditaes) {
        setSingleWinner({
          isCadiate: false,
          isWinner: false,
          isCancel: false,
          isUpdate: true,
          winnerType: '',
        });
        return;
      }
      checkAndSetWinner(data?.data?.data?.winners);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (gameData?.timing?.status === 'result' && !singleWinner.isUpdate) {
      getWinnerData(gameData?.result?.title);
      console.log(singleWinner);
    }
  }, [gameData?.timing?.status, singleWinner.isUpdate]);

  return (
    <>
      {status === 'running' ? (
        <div className="flex items-center flex-col mb-5 py-18 md:py-20">
          <>
            {' '}
            <h1 className="text-4xl md:text-6xl text-center font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-3 mb-3">
              Game Winning Ticket
            </h1>
            <p className="text-xl md:text-3xl text-center text-primary-yellow font-bold">
              Any Time you can get your winning number
            </p>
          </>
        </div>
      ) : (
        <ResultCardHeading gameData={gameData} handleModal={handleOpen} />
      )}

      {status === 'running' && (
        <>
          <div className=" w-5/6 md:w-1/3 rounded p-4">
            <Clock />
          </div>
          <Playing />
        </>
      )}
      {status === 'result' && <Result resultData={gameData?.result} />}
      <ContactModal handleClose={handleClose} open={contactInfoModal} />
    </>
  );
};

export default GameLayout;
