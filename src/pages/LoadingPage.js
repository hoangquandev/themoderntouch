import React from "react";
import gif from "../assets/images/LOADINGFULL6s.gif";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 5, duration: 1 }}>
      <img src={gif} alt="" />
    </motion.div>
  );
};

export default LoadingPage;
