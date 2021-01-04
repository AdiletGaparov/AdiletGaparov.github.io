import React from 'react';
// material-ui
import IconButton from "@material-ui/core/IconButton";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from "@material-ui/core/styles";

const styles = (theme) => ({
    info: {
        backgroundColor: '#e1e1e1'
    },
    button: {
        backgroundColor: '#e1e1e1',
        margin: '5px',
        '&:hover': {
            backgroundColor: '#33332d',
            color: '#ffffff'
        },
    },
    buttonInfo: {
        backgroundColor: '#33332d',
        color: '#ffffff',
        margin: '5px',
        '&:hover': {
            backgroundColor: '#33332d',
            color: '#ffffff'
        }
    }
})

const useStyles = makeStyles(styles)

const ProjectNavbar = (props) => {
    const classes = useStyles();
    const [info, setInfo] = React.useState(false);
    const handleInfo = () => {
        setInfo(!info)
    }
    return (
        <div>
            <IconButton
                onClick={()=>props.handleReturn(0)}
                className={classes.button}
                variant='outlined'
                size='small'
            >
                <CloseOutlinedIcon/>
            </IconButton>
            { props.existsInfo &&
            <IconButton variant='outlined' size='small'
                        className={info? classes.buttonInfo: classes.button}
                        onClick={handleInfo}>
                <InfoOutlinedIcon/>
            </IconButton>
            }
            <Collapse in={info} className={classes.info}>
                <div style={{margin: '0'}}>{props.infoMessage}</div>
            </Collapse>
        </div>
    )
}

ProjectNavbar.defaultProps = {
    infoMessage: 'No information',
    existsInfo: false
};

export default ProjectNavbar;