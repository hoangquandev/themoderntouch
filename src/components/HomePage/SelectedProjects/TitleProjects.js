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

    "&:nth-child(1)": {
      fontSize: "60px",
      fontFamily: "Times New Roman",
      fontStyle: "normal",
    },
  },
  title: {
    fontSize: "60px",
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  button: {
    backgroundColor: "transparent",
    borderRadius: "30px",
    padding: "0 50px",
    border: "1px solid",
    cursor: "pointer",
  },
}));

const TitleProjects = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>SELECTED PROJECTS</h3>
      <button className={classes.button}>Read More</button>
    </div>
  );
};

export default TitleProjects;
