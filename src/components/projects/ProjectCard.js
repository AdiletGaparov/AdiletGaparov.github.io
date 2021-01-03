import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        border: '1px solid #e1e1e1',
        borderRadius: '0px',
        margin: '15px',
        '&:hover,&:focus': {
            backgroundColor: '#33332d',
            color: '#ffffff'
        }
    },
    content: {
        fontFamily: 'IBM Plex Mono, monospace',
        fontWeight: 600,
    }
})

const useStyles = makeStyles(styles);

const ProjectCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={()=>props.handleClick(props.projectKey)}>
                <CardMedia
                    component='img'
                    alt={props.title}
                    height="200"
                    src={props.image}
                />
                <CardContent className={classes.content}>
                    <p>{props.title}</p>
                    <p>{props.date}</p>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProjectCard;