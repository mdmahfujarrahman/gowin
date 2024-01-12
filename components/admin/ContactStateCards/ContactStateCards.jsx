/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useDispatch, useSelector } from 'react-redux';
import { FcSettings } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import ContactStateCarusal from './ContactStateCarusal.jsx';
import ContactStateEditModal from './ContactStateEditModal/ContactStateEditModal';
import { getDashboardContactStateThunk } from '../../../store/actions/dashboardAction/dashboardAction';

const ContactStateCards = () => {
  const dashboard = useSelector(state => state?.dashboard);
  const [inputData, setInputdata] = useState(dashboard?.contactState);
  const dispatch = useDispatch();
  const [modalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleEdit = () => {};

  const handleChange = e => {
    console.log(e);
  };

  useEffect(() => {
    dispatch(getDashboardContactStateThunk());
  }, []);

  return (
    <div className="bg-primary-blue w-full md:w-[30%] flex   flex-col h-auto rounded-md p-4 mt-5 md:mt-0 shadow-xl">
      <div className="flex items-center justify-between w-full">
        <p className="text-xl text-white">Contact Info</p>
        <div
          onClick={dashboard?.isLoading ? null : handleOpen}
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
        inputData={inputData}
        handleChange={handleChange}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ContactStateCards;
