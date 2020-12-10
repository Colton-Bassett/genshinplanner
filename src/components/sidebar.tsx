import React from 'react';
import { Card, CardContent, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        backgroundColor: '#20212C',
        margin: "auto",
        minHeight: "1000px",
        boxShadow: "none",
    },
    sidebarContainer: {
        marginLeft: "20px",
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    }
}));

export default function SideBar()  {
    const classes = useStyles();
        return (
            <Grid item xs={4} className={classes.sidebarContainer} >
                <Card className={classes.sidebar}> 
                    <CardContent>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
