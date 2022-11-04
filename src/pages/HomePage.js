import React from "react";
import ClientPartner from "../components/HomePage/ClientPartner/ClientPartner";
import Quotes from "../components/HomePage/Quote/Quotes";
import SelectedProject from "../components/HomePage/SelectedProjects/SelectedProject";
import Service from "../components/HomePage/Service/Service";
import SlideLogo from "../components/HomePage/SlideLogo/SlideLogo";
import Slider from "../components/HomePage/Slider";
const HomePage = () => {
  return (
    <div style={{ overflow: "hidden", margin: "0 auto", marginBottom: "2rem" }}>
      <Slider />
      <Service />
      <SelectedProject />
      <Quotes />
      <ClientPartner />
      <SlideLogo />
    </div>
  );
};

export default HomePage;
