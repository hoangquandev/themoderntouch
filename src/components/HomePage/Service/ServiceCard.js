// import { Grid } from '@mui/material'
import { Stack } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    card: {
        height: '300px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        borderRadius: "10px",
        transition: 'transform 0.75s ease-out',
        "&:hover": {
            color: '#fff',
            backgroundColor: '#ccc',
            transform: 'scale(1.1)'
        }
    },
    number: {
        display: 'flex',
        alignItems: 'center',
        height: '200px',
        textAlign: 'center',
        fontSize: '4rem'
    },
    titleCard: {
        lineHeight: '40px',
        borderBottom: '1px solid',
        position: 'relative',
        fontSize: '15px'
    },
    border: {
        borderBottom: '3px solid',
        width: '20%',
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translate(-50%,-20%)',
        borderRadius: '20px'
    }
}))

const ServiceCard = () => {
    const classes = useStyles()
    return (

        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            className={classes.card}
        >
            <h1 className={classes.number}>1</h1>
            <div className={classes.titleCard}>ARCHITECTURAL DESIGN
                <div className={classes.border}></div>
            </div>
        </Stack>
    )
}

export default ServiceCard