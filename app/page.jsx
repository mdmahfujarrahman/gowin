import AuthLayout from '../components/AuthLayout/AuthLayout';

export const metadata = {
  title: 'Go win - Login',
  description: 'Buy tickets and win prizes',
};

export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const Home = () => {
  return <AuthLayout />;
};

export default Home;
