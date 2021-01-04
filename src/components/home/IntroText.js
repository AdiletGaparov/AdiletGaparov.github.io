import React from 'react';
// material-ui
import IconButton from "@material-ui/core/IconButton";
import VoiceIcon from "@material-ui/icons/RecordVoiceOverRounded";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
// custom components
import Contact from "./ContactInfo";

const styles = theme => ({
    root: {
        display: 'block',
        textAlign: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '80%'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '60%'
        }
    }
});

const useStyles = makeStyles(styles);

const IntroText = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <p className={classes.p}>
                Hi, my name is <b>Adilet Gaparov</b><IconButton size='small' onClick={props.playName}><VoiceIcon/></IconButton>. I currently work at Volvo Cars in Gothenburg, Sweden.
            </p>
            <p>
                Before moving to Scandinavia, I made sure that I got enough sunlight by living in Madrid for a year, where I obtained my Master's degree and became father.
            </p>
            <p>
                Born and raised in Kazakhstan, where I had a chance to work for Microsoft for a couple of years.
            </p>
            <Contact/>
        </Container>
    )
}

export default IntroText;