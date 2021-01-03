import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MyTabs from "../MyTabs";
import ExperienceCard from "./ExperienceCard";
import SkillsCard from "./SkillsCard";
import educationTabs from "./education";
import workTabs from "./work";
import skillsTabs from "./skills";


const styles = theme => ({
    heading: {
        textAlign: 'center'
    }
})

const useStyles = makeStyles(styles);

const TextResume = () => {
    const classes = useStyles();
    const [educationTab, setEducation] = React.useState(1);
    const handleEducation = (event, newTab) => {
        setEducation(newTab);
    };
    const [workTab, setWork] = React.useState(1);
    const handleWork = (event, newTab) => {
        setWork(newTab);
    };
    const [skillsTab, setSkills] = React.useState(1);
    const handleSkills = (event, newTab) => {
        setSkills(newTab);
    };

    let educationDetails = educationTabs.filter(tab => tab.id === educationTab)[0].details;
    let workDetails = workTabs.filter(tab => tab.id === workTab)[0].details;
    let skillsDetails = skillsTabs.filter(tab => tab.id === skillsTab)[0].details;

    return (
        <div>
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
                <h5 className={classes.heading}>Skills</h5>
                <MyTabs value={skillsTab} handleChange={handleSkills} tabList={skillsTabs}/>
                <SkillsCard details={skillsDetails}/>
            </div>
        </div>
    )
}

export default TextResume;