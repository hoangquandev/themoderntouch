import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/slider/SLIDER-09.png";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "sticky",
    top: "0px",
    left: "0px",
    margin: "0 auto",
    zIndex: 100,
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 12px",
  },
  container: {
    maxWidth: "100%",
    width: 1280,
    margin: "0 auto",
    position: "relative",
    height: 100,
  },
  mainMenu: {
    width: "100%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },
  logoArea: {
    width: "100px",
    height: "100px",
    position: "absolute",
    left: "52%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 10,
  },
  imageLogo: {
    maxWidth: "100%",
    marginTop: "13px",
  },
  navbar: {
    listStyle: "none",
    textAlign: "right",

    "& *": {
      float: "none",
      display: "inline-block",
      "&:nth-child(1)": {
        float: "left",
      },
      "&:nth-child(2)": {
        float: "left",
      },
      "&:nth-child(3)": {
        float: "left",
      },
      "& *": {
        color: "#000",
        fontSize: "20px",
        fontFamily: "Times New Roman",
        fontStyle: "normal",
        textTransform: "uppercase",
        textDecoration: "none",
        display: "block",
        padding: "10px 40px",
      },
    },
  },
  menuMobile: {
    display: "none",
  },
  "@media (max-width: 1280px)": {
    container: {
      width: 1200,
    },
    navbar: {
      "& *": {
        "& *": {
          fontSize: "20px",
          padding: "10px 20px",
        },
      },
    },
  },
  "@media (max-width: 1024px)": {
    container: {
      maxWidth: "100%",
      width: 960,
      margin: "0 auto",
      height: 90,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 24px",
    },
    logoArea: {
      width: "80px",
      height: "80px",
      position: "relative",
      // paddingLeft: "20px",
      top: "50%",
      left: "0",
      transform: "translateY(-50%)",
    },
    imageLogo: {
      marginTop: "0",
    },
    menuMobile: {
      display: "flex",
      justifyContent: "center",
    },
    navbar: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logoArea}>
          <a href="#">
            <img
              src={logo}
              className={classes.imageLogo}
              atl="The Mordern Touch"
            />
          </a>
        </div>

        <div className={classes.mainMenu}>
          <ul className={classes.navbar}>
            <li data-aos="fade-right" data-aos-duration="1000">
              <a href="#">about us</a>
            </li>
            <li data-aos="fade-right" data-aos-duration="1000">
              <a href="#">services</a>
            </li>
            <li data-aos="fade-right" data-aos-duration="1000">
              <a href="#">projects</a>
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              <a href="#">news</a>
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              <a href="#">careers</a>
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              <a href="#">contact</a>
            </li>
          </ul>
        </div>

        <div className={classes.menuMobile}>
          <div>
            <SearchIcon fontSize="large" />
          </div>
          <div>
            <MenuIcon fontSize="large" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
