import React from "react";
import { motion } from "framer-motion";
import { SpringTransition, ButtonMotion } from "../constants/index";

interface ButtonProps {
  classNames?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ type, classNames, children }) => {
  return (
    <>
      <motion.button
        variants={ButtonMotion}
        initial="initial"
        whileHover="hover"
        transition={{ ...SpringTransition }}
        type={type}
        className={`btn ${classNames}`}
      >
        {children}
      </motion.button>
    </>
  );
};

export default Button;
