import { makeStyles } from "@mui/styles";
import React from "react";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  container: {
    // height: "225px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "36px",
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    textAlign: "center",
  },
  button: {
    backgroundColor: "transparent",
    borderRadius: "30px",
    padding: "4px 50px",
    border: "1px solid #fe5600",
    cursor: "pointer",
  },
  "@media (max-width: 1024px)": {
    title: {
      fontSize: "36px",
    },
  },
  "@media (max-width: 640px)": {
    title: {
      fontSize: "30px",
    },
  },
}));

const TitleProjects = () => {
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
  const isMobile = viewPort.width <= 1024;
  if (isMobile) {
    return (
      <div>
        <h3 className={classes.title}>SELECTED PROJECTS</h3>
      </div>
    );
  }
  return (
    <div
      className={classes.container}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h3 className={classes.title}>SELECTED PROJECTS</h3>
    </div>
  );
};

export default TitleProjects;
