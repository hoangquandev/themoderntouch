import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'
import ServiceCard from './ServiceCard.js'
import { makeStyles } from '@mui/styles'
import ArrowIconNext from '../../../helpers/ArrowIconNext.js'
import ArrowIconPre from '../../../helpers/ArrowIconPre.js'

const useStyles = makeStyles((theme) => ({
    button: {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        "&:hover": {
            boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const Service = () => {
    const classes = useStyles()
    const [isShownNext, setIsShownNext] = useState(false);
    const [isShown, setIsShown] = useState(false);
    return (
        <div style={{ textAlign: "center", fontFamily: 'Times New Roman' }}>
            <Typography variant='h3' fontFamily='Times New Roman'>
                WHAT WE DO <span style={{ color: "#fe5600", fontStyle: "italic" }}>&</span> OUR SERVICES
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={2} className={classes.containerButton}>
                    <div className={classes.button} onMouseEnter={() => setIsShownNext(true)}
                        onMouseLeave={() => setIsShownNext(false)}>
                        <ArrowIconNext isShownNext={isShownNext} />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <ServiceCard />
                        </Grid>
                        <Grid item xs={4}>
                            <ServiceCard />
                        </Grid>
                        <Grid item xs={4}>
                            <ServiceCard />
                        </Grid>
                        <Grid item xs={4}>
                            <ServiceCard />
                        </Grid>
                        <Grid item xs={4}>
                            <ServiceCard />
                        </Grid>
                        <Grid item xs={4}>
                            <ServiceCard />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} className={classes.containerButton}>
                    <div className={classes.button} onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                        <ArrowIconPre isShown={isShown} />
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}

export default Service