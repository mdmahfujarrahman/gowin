'use client';
import toast from 'react-hot-toast';
import AddPendingWinnersInput from '../AddPendingWinners/AddPendingWinnersInput';
import InsidePageHeader from '../InsidePageHeader/InsidePageHeader';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GowinService } from '../../../services/gowinService';

const EditPendingWinner = ({ singleWinnersData }) => {
  const router = useRouter();
  const [inputData, setInputData] = useState({
    winner: {
      label: singleWinnersData?.winner?.name,
      value: singleWinnersData?.winner?.name,
      id: singleWinnersData?.winner?._id,
    },
    prizeType: singleWinnersData?.prizeType,
    prizeAmount: singleWinnersData?.prizeAmount,
    accessBankPage: singleWinnersData?.accessBankPage,
    profilePicture: singleWinnersData.winnerPhoto,
    winnerId: singleWinnersData?._id,
  });
  const [isLoading, setIsLoading] = useState(false);

  const updatePendingWinner = async () => {
    if (!inputData.winner || !inputData.prizeType || !inputData.prizeAmount) {
      toast.error('Please fill all the fields');
      return;
    }

    if (inputData.prizeAmount < 0) {
      toast.error('Please Enter Valid Prize Ammount');
      return;
    }
    if (!inputData.profilePicture) {
      toast.error('Please Upload Winner Photo');
      return;
    }
    try {
      setIsLoading(true);
      const payload = {
        ...inputData,
        winner: inputData.winner.id,
        winnerPhoto: inputData.profilePicture,
      };
      delete payload?.profilePicture;

      const response = await GowinService.updatePendingWinnerReq(payload);

      if (response?.data?.data.success) {
        toast.success('Pending Winner Update Successfully');
        router.push(`/pending-winner/view/${inputData.winnerId}`);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error.response.data.data.message);
      setIsLoading(false);
    }
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  console.log(inputData);
  return (
    <>
      <InsidePageHeader
        title="Edit Pending Winners"
        backRoute="/pending-winner"
        loading={isLoading}
        handleSave={updatePendingWinner}
      />
      <AddPendingWinnersInput
        handleChange={handleChange}
        inputData={inputData}
        type="edit"
        setInputData={setInputData}
      />
    </>
  );
};

export default EditPendingWinner;
