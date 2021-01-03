import React from "react";
import projectList from "./projects";
import ProjectCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";

const ProjectSelector = (props) => {
    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
        >
            {projectList.map(project => {
                return (
                    <Grid item xs={12} sm={6} md={4} xl={3} key={project.id} >
                        <ProjectCard
                            title={project.title}
                            handleClick={props.handleSelector}
                            projectKey={project.id}
                            image={project.cover}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProjectSelector;

