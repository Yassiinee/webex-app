import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Image from "../assets/images/a.jpg";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";

const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Header />
      <Hero image={Image} title="Virtual Meetings" desc="Audio and video quality" />
      About
    </motion.div>
  );
};

export default About;
