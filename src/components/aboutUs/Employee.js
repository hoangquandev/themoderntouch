
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react'
import { listEmployee } from '../../utils/imageAboutUs';
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: "wrap",
        margin: "0 auto",
        textAlign: "center",
        fontSize: "14px",
    },
    item: {
        flex: "0 0 20%",
        maxWidth: "20%"
    },
    img: {
        maxWidth: "100%"
    },
    divImage: {
        width: "180px",
        margin: "0 auto"
    },
    name: {
        fontSize: "16px",
        position: "relative"
    },
    borderLine: {
        position: "absolute",
        borderBottom: "1px solid",
        width: "100px",
        left: "50%",
        bottom: "-7px",
        transform: "translateX(-50%)",
        '&::before': {
            content: '""',
            display: 'block',
            height: 3,
            width: "30px",
            backgroundColor: "black",
            borderRadius: "10px",
            position: "absolute",
            left: "50%",
            bottom: "-2px",
            transform: "translateX(-50%)",
        }
    }
}))
const Employee = () => {
    const classes = useStyles()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className={classes.container}>
            {listEmployee.map((item, key) => {
                return (
                    <div className={classes.item} key={key}>
                        <div className={classes.divImage}>< img
                            data-aos="fade-up"
                            data-aos-delay={100 * key}
                            data-aos-duration="2000"
                            className={classes.img} src={item.avata} alt="" /></div>
                        <div className={classes.name}>
                            <h4
                                data-aos="fade-up"
                                data-aos-delay={100 + 100 * key}
                                data-aos-duration="2000"
                            >{item.name}</h4>
                            <div className={classes.borderLine}></div>
                        </div>
                        <p
                            data-aos="fade-up"
                            data-aos-delay={200 + 200 * key}
                            data-aos-duration="2000"
                        >{item.sub}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Employee