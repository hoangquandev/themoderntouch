import React from "react";
import gif from "../assets/images/logo-loading.gif";
import { makeStyles } from "@mui/styles";
// import { motion } from "framer-motion";

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
    <div>
      <img src={gif} />
      <div>
        <h6>M</h6>
        <h6>T</h6>
      </div>
    </div>
  );
};

export default LoadingPage;
