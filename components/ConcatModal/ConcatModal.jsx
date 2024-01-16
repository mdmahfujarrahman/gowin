import CustomModal from '../../ui/CustomModal/CustomModal';
import Image from 'next/image';
import { contactIcon } from '../../constant';
import { getURL } from '../../helper/utils/index';

const ContactModal = async ({ open, handleClose, contactInfo }) => {
  // ['playing', 'result', "cancel"]
  return (
    <CustomModal open={open} handleCancel={handleClose}>
      <div className="flex flex-col rounded mb-10">
        <div className="flex w-full h-8 ">
          <h5 className="text-2xl">Contact Info</h5>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3">
        {contactInfo
          ?.filter(contact => contact?.data !== '')
          .map(item => (
            <div className="flex gap-3 items-center" key={item._id}>
              <Image
                className="h-10 w-10"
                src={contactIcon[item.type]}
                alt={item.data}
              />
              <a href={getURL(item)} className="text-sm md:text-xl">
                {item.data}
              </a>
            </div>
          ))}
      </div>
    </CustomModal>
  );
};

export default ContactModal;
