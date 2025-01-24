import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full min-h-screen ">
      {/* Sidebar */}
      <div className="w-1/5 bg-primary p-3 border-l-2 border-r-2 border-gray-300">
        <Sidebar />
      </div>
      {/* Main content area */}
      <div className="w-4/5 flex flex-col  bg-gray-100">
        {/* Top bar */}
        <div className="bg-primary p-4 h-16">
          <TopBar />
        </div>
        {/* Page content */}
        <div className="flex-grow flex items-center justify-center p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
