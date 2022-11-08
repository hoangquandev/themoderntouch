import { makeStyles } from "@mui/styles";
import React from "react";
import ReadMoreButton from "../../../helpers/ReadMoreButton";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "225px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
  },
  title: {
    fontSize: "60px",
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
    <div className={classes.container}>
      <h3 className={classes.title}>SELECTED PROJECTS</h3>
      <ReadMoreButton className={classes.button} />
    </div>
  );
};

export default TitleProjects;
