import React from "react";
// import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../assets/images/logo/LogoBlack.png";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divLogo: {
    width: "40%",
    height: "400px",
    position: "relative",
  },
}));

const LoadingPage = () => {
  const classes = useStyles();
  return (
    <motion.div className={classes.container}>
      <motion.div
        className={classes.divLogo}
        initial={{
          backgroundColor: "#fe5600",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          scale: 1,
        }}
        animate={{
          rotate: -360,
          backgroundColor: "transparent",
          borderRadius: 0,
          height: "20%",
          width: "20%",
        }}
        transition={{ type: "tween", duration: 2, stiffness: 1200 }}
        style={{ width: "20%" }}
      >
        <motion.img
          initial={{
            scale: 0,
            display: "none",
          }}
          animate={{
            rotate: -360,
            scale: 1,
            display: "block",
            opacity: 0,
          }}
          transition={{ type: "sping", delay: 1, duration: 1, stiffness: 1200 }}
          style={{
            maxWidth: "100%",
            position: "absolute",
            margin: "auto",
          }}
          src={logo}
        />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ type: "sping", delay: 2, duration: 1, stiffness: 1200 }}
          style={{
            width: "300px",
            height: "200px",
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <motion.h6
            initial={{
              y: 50,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              type: "sping",
              delay: 2,
              duration: 0.5,
              stiffness: 1200,
            }}
          >
            Become the leading Design Consulting Company in the segment
          </motion.h6>
          <motion.h2
            initial={{
              y: -50,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              type: "sping",
              delay: 2,
              duration: 0.5,
              stiffness: 1200,
            }}
          >
            "Premium & Luxury"
          </motion.h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingPage;
