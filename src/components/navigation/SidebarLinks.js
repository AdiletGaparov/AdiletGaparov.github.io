import React from 'react';
// react-router
import {NavLink} from "react-router-dom";
// material-ui
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
// data
import routes from "./routes";

const styles = theme => ({
    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        borderBottom: '0px',
        "&:hover,&:focus": {
            color: 'white',
            backgroundColor: '#33332d'
        },
    },
    active: {
        color: 'white',
        backgroundColor: "#33332d",
    },
    itemLink: {
        width: "auto",
        position: "relative",
        display: "flex",
        alignItems: 'center',
    },
    itemText: {
        display: 'inline-block',
        fontWeight: 600,
    }
});


const useStyles = makeStyles(styles);

const SidebarLinks = (props) => {
    const classes = useStyles()
    return (
        <List>
            {routes.map(page => {
                return (
                    <div key={page.id}>
                        <NavLink
                            to={page.path}
                            onClick={()=>props.handleSelected(page.path)}
                            className={classes.item}
                            activeClassName={classes.active}
                        >
                            <ListItem button selected={props.selected === page.path}
                                      className={classes.itemLink}
                            >
                                <ListItemText
                                    primary={page.name}
                                    disableTypography={true}
                                    className={classes.itemText}
                                />
                            </ListItem>
                        </NavLink>
                    </div>
                )
            })}
        </List>
    )
}

export default SidebarLinks;