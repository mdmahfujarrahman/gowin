import Image from 'next/image';
import React, { useRef, useState } from 'react';

import uploadImage from '../../helper/upload/upload';

const ImageUpload = ({ inputData, setInputData }) => {
  const imgref = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [percentUpload, setPercentUpload] = useState(0);

  const handleUpload = e => {
    uploadImage(e, setIsUploading, setPercentUpload, inputData, setInputData);
  };
  return (
    <div className="flex items-center mb-5">
      {inputData?.profilePicture && (
        <Image
          src={inputData?.profilePicture}
          alt="logo"
          width={80}
          height={80}
          className="mr-5 w-[80px] h-[80px] overflow-hidden rounded-[50%] p-1 object-cover border border-gray-100"
        />
      )}

      <label
        onClick={() => imgref.current.click()}
        className="py-1 px-3 w-[120px] h-10 border-none bg-primary-blue text-white rounded-[2px] cursor-pointer flexCenter"
      >
        {' '}
        {isUploading
          ? percentUpload
          : inputData?.profilePicture
          ? 'Upload Again'
          : 'Upload'}
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

export default ImageUpload;
