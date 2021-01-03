import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navigation/Navbar.js";
import routes from './components/navigation/routes.js';
import { makeStyles } from "@material-ui/core/styles";
import MySidebar from "./components/navigation/MySidebar";

const styles = theme => ({
    root: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - 220px)`
        },
        overflow: "auto",
        position: "relative",
        float: "right",
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: "touch"
    }
});

const useStyles = makeStyles(styles);

const pageContent = (
    <Switch>
        {routes.map(page => {
            return (
                <Route path={page.path} key={page.id} component={page.component}/>
            );
        })}
        <Redirect from="/" to='/home' />
    </Switch>
);

const App = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div style={{position: 'relative', top: 0, height: '100vh'}}>
            <MySidebar
                open={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
            <div className={classes.root}>
                <Navbar handleDrawerToggle={handleDrawerToggle}/>
                <div>{pageContent}</div>
            </div>
        </div>
    )
}

export default App;