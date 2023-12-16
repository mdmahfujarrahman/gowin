'use client';
import React, { useState } from 'react';
import ProfileSidebar from '../../../components/ProfileSidebar/ProfileSidebar';
import ProdileRightTab from '../../../components/ProdileRightTab/ProdileRightTab';

const Profile = () => {
  const [profileSidTab, setProfileSidTab] = useState('Personal Details');

  return (
    <>
      <ProfileSidebar
        profileSidTab={profileSidTab}
        setProfileSidTab={setProfileSidTab}
        // formState={formState}
      />
      <ProdileRightTab
        profileSidTab={profileSidTab}
        // formState={formState}
        // reducerDispatch={reducerDispatch}
      />
    </>
  );
};

export default Profile;
