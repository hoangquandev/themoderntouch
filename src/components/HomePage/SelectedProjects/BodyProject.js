import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React, { useState } from "react";
import image1 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-28.png";
import image2 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-29.png";
import image3 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-30.png";
import image4 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-31.png";
import img1 from "../../../assets/images/SelectedProjects/1-black-diamond.png";
import img2 from "../../../assets/images/SelectedProjects/2-black-mailinh.png";
import img3 from "../../../assets/images/SelectedProjects/3-black-tayho.png";
import img4 from "../../../assets/images/SelectedProjects/4-black-sunrise.png";
import img5 from "../../../assets/images/SelectedProjects/5-black-thecalla.png";
import img6 from "../../../assets/images/SelectedProjects/6-black-ritavo.png";
import img7 from "../../../assets/images/SelectedProjects/7-black-oneheritage.png";
import img8 from "../../../assets/images/SelectedProjects/8-black-fideco.png";
import imgActive1 from "../../../assets/images/SelectedProjects/1-orange-diamond.png";
import imgActive2 from "../../../assets/images/SelectedProjects/2-orange-mailinh.png";
import imgActive3 from "../../../assets/images/SelectedProjects/3-orange-tayho.png";
import imgActive4 from "../../../assets/images/SelectedProjects/4-orange-sunrise.png";
import imgActive5 from "../../../assets/images/SelectedProjects/5-orange-thecalla.png";
import imgActive6 from "../../../assets/images/SelectedProjects/6-orange-ritavo.png";
import imgActive7 from "../../../assets/images/SelectedProjects/7-orange-oneheritage.png";
import imgActive8 from "../../../assets/images/SelectedProjects/8-orange-fideco.png";

const selectList = [img1, img2, img3, img4, img5, img6, img7, img8];
const activeList = [
  imgActive1,
  imgActive2,
  imgActive3,
  imgActive4,
  imgActive5,
  imgActive6,
  imgActive7,
  imgActive8,
];

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: "10px",
    maxWidth: "100%",
  },
  selectList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  itemSelect: {
    margin: "0 10px",
  },
}));
const BodyProject = () => {
  const classes = useStyles();
  const [image, setImage] = useState(false);

  const handleSelected = () => {
    setImage(true);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={image1} className={classes.image} alt="" />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <img src={image2} className={classes.image} alt="" />
                </Grid>
                <Grid item xs={4}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <img src={image3} className={classes.image} alt="" />
                    </Grid>
                    <Grid item xs={12}>
                      <img src={image4} className={classes.image} alt="" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={1.8}
                style={{ fontSize: "11px", fontStyle: "italic" }}
              >
                <Grid
                  item
                  xs={4}
                  style={{ fontSize: "11px", textAlign: "justify" }}
                >
                  <div mar>
                    Having the location close to the coast, Sunrise Resort is
                    shaped like two large sails reaching out to the ocean to
                    catch the sunrise. The project is a delicate combination of
                    modern features like coming from the future because it is
                    surrounded by a system of glass walls and closeness,
                    blending with the majestic natural landscape.
                  </div>
                </Grid>
                <Grid item xs={4} style={{ fontSize: "11px" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Client:</div>
                    <b>CALLA</b>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Design consultant:</div>
                    <b>WATG</b>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Local consultant:</div>
                    <b>THE MODERN TOUCH</b>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Location:</div>
                    <b>Phu Cat, Binh Dinh</b>
                  </div>
                </Grid>
                <Grid item xs={4} style={{ fontSize: "12px" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Lot area:</div>
                    <b>
                      253.891 m<span style={{ verticalAlign: "super" }}>2</span>
                    </b>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Construction area:</div>
                    <b>
                      163.611 m<span style={{ verticalAlign: "super" }}>2</span>
                    </b>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Public area/swimming pool:</div>
                    <b>
                      860 m<span style={{ verticalAlign: "super" }}>2</span>
                    </b>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Number of stories:</div>
                    <b>18 Stories</b>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Style:</div>
                    <b>Modern</b>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div>
        <ul className={classes.selectList}>
          {selectList.map((item, key) => {
            return (
              <li className={classes.itemSelect} key={key}>
                <a href="#">
                  {image ? (
                    <img src={activeList[key]} alt="" />
                  ) : (
                    <img src={item} alt="" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BodyProject;
