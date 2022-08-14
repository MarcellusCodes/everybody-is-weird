import React from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="flex flex-row items-center justify-between py-4">
      <h2 className=" font-primary text-4xl text-slate-50 ">EiW</h2>
      <ul className="flex flex-row items-center space-x-4">{children}</ul>
    </nav>
  );
};

export default Navbar;
