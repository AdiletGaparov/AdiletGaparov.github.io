import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import VoiceIcon from "@material-ui/icons/RecordVoiceOverRounded";
import Contact from "./ContactInfo";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

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
    },
    p: {
        marginBottom: "20px"
    }
});

const useStyles = makeStyles(styles);

const IntroText = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <p className={classes.p}>
                Hi, my name is <b>Adilet Gaparov</b><IconButton size='small' onClick={props.playName}><VoiceIcon/></IconButton>.
                 I am part of Global Graduate Program @ Volvo Cars, based in Sweden.
            </p>
            <p className={classes.p}>
                Feel free to check my projects and resume.
            </p>
            <Contact/>
        </Container>
    )
}

export default IntroText;