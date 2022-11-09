import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import thumbnailImg from "../../../assets/images/thumbnailProject/sunrise-1.png";
import image1 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-29.png";
import image2 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-30.png";
import image3 from "../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-31.png";
import thumbnailImg1 from "../../../assets/images/thumbnailProject/diamond-1.png";
import image4 from "../../../assets/images/ProjectsData/diamond-2.png";
import image5 from "../../../assets/images/ProjectsData/diamond-3.png";
import image6 from "../../../assets/images/ProjectsData/diamond-4.png";
import thumbnailImage2 from "../../../assets/images/thumbnailProject/fideco-1.png";
import image7 from "../../../assets/images/ProjectsData/fideco-2.png";
import image8 from "../../../assets/images/ProjectsData/fideco-3.png";
import image9 from "../../../assets/images/ProjectsData/fideco-4.png";
import thumbnailImage3 from "../../../assets/images/thumbnailProject/mailinh-1.png";
import image10 from "../../../assets/images/ProjectsData/mailinh-2.png";
import image11 from "../../../assets/images/ProjectsData/mailinh-3.png";
import image12 from "../../../assets/images/ProjectsData/mailinh-4.png";
import thumbnailImage4 from "../../../assets/images/thumbnailProject/oneheritage-1.png";
import image13 from "../../../assets/images/ProjectsData/oneheritage-2.png";
import image14 from "../../../assets/images/ProjectsData/oneheritage-3.png";
import image15 from "../../../assets/images/ProjectsData/oneheritage-4.png";
import thumbnailImage5 from "../../../assets/images/thumbnailProject/ritavo-1.png";
import image16 from "../../../assets/images/ProjectsData/ritavo-2.png";
import image17 from "../../../assets/images/ProjectsData/ritavo-3.png";
import image18 from "../../../assets/images/ProjectsData/ritavo-4.png";
import thumbnailImage6 from "../../../assets/images/thumbnailProject/tayho-1.png";
import image19 from "../../../assets/images/ProjectsData/tayho-2.png";
import image20 from "../../../assets/images/ProjectsData/tayho-3.png";
import image21 from "../../../assets/images/ProjectsData/tayho-4.png";
import thumbnailImage7 from "../../../assets/images/thumbnailProject/thecalla-1.png";
import image22 from "../../../assets/images/ProjectsData/thecalla-2.png";
import image23 from "../../../assets/images/ProjectsData/thecalla-3.png";
import image24 from "../../../assets/images/ProjectsData/thecalla-4.png";

