import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import React from 'react'
import image1 from '../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-28.png'
import image2 from '../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-29.png'
import image3 from '../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-30.png'
import image4 from '../../../assets/images/SelectedProjects/Hinh-tung-cong-trinh/Sunrise-resort/WEBSITE TMT-31.png'

const useStyles = makeStyles((theme) => ({
    image: {
        borderRadius: '10px',
        maxWidth: '100%'
    }
}))
const BodyProject = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} >
                <img src={image1} className={classes.image} alt='' />
            </Grid>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={8} >
                                <img src={image2} className={classes.image} alt='' />
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} >
                                        <img src={image3} className={classes.image} alt='' />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <img src={image4} className={classes.image} alt='' />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid></Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1.8} style={{ fontSize: '11px', fontStyle: 'italic' }}>
                            <Grid item xs={4} style={{ fontSize: '11px', textAlign: 'justify' }} >
                                <div mar>Having the location close to the coast,
                                    Sunrise Resort is shaped like two large sails reaching out to the ocean
                                    to catch the sunrise. The project is a delicate combination of modern features
                                    like coming from the future because it is surrounded by a system of glass walls and closeness,
                                    blending with the majestic natural landscape.</div>
                            </Grid>
                            <Grid item xs={4} style={{ fontSize: '11px' }} >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Client:</div>
                                    <b>CALLA</b>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Design consultant:</div>
                                    <b>WATG</b>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Local consultant:</div>
                                    <b>THE MODERN TOUCH</b>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Location:</div>
                                    <b>Phu Cat, Binh Dinh</b>
                                </div>

                            </Grid>
                            <Grid item xs={4} style={{ fontSize: '12px' }} >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Lot area:</div>
                                    <b>253.891 m<span style={{ verticalAlign: 'super' }}>2</span></b>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Construction area:</div>
                                    <b>163.611 m<span style={{ verticalAlign: 'super' }}>2</span></b>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Public area/swimming pool:</div>
                                    <b>860 m<span style={{ verticalAlign: 'super' }}>2</span></b>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Number of stories:</div>
                                    <b>18 Stories</b>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>Style:</div>
                                    <b>Modern</b>
                                </div>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BodyProject