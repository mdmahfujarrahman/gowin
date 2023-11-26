import Image from 'next/image';
import { resultCardImages } from '../../../public/assets';
const CardRound = () => {
  return (
    <div className="h-8 w-8 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-white border-primary-blue border-2 relative">
      <Image
        className="h-5 w-5 md:w-6 md:h-6 animated-image"
        src={resultCardImages.plus}
        alt="plus icon"
      />
    </div>
  );
};

export default CardRound;
