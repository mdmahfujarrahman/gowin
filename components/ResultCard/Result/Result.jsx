import Image from 'next/image';

const Result = ({ resultData }) => {
  return (
    <div className="w-full px-4 md:px-10">
      <div className="max-w-full">
        <Image
          width={700} // Set your desired width
          height={400} // Set your desired height
          layout="responsive"
          className="w-full h-auto"
          src={resultData?.image}
          alt="result"
        />
      </div>
    </div>
  );
};

export default Result;
