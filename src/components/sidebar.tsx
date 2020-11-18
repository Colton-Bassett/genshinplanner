import React from 'react';
import { Card, CardContent, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#20212C !important',
        margin: "auto !important",
        minHeight: "1000px",
        boxShadow: "none !important",
    },
    sideBarContainer: {
        [theme.breakpoints.down('md')]: {
            display: "none"
          },
    }
}));

export default function SideBar()  {
    const classes = useStyles();
        return (
            <Grid item xs={3} className={classes.sideBarContainer} >
                <Card className={classes.root}> 
                    <CardContent style={{}}>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
