import React from 'react';
// material-ui
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
// custom components
import ProjectNavbar from "../ProjectNavbar";

const styles = () => ({
    root: {
        fontFamily: 'IBM Plex Sans, monospace',
        fontWeight: 500
    }
})

const useStyles = makeStyles(styles)

const ReactImplementation = (props) => {
    const classes = useStyles();
    const message = 'PRD, Design, and Backlog are generally the same as in Streamlit implementation, although I decided to implement Resume section in more familiar form.';
    return (
        <Container className={classes.root}>
            <ProjectNavbar handleReturn={props.handleReturn} existsInfo={true} infoMessage={message}/>
            <h6>How I re-built my website using React (version 2)</h6>
            <p>3 reasons I decided to re-build the website using React:</p>
            <ul>
                <li>Although Streamlit allows to use Python and a bit of HTML/CSS to build a simple web app quite fast, any complex design and interactions are quite challenging to implement. Using proper front-end frameworks like React suits it better.</li>
                <li>Given that Streamlit provides a Python layer on top of HTML, the underlying HTML files are not accessible, which prevents me from embedding any product analytics solutions (Google Analytics, Heap, Hotjar, Mixpanel, etc). </li>
                <li>Knowing JavaScript/React is beneficial and re-building my website using React is a good learning opportunity.</li>
            </ul>
            <p>Packages used:</p>
            <ul>
                <li><a href={'https://create-react-app.dev/'} target="_blank" rel="noreferrer">Create-React-App</a>: React project template.</li>
                <li><a href={'https://reactrouter.com/core/guides/quick-start'} rel='noreferrer' target='_blank'>React Router</a>: client-side routing.</li>
                <li><a href={'https://material-ui.com/'} target='_blank' rel='noreferrer'>Material-UI</a>: faster development of custom components.</li>
            </ul>
            <p>Major remarks about the implementation:</p>
            <ul>
                <li>Deployment: I used GitHub Pages to deploy it.</li>
                <li>Charts: building charts in JavaScript / React ended up being quite challenging and therefore for this project I decided to limit Resume section to plain text.</li>
                <li>UI: the choice for colors and font was inspired by <a href={'https://fullstackopen.com/en/'} target='_blank' rel='noreferrer'>Full Stack open 2020</a> MOOC developed by the University of Helsinki.</li>
            </ul>
        </Container>
    )
}

export default ReactImplementation;
