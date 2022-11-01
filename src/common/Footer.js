import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
                        <h2>logo</h2>
                    </Grid>
                    <Grid item xs={6}>
                        <h2>CONTACT</h2>
                        <ul>
                            <li>200 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City</li>
                            <li>info@themoderntouch.co</li>
                            <li>+84 28 39 305 018</li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <h2>ABOUT</h2>
                        <ul>
                            <li>People</li>
                            <li>Projects</li>
                            <li>News</li>
                            <li>Careers</li>
                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <h2>SOCIAL</h2>
                        <ul>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Linkedin</li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} >
                <h2>SIGN UP NEWSLETTERS</h2>
                <div style={{ position: 'relative' }}>
                    <input type='text' placeHolder='Enter your email to subscribe Us' style={{ borderRadius: '30px', border: '1px solid', width: '70%', padding: '10px 10px', marginTop: '10px' }} />
                    <button style={{ border: 'none', backgroundColor: 'transparent', position: 'absolute', top: '17px', right: '16%' }}>
                        <ArrowForwardIcon />
                    </button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Footer