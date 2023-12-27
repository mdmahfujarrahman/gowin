'use client';

import React, { useEffect, useState } from 'react';

import { clockTimer } from '../../helper/colckHelper/clockTimer';

const Clock = () => {
  const [formattedTime, setFormattedTime] = useState(clockTimer('Asia/Dubai'));

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedTime(clockTimer('Asia/Dubai'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flexCenter">
      <div className="flexCenter relative my-4 w-[320px] h-[80px] bg-transparent-bg shadow-[0 15px 25px rgba(0, 0, 0, 0.1)] z-40 rounded-md backdrop-opacity-10">
        <div className="flexCenter h-100 text-white">
          <p className="text-[2em] py-[3px] px-[8px] rounded-md bg-transparent-bg shadow-[0 15px 25px rgba(0, 0, 0, 0.2)] mx-[10px]">
            {formattedTime.hour}
          </p>
          <p className="text-[3em]">:</p>
          <p className="text-[2em] py-[3px] px-[8px] rounded-md bg-transparent-bg shadow-[0 15px 25px rgba(0, 0, 0, 0.2)] mx-[10px]">
            {formattedTime.minute}
          </p>
          <p className="text-[3em]">:</p>
          <p className="text-[2em] py-[3px] px-[8px] rounded-md bg-transparent-bg shadow-[0 15px 25px rgba(0, 0, 0, 0.2)] mx-[10px]">
            {formattedTime.second}
          </p>
          <span>{formattedTime.hour12}</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
