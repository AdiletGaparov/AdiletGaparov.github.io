import React from 'react';
import Container from "@material-ui/core/Container";
import ProjectNavbar from "../ProjectNavbar";

const ReactImplementation = (props) => {
    return (
        <Container>
            <ProjectNavbar handleReturn={props.handleReturn}/>
        </Container>
    )
}

export default ReactImplementation;
