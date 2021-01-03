import React from "react";
import projectList from "./projects";
import Slide from "@material-ui/core/Slide";
import Container from "@material-ui/core/Container";

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