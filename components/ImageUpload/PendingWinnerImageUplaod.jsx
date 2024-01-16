import Image from 'next/image';
import React, { useRef, useState } from 'react';

import uploadImage from '../../helper/upload/upload';
import { checkUploadOptions } from '../../helper/utils';

const PendingWinnerImageUplaod = ({ inputData, setInputData }) => {
  const imgref = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [percentUpload, setPercentUpload] = useState(0);

  const handleUpload = e => {
    uploadImage(e, setIsUploading, setPercentUpload, inputData, setInputData);
  };
  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center mb-5">
      {inputData?.profilePicture && (
        <Image
          src={inputData?.profilePicture}
          alt="logo"
          width={400}
          height={400}
          className="mr-5 w-[400px] h-[400px] overflow-hidden rounded-sm object-cover "
        />
      )}

      <label
        onClick={() => imgref.current.click()}
        className="py-1 px-3 w-[120px] h-10 mt-2 md:mt-0 lg:mt-0 border-none bg-primary-blue text-white rounded-[2px] cursor-pointer flexCenter"
        onKeyDown={() => imgref.current.click()}
      >
        {' '}
        {checkUploadOptions(
          isUploading,
          percentUpload,
          inputData?.profilePicture,
        )}
      </label>
      <input
        accept="image/*"
        onChange={handleUpload}
        type="file"
        ref={imgref}
        hidden
      />
    </div>
  );
};

export default PendingWinnerImageUplaod;
