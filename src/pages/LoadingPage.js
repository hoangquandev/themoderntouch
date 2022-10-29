import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        width: "100vw",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    }
}))

const LoadingPage = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={0} className={classes.container}>
            <Box>
                {/* <img src={ } /> */}
                <Typography align='center' variant='h6'>Become the leading Design Consulting Company in the segment</Typography>
                <Typography align='center' variant='h2'>"Premium & Luxury"</Typography>
            </Box>
        </Grid>
    )
}

export default LoadingPage