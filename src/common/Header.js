import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/slider/SLIDER-09.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "sticky",
    top: "0px",
    left: "0px",
    margin: "0 auto",
    zIndex: 1000,
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
    transform: "translateX(-36px)"
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
    zIndex: 1000,
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
  menu: {
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
          fontWeight: "bold"
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
    menu: {
      display: "block",
      position: "absolute",
      backgroundColor: "#fff",
      height: "calc(100vh - 90px)",
      width: "100vw",
      top: "90px",
      left: "0",
      padding: "20px 20px",
      transition: "all 0.5s ease",
      zIndex: 10
    },
    navMenu: {
      lineHeight: "20px",
      fontSize: "16px",
      "& *": {
        textTransform: "uppercase",
        margin: "10px auto",
      },
    },
  },
  "@media (max-width: 640px)": {
    header: {
    },
    container: {
      maxWidth: "100%",
      width: '100%',
      margin: " 0 auto",
      height: 90,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0",
    },
    logoArea: {
      width: "80px",
      height: "80px",
      position: "relative",
      // paddingLeft: "20px",
      top: "50%",
      left: "70px",
      transform: "translateY(-50%)",
    },
    imageLogo: {
      marginTop: "4px",
    },
    menuMobile: {
      display: "flex",
      justifyContent: "center",
    },
    navbar: {
      display: "none",
    },
    menu: {
      display: "block",
      position: "absolute",
      backgroundColor: "#fff",
      height: "calc(100vh - 90px)",
      width: "100vw",
      top: "90px",
      left: "36px",
      padding: "20px 20px",
      transition: "all 0.5s ease",
      zIndex: 10
    },
    navMenu: {
      lineHeight: "20px",
      fontSize: "16px",
      "& *": {
        textTransform: "uppercase",
        margin: "10px auto",
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logoArea}>
          <NavLink to="/">
            <img
              src={logo}
              className={classes.imageLogo}
              alt="The Modern Touch"
            />
          </NavLink>
        </div>

        <div className={classes.mainMenu}>
          <ul className={classes.navbar}>
            <li data-aos="fade-right" data-aos-duration="1000">
              <NavLink to="/about" activestyle={{ color: "#fe5600" }}>about us</NavLink>
            </li>
            <li data-aos="fade-right" data-aos-duration="1000">
              <NavLink to="/services" activestyle={{ color: "#fe5600" }}>services</NavLink>
            </li>
            <li data-aos="fade-right" data-aos-duration="1000">
              <NavLink to="/projects" activestyle={{ color: "#fe5600" }}>projects</NavLink>
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              <NavLink to="/news" activestyle={{ color: "#fe5600" }}>news</NavLink>
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              <NavLink to="/careers" activestyle={{ color: "#fe5600" }}>careers</NavLink>
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              <NavLink to="/contact" activestyle={{ color: "#fe5600" }}>contact</NavLink>
            </li>
          </ul>
        </div>

        <div className={classes.menuMobile}>
          <div>
            <SearchIcon fontSize="large" />
          </div>
          <div onClick={toggleMenu}>
            <MenuIcon fontSize="large" />
          </div>
        </div>
        <div
          className={classes.menu}
          style={open ? { top: "90px" } : { top: "-100vh" }}
        >
          <ul className={classes.navMenu}>
            <li>about us</li>
            <li>services</li>
            <li>projects</li>
            <li>news</li>
            <li>careers</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
