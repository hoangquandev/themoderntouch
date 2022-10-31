import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Hawaii from './Slider/Hawaii'
import Maps from './Slider/Maps'
import VietNam from './Slider/VietNam'

const useStyles = makeStyles((theme) => ({
    container: {
        height: "781px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    maps: {
        height: "50%",
    }
}))

const Slider = () => {
    const classes = useStyles()
    return (
        <Grid container justifyContent='center' spacing={5} className={classes.container}>
            <Grid item xs={3} className={classes.maps}>
                <Hawaii />
            </Grid>
            <Grid item xs={6} >
                <Maps />
            </Grid>
            <Grid item xs={3} className={classes.maps} >
                <VietNam />
            </Grid>
        </Grid>
    )
}

export default Slider