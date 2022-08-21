import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <>
      <h2 className="font-primary text-2xl text-primary">{children}</h2>
    </>
  );
};

export default Heading;
