import React from 'react';
import ProjectContent from "./ProjectContent";
import ProjectSelector from "./ProjectSelector";
import {makeStyles} from "@material-ui/core/styles";

const styles = (theme) => ({
    heading: {
        textAlign: 'center',
        [theme.breakpoints.up("md")]: {
            display: "none",
            paddingTop: '40px'
        }
    }
})

const useStyles = makeStyles(styles)

const ProjectsPage = () => {
    const classes = useStyles();
    const [projectKey, setProjectKey] = React.useState(0)
    const handleSelector = (key) => {
        setProjectKey(key);
    }
    return (
        <div>
            <h4 className={classes.heading}>Projects</h4>
            {projectKey === 0 && <ProjectSelector projectKey={projectKey} handleSelector={handleSelector}/>}
            {projectKey !== 0 && <ProjectContent projectKey={projectKey} handleReturn={handleSelector}/>}
        </div>
    )
}

export default ProjectsPage;