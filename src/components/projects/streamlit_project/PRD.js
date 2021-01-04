import React from 'react';
// material-ui
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
        fontWeight: 500
    },
    head: {
        fontFamily: 'IBM Plex Mono, monospace',
        fontWeight: 600
    }
});

function createData(id, feature, priority, why, how, kano) {
    return { id, feature, priority, why, how, kano };
}

const rows = [
    createData(1, "Links to social media", "P0", "Expected to have a place for links to other accounts", "Just a list of logos (hyperlinks)","Basic"),
    createData(2,"Make sure that https:// is used", "P0","Security is the top priority", "If GitHub Pages is used then use CloudFlare. Otherwise, check on hosting/domain provider", "Basic"),
    createData(3,"Resume (work experience, skills)", "P0", "It is expected on a personal page", "Either as a doc or as part of the dashboard", "Basic"),
    createData(4,"Custom domain (adiletgaparov.com)", "P0", "It is needed for professional look", "Buy on GoDaddy/namecheap/Google Domains", "Basic"),
    createData(5,"Projects I have done", "P0", "Projects are expected on a personal page", "Depends on the project", "Basic"),
    createData(6,"Audio of how to pronounce my name", "P1","Valid feature since my name is unusual, plus gives the impression and information on my voice","In Streamlit there is a way to add audio", "Delighter"),
    createData(7, "Add section or project on how I built this personal website", "P1", "To show full process of Product Management (Design, Engineering)", "Include design sketches / wireframes (Figma/Balsamiq), choice of colors", "Performance"),
    createData(8,"Deploy using Docker if web app is used, not static page", "P1", "To learn how to use Docker", "Should be web app, not static page. Potentially Streamlit", "Performance"),
    createData(9, "Show 'Camino' photos with (potentially) 3D Ken Effect", "P2", "It is time to do something with those pictures taken plus cool visualization of 3D Ken Effect", "Clean up all those photos, try to run notebook with 3D Ken Effect code on them", "Delighter"),
    createData(10, "Resume / life chatbot", "P2", "To learn how to work with API; good way to introduce more information besides resume", "Google Dialogflow, similar to what I did for IE application; Integrate via Google API", "Delighter")
];

const PRD = () => {
    const classes = useStyles();
    return (
        <TableContainer>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Feature</TableCell>
                        <TableCell className={classes.head}>Priority</TableCell>
                        <TableCell className={classes.head}>Why</TableCell>
                        <TableCell className={classes.head}>How</TableCell>
                        <TableCell className={classes.head}>KANO model</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row" className={classes.cell}>
                                {row.feature}
                            </TableCell>
                            <TableCell className={classes.cell} align='center'>{row.priority}</TableCell>
                            <TableCell className={classes.cell}>{row.why}</TableCell>
                            <TableCell className={classes.cell}>{row.how}</TableCell>
                            <TableCell className={classes.cell}>{row.kano}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PRD;