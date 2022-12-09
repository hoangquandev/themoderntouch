import { makeStyles } from '@mui/styles'
import React, { useEffect, useRef } from 'react'
import { listImageAboutUs } from '../../utils/imageAboutUs'
import Employee from './Employee'
import AOS from "aos";
import "aos/dist/aos.css";


const useStyles = makeStyles((theme) => ({
    img: {
        width: "100%"
    },
    divImage: {
        width: "120px",
        margin: "60px auto 30px auto",
        backgroundColor: "white"
    },
    divImage1: {
        width: "130px",
        margin: "60px auto 30px auto",
        backgroundColor: "white"
    },
    divImage2: {
        width: "400px",
        margin: "60px auto 30px auto",
        backgroundColor: "white"
    },
    divImage3: {
        width: "150px",
        margin: "60px auto 44px auto",
        backgroundColor: "white"
    },
    divImage4: {
        width: "150px",
        margin: "60px auto 30px auto",
        backgroundColor: "white"
    },
    divImage5: {
        width: "220px",
        margin: "60px auto 30px auto",
        backgroundColor: "white",
    },
    divImage6: {
        width: "300px",
        margin: "60px auto 0px auto",
        backgroundColor: "white"
    },
    flexDiv: {
        display: "flex",
        justifyContent: "center",

    },
    flexItem: {
        padding: "60px"
    },
    container: {
        textAlign: 'center',
        position: "relative",
        fontSize: "18px",
        fontFamily: "Times New Roman",
        margin: "0 auto"
    },
    verticalLine: {
        position: "absolute",
        width: "1px",
        height: "100%",
        backgroundColor: "black",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: -1
    },
    svg: {
        position: "fixed",
        width: "100vw",
        height: "calc(100vh - 125px)",
        top: "125px",
        zIndex: -1
    },
    description: {
        backgroundColor: "white",
        padding: "20px",
        "& h4": {
            fontSize: "28px",
            paddingBottom: "10px"
        }
    },
    missionTitle: {
        fontSize: "30px",
        color: "#fe5600",
        marginBottom: "10px"
    },
    mission: {
        width: "635px",
        margin: "0 auto",
        fontSize: '16px'
    },
    leaderContainer: {
        backgroundColor: "white",
        fontSize: "16px",
        "& p": {
            marginTop: "15px",
            marginBottom: "15px"
        }
    },
    nameLead: {
        fontSize: "24px",
        borderBottom: "1px solid",
        width: "220px",
        margin: "0 auto",
        position: "relative",
        paddingBottom: "5px"
    },
    borderLine: {
        position: "absolute",
        width: "70px",
        height: "4px",
        backgroundColor: "black",
        bottom: -2.5,
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "10px"
    },
    footerDiv: {
        backgroundImage: `url(${listImageAboutUs[7]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
}))


const History = () => {
    const classes = useStyles()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const ref = useRef(null);

    useEffect(() => {
        const path = ref.current;

        const pathLength = path.getTotalLength()
        path.style.strokeDasharray = pathLength + ' ' + pathLength
        path.style.strokeDashoffset = pathLength
        window.addEventListener('scroll', () => {
            var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight + document.documentElement.clientHeight)
            var drawLength = pathLength * scrollPercentage
            path.style.strokeDashoffset = pathLength - drawLength
        })
    }, []);
    return (
        <div className={classes.container}>
            <div className={classes.svg}>
                <svg id="chart" height="100%" style={{ backgroundClip: "red" }}>
                    <line ref={ref} x1="50%" y1="0" x2="50%" y2="100%" stroke="#fe5600" strokeWidth='3px'></line>
                </svg>
            </div>
            <div className={classes.divImage}>
                <img
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    className={classes.img} src={listImageAboutUs[0]} alt="" />
            </div>
            <div className={classes.description}>
                <h4
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >2009</h4>
                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                >THE MODERN TOUCH</p>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                >was conceived in the city of Honolulu, Hawaii, USA is a design company specializing in the high-end class.</p>
            </div>
            <div className={classes.divImage1}>
                <img
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    className={classes.img} src={listImageAboutUs[1]} alt="" />
            </div>
            <div className={classes.description}>
                <h4 data-aos="fade-up"
                    data-aos-duration="2000">2015</h4>
                <p data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="2000">7 Staffs</p>
                <p data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000">HANOI - HO CHI MINH - DANANG</p>
            </div>
            <div className={classes.divImage2}>
                <img
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className={classes.img} src={listImageAboutUs[2]} alt="" />
            </div>
            <div className={classes.description}>
                <h4 data-aos="fade-up"
                    data-aos-duration="2000">2016</h4>
                <p data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="2000">7 Staffs</p>
                <p data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000">HANOI - HO CHI MINH - DANANG</p>
            </div>
            <div className={classes.flexDiv}>
                <div className={classes.flexItem}>
                    <div className={classes.divImage4}>
                        <img
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            className={classes.img} src={listImageAboutUs[4]} alt="" />
                    </div>
                    <div className={classes.description}>
                        <h4 data-aos="fade-up"
                            data-aos-duration="2000">2018</h4>
                        <p data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="2000">7 Staffs</p>
                        <p data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="2000">HANOI - HO CHI MINH - DANANG</p>
                    </div>
                </div>
                <div className={classes.flexItem}>
                    <div className={classes.divImage3}>
                        <img
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            className={classes.img} src={listImageAboutUs[3]} alt="" />
                    </div>
                    <div className={classes.description}>
                        <h4 data-aos="fade-up"
                            data-aos-duration="2000">2019</h4>
                        <p data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="2000">7 Staffs</p>
                        <p data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="2000">HANOI - HO CHI MINH - DANANG</p>
                    </div>
                </div>
            </div>
            <div>
                <div

                    className={classes.divImage5}>
                    <img
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                        className={classes.img} src={listImageAboutUs[5]} alt="" />
                </div>
                <div className={classes.description}>
                    <h4 data-aos="fade-up"
                        data-aos-duration="2000">NOW</h4>
                    <p data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="2000">60 Staffs</p>
                    <p data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="2000">HANOI - HO CHI MINH - DANANG</p>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px", backgroundColor: "white", padding: "10px" }}>
                <h4
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className={classes.missionTitle}>VISION & MISSION</h4>
                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    className={classes.mission}>With the vision of becoming a leading Design Consulting company in the “Premium & Luxury” class, The Modern Touch always carries with us the mission “Quality Design - Quality Life” - “Build quality of life” for each client according to the 5D standards: Precise - Sufficient - Worth - Beautiful - Unique.</p>
            </div>
            <div className={classes.leaderContainer}>
                <div className={classes.divImage6}>
                    <img
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className={classes.img} style={{ marginTop: "-30px" }} src={listImageAboutUs[6]} alt="" />
                </div>
                <div className={classes.nameLead}>
                    <h4 data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="2000">
                        <span
                        >LINH </span>
                        <span
                        >QUANG </span>
                        <span
                        >LE</span></h4>
                    <div className={classes.borderLine}></div>
                </div>
                <h4
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    style={{ fontSize: "18px", marginTop: "15px", marginBottom: "15px" }}>ARCH. D, LEED® AP<br />
                    MANAGING DIRECTOR OF THE MODERN TOUCH</h4>
                <p

                >Managing Director of The Modern Touch, one of the pioneering companies <br /> in the Revit design development, not only in Vietnam but also in Asia.
                </p>
                <p

                >• Lived and worked in Hawaii, USA.</p>
                <p

                >• More than 25 years experience in the development of major projects including residential, commercial complexes, community projects, educa-<br /> tional institutions, spas and high-end resorts in the US, Hong Kong and Vietnam. He involves many features: consulting in architectural design,<br /> provisioning, monitoring, project management, construction, restructuring, supervision consulting.</p>
                <p

                >• He is an architect gaining the USA certificate of LEED®AP.</p>
                <p

                >Some typical projects participated:<br />
                    ...<br />
                    Trump International Hotel Waikiki, Park Lane Ala Moana, Da Nang TMS Hotel & Spa, Tri Viet Hoi An Resort, Saigon Smile<br /> Spa System, Grand Mercure Hotel, Risemount Movenpick, Nam Viet A Mansion, Diamond Villa, Duplex and Penthouse.<br /> ...</p>
                <div style={{
                    width: "1280px",
                    margin: "0 auto"
                }}>
                    <Employee />
                </div>
                <div style={{ textAlign: "center", marginTop: "30px", backgroundColor: "white", padding: "10px" }}>
                    <h4
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className={classes.missionTitle}>DEDICATED & PROFESSIONAL TEAM</h4>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        style={{ fontSize: "16px" }}>
                        THE MODERN TOUCH owns a team of more than 60 employees including architects, engineers, designers, project managers, supervision consultants..., participating in many<br /> large domestic and foreign projects with the following roles: planning, architectural design, interior design, document design, project management, supervision consultancy,<br /> construction, etc. Each member, regardless of position, is involved in the entire project development process, making the most of their talents, elite qualities, and strengths to<br /> create greater value for themselves, the company, clients, partners, and the community.
                    </p>
                </div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "100px",
            }}>
                <div style={{
                    width: "400px",
                    padding: "20px",
                    backgroundColor: "white"
                }}>
                    <img
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                        style={{
                            borderRadius: "20px",
                            height: "200px"
                        }} className={classes.img} src={listImageAboutUs[8]} alt='' />
                </div>
                <div style={{
                    width: "400px",
                    padding: "20px",
                    backgroundColor: "white"
                }}>
                    <img
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        style={{
                            borderRadius: "20px",
                            height: "200px"
                        }} className={classes.img} src={listImageAboutUs[9]} alt='' />
                </div>
                <div style={{
                    width: "400px",
                    padding: "20px",
                    backgroundColor: "white"
                }}>
                    <img
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-duration="2000"
                        style={{
                            borderRadius: "20px",
                            height: "200px"
                        }} className={classes.img} src={listImageAboutUs[10]} alt='' />
                </div>
            </div>



        </div>
    )
}

export default History