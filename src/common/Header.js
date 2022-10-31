import React from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    navbar: {
        height: "135px",
        boxShadow: 'rgba(50, 50, 93, 0.25) 0 0 8px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        textAlign: 'center',
        padding: "0 10%"
    },
    logo: {
        fontFamily: "Times New Roman bold",
        textAlign: "right",
        fontWeight: '900',
        fontSize: "20px"
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.navbar} spacing={4}>
            <Grid item xs={12 / 7}>ABOUT US</Grid>
            <Grid item xs={12 / 7}>SERVICES</Grid>
            <Grid item xs={12 / 7}>PROJECTS</Grid>
            <Grid item xs={12 / 7} className={classes.logo}>
                <span style={{ color: "orange", fontStyle: "italic", fontSize: "14px" }}>from</span> THE <br />
                MORDERN <br />
                TOUCH
            </Grid>
            <Grid item xs={12 / 7}>NEWS</Grid>
            <Grid item xs={12 / 7}>CAREERS</Grid>
            <Grid item xs={12 / 7}>CONTACT</Grid>
        </Grid>
    )
}

export default Header