import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "transparent",
    borderRadius: "30px",
    padding: "4px 50px",
    border: "1px solid #fe5600",
    cursor: "pointer",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
    fontSize: "16px",
  },
}));

const ReadMoreButton = () => {
  const classes = useStyles();

  return (
    <a href="/projects">
      <button className={classes.button}>Read More</button>
    </a>
  );
};

export default ReadMoreButton;
