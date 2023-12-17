'use client';
import React, { useState } from 'react';
import ProfileSidebar from '../../../components/ProfileSidebar/ProfileSidebar';
import ProdileRightTab from '../../../components/ProdileRightTab/ProdileRightTab';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const session = useSession();
  const [profileSidTab, setProfileSidTab] = useState('Personal Details');

  return (
    <>
      <ProfileSidebar
        profileSidTab={profileSidTab}
        setProfileSidTab={setProfileSidTab}
      />
      <ProdileRightTab
        profileSidTab={profileSidTab}
        formState={session?.data?.user}
        // reducerDispatch={reducerDispatch}
      />
    </>
  );
};

export default Profile;
