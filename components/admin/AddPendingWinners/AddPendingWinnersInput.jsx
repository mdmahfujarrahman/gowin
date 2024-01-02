'use client';

import CustomAutoComplete from '../../../ui/CustomAutoComplete/CustomAutoComplete';
import CustomInput from '../../../ui/CustomInput/CustomInput';
import CustomSwitch from '../../../ui/CustomSwitch/CustomSwitch';
import { PrizeName } from '../../../constant';

import PendingWinnerImageUplaod from '../../ImageUpload/PendingWinnerImageUplaod';

const AddPendingWinnersInput = ({
  activeUser,
  handleChange,
  inputData,
  setInputData,
  type,
}) => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row lg:flex-row w-full gap-4
      mb-4"
      >
        <div className="flex flex-col w-full md:w-3/12">
          <label className="text-primaryBlue text-sm font-bold mb-1">
            Select Winner
          </label>
          <CustomAutoComplete
            placeholder="Select Winner Name"
            name="winner"
            value={inputData.winner}
            isDisable={type === 'edit'}
            handleChange={handleChange}
            options={activeUser}
          />
        </div>
        <div className="flex flex-col w-full md:w-3/12">
          <label className="text-primaryBlue text-sm font-bold mb-1">
            Select Prize Type
          </label>
          <CustomAutoComplete
            placeholder="Select Prize Type"
            handleChange={handleChange}
            value={inputData.prizeType}
            name="prizeType"
            isDisable={false}
            options={PrizeName}
          />
        </div>
        <div className="flex flex-col w-full md:w-3/12">
          <label className="text-primaryBlue text-sm font-bold mb-1">
            Select Prize Ammont
          </label>
          <CustomInput
            placeholder="Please Enter prize ammount"
            handleChange={handleChange}
            value={inputData.prizeAmount}
            type="number"
            name="prizeAmount"
            className="h-10 w-full px-3 py-1 rounded-md border-[1px] border-gray-50 focus:outline-none customPlaceHolder"
          />
        </div>
        <div className="flex flex-col w-full md:w-3/12">
          <label className="text-primaryBlue text-sm font-bold mb-1">
            Access Bank Account Page
          </label>
          <div className="flex h-10 items-center ml-5">
            <CustomSwitch
              inputData={inputData}
              name="accessBankPage"
              handleChange={handleChange}
            />
            <p className="ml-2">{inputData.accessBankPage ? 'yes' : 'No'}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
        <div className="flex flex-col w-full md:w-6/12/12">
          <label className="text-primaryBlue text-sm font-bold mb-1">
            Upload Winner Photo
          </label>
          <PendingWinnerImageUplaod
            setInputData={setInputData}
            inputData={inputData}
          />
        </div>
      </div>
    </>
  );
};

export default AddPendingWinnersInput;
