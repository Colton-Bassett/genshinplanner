import React from 'react';
import { Card, CardContent, makeStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#222431 !important',
        boxShadow: "none !important",
        minHeight: "222px",
    },
    container: {
        margin: 'auto',

    },
    innerContainer: {
        paddingBottom: '0px !important',
        paddingLeft: '0px !important',
        paddingRight: '0px !important',

    },
    content: {
        padding: theme.spacing(6),
        "&:last-child": {
            paddingBottom: '48px'
          },
    },
    message: {
        textAlign: 'center',
        color: '#6A6C6C',
        fontSize: '14px',
    }
}));

export default function BottomNav() {
    const classes = useStyles();
    //const theme = useTheme();
    return (
        <Grid container xs={12} spacing={3} direction="row" justify="center" className={classes.container}>
            <Grid item xs={12} className={classes.innerContainer}>
                <Card className={classes.root}> 
                    <CardContent className={classes.content}>
                        <Typography variant="h5" component="h2" className={classes.message}> 
                            IMPACT.GG
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}