import React from "react";
// material-ui
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/icons/Menu";

const Header = (props) => {
    return (
        <Hidden mdUp implementation="css">
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerToggle}
            >
                <Menu/>
            </IconButton>
        </Hidden>
    );
}

export default Header;
