import React from "react";
import gif from "../assets/images/LOADINGFULL6s.gif";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 5, duration: 1 }}
      style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>

      <img src={gif} alt="" style={{ maxWidth: "70%" }} />

    </motion.div>
  );
};

export default LoadingPage;
