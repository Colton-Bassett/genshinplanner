import React from 'react';
import { Card, CardContent, makeStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#20212C !important',
        boxShadow: "none !important",
    },
    container: {
        margin: 'auto',
        // [theme.breakpoints.down('sm')]: {
        //     display: "none"
        //   },
    },
    content: {
        padding: theme.spacing(4),
        "&:last-child": {
            paddingBottom: '30px'
          }
    },
    bannerColor: {
        color: '#6A6C6C',
    },

}));

export default function AdBar() {
    const classes = useStyles();
    //const theme = useTheme();
    return (
        <Grid container sm={11} md={10} lg={10} xl={10} direction="row" justify="center" className={classes.container}>
            <Grid item xs={12} style={{padding: "12px"}}>
                <Card className={classes.root}> 
                    <CardContent className={classes.content}>
                        <Typography variant="h6" component="h2" align="center" className={classes.bannerColor}> 
                            This website is supported by ads.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}