import Image from 'next/image';
import { redirect } from 'next/navigation';
// assets
import { gowinImages } from '../../public/assets';
// components
import Login from '../Login/Login';
// import ForgetPassword from '../ForgetPassword/ForgetPassword';
// store
import { store } from '../../store/store';
import { manageAuthRoute } from '../../store/slices/authSlice/authSlice';
import { getCurrentUser } from '../../lib/authOptions/authOptions';

const AuthLayout = async () => {
  const session = await getCurrentUser();
  if (session) {
    if (session.user.status === 'pending') {
      store.dispatch(manageAuthRoute('pending'));
      redirect('/signup');
    } else {
      if (session.user.role === 'admin') {
        redirect('/dashboard');
      } else {
        redirect('/results');
      }
    }
  }

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
        <Login />
      </div>
    </section>
  );
};

export default AuthLayout;
