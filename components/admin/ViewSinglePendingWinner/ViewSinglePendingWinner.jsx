import Image from 'next/image';
import InsidePageHeader from '../InsidePageHeader/InsidePageHeader';
import { getCountryName } from '../../../helper/utils';
import { lottaryType } from '../../../public/assets';

const ViewSinglePendingWinner = ({ singleWinnersData }) => {
  return (
    <>
      <InsidePageHeader
        title="View Pending Winner"
        backRoute="/pending-winner"
        nextRoute={`/pending-winner/edit/${singleWinnersData?._id}`}
      />
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="flex justify-center items-center w-full md:w-6/12 ">
          <div className="w-[200px] md:w-[400px] h-[200px]  md:h-[400px] ">
            <Image
              src={singleWinnersData.winnerPhoto}
              alt={singleWinnersData.winner.name}
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="w-full md:w-6/12 mt-10 md:mt-0">
          <div className="flex w-full mb-2">
            <div className="w-6/12">
              <small className="text-slate-400 text-sm mb-1">Winner Name</small>
              <p>{singleWinnersData.winner.name}</p>
            </div>
            <div className="w-6/12">
              <small className="text-slate-400 text-sm mb-1">
                Winner Phone
              </small>
              <p>{singleWinnersData.winner.phoneNumber}</p>
            </div>
          </div>
          <div className="flex w-full mb-2">
            <div className="w-6/12 ">
              <small className="text-slate-400 text-sm mb-1">
                Winner Country
              </small>
              <p>{getCountryName(singleWinnersData?.winner?.countryCode)}</p>
            </div>
            <div className="w-6/12">
              <small className="text-slate-400 text-sm mb-1">
                Bank Page Access
              </small>
              <p>{singleWinnersData.accessBankPage ? 'Yes' : 'No'}</p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col w-full mt-8">
            <small className="text-slate-400 text-sm mb-1">Prize Type</small>
            <div className="flex ">
              <Image
                src={lottaryType[singleWinnersData?.prizeType]}
                alt={singleWinnersData?.prizeType}
                width={60}
                height={30}
                className="mr-3"
              />
              <p>{singleWinnersData?.prizeType}</p>
            </div>
          </div>
          <div className="flex flex-col w-full mt-8">
            <small className="text-slate-400 text-2xl mb-1 text-center">
              Prize Amount
            </small>
            <p className="text-yellow-600 text-5xl font-semibold text-center">
              AED {singleWinnersData.prizeAmount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSinglePendingWinner;
