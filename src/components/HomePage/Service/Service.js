import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard.js";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowIconNext from "../../../helpers/ArrowIconNext.js";
import ArrowIconPre from "../../../helpers/ArrowIconPre.js";
import ServiceCard2 from "./ServiceCard2.js";
import ServiceCard3 from "./ServiceCard3.js";
import ServiceCard4 from "./ServiceCard4.js";
import ServiceCard5 from "./ServiceCard5.js";
import ServiceCard6 from "./ServiceCard6.js";
import Quotes from "../Quote/Quotes.js";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    fontFamily: "Times New Roman",
    width: "1280px",
    maxWidth: "100%",
    margin: "0 auto",
  },
  title: {
    marginTop: "4rem",
    fontFamily: "Times New Roman",
    fontSize: "36px",
  },
  content: {
    width: "100%",
    margin: "2rem auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    "&:hover": {
      boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    // width: "1020px",
  },
  containerItem: {
    width: "300px",
    height: "300px",
    margin: "15px 15px",
  },
  "@media (max-width: 1300px)": {
    containerCard: {
      width: "1060px",
    },
  },
  "@media (max-width: 1024px)": {
    containerCard: {
      width: "810px",
    },
    containerItem: {
      width: "240px",
      height: "240px",
      margin: "0 8px",
    },
    title: {
      fontSize: "36px",
    },
    button: {
      height: "50px",
      width: "50px",
    },
  },
  "@media (max-width: 640px)": {
    title: {
      fontSize: "30px",
    },
    containerCard: {
      width: "100%",
    },
    containerItem: {
      width: "330px",
      height: "100px",
      margin: "8px auto",
    },
  },
}));

const Service = () => {
  const classes = useStyles();
  const [isShownNext, setIsShownNext] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 640;
  if (isMobile) {
    return (
      <div
        style={{
          textAlign: "center",
          fontFamily: "Times New Roman",
          width: "1280px",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <div>
          <h3 className={classes.title}>
            WHAT WE DO
            <span style={{ color: "#fe5600", fontStyle: "italic" }}>&</span>
            OUR SERVICES
          </h3>
        </div>
        <div className={classes.content}>
          <div className={classes.containerCard}>
            <div className={classes.containerItem}>
              <ServiceCard />
            </div>
            <div className={classes.containerItem}>
              <ServiceCard2 />
            </div>
            <div className={classes.containerItem}>
              <ServiceCard3 />
            </div>
            <div className={classes.containerItem}>
              <ServiceCard4 />
            </div>
            <div className={classes.containerItem}>
              <ServiceCard5 />
            </div>
            <div className={classes.containerItem}>
              <ServiceCard6 />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <h3
        className={classes.title}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        WHAT WE DO
        <span style={{ color: "#fe5600", fontStyle: "italic" }}> &</span> OUR
        SERVICES
      </h3>
      <div className={classes.content}>
        <div item xs={2} className={classes.containerButton}>
          <div
            className={classes.button}
            onMouseEnter={() => setIsShownNext(true)}
            onMouseLeave={() => setIsShownNext(false)}
          >
            <ArrowIconNext isShownNext={isShownNext} />
          </div>
        </div>
        <div item xs={8}>
          <div className={classes.containerCard}>
            <div
              className={classes.containerItem}
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <ServiceCard />
            </div>
            <div
              className={classes.containerItem}
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="2000"
            >
              <ServiceCard2 />
            </div>
            <div
              className={classes.containerItem}
              data-aos="zoom-in"
              data-aos-delay="800"
              data-aos-duration="2000"
            >
              <ServiceCard3 />
            </div>
            <div
              className={classes.containerItem}
              data-aos="zoom-in"
              data-aos-delay="1200"
              data-aos-duration="2000"
            >
              <ServiceCard4 />
            </div>
            <div
              className={classes.containerItem}
              data-aos="zoom-in"
              data-aos-delay="1600"
              data-aos-duration="2000"
            >
              <ServiceCard5 />
            </div>
            <div
              className={classes.containerItem}
              data-aos="zoom-in"
              data-aos-delay="2000"
              data-aos-duration="2000"
            >
              <ServiceCard6 />
            </div>
          </div>
        </div>
        <div item xs={2} className={classes.containerButton}>
          <div
            className={classes.button}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <ArrowIconPre isShown={isShown} />
          </div>
        </div>
      </div>
      <Quotes />
    </div>
  );
};

export default Service;
