import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: '400px',
    },
    cell: {
        fontFamily: 'IBM Plex Sans, monospace',
        fontWeight: 500,
        whiteSpace: 'pre-wrap'
    },
    head: {
        fontFamily: 'IBM Plex Mono, monospace',
        fontWeight: 600,
    }
});

function createData(id,name, page, status) {
    return { id, name, page, status };
}

const rows = [
    createData(1,'Add "Camino" project', "projects", "In progress"),
    createData(2,'Add Chatbot', "projects", "Not started"),
    createData(3,'Implement Feedback feature, so all feedback can be sent to my email or somewhere else.', "projects", "Not started"),
    createData(4,'Implement Product Analytics to drive the development of the web app', "", "In progress"),
    createData(5,"Move all data from pandas to SQLite", "", "Not started")
];

const Backlog = () => {
    const classes = useStyles();
    return (
        <TableContainer>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Name</TableCell>
                        <TableCell className={classes.head}>Page</TableCell>
                        <TableCell className={classes.head}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row" className={classes.cell}>
                                {row.name}
                            </TableCell>
                            <TableCell className={classes.cell}>{row.page}</TableCell>
                            <TableCell className={classes.cell}>{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Backlog;