import Image from 'next/image';

import { gowinImages } from '../../public/assets/index';

import SignupLayout from '../../components/SignupLayout/SignupLayout';

const Signup = async () => {
  return (
    <section className="flexCenter bg-primary-blue h-screen sm:h-auto lg:p-12">
      <div className="bg-primary-red w-[85%]  md:w-[380px]  h-auto rounded-xl p-6">
        <div id="recaptcha-container" className="justify-center flex"></div>
        <div className="flexCenter">
          <Image
            src={gowinImages.Logo}
            height={50}
            width={200}
            className="object-contain"
            alt="go win logo"
          />
        </div>
        <SignupLayout />
      </div>
    </section>
  );
};

export default Signup;
