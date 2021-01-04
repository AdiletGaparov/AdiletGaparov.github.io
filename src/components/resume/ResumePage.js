import React from 'react';
// material-ui
import {makeStyles} from "@material-ui/core/styles";
// custom components
import MyTabs from "../MyTabs";
import ExperienceCard from "./ExperienceCard";
import SkillsCard from "./SkillsCard";
// data
import educationTabs from "./education";
import workTabs from "./work";
import otherTabs from "./other";



const styles = theme => ({
    root: {
        marginBottom: '20px'
    },
    resume: {
        textAlign: 'center',
        [theme.breakpoints.up("md")]: {
            display: "none",
            paddingTop: '40px'
        },
        marginBottom: '0px',
    },
    heading: {
        textAlign: 'center'
    }
})

const useStyles = makeStyles(styles);

const ResumePage = () => {
    const classes = useStyles();
    const [educationTab, setEducation] = React.useState(1);
    const handleEducation = (event, newTab) => {
        setEducation(newTab);
    };
    const [workTab, setWork] = React.useState(1);
    const handleWork = (event, newTab) => {
        setWork(newTab);
    };
    const [otherTab, setOther] = React.useState(1);
    const handleOther = (event, newTab) => {
        setOther(newTab);
    };

    let educationDetails = educationTabs.filter(tab => tab.id === educationTab)[0].details;
    let workDetails = workTabs.filter(tab => tab.id === workTab)[0].details;
    let otherDetails = otherTabs.filter(tab => tab.id === otherTab)[0].details;

    return (
        <div className={classes.root}>
            <h4 className={classes.resume}>Resume</h4>
            <div>
                <h5 className={classes.heading}>Education</h5>
                <MyTabs value={educationTab} handleChange={handleEducation} tabList={educationTabs}/>
                <ExperienceCard details={educationDetails} isEducation={true}/>
            </div>
            <div>
                <h5 className={classes.heading}>Professional experience</h5>
                <MyTabs value={workTab} handleChange={handleWork} tabList={workTabs}/>
                <ExperienceCard details={workDetails} isEducation={false}/>
            </div>
            <div>
                <h5 className={classes.heading}>Other</h5>
                <MyTabs value={otherTab} handleChange={handleOther} tabList={otherTabs}/>
                <SkillsCard details={otherDetails}/>
            </div>
        </div>
    )
}

export default ResumePage;