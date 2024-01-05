import React from 'react';

import WinnersCarousel from './WinnersCarousel';

const Winners = ({ winnerData }) => {
  return (
    <div className="h-full md:h-screen justify-center items-center flex flex-col">
      {/* <h1>Congratulations to Lucky Winner!</h1> */}
      <WinnersCarousel winnerData={winnerData} />
    </div>
  );
};

export default Winners;
