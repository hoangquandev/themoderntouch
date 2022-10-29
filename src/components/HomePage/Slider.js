import { Grid } from '@mui/material'
import React from 'react'
import Hawaii from './Slider/Hawaii'
import VietNam from './Slider/VietNam'

const Slider = () => {
    return (
        <Grid container justifyContent='space-between'>
            <Grid item xs={3}>
                <Hawaii />
            </Grid>
            <Grid item xs={3}>
                <VietNam />
            </Grid>
        </Grid>
    )
}

export default Slider