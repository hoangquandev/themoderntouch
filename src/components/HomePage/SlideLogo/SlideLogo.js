import { makeStyles } from "@mui/styles";
import React from "react";
import Slider from "react-slick";
import img1 from "../../../assets/images/Logoclients/logo-clients-1.png";
import img2 from "../../../assets/images/Logoclients/logo-clients-2.png";
import img3 from "../../../assets/images/Logoclients/logo-clients-3.png";
import mobile1 from "../../../assets/images/CLIENTMOBLIE/CLIENT-ON-MOBILE-2.png";
import mobile2 from "../../../assets/images/CLIENTMOBLIE/CLIENT-ON-MOBILE-3.png";
import mobile3 from "../../../assets/images/CLIENTMOBLIE/CLIENT-ON-MOBILE-4.png";
import mobile4 from "../../../assets/images/CLIENTMOBLIE/CLIENT-ON-MOBILE-5.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    margin: "0 auto"
  },
  container: {
    maxWidth: "100%",
    width: "1330px",
    margin: "0 auto",
    marginBottom: "3rem",
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

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  if (isMobile) {
    return (
      <Slider className={classes.container} {...settings}>
        <div>
          <img src={mobile1} alt="" style={{ maxWidth: "100%" }} />
        </div>
        <div>
          <img src={mobile2} alt="" style={{ maxWidth: "100%" }} />
        </div>
        <div>
          <img src={mobile3} alt="" style={{ maxWidth: "100%" }} />
        </div>
        <div>
          <img src={mobile4} alt="" style={{ maxWidth: "100%" }} />
        </div>
      </Slider>
    );
  }
  return (
    <div className={classes.mainContainer}>
      <Slider className={classes.container} {...settings}>
        <div>
          <img src={img1} alt="" style={{ maxWidth: "100%" }} />
        </div>
        <div>
          <img src={img2} alt="" style={{ maxWidth: "100%" }} />
        </div>
        <div>
          <img src={img3} alt="" style={{ maxWidth: "100%" }} />
        </div>
      </Slider>
    </div>
  );
};

export default SlideLogo;
