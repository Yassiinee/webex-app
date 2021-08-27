import "../components/PreLoader/PreLoader.css";
import PreLoader2 from "../components/PreLoader/PreLoader2";
import Dashborad from "../components/Dashboard/Dashboard";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

function Dashboard() {
  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={animationOne}
    transition={transition}
    // className="App-header"
    >
        <Dashborad/>
    </motion.div>
  );
}

export default Dashboard;
