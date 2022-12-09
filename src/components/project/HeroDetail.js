import { makeStyles } from '@mui/styles'
import React from 'react'
import projectList from '../../utils/project.json'


const useStyles = makeStyles((theme) => ({
    container: {

        fontSize: "16px",

    },
    containerMain: {
        // background: 'rgb(91,91,91)',
        background: 'linear-gradient(180deg, rgba(91,91,91,0.46124387254901966) 0%, rgba(255,255,255,1) 61%)',
    },
    mainProject: {
        margin: "0 auto",
        paddingTop: "2rem",
        width: "1280px",
        height: "calc(100vh - 124px)",
    },
    title: {
        textAlign: "center",
        fontSize: "40px",
        textTransform: "uppercase",
        color: "white"
    },
    img: {
        width: "100%"
    },
    thumbnail: {
        width: "900px",
        margin: "0 auto"
    },
    detailProject: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        width: "1280px",
        textAlign: "center",
        "&>*": {
            padding: " 0 20px",
            flex: 1
        },
        "& th": {
            textAlign: "left",
        },
        "& tr": {
            lineHeight: "20px"
        }
    },
    client: {
        borderLeft: " 1px solid",
        borderRight: " 1px solid",
        textAlign: "left",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px"
    },
    td: {
        textAlign: "right"
    }
}))


const HeroDetail = ({ id, thumbnail }) => {
    const classes = useStyles()
    return (
        <div className={classes.containerMain} >
            <div className={classes.mainProject}>
                <h2 className={classes.title}>{projectList[id].name}</h2>
                <div className={classes.thumbnail}>
                    <img className={classes.img} src={thumbnail} alt="thumnail" />
                </div>
                <div className={classes.detailProject}>
                    <div>
                        <p style={{ textAlign: "justify" }}>{projectList[id].description}</p>
                    </div>
                    <div className={classes.client}>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <th>Client:</th>
                                    {projectList[id].clientOther ? <td className={classes.td}>{projectList[id].client}<br />{projectList[id].clientOther}</td> : <td className={classes.td}>{projectList[id].client}</td>}
                                </tr>
                                <tr>
                                    <th>Location:</th>
                                    <td className={classes.td}>{projectList[id].location}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <div>
                        <table style={{ width: '100%', textAlign: "left" }}>
                            <tbody>
                                <tr>
                                    <th>Lot area:</th>
                                    <td className={classes.td}>{projectList[id].lotArea}  m<span style={{ verticalAlign: "super", fontSize: "10px" }}>2</span></td>
                                </tr>
                                {projectList[id].conArea && <tr>
                                    <th style={{ width: "200px" }}>Construction area:</th>
                                    <td className={classes.td}>{projectList[id].conArea} m<span style={{ verticalAlign: "super", fontSize: "10px" }}>2</span></td>
                                </tr>}
                                {projectList[id].pool && <tr>
                                    <th style={{ width: "200px" }}>Public area:</th>
                                    <td className={classes.td}>{projectList[id].pool} m<span style={{ verticalAlign: "super", fontSize: "10px" }}>2</span></td>
                                </tr>}

                                {projectList[id].number && <tr>
                                    <th style={{ width: "200px" }}>Number of stories:</th>
                                    <td className={classes.td}>{projectList[id].number}</td>
                                </tr>}
                                <tr>
                                    <th>Style:</th>
                                    <td className={classes.td}>{projectList[id].style}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="scrolldown" style={{ color: '#fe5600', margin: "0 auto", transform: "scale(0.6)" }}>
                    <div className="chevrons">
                        <div className="chevrondown" />
                        <div className="chevrondown" />
                    </div>
                </div>
            </div>


        </div >
    )
}

export default HeroDetail