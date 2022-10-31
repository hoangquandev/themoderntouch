import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",

    },
    icon: {
        border: "0px solid #ccc",
        height: "2px",
        background: '#ccc',
        width: '22px',

    },
    iconHover: {
        border: "0px solid #fe5600",
        height: "2px",
        background: '#fe5600',
        width: '22px',
    },
    dot: {
        backgroundColor: "#ccc",
        borderRadius: '50%',
        width: 8,
        height: 8,
        position: 'absolute',
        left: "-7px",
        top: "-3px",

    },
    dotHover: {
        backgroundColor: "#fe5600",
        borderRadius: '50%',
        width: 8,
        height: 8,
        position: 'absolute',
        left: "-7px",
        top: "-3px",

    },


}))

const SlideIcon = (props) => {
    const classes = useStyles()
    console.log(props.isShown);
    return (
        <div className={classes.container}>
            <div className={props.hover ? classes.iconHover : classes.icon}></div>
            <div className={props.hover ? classes.dotHover : classes.dot}></div>
        </div>
    )
}

export default SlideIcon