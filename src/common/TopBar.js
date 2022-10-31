import React from 'react'
import { Box, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) => ({
    Container: {
        textAlign: "center",
        height: "30px",
        backgroundColor: "black",
        fontSize: "10px",
        lineHeight: "20px",
        fontStyle: "italic",
        color: "white",
        padding: "0 100px"
    },
    subNav: {
        paddingLeft: "10%",
    },
    textQuality: {
        fontStyle: "normal",
        letterSpacing: "5px",
    },
    language: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    },
    search: {
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        cursor: "pointer"
    }
}))

const TopBar = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.Container}>
            <Grid item xs={11}>
                <Grid container className={classes.subNav}>
                    <Grid item xs={4}>info@themoderntouch.co</Grid>
                    <Grid item xs={4}><span className={classes.textQuality}>QUALITY</span> Design  X  Life <span className={classes.textQuality}>QUALITY</span></Grid>
                    <Grid item xs={4}>info@themoderntouch.co</Grid>
                </Grid>
            </Grid>
            <Grid item xs={1}>
                <Grid container style={{ height: "20px", fontStyle: "normal" }}>
                    <Grid item xs={6} className={classes.search}><SearchIcon sx={{ fontSize: 15 }} /></Grid>
                    <Grid item xs={6} className={classes.language}><Box sx={{ fontSize: 12 }}>EN</Box> <ArrowDropDownIcon sx={{ fontSize: 15 }} /></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TopBar