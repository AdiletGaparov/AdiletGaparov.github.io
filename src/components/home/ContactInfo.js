import React from 'react';
// material-ui
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// data
import accountList from './accounts.js';

const useStyles = makeStyles({
    img: {
        margin: '5px',
        maxWidth: '32px'
    },
    a: {
        borderBottom: '0px',
        '&:hover': {
            backgroundColor: '#ffffff',
            borderBottom: '3px solid #33332d'
        }
    }
})

const Contact = () => {
    const classes = useStyles();
    return (
        <Container style={{paddingBottom: '5px'}}>
            {accountList.map((account, key) => {
                return (
                    <a href={account.link} target='_blank' rel='noreferrer' key={key} className={classes.a}>
                        <img src={account.logo} className={classes.img} alt={account.name}/>
                    </a>
                )
            })}
        </Container>
    )
};

export default Contact;