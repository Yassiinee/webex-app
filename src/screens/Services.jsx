import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Image from "../assets/images/slido-hero.jpg";
import { motion } from "framer-motion";
import { animationThree } from "../animations";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <Header />
      <Hero
        image={Image}
        title="Managing it all in one place"
        desc="The future of work is hybrid."
      />
      Services
    </motion.div>
  );
};

export default Services;
