// content
import HomePage from "../home/HomePage";
import ResumePage from "../resume/ResumePage";
import ProjectsPage from "../projects/ProjectsPage";

const dashboardRoutes = [
    {
        path: "/home",
        name: "Home",
        component: HomePage,
        id: 1
    },
    {
        path: "/projects",
        name: "Projects",
        component: ProjectsPage,
        id: 2
    },
    {
        path: '/resume',
        name: "Resume",
        component: ResumePage,
        id: 3
    }
];

export default dashboardRoutes;