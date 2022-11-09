import { makeStyles } from "@mui/styles";
import React from "react";
import BottomBar from "../../common/BottomBar";
import Footer from "../../common/Footer";
import ClientPartner from "../../components/HomePage/ClientPartner/ClientPartner";
import Quotes from "../../components/HomePage/Quote/Quotes";
import SelectedProject from "../../components/HomePage/SelectedProjects/SelectedProject";
import Service from "../../components/HomePage/Service/Service";
import SlideLogo from "../../components/HomePage/SlideLogo/SlideLogo";
import Banner from "../../components/HomePage/SliderV2/Banner";
const useStyles = makeStyles((theme) => ({
  noZoom: {
    overflow: "hidden",
    margin: "0 auto",
  },
}));
const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.noZoom}>
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
