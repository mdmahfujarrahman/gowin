// db connection
import Image from 'next/image';
import dbConnect from '../../lib/db/db.connect';

import { gowinImages } from '../../public/assets/index';

export const metadata = {
  title: 'Reset Password - Go win',
  description: 'Reset your password',
};

export default async function RootLayout({ children }) {
  await dbConnect();
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
        {children}
      </div>
    </section>
  );
}
