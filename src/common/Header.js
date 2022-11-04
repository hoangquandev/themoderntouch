import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "../assets/images/slider/SLIDER-09.png";

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
    height: 125,
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
  "@media (max-width: 1280px)": {
    container: {
      width: 960,
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
  "@media (max-width: 960px)": {
    logoArea: {
      width: "100px",
      height: "100px",
      paddingLeft: "20px",
      left: "10%",
      top: "50%",
      transform: "translate(-50%,-50%)",
    },
    navbar: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logoArea}>
          <a href="#">
            <img
              src={logo}
              style={{ maxWidth: "100%", marginTop: "13px" }}
              atl="The Mordern Touch"
            />
          </a>
        </div>
        <div className={classes.mainMenu}>
          <ul className={classes.navbar}>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">projects</a>
            </li>
            <li>
              <a href="#">news</a>
            </li>
            <li>
              <a href="#">careers</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
