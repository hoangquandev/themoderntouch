import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import maps from '../../../assets/images/slider/SLIDER-07.png'

const useStyles = makeStyles((theme) => ({
    image: {
        width: "957px",
        height: "556px"
    }
}))

const Maps = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <img src={maps} className={classes.image} alt='' />
        </Grid>
    )
}

export default Maps