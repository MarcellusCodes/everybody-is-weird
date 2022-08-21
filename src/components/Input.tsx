import React from "react";
import { motion } from "framer-motion";
import { ButtonMotion, SpringTransition } from "../constants/index";

interface InputProps {
  register: () => void;
  dark?: boolean;
}

const Input: React.FC<InputProps> = ({ dark = false, register }) => {
  return (
    <motion.input
      initial="initial"
      whileFocus={{
        scale: 1.1,
        outline: dark ? "2px solid #e2e8f0" : "2px solid #f1f5f9",
      }}
      transition={{
        ...SpringTransition,
      }}
      variants={ButtonMotion}
      className={`${
        dark ? "input-dark" : "input"
      } transition-colors duration-100 focus:outline-none w-full px-6 py-2 rounded-md`}
      {...register}
    />
  );
};

export default Input;
