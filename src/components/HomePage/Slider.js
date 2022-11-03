import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Hawaii from "./Slider/Hawaii";
import Maps from "./Slider/Maps";
import VietNam from "./Slider/VietNam";
import arrow from "../../assets/images/slider/SLIDER-08.png";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    width: 1280,
    height: "600px",
    margin: "4rem auto",
    position: "relative",
  },
  callToAction: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 100,
    "&:hover": {
      height: "150px",
      transition: "all 0.7s ease",
      "& *": {
        "&:nth-child(2)": {
          width: 600,
          transition: "all 0.7s ease",
        },
      },
    },
  },
  img: {
    width: 300,
    margin: "auto",
  },
}));

const Slider = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container justifyContent="center" spacing={9}>
        <Grid item xs={2}>
          <Hawaii />
        </Grid>
        <Grid item xs={7}>
          <Maps />
        </Grid>
        <Grid item xs={3}>
          <VietNam />
        </Grid>
      </Grid>
      <div className={classes.callToAction}>
        <h6 style={{ fontSize: "16px", fontFamily: "TimesNewRomanItalic" }}>
          Become the leading Design Consulting Company in the segment
        </h6>
        <div className={classes.img}>
          <img src={arrow} alt="CTA" style={{ maxWidth: "100%" }} />
        </div>
        <h2 style={{ fontSize: "40px", marginTop: "-20px" }}>
          "Premium & Luxury"
        </h2>
      </div>
    </div>
  );
};

export default Slider;
