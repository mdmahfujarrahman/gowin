import ProfileRightPersonalDetails from '../ProfileRightPersonalDetails/ProfileRightPersonalDetails';
import ProfileRightSettings from '../ProfileRightSettings/ProfileRightSettings';

const ProdileRightTab = ({ profileSidTab, formState }) => {
  return (
    <div className="py-3 px-0 md:px-5 flex flex-col w-full ">
      <div className="w-full flex justify-between items-center mb-5">
        <h6 className="font-semibold text-sm text-black">{profileSidTab}</h6>
      </div>
      {profileSidTab === 'Personal Details' && (
        <ProfileRightPersonalDetails
          formState={formState}
          //   reducerDispatch={reducerDispatch}
        />
      )}
      {profileSidTab === 'Profile Settings' && (
        <ProfileRightSettings
          formState={formState}
          //   reducerDispatch={reducerDispatch}
        />
      )}
    </div>
  );
};

export default ProdileRightTab;
