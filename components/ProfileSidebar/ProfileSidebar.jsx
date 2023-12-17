import { ProfileSidebarList } from '../../constant/index';

const ProfileSidebar = ({ profileSidTab, setProfileSidTab }) => {
  //   const { user } = formState;

  return (
    <div className="w-full md:w-2/12  h-10 md:h-[95vh] border-b-2 md:border-b-0 md:border-r-2 overflow-hidden  border-slate-500">
      <div className="pe-3 w-[500px]  md:w-full  overflow-scroll flex flex-row md:flex-col">
        {ProfileSidebarList.map(item => (
          <div
            key={item}
            onClick={() => setProfileSidTab(item)}
            className={`px-1 py-2 md:px-3 md:py-4 cursor-pointer inline-block md:block ${
              profileSidTab === item &&
              'px-2 py-2 md:px-3 md:py-4 bg-primaryLightBlue rounded-sm md:rounded-3xl'
            }`}
          >
            <p
              className={`text-sm text-primary-blue m-0 w-full ${
                profileSidTab === item && 'm-0  text-white font-medium'
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
