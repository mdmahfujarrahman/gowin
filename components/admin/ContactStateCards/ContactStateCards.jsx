'use client';
import { useDispatch, useSelector } from 'react-redux';
import { FcSettings } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import ContactStateCarusal from './ContactStateCarusal.jsx';
import ContactStateEditModal from './ContactStateEditModal/ContactStateEditModal';
import { getDashboardContactStateThunk } from '../../../store/actions/dashboardAction/dashboardAction';
import toast from 'react-hot-toast';
import { updateContact } from '../../../serverActions/admin/dashboard/index.js';
import { updateContactState } from '../../../store/slices/dashboardSlice/dashboardSlice.js';

const ContactStateCards = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const dashboard = useSelector(state => state?.dashboard);
  const [inputData, setInputData] = useState(dashboard?.contactState);

  const handleEdit = async () => {
    if (inputData[0].data === '') {
      return toast.error('Whatapp Number is required');
    } else if (inputData[1].data === '') {
      return toast.error('Imo Number is required');
    }
    setIsLoading(true);
    const updatedData = inputData.map(item => {
      return {
        type: item.type,
        data: item.data,
      };
    });

    try {
      const response = await updateContact(updatedData);
      dispatch(updateContactState(response));
      setIsLoading(false);
      handleClose();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleChange = e => {
    const { type, data } = e.target;
    const newData = inputData.map(item => {
      if (item.type === type) {
        return { ...item, data };
      }
      return item;
    });
    setInputData(newData);
  };

  useEffect(() => {
    dispatch(getDashboardContactStateThunk());
  }, []);

  useEffect(() => {
    if (
      dashboard?.contactState.length > 0 &&
      !dashboard?.isLoading &&
      inputData?.length === 0
    ) {
      setInputData(dashboard?.contactState);
    }
  }, [dashboard]);

  return (
    <div className="bg-primary-blue w-full md:w-[30%] flex   flex-col h-auto rounded-md p-4 mt-5 md:mt-0 shadow-xl">
      <div className="flex items-center justify-between w-full">
        <p className="text-xl text-white">Contact Info</p>
        <div
          onClick={dashboard?.isLoading ? null : handleOpen}
          onKeyDown={dashboard?.isLoading ? null : handleOpen}
          title={dashboard?.isLoading ? 'Please for loading data' : null}
          className="bg-[#cfffdb] md:hover:bg-[#b9f7c8]  h-10 w-10 cursor-pointer rounded-full flexCenter"
        >
          <FcSettings className="h-6 w-6 hover:animate-spin" />
        </div>
      </div>
      <ContactStateCarusal
        isLoading={dashboard.isLoading}
        contactInfoData={dashboard?.contactState}
      />
      <ContactStateEditModal
        handleEdit={handleEdit}
        open={modalOpen}
        isLoading={isLoading}
        inputData={inputData}
        handleChange={handleChange}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ContactStateCards;
