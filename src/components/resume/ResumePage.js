import React from 'react';
import Switch from "@material-ui/core/Switch";
import {makeStyles} from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextResume from "./TextResume";
import InteractiveResume from "./InteractiveResume";

const styles = (theme) => ({
    root: {
        marginBottom: '20px'
    },
    heading: {
        textAlign: 'center',
        [theme.breakpoints.up("md")]: {
            display: "none",
            paddingTop: '40px'
        },
        marginBottom: '0px',
    },
    control: {
        fontFamily: 'IBM Plex Mono, monospace',
    }
})

const useStyles = makeStyles(styles)

const ResumePage = () => {
    const classes = useStyles();
    const [isInteractive, setInteractive] = React.useState(false);
    const handleSwitch = () => {
        setInteractive(!isInteractive)
    }
    return (
        <div className={classes.root}>
            <h4 className={classes.heading}>Resume</h4>
            <div style={{textAlign: 'center', display: 'none'}}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={isInteractive}
                            onChange={handleSwitch}
                            color='default'
                            size='small'
                        />
                    }
                    label={isInteractive? "(Interactive)": "(Plain text)"}
                    labelPlacement='top'
                    classes={{label: classes.control}}
                />
            </div>
            {isInteractive? <InteractiveResume/>: <TextResume/>}
        </div>
    )
}

export default ResumePage;