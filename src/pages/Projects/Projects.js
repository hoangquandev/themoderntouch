import { makeStyles } from "@mui/styles";
import React from "react";
import Footer from "../../common/Footer";
import Hero from "../../components/project/Hero";
import ProjectCard from "../../components/project/ProjectCard";
import img1 from '../../assets/images/projectPage/IMAGE1.png'
import img2 from '../../assets/images/projectPage/IMAGE2.png'
import img3 from '../../assets/images/projectPage/IMAGE3.png'
import img4 from '../../assets/images/projectPage/IMAGE4.png'
import img5 from '../../assets/images/projectPage/IMAGE5.png'
import img6 from '../../assets/images/projectPage/IMAGE6.png'
import img7 from '../../assets/images/projectPage/IMAGE7.png'
import img8 from '../../assets/images/projectPage/IMAGE8.png'
import img9 from '../../assets/images/projectPage/IMAGE9.png'
import img10 from '../../assets/images/projectPage/IMAGE10.png'
import img11 from '../../assets/images/projectPage/IMAGE11.png'
import img12 from '../../assets/images/projectPage/IMAGE12.png'
import img13 from '../../assets/images/projectPage/IMAGE13.png'
import img14 from '../../assets/images/projectPage/IMAGE14.png'
import img15 from '../../assets/images/projectPage/IMAGE15.png'
import img16 from '../../assets/images/projectPage/IMAGE16.png'
import img17 from '../../assets/images/projectPage/IMAGE17.png'
import img18 from '../../assets/images/projectPage/IMAGE18.png'
import img19 from '../../assets/images/projectPage/IMAGE19.png'
import img20 from '../../assets/images/projectPage/IMAGE20.png'
import img21 from '../../assets/images/projectPage/IMAGE21.png'
import img22 from '../../assets/images/projectPage/IMAGE22.png'
import img23 from '../../assets/images/projectPage/IMAGE23.png'
import img24 from '../../assets/images/projectPage/IMAGE24.png'

const useStyles = makeStyles((theme) => ({
  content: {
    marginBottom: "6rem",
    position: "relative"
  },
  main: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    gap: '30px',
    padding: "0 10px",
    width: "1280px",
    margin: "0 auto",

  },
  sidebar: {
    flex: 1,
    // backgroundColor: "#fe5600",
    height: "600px",
    position: "sticky",
    top: "130px",
  },
  projectContainer: {
    flex: 3,
  },
  containerCard: {

    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "30px",
    justifyContent: "center",
    paddingBottom: "3rem"
  },
  titleContainer: {
    borderBottom: "1px solid",
    height: "80px",
    marginBottom: "20px",
    fontStyle: "italic",
    "& h2": {
      fontSize: "32px"
    },
    "& h4": {
      fontSize: "14px",
      fontWeight: "600"
    }
  },
  subList: {
    width: "70%",
    margin: "0 0 auto auto",
    color: "#999",
    "& li": {
      fontWeight: "normal"
    }
  },
  list: {
    "& > li": {
      fontWeight: "bold",
      margin: "10px auto"
    }
  },
  title: {
    textAlign: "center",
    margin: "100px auto 70px",
    fontSize: '36px',
    fontWeight: "normal"
  }

}))



