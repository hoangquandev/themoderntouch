import React from "react";
import { makeStyles } from "@mui/styles";
import mainImage from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-28.png";
import image1 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-29.png";
import image2 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-30.png";
import image3 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-31.png";
import ReadMoreButton from "../../../helpers/ReadMoreButton";

const useStyles = makeStyles((theme) => ({
  "@media (max-width: 1024px)": {
    container: {
      padding: "0 60px",
      textAlign: "center",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      paddingBottom: "2rem",
    },
    description: {
      padding: "0 120px",
      textAlign: "justify",
      fontFamily: "Times New Roman",
      fontSize: "16px",
      fontStyle: "italic",
      marginBottom: "4rem",
    },
    imageContainer: {
      position: "relative",
      padding: "10px 110px",
      marginBottom: "3rem",
    },
    image1: {
      borderRadius: "8px",
    },
    image2: {
      width: "240px",
      height: "140px",
      borderRadius: "8px",
      position: "absolute",
      top: "30%",
      left: "90%",
      transform: "translate(-50%,-50%)",
    },
    image3: {
      width: "240px",
      height: "140px",
      borderRadius: "8px",
      position: "absolute",
      top: "70%",
      left: "10%",
      transform: "translate(-50%,-50%)",
    },
    nameProject: {
      fontFamily: "Times New Roman",
      fontSize: "26px",
      fontStyle: "bold",
    },
  },
  "@media (max-width: 640px)": {
    container: {
      padding: "2rem 8px",
      textAlign: "center",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    },
    mainImage: {
      maxWidth: "100%",
    },
    description: {
      padding: "0 70px",
      textAlign: "justify",
      fontFamily: "Times New Roman",
      fontSize: "14px",
      fontStyle: "italic",
      marginBottom: "2rem",
    },
    imageContainer: {
      position: "relative",
      padding: "10px 70px",
      marginBottom: "3rem",
    },
    image1: {
      borderRadius: "8px",
    },
    image2: {
      width: "100px",
      height: "60px",
      borderRadius: "8px",
      position: "absolute",
      top: "0",
      left: "84%",
      transform: "translate(-50%,-50%)",
    },
    image3: {
      width: "100px",
      height: "60px",
      borderRadius: "8px",
      position: "absolute",
      top: "100%",
      left: "16%",
      transform: "translate(-50%,-50%)",
    },
    nameProject: {
      fontFamily: "Times New Roman",
      fontSize: "26px",
      fontStyle: "bold",
    },
  },
}));
const SelectedMobile = (props) => {
  const classes = useStyles();
  const data = props.data;
  const index = props.index;
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
      <div className={classes.container}>
        <div>
          <img src={mainImage} alt="" className={classes.mainImage} />
        </div>
        <div className={classes.description}>
          <p>
            Having the location close to the coast, Sunrise Resort is shaped
            like two large sails reaching out to the ocean to catch the sunrise.
            The project is a delicate combination of modern features like coming
            from the future because it is surrounded by a system of glass walls
            and closeness, blending with the majestic natural landscape.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <img src={image1} alt="" className={classes.image1} />

          <img src={image2} alt="" className={classes.image2} />

          <img src={image3} alt="" className={classes.image3} />
        </div>
        <div className={classes.nameProject}>SUNRISE RESORT</div>
        <ReadMoreButton />
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <div>
        <img
          src={data[index].thumbnailImage}
          alt=""
          className={classes.mainImage}
        />
      </div>
      <div className={classes.description}>
        <p>{data[index].description}</p>
      </div>
      <div className={classes.imageContainer}>
        <img src={data[index].images[0]} alt="" className={classes.image1} />

        <img src={data[index].images[1]} alt="" className={classes.image2} />

        <img src={data[index].images[2]} alt="" className={classes.image3} />
      </div>
      <div className={classes.nameProject}>SUNRISE RESORT</div>
      <ReadMoreButton />
    </div>
  );
};

export default SelectedMobile;
