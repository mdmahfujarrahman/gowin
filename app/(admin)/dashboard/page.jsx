import DashboardStateCards from '../../../components/admin/DashboardStateCards/DashboardStateCards';
import PageHeader from '../../../components/admin/PageHeader/PageHeader';
import ContactStateCards from '../../../components/admin/ContactStateCards/ContactStateCards';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

const Dashboard = () => {
  return (
    <div className="mainWrapper flex flex-col">
      <PageHeader title="Dashboard" />
      <div className="flex w-full flex-col md:flex-row">
        <DashboardStateCards />
        <ContactStateCards />
      </div>
    </div>
  );
};

export default Dashboard;
