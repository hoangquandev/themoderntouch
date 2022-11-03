import { Grid, sliderClasses } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
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
    transition: "transform 0.7s ease",
  },
  containerScroll: {
    maxWidth: "100%",
    width: 500,
    height: "300px",
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
    transition: "all 0.7s ease",
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
  const [slider, setSlider] = useState(false);
  const classes = useStyles();

  const changeSlider = () => {
    if (window.scrollY > 0) {
      setSlider(true);
    } else {
      setSlider(false);
    }
  };
  window.addEventListener("scroll", changeSlider);

  return (
    <div
      className={classes.container}
      style={slider ? { transform: "scale(50%)", height: "600px" } : {}}
    >
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
