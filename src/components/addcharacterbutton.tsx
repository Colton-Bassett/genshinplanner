import React from 'react';
import { Card, Grid, makeStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        margin: 'auto',
    },
    content: {
        backgroundColor: "#272937 !important",
        minWidth: '100%',
        margin: 'auto',
        minHeight: '250px',
    },
    container: {
        margin: 'auto',
        position: 'relative',
        minHeight: '250px'
    },
}));

export default function AddCharacterButton() {
    const classes = useStyles();
    let centerItem = 'center-item'
    return (
        <Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.root}>
            <Grid item xs={3}>
                <Card className={classes.content}> 
                    <div className={classes.container}>
                        <Add className={centerItem}>
                        </Add>
                    </div>
                </Card>
            </Grid>

            <Grid item xs={9} style={{}}>
                <Card className={classes.content}> 
                </Card>
            </Grid>
        </Grid>
    );
}