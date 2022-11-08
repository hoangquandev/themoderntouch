import { makeStyles } from "@mui/styles";
import React from "react";
import img1 from "../../../assets/images/logo/logo-clients-1.png";
import img2 from "../../../assets/images/logo/logo-clients-2.png";
import img3 from "../../../assets/images/logo/logo-clients-3.png";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    width: "1280px",
    margin: "0 auto",
    marginBottom: "3rem"
  },
  "@media (max-width: 1024px)": {
    container: {
      padding: "10px 100px",
    },
  },
  "@media (max-width: 640px)": {
    container: {
      padding: "0 24px",
    },
  },
}));
const SlideLogo = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={img1} alt="" style={{ maxWidth: "100%" }} />
    </div>
  );
};

export default SlideLogo;
