import Navbar from '../../../components/Navbar/Navbar.jsx';
import GameLayout from '../../../components/GameLayout/GameLayout.jsx';

const Dashboard = async () => {
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
