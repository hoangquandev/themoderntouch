import { Box, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import vietNam from '../../../assets/images/slider/SLIDER-06.png'

const useStyles = makeStyles((theme) => ({
    image: {
        maxWidth: "50%",
        height: "100%"
    }
}))

const VietNam = () => {
    const classes = useStyles()
    return (

        <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-end"
            spacing={1}
        >
            <img src={vietNam} className={classes.image} alt='' />
            <Box textAlign='right'>
                <Typography variant='h6' fontFamily='Gotham'>REPRESENTATIVE</Typography>
                <Typography variant='h2' fontFamily='TimesNewRomanItalic'>Viet Nam</Typography>
            </Box>
        </Stack >

    )
}

export default VietNam