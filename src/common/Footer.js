import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        width: "90vw",
        height: "200px",
        borderTop: "1px solid ",
        margin: "0 100px",
        padding: "0 100px",
        textAlign: "center"
    },
    containerLeft: {
        textAlign: "left"
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container} spacing={3}>
            <Grid item xs={8}>
                <Grid container className={classes.containerLeft}>
                    <Grid item xs={2}>
                        logo
                    </Grid>
                    <Grid item xs={6}>
                        contact
                    </Grid>
                    <Grid item xs={2}>
                        about
                    </Grid>
                    <Grid item xs={2}>
                        social
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                sign up newsletters
            </Grid>
        </Grid>
    )
}

export default Footer