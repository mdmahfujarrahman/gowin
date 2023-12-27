import React, { useEffect, useState } from 'react';
import { clockTimer } from '../../../helper/colckHelper/clockTimer';

const DbClock = () => {
  const [formattedTime, setFormattedTime] = useState(clockTimer('Asia/Dubai'));

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedTime(clockTimer('Asia/Dubai'));
    }, 60000); //

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex  items-center w-full relative">
      {formattedTime.isNight ? (
        <div className="w-full moon bg-moon bg-cover relative h-24 mr-2 rounded-md pr-4 flex justify-end">
          <div className="flex items-center justify-end h-full">
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-xl font-bold">
                {formattedTime?.hour}:{formattedTime?.minute}{' '}
                {formattedTime?.hour12}
              </p>
              <p className="text-white text-sm font-bold">
                {formattedTime?.day}
              </p>
              <p className="text-white text-xl font-bold">
                {formattedTime?.date}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full sun bg-sun bg-cover relative h-24 mr-2 rounded-md pl-4 flex">
          <div className="flex flex-col items-start justify-center">
            <p className="text-white text-xl font-bold">
              {formattedTime?.hour}:{formattedTime?.minute}{' '}
              {formattedTime?.hour12}
            </p>
            <p className="text-white text-sm font-bold">{formattedTime?.day}</p>
            <p className="text-white text-xl font-bold">
              {formattedTime?.date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DbClock;
