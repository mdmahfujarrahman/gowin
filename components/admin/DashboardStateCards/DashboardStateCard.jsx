import Image from 'next/image';
import { useRouter } from 'next/navigation';

const DashboardStateCard = ({
  title,
  bgColor,
  stateData,
  icon,
  isLoading,
  route,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(route)}
      className="flex rounded-md shadow-lg p-4 w-full md:w-1/5 cursor-pointer"
    >
      <div className={`h-14 w-14 mr-4 rounded-full  flexCenter ${bgColor}`}>
        <Image width={25} height={25} src={icon} alt="user" />
      </div>
      <div className="flex flex-col justify-center  items-start">
        {isLoading ? (
          <div className="h-6 w-10 animate-pulse bg-slate-400 rounded-md" />
        ) : stateData === '' ? (
          <div className="h-6 w-10 animate-pulse bg-slate-400 rounded-md" />
        ) : (
          <span className="text-xl font-bold text-primaryBlue">
            {stateData}
          </span>
        )}
        <small className="text-sm text-gray">{title}</small>
      </div>
    </div>
  );
};

export default DashboardStateCard;
