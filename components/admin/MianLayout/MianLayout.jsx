'use client';
import { Suspense, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import PageLoader from '../../../ui/PageLoader/PageLoader';

const MianLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="h-16">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className="w-full calc-100vh-60 bg-white  flex">
        <div
          className={`${
            isSidebarOpen ? 'mainLayout_sidebar_active' : 'mainLayout_sidebar'
          } md:w-2/12 lg:w-2/12 relative`}
        >
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="overflow-y-scroll  w-full md:w-5/6 lg:w-5/6"
        >
          <Suspense fallback={<PageLoader />}>{children}</Suspense>
        </div>
      </div>
    </>
  );
};

export default MianLayout;
