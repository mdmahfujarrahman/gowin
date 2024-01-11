'use client';
import { useState } from 'react';
import { FcSettings } from 'react-icons/fc';
import { contactInfoData } from '../../../constant';
import ContactStateCarusal from './ContactStateCarusal.jsx';
import ContactStateEditModal from './ContactStateEditModal/ContactStateEditModal';

const ContactStateCards = () => {
  const [modalOpen, setIsModalOpen] = useState(false);
  //   const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleEdit = () => {};

  const handleCreate = async () => {};

  const handleChange = e => {
    console.log(e);
  };

  return (
    <div className="bg-primary-blue w-full md:w-[30%] flex   flex-col h-auto rounded-md p-4 mt-5 md:mt-0 shadow-xl">
      <div className="flex items-center justify-between w-full">
        <p className="text-xl text-white">Contact Info</p>
        <div
          onClick={handleCreate}
          className="bg-[#cfffdb] md:hover:bg-[#b9f7c8]  h-10 w-10 cursor-pointer rounded-full flexCenter"
        >
          <FcSettings className="h-6 w-6 hover:animate-spin" />
        </div>
      </div>
      <ContactStateCarusal contactInfoData={contactInfoData} />
      <ContactStateEditModal
        handleEdit={handleEdit}
        open={modalOpen}
        inputData={contactInfoData}
        handleChange={handleChange}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ContactStateCards;
