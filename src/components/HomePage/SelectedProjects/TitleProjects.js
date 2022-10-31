import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '225px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px'
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: '30px',
        padding: '0 50px',
        border: '1px solid'
    }
}))

const TitleProjects = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <h2>SELECTED PROJECTS</h2>
            <button className={classes.button}>Read More</button>
        </div>
    )
}

export default TitleProjects