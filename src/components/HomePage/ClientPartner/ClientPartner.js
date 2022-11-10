import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from "../../../assets/images/avatarClients/avatar-clients-1.png";
import image2 from "../../../assets/images/avatarClients/avatar-clients-2.png";
import image3 from "../../../assets/images/avatarClients/avatar-clients-3.png";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
  },
  content: {
    margin: "0 auto",
    width: "1280px",
  },
  title: {
    fontSize: "36px",
    marginBottom: "2.5rem",
    marginTop: "2rem",
  },
  circle: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    "&:hover": {
      border: "4px solid rgba(0,0,0,0.2)",
      transition: "ease-out 0.2s",
    },
  },
  desciption: {
    textAlign: "justify",
    fontSize: "15px",
    marginTop: "1rem",
    fontStyle: "italic",
  },
  border: {
    marginTop: "0.2rem",
    marginBottom: "0.2rem",
    width: "100%",
    borderBottom: "1px solid",
  },
  subTitle: {
    fontSize: "12px",
    fontStyle: "italic",
  },
  "@media (max-width: 1280px)": {
    content: {
      width: "1024px",
    },
  },

  "@media (max-width: 1024px)": {
    title: {
      fontSize: "30px",
      padding: "0 30px",
    },
    circle: {
      height: "70px",
      width: "70px",
    },
    container: {
      margin: "0 auto",
    },
    content: {
      margin: "0 auto",
      width: "960px",
    },
  },
  "@media (max-width: 640px)": {
    content: {
      margin: "0 auto",
      width: "390px",
    },
  },
}));

const ClientPartner = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Grid
          container
          style={{
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          <Grid item xs={12} mb={4} >
            <h2 className={classes.title} >OUR CLIENTS & PARTNERS</h2>
          </Grid>
          <Grid item xs={10} md={12} margin="auto">
            <Grid container spacing={5}>
              <Grid
                item
                xs={12}
                md={4}

              >
                <img src={image1} className={classes.circle} alt="" />
                <h3 style={{ marginTop: "2rem" }}>MR. HOANG VAN QUYEN</h3>
                <div className={classes.border}></div>
                <p className={classes.subTitle}>
                  FORMER DIRECTOR OF KOHLER IN VIETNAM
                </p>
                <p className={classes.desciption}>
                  "Dedication, enthusiasm in creative, responsible and always
                  paying attention to the interests of clients are qualities
                  making the biggest difference in The Modern Touch. Mr. Linh
                  and The Modern Touch always work by heart in order to offer
                  clients the best value. The Modern Touch team always shows
                  dedica- tion and commitment to the work. The clear example is
                  that The Modern Touch links very closely with the supply unit,
                  partnership companion in order that the value of commitments
                  must be full to the client."
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}

              >
                <img src={image2} className={classes.circle} alt="" />
                <h3 style={{ marginTop: "2rem" }}>DIVA MY LINH</h3>
                <div className={classes.border}></div>
                <p className={classes.subTitle}>CO-OWNER OF SAIGON SMILE SPA</p>
                <p className={classes.desciption}>
                  “Saigon Smile Spa has been continuously side by side with The
                  Modern Touch for 2 years (8 spas and 1 office). The decision
                  that all construction works are due to The Modern Touch design
                  and supervision expressed the absolute confidence of investors
                  for you. With Saigon Smile Spa, My Linh was very pleased with
                  the spa area designed in an exquisite and unique style.”
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}

              >
                <img src={image3} className={classes.circle} alt="" />
                <h3 style={{ marginTop: "2rem" }}>MR. DANG VAN THOAI</h3>
                <div className={classes.border}></div>
                <p className={classes.subTitle}>PRESIDENT OF MEKONG ONE</p>
                <p className={classes.desciption}>
                  "There is a Vietnamese man, slim but full of person-ality,
                  with different emotions from serious, humorous to jovial,
                  sometimes showing irritable depending on conditions, work and
                  period... but all of them express a passionate architect who
                  lived and trained in the United States. That little fellow man
                  is also intelli-gent, and energetic. He was determined to
                  leave Hawaii, the most fascinating city in the world, to come
                  back to living in Vietnam with enthusiasm flow-ing in his
                  blood. Wish you success in the motherland in managing to build
                  and develop a brand for your-self together with the Company!"
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ClientPartner;
