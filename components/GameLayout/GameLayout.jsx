'use client';
import { useState } from 'react';
import Clock from '../Clock/Clock';
import Playing from '../ResultCard/Playing/Playing';
import Result from '../ResultCard/Result/Result';
import ResultCardHeading from '../ResultCard/ResultCardHeading/ResultCardHeading';
import ContactModal from '../ConcatModal/ConcatModal';

const GameLayout = () => {
  const [contactInfoModal, setContactInfoModal] = useState(false);
  const [status, setStatus] = useState('cancel'); // ['playing', 'result', "cancel"]
  const handleOpen = () => setContactInfoModal(true);
  const handleClose = () => setContactInfoModal(false);
  return (
    <>
      <ResultCardHeading status={status} handleModal={handleOpen} />
      {status === 'playing' && (
        <>
          <div className=" w-5/6 md:w-1/3 rounded p-4">
            <Clock />
          </div>
          <Playing />
        </>
      )}
      {status === 'result' && <Result />}
      <div className="flex items-center justify-center gap-3 mt-5">
        <p
          className="py-2 px-5 bg-primary-green rounded text-white"
          onClick={() => setStatus('playing')}
        >
          running
        </p>
        <p
          className="py-2 px-5 bg-primary-green rounded text-white"
          onClick={() => setStatus('result')}
        >
          result
        </p>
        <p
          className="py-2 px-5 bg-primary-green rounded text-white"
          onClick={() => setStatus('cancel')}
        >
          cancel
        </p>
      </div>
      <ContactModal handleClose={handleClose} open={contactInfoModal} />
    </>
  );
};

export default GameLayout;
