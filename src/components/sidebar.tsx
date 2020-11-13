import React from 'react';
import { Grid, Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#20212C !important',
        margin: "auto !important",
        minHeight: "668px",
        boxShadow: "none !important",
    },
}));

export default function SideBar()  {
    const classes = useStyles();
        return (
            <Card className={classes.root}> 
                <CardContent style={{}}>
                </CardContent>
            </Card>
        );
    }
