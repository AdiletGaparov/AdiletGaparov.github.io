import React from 'react';
// material-ui
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
// custom components
import MyTabs from "../../MyTabs";
import ProjectNavbar from "../ProjectNavbar";
import Carousel from "../../home/Carousel";
import Backlog from "./Backlog";
import PRD from './PRD';
// images - wireframes
import homeSketch from '../../../assets/img/projects/wireframes/wireframe-home.png';
import projectsSketch from '../../../assets/img/projects/wireframes/wireframe-projects.png';
import projectsSketchAlt from '../../../assets/img/projects/wireframes/wireframe-projects-alt.png';
import resumeSketch1 from '../../../assets/img/projects/wireframes/wireframe-resume-1.png';
import resumeSketch2 from '../../../assets/img/projects/wireframes/wireframe-resume-2.png';
import chatbotSketch from '../../../assets/img/projects/wireframes/wireframe-chatbot.png';
// images - ui desktop
import homeDesktop from '../../../assets/img/projects/streamlit-ui/desktop/home_desktop.png';
import projectsDesktop from '../../../assets/img/projects/streamlit-ui/desktop/projects_desktop.png';
import coursesDesktop from '../../../assets/img/projects/streamlit-ui/desktop/resume_courses_desktop.png';
import expDesktop from '../../../assets/img/projects/streamlit-ui/desktop/resume_exp_desktop.png';
import skillsDesktop from '../../../assets/img/projects/streamlit-ui/desktop/resume_skills_desktop.png';
// images - ui mobile
import homeMobile from '../../../assets/img/projects/streamlit-ui/mobile/home_mobile.jpg';
import navHomeMobile from '../../../assets/img/projects/streamlit-ui/mobile/navigation_home_mobile.jpg';
import navProjectsMobile from '../../../assets/img/projects/streamlit-ui/mobile/navigation_projects_mobile.jpg';
import projectsMobile from '../../../assets/img/projects/streamlit-ui/mobile/projects_mobile.jpg';
import projectsMobileChecked from '../../../assets/img/projects/streamlit-ui/mobile/projects_checked_mobile.jpg';
import expMobile from '../../../assets/img/projects/streamlit-ui/mobile/resume_exp_mobile.jpg';
import coursesMobile from '../../../assets/img/projects/streamlit-ui/mobile/resume_courses_mobile.jpg';
import skillsMobile from '../../../assets/img/projects/streamlit-ui/mobile/resume_skills_mobile.jpg';

const uiDesktop = [
    {
        label: '',
        imgPath: homeDesktop
    },
    {
        label: '',
        imgPath: projectsDesktop,
    },
    {
        label: '',
        imgPath: expDesktop
    },
    {
        label: '',
        imgPath: skillsDesktop
    },
    {
        label: '',
        imgPath: coursesDesktop
    }
];
const uiMobile = [
    {
        label: '',
        imgPath: homeMobile
    },
    {
        label: '',
        imgPath: navHomeMobile,
    },
    {
        label: '',
        imgPath: navProjectsMobile,
    },
    {
        label: '',
        imgPath: projectsMobile,
    },
    {
        label: '',
        imgPath: projectsMobileChecked
    },
    {
        label: '',
        imgPath: expMobile
    },
    {
        label: '',
        imgPath: skillsMobile
    },
    {
        label: '',
        imgPath: coursesMobile
    }
];
const wireframes = [
    {
        label: '',
        imgPath: homeSketch
    },
    {
        label: '',
        imgPath: projectsSketch
    },
    {
        label: '',
        imgPath: projectsSketchAlt
    },
    {
        label: '',
        imgPath: resumeSketch1
    },
    {
        label: '',
        imgPath: resumeSketch2
    },
    {
        label: '',
        imgPath: chatbotSketch
    }
];
const tabs = [
    {
        label: 'Product Requirement Document',
        id: 1
    },
    {
        label: 'Design',
        id: 2
    },
    {
        label: 'Design - Wireframes (Balsamiq)',
        id: 3
    },
    {
        label: 'UI - Desktop',
        id: 4,
    },
    {
        label: 'UI - Mobile',
        id: 5
    },
    {
        label: 'Engineering',
        id: 6
    },
    {
        label: 'Backlog',
        id: 7
    }
];

