import "../components/PreLoader/PreLoader.css";
import PreLoader1 from "../components/PreLoader/PreLoader1";
import PreLoader2 from "../components/PreLoader/PreLoader2";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

function Space() {
  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={animationOne}
    transition={transition}
    // className="App-header"
    >
        <PreLoader1/>
        {/* <PreLoader2/> */}
    </motion.div>
  );
}

export default Space;
