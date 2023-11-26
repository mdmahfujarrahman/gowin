import Navbar from '../../components/Navbar/Navbar.jsx';
import { getCurrentUser } from '../../lib/authOptions/authOptions.js';
import GameLayout from '../../components/GameLayout/GameLayout.jsx';

const Dashboard = async () => {
  const session = await getCurrentUser();
  console.log(session, 'profile');
  return (
    <>
      <Navbar />
      <div className="flexCenter flex-col h-full my-5 bg-primary-blue">
        <GameLayout />
      </div>
    </>
  );
};

export default Dashboard;
