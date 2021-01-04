import {dataIE, dataAF, dataNU, dataUW} from "./dataEducation";

const educationTabs = [
    {
        label: "Master in Business Analytics and Big Data",
        details: [dataIE],
        id: 1
    },
    {
        label: 'Bachelor of Science in Robotics & Mechatronics',
        details: [dataNU],
        id: 2
    },
    {
        label: 'Other',
        id: 3,
        details: [dataUW, dataAF]
    }
]

export default educationTabs;