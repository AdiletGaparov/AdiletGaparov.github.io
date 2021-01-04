import React from "react";
// material-ui
import Slide from "@material-ui/core/Slide";
import Container from "@material-ui/core/Container";
// data
import projectList from "./projects";

const ProjectContent = (props) => {
    return (
        <div>
            {projectList.map(project => {
                return (
                    <Slide
                        in={project.id === props.projectKey}
                        key={project.id}
                        direction='up'
                        mountOnEnter
                        unmountOnExit
                    >
                        <Container style={{marginTop: 20}}>
                            <project.component handleReturn={props.handleReturn}/>
                        </Container>
                    </Slide>
                )
            })}
        </div>
    )
}

export default ProjectContent;