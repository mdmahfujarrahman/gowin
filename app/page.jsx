import Image from 'next/image';
// assets
import { gowinImages } from '../public/assets';
// components
import Clock from '../components/Clock/Clock';
import Login from '../components/Login/Login';

const Home = () => {
  return (
    <section className="flexCenter bg-primary-blue h-screen">
      <div className="bg-primary-red w-5/6 md:w-1/3  md:h-3/4 rounded-xl p-4">
        <div className="flexCenter">
          <Image
            src={gowinImages.Logo}
            height={50}
            width={200}
            className="object-contain"
            alt="go win logo"
          />
        </div>
        <Clock />
        <Login />
      </div>
    </section>
  );
};

export default Home;
