import React from 'react';
import InteractiveExperience from "./InteractiveExperience";
import InteractiveSkills from "./InteractiveSkills";
import Courses from "./Courses";

const InteractiveResume = () => {
    return (
        <div style={{display: 'block'}}>
            <InteractiveExperience/>
            <InteractiveSkills/>
            <Courses/>
        </div>
    )
}

export default InteractiveResume;