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
        [theme.breakpoints.down('sm')]: {
            display: "none"
          },
    },
    content: {
        padding: theme.spacing(4),
        "&:last-child": {
            paddingBottom: '30px'
          }
    },
    message: {
        textAlign: 'center',
        color: '#6A6C6C',
        fontSize: '14px',
    },

}));

export default function AdBar() {
    const classes = useStyles();
    //const theme = useTheme();
    return (
        <Grid container sm={12} md={10} lg={9} direction="row" justify="center" className={classes.container}>
            <Grid item xs={12} style={{padding: "12px"}}>
                <Card className={classes.root}> 
                    <CardContent className={classes.content}>
                        <Typography variant="h5" component="h2" className={classes.message}> 
                            This website is supported by ads.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}