const Projects = () => {
  const classes = useStyles()
  const projectList = [
    {
      path: "1",
      name: "DIAMOND VILLA",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img13
    },
    {
      path: "2",
      name: "MAI LINH RETREAT",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img6
    },
    {
      path: "3",
      name: "TAY HO VILLA",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img17
    },

    {
      path: "4",
      name: "SUNRISE RESORT",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img1
    },
    {
      path: "5",
      name: "CALLA APARTMENT",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img10
    },
    {
      path: "6",
      name: "RITA VO TAY DO",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img8
    },

    {
      path: "7",
      name: "ONE HERITAGE",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img22
    },
    {
      path: "8",
      name: "FIDECO OFFICE",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img11
    },
    {
      path: "9",
      name: "RISEMOUNT APARTMENT",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img9
    },
    {
      path: "b",
      name: "TRI VIET - HOI AN",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img2
    },
    {
      path: "52",
      name: "TMS HOTEL AND SPA",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img7
    },

    {
      path: "a",
      name: "ALAMOANA PLAZA",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img4
    },
    {
      path: "100",
      name: "MAI CHAU CULTURE RESORT",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img5
    },

    {
      path: "77",
      name: "LILIAN WAIKIKI",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img3
    },


    {
      path: "12",
      name: "CTFH",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img12
    },

    {
      path: "ALAMOANA-PLAZA",
      name: "ECOPARK VILLA",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img14
    },
    {
      path: "ALAMOANA-PLAZA",
      name: "TORAZ VILLA",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img15
    },
    {
      path: "ALAMOANA-PLAZA",
      name: "GOLF ISLAND VILLA",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img16
    },

    {
      path: "ALAMOANA-PLAZA",
      name: "NAM VIET A VILLA",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img18
    },
    {
      path: "ALAMOANA-PLAZA",
      name: "DUPLEX 03",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img19
    },
    {
      path: "ALAMOANA-PLAZA",
      name: "DUPLEX 08",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img20
    },
    {
      path: "ALAMOANA-PLAZA",
      name: "DUPLEX 10",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img21
    },

    {
      path: "ALAMOANA-PLAZA",
      name: "NAM VIET A MALL",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img23
    },
    {
      path: "ALAMOANA-PLAZA",
      name: "WATERFRONT CLUB HOUSE",
      timeProject: "2011 - 2022",
      style: "Architectural ◦ Interior",
      imageProject: img24
    },

  ]
  const renderCard = () => {
    return projectList.map((project, key) => {
      return (

        <ProjectCard path={project.path} key={key} imgProject={project.imageProject} timeProject={project.timeProject} styleProject={project.style} nameProject={project.name} />

      )
    })
  }
  return <div>
    <div className={classes.content}>
      <Hero />
      <div>
        <div className={classes.title}>
          <p>DISCOVER OUR FEATURED PROJECTS</p>
        </div>
        <div className={classes.main}>
          <div className={classes.sidebar}>
            <div className={classes.titleContainer}>
              <h2>OUR PROJECTS</h2>
            </div>
            <div>
              <ul className={classes.list}>
                <li>
                  ALL PROJECT
                </li>
                <li>
                  ARCHITECTURE
                </li>
                <li>
                  LANDSCAPE
                </li>
                <li>
                  INTERIOR
                </li>
                <li>
                  GRAPHIC DESIGN
                </li>
                <li >
                  <div>TYPE</div>
                  <div className={classes.subList}>
                    <ul >
                      <li>
                        Project Management & Documentation Support
                      </li>
                      <li>
                        Hotel & Resort
                      </li>
                      <li>
                        Complex Condominium & Office
                      </li>
                      <li>
                        Residential
                      </li>
                      <li>
                        Spa, Restaurant & Commercial
                      </li>
                    </ul>
                  </div>
                </li>
                <li >
                  <div>SERVICES</div>
                  <div className={classes.subList}>
                    <ul >
                      <li>
                        Architectural design
                      </li>
                      <li>
                        Interior design
                      </li>
                      <li>
                        Master planning survey & analysis
                      </li>
                      <li>
                        Project management & supervision consultant
                      </li>
                      <li>
                        Human resource supply
                      </li>
                      <li>
                        Quality management
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.projectContainer}>
            <div className={classes.titleContainer}>
              <h4>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
              </h4>
            </div>
            <div className={classes.containerCard}>
              {renderCard()}
            </div>
          </div>
        </div>
      </div>

    </div>
    {/* <iframe title="The Modern Touch"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.370147910966!2d106.69130261490339!3d10.
    78293636202182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f31496cd4c1%3A0x334faefa1d508eff!
    2zMjAwIFBhc3RldXIsIFBoxrDhu51uZyA2LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e
    0!3m2!1svi!2s!4v1670475356655!5m2!1svi!2s"
      width="100%" height={450} style={{ border: 0, filter: "grayScale(100%)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
    <Footer />
  </div>;
};

export default Projects;
