'use client';
import DashboardStateCard from './DashboardStateCard';
import { dashboardState } from '../../../public/assets';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDashboardStateThunk } from '../../../store/actions/dashboardAction/dashboardAction';

const DashboardStateCards = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector(state => state.dashboard);

  console.log(dashboard);

  useEffect(() => {
    dispatch(getDashboardStateThunk());
  }, []);

  return (
    <div className="flex items-center gap-4 flex-col md:flex-row lg:flex-row">
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
        icon={dashboardState.userState}
        isLoading={dashboard.isLoading}
        stateData={dashboard.dashboardState.rejected}
        bgColor="bg-dashboardUserState"
        route="/pending-user?status=rejected"
      />
    </div>
  );
};

export default DashboardStateCards;
