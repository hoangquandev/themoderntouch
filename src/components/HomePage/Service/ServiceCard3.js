import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import imgService from "../../../assets/images/servicesImages/service-3.png";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 300,
    overflow: "hidden",
    position: "relative",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    borderRadius: "10px",
  },
  card: {
    height: "300px",
    position: "relative",
    "&:hover": {
      color: "#fff",
      backgroundImage: `url(${imgService})`,
      transform: "scale(1.1)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transition: "all 1s",
    },
  },
  number: {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "200px",
    textAlign: "center",
    fontSize: "5rem",
  },
  titleCard: {
    borderBottom: "1px solid",
    position: "absolute",
    top: "79%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "14px",
    lineHeight: "20px",
    paddingBottom: "8px",
    "& *": {
      width: "250px",
    },
  },
  border: {
    borderBottom: "3px solid",
    width: "20%",
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%,-20%)",
    borderRadius: "20px",
  },
  "@media (max-width: 1024px)": {
    container: {
      height: 240,
      overflow: "hidden",
      position: "relative",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      borderRadius: "10px",
    },
    card: {
      height: "240px",
      position: "relative",
      "&:hover": {
        color: "#fff",
        backgroundImage: `url(${imgService})`,
        transform: "scale(1.1)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "all 1s",
      },
    },
    number: {
      position: "absolute",
      top: "70%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      height: "200px",
      textAlign: "center",
      fontSize: "4rem",
    },
    titleCard: {
      borderBottom: "1px solid",
      position: "absolute",
      top: "76%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      fontSize: "12px",
      lineHeight: "14px",
      paddingBottom: "4px",
      "& *": {
        width: "200px",
      },
    },
    border: {
      borderBottom: "3px solid",
      width: "20%",
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translate(-50%,-20%)",
      borderRadius: "20px",
    },
  },
  "@media (max-width: 640px)": {
    container: {
      height: 100,
    },
    card: {
      height: "100px",
    },
    number: {
      top: "64%",
      left: "16%",
      transform: "translate(-50%,-50%)",
      height: "100px",
      textAlign: "center",
      fontSize: "4rem",
    },
    titleCard: {
      top: "40%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      fontSize: "11px",
      lineHeight: "14px",
      paddingBottom: "8px",
      "& *": {
        width: "250px",
      },
    },
    border: {
      borderBottom: "1px solid",
    },
  },
}));

const ServiceCard3 = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className={classes.card}
      >
        <h1 className={classes.number}>3</h1>
        <div className={classes.titleCard}>
          <h3>MASTER PLANNING SURVEY </h3>
          <h3>& ANALYSIS</h3>
          <div className={classes.border}></div>
        </div>
      </Stack>
    </div>
  );
};

export default ServiceCard3;
