'use client';
import { useEffect, useState } from 'react';
import { GowinService } from '../../../services/gowinService';
import AddPendingWinnersInput from './AddPendingWinnersInput';
import InsidePageHeader from '../InsidePageHeader/InsidePageHeader';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AddPendingWinners = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState({
    winner: null,
    prizeType: null,
    prizeAmount: null,
    accessBankPage: false,
    profilePicture: null,
  });
  const [activeUser, setActiveUser] = useState(null);
  const handleChange = e => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const fetchUser = async () => {
    try {
      const response = await GowinService.getActiveUserReq();
      const updateData = response.data.data.data.map(item => {
        return {
          value: item.name,
          label: item.name,
          id: item._id,
        };
      });
      setActiveUser(updateData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
        winnerPhoto: inputData.profilePicture,
      };
      delete payload?.profilePicture;
      const response = await GowinService.addPendingWinnerReq(payload);
      console.log(response);
      if (response?.data?.data.success) {
        toast.success('Pending Winner Added Successfully');
        router.push('/pending-winner');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.data.message);
      setIsLoading(false);
    }
  };

  console.log(inputData);

  return (
    <>
      <InsidePageHeader
        title="Add Pending Winners"
        backRoute="/pending-winner"
        loading={isLoading}
        handleSave={updatePendingWinner}
      />
      <AddPendingWinnersInput
        activeUser={activeUser}
        handleChange={handleChange}
        inputData={inputData}
        setInputData={setInputData}
      />
    </>
  );
};

export default AddPendingWinners;
