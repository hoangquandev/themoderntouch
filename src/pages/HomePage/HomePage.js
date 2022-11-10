import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import BottomBar from "../../common/BottomBar";
import Footer from "../../common/Footer";
import ClientPartner from "../../components/HomePage/ClientPartner/ClientPartner";

import SelectedProject from "../../components/HomePage/SelectedProjects/SelectedProject";
import Service from "../../components/HomePage/Service/Service";
import SlideLogo from "../../components/HomePage/SlideLogo/SlideLogo";
import Banner from "../../components/HomePage/SliderV2/Banner";
const useStyles = makeStyles((theme) => ({
  noZoom: {
    margin: "0 auto",

    zIndex: 10,
  },
}));
const HomePage = () => {
  const classes = useStyles();
  const [zoom, setZoom] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);
  // const [isShown, setIsShown] = useState(false);
  const zoomable = () => {
    const yPos = window.scrollY;
    setLastYPos(yPos);
    const isScrollingUp = yPos < lastYPos;
    if (window.scrollY > 1) {
      setTimeout(() => {
        setZoom(true);
      }, 2000);
    }
    //  else {
    //   if (isScrollingUp) {
    //     setZoom(false);
    //   }
    // }
  };

  window.addEventListener("scroll", zoomable);

  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
  };

  const viewPort = useViewport();
  const isMobile = viewPort.width <= 640;
  if (isMobile) {
    return (
      <div>
        <Banner />

        <Service />
        <SelectedProject />
        <ClientPartner />
        <SlideLogo />
        <Footer />
        <BottomBar />
      </div>
    );
  }

  return (
    <div
      className={classes.noZoom}
      style={
        zoom
          ? null
          : {
              height: "calc(100vh - 154px)",
              overflow: "hidden",
              marginBottom: "2rem",
            }
      }
    >
      <Banner />

      <Service />
      <SelectedProject />
      <ClientPartner />
      <SlideLogo />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default HomePage;