const styles = theme => ({
    root: {
        fontFamily: 'IBM Plex Sans, monospace',
        fontWeight: 500
    },
    table: {
        marginTop: '20px'
    },
    code: {
        backgroundColor: '#e1e1e1',
        maxHeight: '80vh',
        maxWidth: '100%',
        overflow: 'auto',
        padding: '5px 10px',
        fontSize: '80%',
        whiteSpace: 'pre-wrap',
        lineHeight: 1
    }
})

const useStyles = makeStyles(styles)

const StreamlitImplementation = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container className={classes.root}>
            <ProjectNavbar handleReturn={props.handleReturn}/>
            <h6>How I built my personal website using <a href='https://www.streamlit.io/' target='_blank' rel='noreferrer'>Streamlit</a> (version 1)</h6>
            <MyTabs tabList={tabs} handleChange={handleChange} value={value}/>
            {value===1 && <div className={classes.table}><PRD/></div>}
            {value===2 &&
                <div>
                    <p>The way I designed initially my personal website was formed by 3 considerations:</p>
                    <ol>
                        <li>Design should be aligned with both my analytical personality and background in data science.</li>
                        <li>I should be able to implement it by myself without spending too much time on learning extra technologies (front-end).</li>
                        <li>It should still bring some challenge and be of decent quality.</li>
                    </ol>
                    <p>Having said, I decided to design it as an analytical web app / dashboard, which shows the information about me, instead of a business.</p>
                    <p>Some thoughts about the design specifics:</p>
                    <ol>
                        <li>I tried to follow the color scheme and font, used by creators of Streamlit, the library I used to implement this website. However, in the Gantt chart about my experience (Resume), I specifically used the following colors:</li>
                        <ul>
                            <li><span style={{backgroundColor: 'green', color:'green'}}>A</span> Green to describe educational experiences as it symbolizes renewal and youth.</li>
                            <li><span style={{backgroundColor: 'blue', color:'blue'}}>A</span> Blue to describe my full-time jobs and job-related travels as it symbolizes stability and often used by tech companies.</li>
                            <li><span style={{backgroundColor: 'red', color:'red'}}>A</span> Red to describe my freelance job and regular travels as it symbolizes energy and passion.</li>
                            <li><span style={{backgroundColor: 'yellow', color:'yellow'}}>A</span> Yellow to describe key personal moments as it symbolizes joy and happiness.</li>
                        </ul>
                        <li>I decided to implement voice feature ('How to pronounce my name') after having seen it (about the same time) on LinkedIn and on a web designer's personal page. It is indeed an issue I faced a lot of time while being abroad.</li>
                    </ol>
                </div>
            }
            {value===3 &&
                <div>
                    <Carousel gridList={wireframes}/>
                </div>
            }
            {value===4 &&
                <div>
                    <Carousel gridList={uiDesktop}/>
                </div>
            }
            {value===5 &&
                <div>
                    <Carousel gridList={uiMobile}/>
                </div>
            }
            {value===6 &&
                <div>
                    <ul>
                        <li>The first version of the website was built using streamlit.io, very convenient way to build an analytical web app using mostly Python.</li>
                        <li>Visualizations in Resume section are built using Altair data visualization library.</li>
                        <li>To make things look better and due to limitations of Streamlit caused by its simplicity, a lot of HTML/CSS were used.</li>
                        <li>The web app was deployed using Docker and hosted on <a href={'https://www.heroku.com'} target='_blank' rel='noreferrer'>Heroku</a>:</li>
                        <pre className={classes.code}><code>{dockerCode}</code></pre>
                        <li>I deleted the app on Heroku, but the first version of the website is still availabe via <a href={'https://share.streamlit.io/adiletgaparov/personal-website/app.py'} target='_blank' rel='noreferrer'>Streamlit Share</a>.</li>
                    </ul>
                </div>
            }
            {value===7 && <div className={classes.table}><Backlog/></div>}
        </Container>
    )
}

const dockerCode = `
FROM python:3.7-slim-buster

EXPOSE 8501

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY .. .

LABEL maintainer="Adilet Gaparov <adilet.gaparov@gmail.com>" \\
      version="1.0"

CMD streamlit run app.py --server.port $PORT
`

export default StreamlitImplementation;