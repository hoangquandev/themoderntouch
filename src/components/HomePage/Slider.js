import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
// import ArrowIconNext from '../../helpers/ArrowIconNext'
import XIcon from '../../helpers/XIcon'
import Hawaii from './Slider/Hawaii'
import Maps from './Slider/Maps'
import VietNam from './Slider/VietNam'

const useStyles = makeStyles((theme) => ({
    container: {
        height: "781px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // backgroundColor: "#ccc",
        alignItems: "center"
    },
    maps: {
        height: "50%",
    },
    navSlide: {
        height: "160px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}))

const Slider = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Grid container justifyContent='center' spacing={5} >
                <Grid item xs={3} className={classes.maps}>
                    <Hawaii />
                </Grid>
                <Grid item xs={6} style={{ height: "70%" }}>
                    <Maps />
                </Grid>
                <Grid item xs={3} style={{ height: "30%" }} >
                    <VietNam />
                </Grid>
            </Grid>
            <Grid container className={classes.navSlide}>
                <XIcon />
            </Grid>
        </div >
    )
}

export default Slider