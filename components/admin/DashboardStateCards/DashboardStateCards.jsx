'use client';
import DashboardStateCard from './DashboardStateCard';
import { dashboardState } from '../../../public/assets';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDashboardStateThunk } from '../../../store/actions/dashboardAction/dashboardAction';

const DashboardStateCards = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector(state => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardStateThunk());
  }, []);

  return (
    <div className="flex items-center gap-4 flex-col md:flex-wrap md:flex-row lg:flex-row w-full md:w-[70%]">
      <DashboardStateCard
        title="Pending User"
        isLoading={dashboard.isLoading}
        icon={dashboardState.pendingUserState}
        stateData={dashboard.dashboardState.pending}
        bgColor="bg-dashboardPendingUserState"
        route="/pending-user"
      />
      <DashboardStateCard
        title="Active User"
        icon={dashboardState.userState}
        isLoading={dashboard.isLoading}
        stateData={dashboard.dashboardState.active}
        bgColor="bg-dashboardUserState"
        route="/active-user"
      />
      <DashboardStateCard
        title="Rejeted User"
        icon={dashboardState.rejetedState}
        isLoading={dashboard.isLoading}
        stateData={dashboard.dashboardState.rejected}
        bgColor="bg-[#ffcdd4]"
        route="/pending-user?status=rejected"
      />
      <DashboardStateCard
        title="Pending Winner"
        icon={dashboardState.pendingWinnerState}
        isLoading={dashboard.isLoading}
        stateData={dashboard.dashboardState.pendingWinners}
        bgColor="bg-[#cfffdb]"
        route="/pending-winner"
      />
    </div>
  );
};

export default DashboardStateCards;
