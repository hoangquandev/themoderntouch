import { makeStyles } from '@mui/styles'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
    container: {
        position: "fixed",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 1000,
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        height: "100%",
        "& img": {
            width: "auto",
            height: "100%"
        }
    },
    icon: {
        position: "absolute",
        top: "20px",
        right: "20px",
        zindex: 1001,
        cursor: "pointer"
    }
}))
const PopUp = ({ img, handleClosePopUp }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.img}>
                <img src={img} alt="" />
            </div>
            <div onClick={() => { handleClosePopUp() }} className={classes.icon}>
                <CloseIcon fontSize='large' style={{ color: "white" }} />
            </div>
        </div>
    )
}

export default PopUp