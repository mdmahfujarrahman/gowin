'use client';
import Slider from 'react-slick';

import Image from 'next/image';

const WinnersCarousel = ({ winnerData }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div clasName="flex items-center">
      <Slider {...settings} className="w-[300px] md:w-[700px]  h-auto">
        {winnerData.map((winner, index) => (
          <div className="" key={index}>
            <Image
              width={700}
              height={700}
              className="object-cover rounded-3xl mr-5"
              src={winner?.orginalImage}
              alt={winner?.winnerAlt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WinnersCarousel;
