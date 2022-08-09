import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-screen bg-primary container mx-auto px-4 sm:px-0">
        {children}
      </div>
    </>
  );
};

export default Layout;
