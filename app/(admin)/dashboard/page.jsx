import DashboardStateCards from '../../../components/admin/DashboardStateCards/DashboardStateCards';
import PageHeader from '../../../components/admin/PageHeader/PageHeader';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

const Dashboard = () => {
  return (
    <div className="mainWrapper flex flex-col">
      <PageHeader title="Dashboard" />
      <DashboardStateCards />
    </div>
  );
};

export default Dashboard;
