import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    container: {
        borderTop: "1px solid #36384a",
        backgroundColor: '#222431',
    },
    bottomNav: {
        display: 'flex',
        padding: '24px 0px'
    },
    title: {
        color: 'white'
    },
    linkContainer: {
        marginLeft: '24px'
    },
    contentFirst: {
        paddingLeft: "0px !important"
    },
    message: {
        color: '#6A6C6C',
    },
    link: {
        color: '#6A6C6C',
        lineHeight: '2.5'
    }
}));

export default function BottomNav() {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="center" className={classes.container}>
            <Grid item xs={11} sm={11} md={10} lg={10} className={classes.bottomNav}>
                <Grid item sm={6} lg={4}>
                    <h3 className={classes.title}>IMPACT.GG</h3>
                    <Typography variant="subtitle1" component="h1" className={classes.message}> 
                        <span style={{fontWeight:800}}>Impact.gg</span> is not affiliated with or endorsed by miHoYo.
                    </Typography>
                    <Typography variant="subtitle1" component="h1" className={classes.message}> 
                        <span style={{fontWeight:800}}>Impact.gg</span> is a Database and Planner for the Genshin Impact 
                        game for PC, Switch, Playstation 4, and mobile
                        game app on iOS and Android.
                    </Typography>
                </Grid>
                <Grid item sm={3} lg={2} className={classes.linkContainer}>
                    <h3 className={classes.title}>More Links</h3>
                    <Typography variant="subtitle1" component="h2" className={classes.link}> 
                        Contact
                    </Typography>
                    <Typography variant="subtitle1" component="h2" className={classes.link}> 
                        Privacy Policy
                    </Typography>
                    <Typography variant="subtitle1" component="h2" className={classes.link}> 
                        Do Not Sell My Info
                    </Typography>
                </Grid>
                <Grid item sm={3} lg={2} className={classes.linkContainer}>
                    <h3 className={classes.title}>Community Links</h3>
                    <Typography variant="subtitle1" component="h2" className={classes.link}> 
                        Discord
                    </Typography>
                    <Typography variant="subtitle1" component="h2" className={classes.link}> 
                        Reddit
                    </Typography>
                    <Typography variant="subtitle1" component="h2" className={classes.link}> 
                        Facebook
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}