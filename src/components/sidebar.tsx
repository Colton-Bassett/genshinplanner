import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        backgroundColor: '#20212C',
        minWidth: "100%",
        boxShadow: "none",
        marginLeft: '1.5rem',
    },
}));

export default function SideBar()  {
    const classes = useStyles();
        return (
        <Card className={classes.sidebar}> 
            <CardContent>
            </CardContent>
        </Card>
        );
    }
