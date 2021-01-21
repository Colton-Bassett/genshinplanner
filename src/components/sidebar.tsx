import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        backgroundColor: '#20212C',
        minWidth: "calc(100% - 1.5rem)",
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
