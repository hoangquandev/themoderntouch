import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import BottomBar from "../common/BottomBar";
import Footer from "../common/Footer";
import ClientPartner from "../components/HomePage/ClientPartner/ClientPartner";
import Quotes from "../components/HomePage/Quote/Quotes";
import SelectedProject from "../components/HomePage/SelectedProjects/SelectedProject";
import Service from "../components/HomePage/Service/Service";
import SlideLogo from "../components/HomePage/SlideLogo/SlideLogo";
import Slider from "../components/HomePage/SliderV2/Slider";
const useStyles = makeStyles((theme) => ({
  noZoom: {
    overflow: "hidden",
    margin: "0 auto",
    marginBottom: "2rem"
  }
}))
const HomePage = () => {
  const classes = useStyles()
  const [zoom, setZoom] = useState(false)
  const [isShown, setIsShown] = useState(false);
  const zoomable = () => {
    if (window.scrollY > 10) {
      setTimeout(() => {
        setZoom(true);

      }, 2000);
    }

    if (isShown && window.scrollY <= 10) {
      setZoom(false);
    }


  }
  window.addEventListener("scroll", zoomable)
  return (
    <div onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)} className={classes.noZoom} style={zoom ? { height: "auto" } : { height: "calc(100vh - 154px)" }}>
      <Slider />

      <Service />
      <SelectedProject />
      <Quotes />
      <ClientPartner />
      <SlideLogo />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default HomePage;