import React from "react";
import SelectedMobile from "./SelectedMobile";
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
      name: "DIAMOND VILLA",
      thumbnailImage: thumbnailImg1,
      images: [image4, image5, image6],
      description: `Seen from the outside, this project stands out with its impressive design and luxurious diamond shape, featuring an image of bare concrete and glass materials to bring simple but really high class to the owner. In addition, the design highlight is the "bedroom in the clouds" which brings a very new and special experience.
      `,
      client: `MR. ALAN LUCAS & MRS. HIEN LUCAS`,
      location: `District 2, Ho Chi Minh`,
      lotArea: 752,
      conArea: 1.199,
      pool: 60,
      height: 14.05,
      number: 18,
      style: "Modern",
    },

    {
      name: "MAI LINH RETREAT",
      thumbnailImage: thumbnailImage3,
      images: [image10, image11, image12],
      description: `Possessing an attractive and impressive beauty, a delicate combination style design between Indochinese classics mixed with luxurious modern features. With the meaning of a place to keep memories, a place to retreat after busy days, the villa has a cozy exterior with deep brown tones of wood and unique lighting ideas that impress anyone at first sight. In particular, the highlighted design is impressive creativity with a "D" shape inspired by the owner's last name.`,
      client: `THUAN HAI GROUP`,
      location: `Dong Nai`,
      lotArea: 340,
      conArea: 420,
      pool: 15,
      number: 2,
      style: "Modern",
    },

    {
      name: "TAY HO VILLA",
      thumbnailImage: thumbnailImage6,
      images: [image19, image20, image21],
      description: `Modern architectural avatar with soft rounded lines. The large curved glass system increases the elegance and impression of the building. Tay Ho Villa consists of 2 blocks with an open space design that brings a sense of comfort. Especially the green space connecting the 2 building blocks is a spiral staircase specially designed by The Modern Touch Architects, very delicate and gentle.`,
      client: `NDH COMPANY`,
      location: `Tay Ho, Ha Noi`,
      lotArea: 1.441,
      conArea: 1.105,
      pool: 148,
      height: "9.3",
      number: 2,
      style: "Modern, Asian Contemporary",
    },

    {
      name: "SUNRISE RESORT",
      thumbnailImage: thumbnailImg,
      images: [image1, image2, image3],
      description: `Having the location close to the coast, Sunrise Resort is shaped like two large sails reaching out to the ocean to catch the sunrise. The project is a delicate combination of modern features like coming from the future because it is surrounded by a system of glass walls and closeness, blending with the majestic natural landscape.`,
      client: `CALLA`,
      location: `Phu Cat, Binh Dinh`,
      design: "WATG",
      lotArea: 253.891,
      conArea: 163.611,
      pool: 860,
      number: 18,
      style: "Modern",
    },

    {
      name: "CALLA APARTMENT QUY NHON",
      thumbnailImage: thumbnailImage7,
      images: [image22, image23, image24],
      description: `Calla Apartment Quy Nhon is a trend-catching project located in the "golden" position in the center of Quy Nhon coastal city. Immerse yourself in the trend of experiencing a new perfect life, giving apartment owners high-class and comfortable experiences.`,
      client: `ARMO`,
      location: `Quy Nhon, Binh Dinh`,
      lotArea: 3.076,
      conArea: 2.232,
      pool: 100,
      number: 29,
      style: "VintModernage",
    },

    {
      name: "RITA VO TAY DO",
      thumbnailImage: thumbnailImage5,
      images: [image16, image17, image18],
      description: `Inspired by the waves of the Can Tho River and the graceful lines of Ninh Kieu wharf combined with the image of a dragon's body reaching up to the sky, Rita Vo Tay Do building has a soft appearance suitable for the charming people of Can Tho but still majestic enough to be worthy of being a landmark for the Mekong Delta region.`,
      client: `RITA VO`,
      location: `Cai Rang, Can Tho`,
      lotArea: 2.015,
      conArea: 11.76,
      pool: 860,
      height: "49,75",
      number: 12,
      style: "Modern",
    },

    {
      name: "ONE HERITAGE",
      thumbnailImage: thumbnailImage4,
      images: [image13, image14, image15],
      description: `The villa is designed in a semi-classical style, which is a harmonious combination of high-class materials in an airy space. Prominent on the light color of the ceiling and walls is the warm brown color, creating a cozy and trendy feeling like entering a magnificent heritage.`,
      client: `MEKONG ONE`,
      location: `Ba Dinh, Ha Noi`,
      lotArea: "1,723",
      conArea: 890,
      pool: "1,458",
      height: "18,3",
      number: 4,
      style: "Semi Classic",
    },

    {
      name: "FIDECO OFFICE",
      thumbnailImage: thumbnailImage2,
      images: [image7, image8, image9],
      description: `Fideco Building is located in the central area of District 1, with a luxurious and high-class design orientation, meeting Grade A office standards.`,
      client: `FIDECO`,
      location: `District 1, Ho Chi Minh`,
      lotArea: "356,3",
      conArea: 163.611,
      pool: 860,
      number: 18,
      style: "Modern, luxurious",
    },
  ];
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
    return <SelectedMobile data={projectList} index={index} />;
  }
  return (
    <div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <Grid container spacing={2} style={{ padding: "0 30px" }}>
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
                  <div style={{ height: "150px" }}>
                    {projectList[index].description}
                  </div>
                </Grid>
                <Grid item xs={4} style={{ fontSize: "11px" }}>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Client:</div>
                    <b>{projectList[index].client}</b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Design consultant:</div>
                    <b>{projectList[index].design}</b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Local consultant:</div>
                    <b>THE MODERN TOUCH</b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Location:</div>
                    <b>{projectList[index].location}</b>
                  </div>
                </Grid>
                <Grid item xs={4} style={{ fontSize: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Lot area:</div>
                    <b>
                      {projectList[index].lotArea} m
                      <span style={{ verticalAlign: "super" }}>2</span>
                    </b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Construction area:</div>
                    <b>
                      {projectList[index].conArea} m
                      <span style={{ verticalAlign: "super" }}>2</span>
                    </b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Public area/swimming pool:</div>
                    <b>
                      {projectList[index].pool} m
                      <span style={{ verticalAlign: "super" }}>2</span>
                    </b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>Number of stories:</div>
                    <b>{projectList[index].number} Stories</b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
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
    </div>
  );
};

export default SelectedItem;
