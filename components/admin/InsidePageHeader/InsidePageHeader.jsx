'use client';
import { Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { adminIcons } from '../../../public/assets';

const InsidePageHeader = ({ title, backRoute, handleSave, loading }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center mb-5">
      <div className="flex">
        <div
          onClick={() => router.push(backRoute)}
          className="h-
        5 w-8 bg-primary-blue hover:bg-primaryLightBlue mr-3 flex items-center justify-center rounded-full cursor-pointer"
        >
          <Image
            height={20}
            width={20}
            alt={title}
            src={adminIcons.leftArrow}
          />
        </div>
        <p className="text-xl md:text-2xl lg:text-2xl font-bold text-primaryBlue">
          {title}
        </p>
      </div>
      <div className="flex items-center">
        <Button
          onClick={handleSave}
          loading={loading}
          className="w-24"
          type="primary"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default InsidePageHeader;
