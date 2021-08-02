import React from "react";
import Header from "../components/Header/Header";
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
        more="Virtual presentations become as good as in-person meetings when you layer yourself over the content you’re sharing."
        />
    </motion.div>
  );
};

export default Home;
