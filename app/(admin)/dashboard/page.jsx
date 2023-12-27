import DashboardStateCards from '../../../components/admin/DashboardStateCards/DashboardStateCards';
import PageHeader from '../../../components/admin/PageHeader/PageHeader';

const Dashboard = () => {
  return (
    <div className="mainWrapper flex flex-col">
      <PageHeader title="Dashboard" />
      <DashboardStateCards />
    </div>
  );
};

export default Dashboard;
