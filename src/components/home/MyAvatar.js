import React from 'react';
// material-ui
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
// media
import avatar from "../../assets/img/avatar.png";

const styles = theme => ({
    root: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.up("md")]: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(3)
        },
        [theme.breakpoints.down("sm")]: {
            width: theme.spacing(12),
            height: theme.spacing(12),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        }
    }
})

const useStyles = makeStyles(styles);

const MyAvatar = () => {
    const classes = useStyles();
    return <Avatar src={avatar} alt='my selfie' className={classes.root}/>
};

export default MyAvatar;