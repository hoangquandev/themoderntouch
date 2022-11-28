
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import React, { useRef } from 'react'
import { listEmployee } from '../../utils/imageAboutUs';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: "wrap",
        margin: "0 auto",
        textAlign: "center",
        fontSize: "12px",
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
        fontSize: "14px",
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
    const scrollRef = useRef(null)
    return (
        <div className={classes.container}>
            {listEmployee.map((item, key) => {
                return (
                    <div className={classes.item} key={key}>
                        <div className={classes.divImage}>< motion.img
                            initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: key * 0.2 } }}
                            viewport={{ root: scrollRef, once: true }}
                            className={classes.img} src={item.avata} alt="" /></div>
                        <div className={classes.name}>
                            <motion.h4
                                initial={{ opacity: 0.4, y: 100 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 + key * 0.2 } }}
                                viewport={{ root: scrollRef, once: true }}
                            >{item.name}</motion.h4>
                            <div className={classes.borderLine}></div>
                        </div>
                        <motion.p
                            initial={{ opacity: 0.4, y: 100 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 + key * 0.2 } }}
                            viewport={{ root: scrollRef, once: true }}
                        >{item.sub}</motion.p>
                    </div>
                )
            })}
        </div>
    )
}

export default Employee