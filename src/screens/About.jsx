import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Image from "../assets/images/a.jpg";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";

const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Header />
      <Hero image={Image} title="Virtual Meetings" desc="Audio and video quality" more="Work how you like, where you like." />
    </motion.div>
  );
};

export default About;
