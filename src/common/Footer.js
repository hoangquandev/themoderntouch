import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../assets/images/logo/LogoBlack.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "0 110px",
  },
  container: {
    height: "200px",
    borderTop: "1px solid ",
    // margin: "0 100px",
    // padding: "0 100px",
    textAlign: "center",
    fontSize: "16px",
  },
  containerLeft: {
    textAlign: "left",
  },
  containerMobile: {
    padding: "1rem 24px",
  },
  itemMobile: {
    display: "flex",
    justifyContent: "space-between",
  },
  itemRight: {
    textAlign: "right",
    margin: "12px 0 12px 12px",
  },
  itemLeft: {
    textAlign: "left",
    margin: "12px 12px 12px 0",
  },
  newsLetter: {
    textAlign: "center",
    height: "100px",
    margin: "1rem auto",
  },
  input: {
    borderRadius: "30px",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
    width: "90%",
    textAlign: "center",
    padding: "10px 10%",
    marginTop: "10px",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
  },
  "@media (max-width: 1024px)": {
    container: {
      width: "90vw",
      height: "200px",
      borderTop: "1px solid ",
      margin: "0 auto",
      padding: "0 24px",
      textAlign: "center",
      fontSize: "12px",
    },
    containerLeft: {
      textAlign: "left",
    },
    containerMobile: {
      padding: "1rem 24px",
    },
    itemMobile: {
      display: "flex",
      justifyContent: "space-between",
    },
    itemRight: {
      textAlign: "right",
      margin: "12px 0 12px 12px",
    },
    itemLeft: {
      textAlign: "left",
      margin: "12px 12px 12px 0",
    },
    newsLetter: {
      textAlign: "center",
      height: "100px",
      margin: "1rem auto",
    },
    input: {
      fontSize: "12px",
      fontStyle: "italic",
      paddingLeft: "10px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
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
      <div className={classes.containerMobile}>
        <div className={classes.itemMobile}>
          <div className={classes.itemLeft} style={{ width: "150px" }}>
            <img
              src={logo}
              atl="TMT"
              style={{ maxWidth: "100%", height: "150px", marginTop: -20 }}
            />
          </div>
          <div className={classes.itemRight} style={{ width: "45%" }}>
            <h4>CONTACT</h4>
            <ul>
              <li>
                200 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City
              </li>
              <li>info@themoderntouch.co</li>
              <li>+84 28 39 305 018</li>
            </ul>
          </div>
        </div>
        <div className={classes.itemMobile}>
          <div className={classes.itemLeft}>
            <h4>ABOUT</h4>
            <ul>
              <li>People</li>
              <li>Projects</li>
              <li>News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={classes.itemRight}>
            <h4>SOCIAL</h4>
            <ul>
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
        <div className={classes.newsLetter}>
          <h2>SIGN UP NEWSLETTERS</h2>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeHolder="Enter your email to subscribe Us"
              style={{
                borderRadius: "30px",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
                width: "90%",
                textAlign: "center",
                padding: "10px 10%",
                marginTop: "10px",
              }}
            />
            <button
              style={{
                border: "none",
                backgroundColor: "#fff",
                position: "absolute",
                top: "10px",
                right: "5%",
                height: "36px",
                width: "36px",
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                borderRadius: "50%",
              }}
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.wrapper}>
      <Grid container className={classes.container} spacing={3}>
        <Grid item xs={8}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <img
                src={logo}
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "150px",
                  marginTop: "-1rem",
                }}
              />
            </Grid>
            <Grid item xs={5} className={classes.containerLeft}>
              <h2>CONTACT</h2>
              <ul>
                <li>
                  200 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City
                </li>
                <li>info@themoderntouch.co</li>
                <li>+84 28 39 305 018</li>
              </ul>
            </Grid>
            <Grid item xs={1.5} className={classes.containerLeft}>
              <h2>ABOUT</h2>
              <ul>
                <li>People</li>
                <li>Projects</li>
                <li>News</li>
                <li>Careers</li>
              </ul>
            </Grid>
            <Grid item xs={1.5} className={classes.containerLeft}>
              <h2>SOCIAL</h2>
              <ul>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Linkedin</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <h2>SIGN UP NEWSLETTERS</h2>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeHolder="Enter your email to subscribe Us"
              className={classes.input}
            />
            <button
              style={{
                border: "none",
                backgroundColor: "#fff",
                position: "absolute",
                top: "10px",
                right: "5%",
                height: "36px",
                width: "36px",
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                borderRadius: "50%",
              }}
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
