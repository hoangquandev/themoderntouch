import { makeStyles } from '@mui/styles'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { listImageAboutUs } from '../../utils/imageAboutUs'
import Employee from './Employee'


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
        fontSize: "14px",
        fontFamily: "Times New Roman"
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
    description: {
        backgroundColor: "white",
        padding: "20px",
        "& h4": {
            fontSize: "20px",
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
        fontSize: '13px'
    },
    leaderContainer: {
        backgroundColor: "white",
        fontSize: "12px",
        "& p": {
            marginTop: "15px",
            marginBottom: "15px"
        }
    },
    nameLead: {
        fontSize: "18px",
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
    const scrollRef = useRef(null)
    return (
        <div className={classes.container}>
            <div className={classes.verticalLine}></div>
            <div className={classes.divImage}>
                <motion.img
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ root: scrollRef, once: true }}
                    className={classes.img} src={listImageAboutUs[0]} alt="" />
            </div>
            <div className={classes.description}>
                <motion.h4
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ root: scrollRef, once: true }}
                >2009</motion.h4>
                <motion.p
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ root: scrollRef, once: true }}
                >THE MODERN TOUCH</motion.p>
                <motion.p
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }}
                    viewport={{ root: scrollRef, once: true }}
                >was conceived in the city of Honolulu, Hawaii, USA is a design company specializing in the high-end class.</motion.p>
            </div>
            <div className={classes.divImage1}>
                <motion.img
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ root: scrollRef, once: true }}
                    className={classes.img} src={listImageAboutUs[1]} alt="" />
            </div>
            <div className={classes.description}>
                <motion.h4 initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ root: scrollRef, once: true }}>2015</motion.h4>
                <motion.p initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ root: scrollRef, once: true }}>7 Staffs</motion.p>
                <motion.p initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }}
                    viewport={{ root: scrollRef, once: true }}>HANOI - HO CHI MINH - DANANG</motion.p>
            </div>
            <div className={classes.divImage2}>
                <motion.img
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ root: scrollRef, once: true }}
                    className={classes.img} src={listImageAboutUs[2]} alt="" />
            </div>
            <div className={classes.description}>
                <motion.h4 initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ root: scrollRef, once: true }}>2016</motion.h4>
                <motion.p initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ root: scrollRef, once: true }}>7 Staffs</motion.p>
                <motion.p initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }}
                    viewport={{ root: scrollRef, once: true }}>HANOI - HO CHI MINH - DANANG</motion.p>
            </div>
            <div className={classes.flexDiv}>
                <div className={classes.flexItem}>
                    <div className={classes.divImage4}>
                        <motion.img
                            initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ root: scrollRef, once: true }}
                            className={classes.img} src={listImageAboutUs[4]} alt="" />
                    </div>
                    <div className={classes.description}>
                        <motion.h4 initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ root: scrollRef, once: true }}>2018</motion.h4>
                        <motion.p initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
                            viewport={{ root: scrollRef, once: true }}>7 Staffs</motion.p>
                        <motion.p initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }}
                            viewport={{ root: scrollRef, once: true }}>HANOI - HO CHI MINH - DANANG</motion.p>
                    </div>
                </div>
                <div className={classes.flexItem}>
                    <div className={classes.divImage3}>
                        <motion.img
                            initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ root: scrollRef, once: true }}
                            className={classes.img} src={listImageAboutUs[3]} alt="" />
                    </div>
                    <div className={classes.description}>
                        <motion.h4 initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ root: scrollRef, once: true }}>2019</motion.h4>
                        <motion.p initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
                            viewport={{ root: scrollRef, once: true }}>7 Staffs</motion.p>
                        <motion.p initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }}
                            viewport={{ root: scrollRef, once: true }}>HANOI - HO CHI MINH - DANANG</motion.p>
                    </div>
                </div>
            </div>
            <div>
                <div

                    className={classes.divImage5}>
                    <motion.img
                        initial={{ opacity: 0.4, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.img} src={listImageAboutUs[5]} alt="" />
                </div>
                <div className={classes.description}>
                    <motion.h4 initial={{ opacity: 0.4, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        viewport={{ root: scrollRef, once: true }}>NOW</motion.h4>
                    <motion.p initial={{ opacity: 0.4, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
                        viewport={{ root: scrollRef, once: true }}>60 Staffs</motion.p>
                    <motion.p initial={{ opacity: 0.4, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }}
                        viewport={{ root: scrollRef, once: true }}>HANOI - HO CHI MINH - DANANG</motion.p>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px", backgroundColor: "white", padding: "10px" }}>
                <motion.h4
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ root: scrollRef, once: true }}
                    className={classes.missionTitle}>VISION & MISSION</motion.h4>
                <motion.p
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ root: scrollRef, once: true }}
                    className={classes.mission}>With the vision of becoming a leading Design Consulting company in the “Premium & Luxury” class, The Modern Touch always carries with us the mission “Quality Design - Quality Life” - “Build quality of life” for each client according to the 5D standards: Precise - Sufficient - Worth - Beautiful - Unique.</motion.p>
            </div>
            <div className={classes.leaderContainer}>
                <div className={classes.divImage6}>
                    <motion.img
                        initial={{ opacity: 0.4, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.img} style={{ marginTop: "-30px" }} src={listImageAboutUs[6]} alt="" />
                </div>
                <div className={classes.nameLead}>
                    <h4>
                        <motion.span
                            initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ root: scrollRef, once: true }}
                        >LINH </motion.span>
                        <motion.span
                            initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
                            viewport={{ root: scrollRef, once: true }}
                        >QUANG </motion.span>
                        <motion.span
                            initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }}
                            viewport={{ root: scrollRef, once: true }}
                        >LE</motion.span></h4>
                    <div className={classes.borderLine}></div>
                </div>
                <motion.h4
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
                    viewport={{ root: scrollRef, once: true }}
                    style={{ fontSize: "12px", marginTop: "15px", marginBottom: "15px" }}>ARCH. D, LEED® AP<br />
                    MANAGING DIRECTOR OF THE MODERN TOUCH</motion.h4>
                <motion.p
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } }}
                    viewport={{ root: scrollRef, once: true }}
                >Managing Director of The Modern Touch, one of the pioneering companies <br /> in the Revit design development, not only in Vietnam but also in Asia.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
                    viewport={{ root: scrollRef, once: true }}
                >• Lived and worked in Hawaii, USA.</motion.p>
                <motion.p
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                    viewport={{ root: scrollRef, once: true }}
                >• More than 25 years experience in the development of major projects including residential, commercial complexes, community projects, educa-<br /> tional institutions, spas and high-end resorts in the US, Hong Kong and Vietnam. He involves many features: consulting in architectural design,<br /> provisioning, monitoring, project management, construction, restructuring, supervision consulting.</motion.p>
                <motion.p
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.4 } }}
                    viewport={{ root: scrollRef, once: true }}
                >• He is an architect gaining the USA certificate of LEED®AP.</motion.p>
                <motion.p
                    initial={{ opacity: 0.4, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.6 } }}
                    viewport={{ root: scrollRef, once: true }}
                >Some typical projects participated:<br />
                    ...<br />
                    Trump International Hotel Waikiki, Park Lane Ala Moana, Da Nang TMS Hotel & Spa, Tri Viet Hoi An Resort, Saigon Smile<br /> Spa System, Grand Mercure Hotel, Risemount Movenpick, Nam Viet A Mansion, Diamond Villa, Duplex and Penthouse.<br /> ...</motion.p>
                <div style={{
                    width: "1280px",
                    margin: "0 auto"
                }}>
                    <Employee />
                </div>
                <div style={{ textAlign: "center", marginTop: "30px", backgroundColor: "white", padding: "10px" }}>
                    <motion.h4
                        initial={{ opacity: 0.4, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.missionTitle}>DEDICATED & PROFESSIONAL TEAM</motion.h4>
                    <motion.p
                        initial={{ opacity: 0.4, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
                        viewport={{ root: scrollRef, once: true }}
                        style={{ fontSize: 14 }}>
                        THE MODERN TOUCH owns a team of more than 60 employees including architects, engineers, designers, project managers, supervision consultants..., participating in many<br /> large domestic and foreign projects with the following roles: planning, architectural design, interior design, document design, project management, supervision consultancy,<br /> construction, etc. Each member, regardless of position, is involved in the entire project development process, making the most of their talents, elite qualities, and strengths to<br /> create greater value for themselves, the company, clients, partners, and the community.
                    </motion.p>
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
                    <motion.img
                        initial={{ opacity: 0.4, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        viewport={{ root: scrollRef, once: true }}
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
                    <motion.img
                        initial={{ opacity: 0.4, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
                        viewport={{ root: scrollRef, once: true }}
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
                    <motion.img
                        initial={{ opacity: 0.4, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } }}
                        viewport={{ root: scrollRef, once: true }}
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