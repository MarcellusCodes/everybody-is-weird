import React from "react";
import Link from "next/link";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="flex flex-row items-center justify-between py-4 mb-20">
      <Link href="/" passHref>
        <a className="font-primary text-4xl text-slate-50 ">EiW</a>
      </Link>
      <ul className="flex flex-row items-center space-x-4">{children}</ul>
    </nav>
  );
};

export default Navbar;
