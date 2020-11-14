import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#20212C !important',
        margin: "auto !important",
        minHeight: "1000px",
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
