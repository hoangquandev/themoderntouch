import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        "&:hover img": {
            filter: "none",
        },
        "&:hover h2": {
            color: "#fe5600"
        }
    },
    img: {
        filter: "grayScale(100%)",

    },
    sub: {
        display: "flex",
        justifyContent: "space-between",
        fontStyle: "italic",
        borderBottom: "1px solid",
        paddingTop: "6px",
        paddingBottom: "6px",
    },
    title: {
        fontStyle: "italic",
        paddingTop: "8px",
        fontSize: "14px",
    }
}))
const ProjectCard = ({ imgProject, timeProject, styleProject, nameProject, path }) => {
    const classes = useStyles()
    return (
        <Link to={path}>
            <div className={classes.container}>
                <div>
                    <img className={classes.img} src={imgProject} alt="" />
                </div>
                <div className={classes.sub}>
                    <p>{timeProject}</p>
                    <p>{styleProject}</p>
                </div>
                <div className={classes.title}>
                    <h2>{nameProject}</h2>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard