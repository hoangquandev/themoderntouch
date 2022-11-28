import { makeStyles } from "@mui/styles";
import React from "react";
import History from "../../components/aboutUs/History";
import BottomBar from '../../common/BottomBar'
import FooterWhite from '../../common/FooterWhite'
import { listImageAboutUs } from '../../utils/imageAboutUs'

const useStyles = makeStyles((theme) => ({
  footerDiv: {
    backgroundImage: `url(${listImageAboutUs[7]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "50px"
  }
}))
const AboutUs = () => {
  const classes = useStyles()
  return <div>
    <History />
    <div className={classes.footerDiv}>
      <div style={{ height: "591px" }}></div>
      <FooterWhite />
      <BottomBar />
    </div>
  </div>;
};

export default AboutUs;
