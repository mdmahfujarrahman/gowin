import Image from 'next/image';
import { resultCardImages } from '../../../public/assets';

const Result = () => {
  return (
    <div className="w-full px-4 md:px-10">
      <Image className="w-full" src={resultCardImages.results} alt="result" />
    </div>
  );
};

export default Result;
