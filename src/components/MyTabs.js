import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {makeStyles} from "@material-ui/core/styles";

const styles = (theme) => ({
    tab: {
        fontFamily: 'IBM Plex Mono, monospace',
        fontWeight: 600,
        "&:hover": {
            backgroundColor: '#33332d',
            color: '#ffffff',
        },
        opacity: 1,

    },
    activeTab: {
        backgroundColor: '#33332d',
        color: '#ffffff',
    },
    tabPanel: {
        backgroundColor: '#e1e1e1',
    },
    indicator: {
        backgroundColor: '#33332d',
    }
})

const useStyles = makeStyles(styles);

const MyTabs = (props) => {
    const classes = useStyles();
    return (
        <Tabs
            value={props.value}
            onChange={props.handleChange}
            variant="scrollable"
            scrollButtons="on"
            orientation={props.orientation}
            className={classes.tabPanel}
            classes={{scroller: classes.tabPanel, indicator: classes.indicator, scrollButtons: classes.tab}}
        >
            {props.tabList.map(tab => {
                return (
                    <Tab
                        label={tab.label}
                        value={tab.id}
                        key={tab.id}
                        className={classes.tab}
                        wrapped={true}
                        classes={{selected: classes.activeTab}}
                    />
                )
            })}
        </Tabs>
    )
}

MyTabs.defaultProps = {
    orientation: 'horizontal'
};

export default MyTabs;