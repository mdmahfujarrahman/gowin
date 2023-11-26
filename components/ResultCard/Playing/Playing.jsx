import Image from 'next/image';
import { gowinImages, resultCardImages } from '../../../public/assets';
import CardRound from '../CardRound/CardRound.jsx';

const Playing = () => {
  return (
    <div className="w-full px-4 md:px-10">
      <div className="flex flex-col">
        <div className="flex justify-between bg-primary-red py-4 px-2">
          <div className="flexCenter flex-col fontDejavu text-secendary-yellow text-sm md:text-2xl font-extrabold tracking-[-2px]">
            <p>DRAW TIME</p>
            <p>9PM EVERYDAY</p>
          </div>
          <div className="flexCenter flex-col">
            <p className="fontDejavu text-white text-2xl md:text-6xl mb-1 tracking-[-2px] font-extrabold">
              RESULTS
            </p>

            <div className="cssProgress-bar cssProgress-success cssProgress-active"></div>
          </div>
          <Image
            src={gowinImages.logoSmall}
            alt="gowin logo"
            className="w-[100px] md:w-[200px]"
          />
        </div>

        <div className="bg-card-bg bg-cover bg-center w-full h-[320px] md:h-[630px] min-h-min ">
          <div className="hidden md:flex items-center h-[630px] gap-5 p-2">
            <div className="flex-1 flex flex-col items-end pe-3 md:pe-10 gap-5 ">
              <Image
                className="w-52 md:w-60"
                src={resultCardImages.supar}
                alt="supar"
              />
              <Image
                className="w-52 md:w-60"
                src={resultCardImages.fun}
                alt="fun"
              />
              <Image
                className="w-52 md:w-60"
                src={resultCardImages.luckey}
                alt="luckey"
              />
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <div className="flex gap-2 items-center md:gap-5 h-auto md:h-[84px]">
                {Array.from({ length: 6 }, (_, i) => (
                  <CardRound key={i} />
                ))}
              </div>
              <div className="flex gap-2 items-center md:gap-5 h-auto md:h-[84px]">
                {Array.from({ length: 4 }, (_, i) => (
                  <CardRound key={i} />
                ))}
              </div>
              <div className="flex gap-2 items-center md:gap-5 h-auto md:h-[84px]">
                {Array.from({ length: 3 }, (_, i) => (
                  <CardRound key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="flexCenter flex-col h-full md:hidden">
            <div className="flex items-start flex-col gap-5 p-2">
              <div className="flex gap-3">
                <Image
                  className="w-20 md:w-60"
                  src={resultCardImages.supar}
                  alt="supar"
                />
                <div className="flex gap-2 items-center md:gap-5 h-auto md:h-[84px]">
                  {Array.from({ length: 6 }, (_, i) => (
                    <CardRound key={i} />
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Image
                  className="w-20 md:w-60"
                  src={resultCardImages.fun}
                  alt="supar"
                />
                <div className="flex gap-2 items-center md:gap-5 h-auto md:h-[84px]">
                  {Array.from({ length: 4 }, (_, i) => (
                    <CardRound key={i} />
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Image
                  className="w-20 md:w-60"
                  src={resultCardImages.luckey}
                  alt="luckey"
                />
                <div className="flex gap-2 items-center md:gap-5 h-auto md:h-[84px]">
                  {Array.from({ length: 3 }, (_, i) => (
                    <CardRound key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playing;
