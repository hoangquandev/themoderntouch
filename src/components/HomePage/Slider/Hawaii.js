import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import hawai from '../../../assets/images/slider/SLIDER-05.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    image: {
        width: "265px",
        height: "173px"
    }
}))

const Hawaii = () => {
    const classes = useStyles()
    return (

        <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={5}
        >
            <img src={hawai} className={classes.image} alt='' />
            <Box textAlign='left'>
                <Typography variant='h6'>ORIGIN</Typography>
                <Typography variant='h2'>Hawaii</Typography>
            </Box>
        </Stack>

    )
}

export default Hawaii