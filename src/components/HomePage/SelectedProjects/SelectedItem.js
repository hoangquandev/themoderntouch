import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import thumbnailImg from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-28.png";
import image1 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-29.png";
import image2 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-30.png";
import image3 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-31.png";

import React, { useState } from "react";
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

const SelectedItem = (props) => {
  const classes = useStyles();
  const index = props.index;
  const projectList = [
    {
      thumbnailImage: thumbnailImg,
      images: [image1, image2, image3],
      description: `Seen from the outside, this project stands out 
    with its impressive design and luxurious 
    diamond shape, featuring an image of bare 
    concrete and glass materials to bring simple but 
    really high class to the owner. In addition, the 
    design highlight is the "bedroom in the clouds" 
    which brings a very new and special experience.`,
      client: `MR. ALAN LUCAS
    & MRS. HIEN LUCAS`,
      location: `District 2, Ho Chi Minh`,
      lotArea: 253.891,
      conArea: 163.611,
      pool: 860,
      number: 18,
      style: "Modern",
    },
    {
      thumbnailImage: thumbnailImg,
      images: [image1, image2, image3],
      description: ` the 
    design highlight is the "bedroom in the clouds" 
    which brings a very new and special experience.`,
      client: `MR.Quan`,
      location: `District 2, Ho Chi Minh`,
      lotArea: 253.891,
      conArea: 163.611,
      pool: 860,
      number: 18,
      style: "Vintage",
    },
    {
      thumbnailImage: thumbnailImg,
      images: [image1, image2, image3],
      description: ` the 
      design highlight is the "bedroom in the clouds" 
      which brings a very new and special experience.`,
      client: `MR.Quan`,
      location: `District 2, Ho Chi Minh`,
      lotArea: 253.891,
      conArea: 163.611,
      pool: 860,
      number: 18,
      style: "Vintage",
    },
    {
      thumbnailImage: thumbnailImg,
      images: [image1, image2, image3],
      description: `Having the location close to the coast, Sunrise 
      Resort is shaped like two large sails reaching 
      out to the ocean to catch the sunrise. The project 
      is a delicate combination of modern features 
      like coming from the future because it is 
      surrounded by a system of glass walls and 
      closeness, blending with the majestic natural 
      landscape.`,
      client: `CALLA`,
      location: `Phu Cat, Binh Dinh`,
      design: "WATG",
      lotArea: 253.891,
      conArea: 163.611,
      pool: 860,
      number: 18,
      style: "Vintage",
    },
    {
      thumbnailImage: thumbnailImg,
      images: [image1, image2, image3],
      description: ` the 
      design highlight is the "bedroom in the clouds" 
      which brings a very new and special experience.`,
      client: `MR.Quan`,
      location: `District 2, Ho Chi Minh`,
      lotArea: 253.891,
      conArea: 163.611,
      pool: 860,
      number: 18,
      style: "Vintage",
    },
    {
      thumbnailImage: thumbnailImg,
      images: [image1, image2, image3],
      description: ` the 
      design highlight is the "bedroom in the clouds" 
      which brings a very new and special experience.`,
      client: `MR.Quan`,
      location: `District 2, Ho Chi Minh`,
      lotArea: 253.891,
      conArea: 163.611,
      pool: 860,
      number: 18,
      style: "Vintage",
    },
    {
      thumbnailImage: thumbnailImg,
      images: [image1, image2, image3],
      description: ` the 
      design highlight is the "bedroom in the clouds" 
      which brings a very new and special experience.`,
      client: `MR.Quan`,
      location: `District 2, Ho Chi Minh`,
      lotArea: 253.891,
      conArea: 163.611,
      pool: 860,
      number: 18,
      style: "Vintage",
    },
    {
      thumbnailImage: thumbnailImg,
      images: [image1, image2, image3],
      description: ` the 
      design highlight is the "bedroom in the clouds" 
      which brings a very new and special experience.`,
      client: `MR.Quan`,
      location: `District 2, Ho Chi Minh`,
      lotArea: 253.891,
      conArea: 163.611,
      pool: 860,
      number: 18,
      style: "Vintage",
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <img
          src={projectList[index].thumbnailImage}
          className={classes.image}
          alt=""
        />
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <img
                  src={projectList[index].images[0]}
                  className={classes.image}
                  alt=""
                />
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <img
                      src={projectList[index].images[1]}
                      className={classes.image}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <img
                      src={projectList[index].images[2]}
                      className={classes.image}
                      alt=""
                    />
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
                <div>{projectList[index].description}</div>
              </Grid>
              <Grid item xs={4} style={{ fontSize: "11px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Client:</div>
                  <b>{projectList[index].client}</b>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Design consultant:</div>
                  <b>{projectList[index].design}</b>
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
                  <b>{projectList[index].location}</b>
                </div>
              </Grid>
              <Grid item xs={4} style={{ fontSize: "12px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Lot area:</div>
                  <b>
                    {projectList[index].lotArea} m
                    <span style={{ verticalAlign: "super" }}>2</span>
                  </b>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Construction area:</div>
                  <b>
                    {projectList[index].conArea} m
                    <span style={{ verticalAlign: "super" }}>2</span>
                  </b>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Public area/swimming pool:</div>
                  <b>
                    {projectList[index].pool} m
                    <span style={{ verticalAlign: "super" }}>2</span>
                  </b>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Number of stories:</div>
                  <b>{projectList[index].number} Stories</b>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Style:</div>
                  <b>{projectList[index].style}</b>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectedItem;
