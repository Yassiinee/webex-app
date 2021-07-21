import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Image from "../assets/images/web.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title="Video conferencing"
        desc="Working better,
        together."
      />
    </motion.div>
  );
};

export default Home;
