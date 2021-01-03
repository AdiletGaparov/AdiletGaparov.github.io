import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'flex-first',
        marginBottom: '20px'
    },
    img: {
        maxHeight: "400px",
        maxWidth: '100%',
        marginBottom: '20px'
    },
    button: {
        fontFamily: 'IBM Plex Mono, monospace',
        fontWeight: 600,
        borderRadius: '0px',
        "&:hover": {
            backgroundColor: '#33332d',
            color: '#ffffff'
        }
    },
    footer: {
        backgroundColor: '#e1e1e1',
        padding: '0px',
        marginBottom: '10px'
    },
    dotActive: {
        backgroundColor: '#33332d'
    }
}));

const Carousel = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = props.gridList.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                {props.gridList[activeStep].label}
            </div>
            <div style={{textAlign: 'center'}}>
                <img
                    className={classes.img}
                    src={props.gridList[activeStep].imgPath}
                    alt={props.gridList[activeStep].label}
                />
            </div>
            <MobileStepper
                className={classes.footer}
                classes={{dotActive: classes.dotActive}}
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        className={classes.button}
                    >
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        className={classes.button}
                    >
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />
        </div>
    );
}

export default Carousel;