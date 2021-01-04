import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
    double: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    right: {
        margin: '5px 0px 0px',
        width: '80%',
    },
    left: {
        margin: '5px 0px 0px'
    },
    root: {
        fontFamily: 'IBM Plex Sans, monospace',
        fontWeight: 500
    }
})

const useStyles = makeStyles(styles)

const SkillsCard = (props) => {
    const classes = useStyles();
    const details = props.details.sort((a,b)=>b.level-a.level);
    return (
        <div>
            {details.map(skill => {
                return (
                    <div key={skill.title} className={classes.root}>
                        <Container className={classes.double}>
                            <h6 className={classes.left}>{skill.title}</h6>
                            <div className={classes.right}>{skill.comments}</div>
                        </Container>
                        <Divider/>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillsCard;