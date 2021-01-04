import React from 'react';
// material-ui
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const styles = theme => ({
    double: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    right: {
        margin: 0,
        maxWidth: '40%',
        backgroundColor: '#e1e1e1'
    },
    left: {
        margin: 0
    },
    root: {
        fontFamily: 'IBM Plex Sans, monospace',
        fontWeight: 500
    }
})

const useStyles = makeStyles(styles)

const ExperienceCard = (props) => {
    const classes = useStyles();
    const details = props.details
    return (
        <div>
            {details.map(experience => {
                return (
                    <div key={experience.org} className={classes.root}>
                        {props.isEducation?
                            <Container>
                                <div className={classes.double} style={{margin: '15px 0px 0px'}}>
                                    <h6 className={classes.left}><a href={experience.link} target="_blank" rel="noreferrer">{experience.org}</a></h6>
                                    <p className={classes.right}>{experience.location} | {months[experience.endDate.getMonth()]} {experience.endDate.getFullYear()}</p>
                                </div>
                                <div>{experience.description}</div>
                            </Container> :
                            <Container>
                                <h6 style={{margin: '15px 0px 0px'}}>{experience.org}</h6>
                                {experience.roles.map(role => {
                                    return (
                                        <div key={role.team_or_title}>
                                            <div className={classes.double} >
                                                <p className={classes.left}><b>{role.team_or_title}</b></p>
                                                <p className={classes.right}>
                                                    {months[role.startDate.getMonth()]} {role.startDate.getFullYear()} - {months[role.endDate.getMonth()]} {role.endDate.getFullYear()}
                                                </p>
                                            </div>
                                            <p style={{margin: '0px'}}>{role.location}</p>
                                            <div>{role.description}</div>
                                        </div>
                                    )
                                })}
                            </Container>
                        }

                    </div>
                )
            })}
        </div>
    )
}

export default ExperienceCard;