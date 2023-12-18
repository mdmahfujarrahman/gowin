import CustomButton from '../../ui/CustomButton/CustomButton';

const ClaimPrizeStepTwo = ({ handleModal }) => {
  return (
    <div id="sttep2" className="flex flex-col w-full bg-white rounded-sm p-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center font-bold text-primary-blue">
          Step 2
        </h1>
        <p className="text-xl text-center text-primary-blue mt-4">
          Before we can send you your prize money, we need to verify your bank
          account details.
        </p>
        <p className="text-xl text-center text-red-600 mt-4">
          Also please send us 2% of your winning prize money to the following
          contact details.
        </p>
        <CustomButton
          handleClick={handleModal}
          btnClass="py-3 px-3 h-22 mt-5 rounded text-white text-xl bg-primary-green"
        >
          Contact Info
        </CustomButton>
      </div>
    </div>
  );
};

export default ClaimPrizeStepTwo;
