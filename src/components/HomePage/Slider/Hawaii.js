import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import hawai from '../../../assets/images/slider/SLIDER-05.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    image: {
        maxWidth: "80%",
        height: "90%"
    }
}))

const Hawaii = () => {
    const classes = useStyles()
    return (

        <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={12}
        >
            <img src={hawai} className={classes.image} alt='' />
            <Box textAlign='left'>
                <Typography variant='h6' fontFamily='Gotham'>ORIGIN</Typography>
                <Typography variant='h2' fontFamily='TimesNewRomanItalic'>Hawaii</Typography>
            </Box>
        </Stack>

    )
}

export default Hawaii