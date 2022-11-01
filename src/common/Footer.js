import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from '../assets/images/logo/LogoBlack.png'
import { height } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    container: {
        width: "90vw",
        height: "200px",
        borderTop: "1px solid ",
        margin: "0 100px",
        padding: "0 100px",
        textAlign: "center",
        fontSize: '12px'
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
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <img src={logo} alt='' style={{ maxWidth: '100%', height: '150px', marginTop: '-1rem' }} />
                    </Grid>
                    <Grid item xs={5} className={classes.containerLeft}>
                        <h2>CONTACT</h2>
                        <ul>
                            <li>200 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City</li>
                            <li>info@themoderntouch.co</li>
                            <li>+84 28 39 305 018</li>
                        </ul>
                    </Grid>
                    <Grid item xs={1.5} className={classes.containerLeft}>
                        <h2>ABOUT</h2>
                        <ul>
                            <li>People</li>
                            <li>Projects</li>
                            <li>News</li>
                            <li>Careers</li>
                        </ul>
                    </Grid>
                    <Grid item xs={1.5} className={classes.containerLeft}>
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
                    <input type='text' placeHolder='Enter your email to subscribe Us' style={{
                        borderRadius: '30px', border: 'none',
                        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px', width: '90%', textAlign: 'center', padding: '10px 10%', marginTop: '10px'
                    }} />
                    <button style={{
                        border: 'none', backgroundColor: '#fff', position: 'absolute', top: '10px', right: '5%', height: '36px', width: '36px',
                        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px', borderRadius: '50%'
                    }}>
                        <ArrowForwardIcon />
                    </button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Footer