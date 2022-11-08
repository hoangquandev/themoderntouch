import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React, { useState } from "react";

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
import SelectedItem from "./SelectedItem";

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
    cursor: "pointer",
  },
}));
const BodyProject = () => {
  const classes = useStyles();
  const [selectIndex, setSelectedIndex] = useState(3);
  const [selectedImg1, setSelectedImg1] = useState(false);
  const [selectedImg2, setSelectedImg2] = useState(false);
  const [selectedImg3, setSelectedImg3] = useState(false);
  const [selectedImg4, setSelectedImg4] = useState(true);
  const [selectedImg5, setSelectedImg5] = useState(false);
  const [selectedImg6, setSelectedImg6] = useState(false);
  const [selectedImg7, setSelectedImg7] = useState(false);
  const [selectedImg8, setSelectedImg8] = useState(false);

  const handleSelected1 = () => {
    setSelectedImg1(true);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedIndex(0);
  };
  const handleSelected2 = () => {
    setSelectedImg1(false);
    setSelectedImg2(true);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedIndex(1);
  };
  const handleSelected3 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(true);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedIndex(2);
  };
  const handleSelected4 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(true);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedIndex(3);
  };
  const handleSelected5 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(true);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedIndex(4);
  };
  const handleSelected6 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(true);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedIndex(5);
  };
  const handleSelected7 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(true);
    setSelectedImg8(false);
    setSelectedIndex(6);
  };
  const handleSelected8 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(true);
    setSelectedIndex(7);
  };
  return (
    <div>
      <SelectedItem index={selectIndex} />
      <div style={{ padding: "0 30px" }}>
        <ul className={classes.selectList}>
          <li onClick={handleSelected1} className={classes.itemSelect}>
            {selectedImg1 ? (
              <img src={activeList[0]} alt="" />
            ) : (
              <img src={selectList[0]} alt="" />
            )}
          </li>
          <li onClick={handleSelected2} className={classes.itemSelect}>
            {selectedImg2 ? (
              <img src={activeList[1]} alt="" />
            ) : (
              <img src={selectList[1]} alt="" />
            )}
          </li>
          <li onClick={handleSelected3} className={classes.itemSelect}>
            {selectedImg3 ? (
              <img src={activeList[2]} alt="" />
            ) : (
              <img src={selectList[2]} alt="" />
            )}
          </li>
          <li onClick={handleSelected4} className={classes.itemSelect}>
            {selectedImg4 ? (
              <img src={activeList[3]} alt="" />
            ) : (
              <img src={selectList[3]} alt="" />
            )}
          </li>
          <li onClick={handleSelected5} className={classes.itemSelect}>
            {selectedImg5 ? (
              <img src={activeList[4]} alt="" />
            ) : (
              <img src={selectList[4]} alt="" />
            )}
          </li>
          <li onClick={handleSelected6} className={classes.itemSelect}>
            {selectedImg6 ? (
              <img src={activeList[5]} alt="" />
            ) : (
              <img src={selectList[5]} alt="" />
            )}
          </li>
          <li onClick={handleSelected7} className={classes.itemSelect}>
            {selectedImg7 ? (
              <img src={activeList[6]} alt="" />
            ) : (
              <img src={selectList[6]} alt="" />
            )}
          </li>
          <li onClick={handleSelected8} className={classes.itemSelect}>
            {selectedImg8 ? (
              <img src={activeList[7]} alt="" />
            ) : (
              <img src={selectList[7]} alt="" />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BodyProject;
