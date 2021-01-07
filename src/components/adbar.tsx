import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    adbar: {
        backgroundColor: '#20212C',
        height: "90px",
        margin: "auto",
        marginBottom: "24px",
    },
    container: {
        margin: 'auto',
    },
    text: {
        color: '#6A6C6C',
        fontWeight: 500,
        fontSize: '16px',
    },
}));

export default function AdBar() {
    const classes = useStyles();
    return (
        <Grid item xs={11} sm={11} md={10} lg={10} className={classes.container}>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.adbar}>
                <p className={classes.text}> 
                    This website is supported by ads.
                </p>
            </Grid>
        </Grid>
    );
}