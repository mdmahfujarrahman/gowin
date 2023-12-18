import React from 'react';
import CustomModal from '../../ui/CustomModal/CustomModal';
import Image from 'next/image';
import { contactInfoData } from '../../constant';

const ContactModal = ({ open, handleClose }) => {
  return (
    <CustomModal open={open} handleCancel={handleClose}>
      <div className="flex flex-col rounded mb-10">
        <div className="flex w-full h-8 ">
          <h5 className="text-2xl">Contact Info</h5>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3">
        {contactInfoData.map(item => (
          <div className="flex gap-3 items-center" key={item.id}>
            <Image className="h-10 w-10" src={item.logo} alt={item.data} />
            <a
              href={
                item.type === 'email'
                  ? `mailto:${item.data}`
                  : item.type === 'whatsapp'
                  ? `https://wa.me/${item.data}`
                  : `tel:${item.data}`
              }
              className="text-sm md:text-xl"
            >
              {item.data}
            </a>
          </div>
        ))}
      </div>
    </CustomModal>
  );
};

export default ContactModal;
