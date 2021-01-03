import React from 'react';
import SidebarLinks from "./SidebarLinks";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        border: "none",
        position: "fixed",
        top: 20,
        left: 20,
        right: 20,
        width: 180,
        [theme.breakpoints.down("sm")]: {
            width: "auto",
            position: "fixed",
            display: "block",
            top: 20,
            height: '32vh',
            right: "0",
            left: "auto",
        }
    }
});

const useStyles = makeStyles(styles);

const MySidebar = (props) => {
    const classes = useStyles();
    const [selected, setSelected] = React.useState(window.location.pathname);

    const handleSelected = (path) => {
        setSelected(path);
    };

    return (
        <div>
            <Hidden mdUp implementation='css'>
                <Drawer variant="temporary" anchor='right' open={props.open}
                        classes={{paper: classes.root}}
                        onClose={props.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                >
                    <SidebarLinks handleSelected={handleSelected} selected={selected}/>
                </Drawer>
            </Hidden>
            <Hidden smDown implementation='css'>
                <Drawer variant='permanent' anchor='left' open
                        classes={{paper: classes.root}}
                >
                    <SidebarLinks handleSelected={handleSelected} selected={selected}/>
                </Drawer>
            </Hidden>
        </div>
    )
}

export default MySidebar;