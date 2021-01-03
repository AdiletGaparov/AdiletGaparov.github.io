import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import accountList from '../../accounts.js';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
    img: {
        margin: '5px',
        maxWidth: '32px'
    },
    a: {
        borderBottom: '0px',
        '&:hover,&:focus': {
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