import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { gowinImages } from '../../public/assets';
import { useState } from 'react';
import CustomButton from '../../ui/CustomButton/CustomButton';
import ContactModal from '../ConcatModal/ConcatModal';

const PendingAccount = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="my-2 flex justify-center items-center  flex-col">
      <div className="flex items-center w-full flex-col">
        <div className="flexCenter flex-col text-white text-center text-sm md:text-xl relative my-4 w-[320px] h-[250px] bg-transparent-bg shadow-[0 15px 25px rgba(0, 0, 0, 0.1)] z-40 rounded-md backdrop-opacity-10">
          <Image
            src={gowinImages.waiting}
            alt="pending"
            width={100}
            height={100}
          />
          <h2>
            Your account is pending for approval. We will notify you once your
            account is approved.
          </h2>
          <CustomButton
            handleClick={handleOpen}
            btnClass="py-1 px-3 h-22 my-4 rounded text-white text-xl bg-primary-green"
          >
            Contact Info
          </CustomButton>
        </div>
        <div className="w-full md:w-5/6 flex items-center flex-col relative"></div>
        <div className="flex items-center justify-center">
          <p className="text-white text-sm">
            Back to
            <span
              onClick={() => router.push('/')}
              className="text-primary-blue cursor-pointer ms-2"
              onKeyDown={() => router.push('/')}
            >
              Login
            </span>
          </p>
        </div>
        <ContactModal handleClose={handleClose} open={open} />
      </div>
    </div>
  );
};

export default PendingAccount;
