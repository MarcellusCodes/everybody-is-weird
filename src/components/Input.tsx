import React from "react";
import { motion } from "framer-motion";
import { ButtonMotion, SpringTransition } from "../constants/index";

interface InputProps {
  register: () => void;
}

const Input: React.FC<InputProps> = ({ register }) => {
  return (
    <motion.input
      initial="initial"
      whileFocus={{ scale: 1.1, outline: "2px solid #f8fafc" }}
      transition={{
        ...SpringTransition,
      }}
      variants={ButtonMotion}
      className="bg-slate-50 hover:bg-slate-200 transition-colors duration-100 focus:bg-slate-50 focus:outline-none w-full px-6 py-2 rounded-md"
      {...register}
    />
  );
};

export default Input;
