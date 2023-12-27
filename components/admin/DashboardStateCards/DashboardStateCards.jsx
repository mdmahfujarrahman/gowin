import DashboardStateCard from './DashboardStateCard';
import { dashboardState } from '../../../public/assets';

const DashboardStateCards = () => {
  return (
    <div className="flex items-center gap-4 flex-col md:flex-row lg:flex-row">
      <DashboardStateCard
        title="Pending User"
        icon={dashboardState.pendingUserState}
        stateData="40"
        bgColor="bg-dashboardPendingUserState"
      />
      <DashboardStateCard
        title="Active User"
        icon={dashboardState.userState}
        stateData="40"
        bgColor="bg-dashboardUserState"
      />
    </div>
  );
};

export default DashboardStateCards;
