import React from "react";
import Err from "../components/Error/Err";
import { motion } from "framer-motion";
import { animationOne,transition } from "../animations";

const Erreur = () => {
  return (
    <motion.div 
    initial="out"
    animate="in"
    exit="out"
    variants={animationOne}
    transition={transition}>
      <Err />
    </motion.div>
  );
};

export default Erreur;
