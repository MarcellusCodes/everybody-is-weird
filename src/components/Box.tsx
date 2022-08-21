import React from "react";

interface BoxProps {
  classNames?: string;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ classNames, children }) => {
  return (
    <div
      className={`bg-slate-50 rounded-md flex flex-col items-center space-y-2 ${classNames} p-4`}
    >
      {children}
    </div>
  );
};

export default Box;
