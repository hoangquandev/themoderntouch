import { makeStyles } from "@mui/styles";
import React from "react";

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
    textAlign: "center"
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
      fontSize: "30px"
    }
  }
}));

const TitleProjects = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>SELECTED PROJECTS</h3>
      <a href="#"><button className={classes.button}>Read More</button></a>
    </div>
  );
};

export default TitleProjects;
