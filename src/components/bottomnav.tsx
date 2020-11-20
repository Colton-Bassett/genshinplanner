import React from 'react';
import { Card, CardContent, makeStyles, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#222431 !important',
        boxShadow: "none !important",

    },
    container: {
        margin: 'auto',
        backgroundColor: '#222431 !important',
    },
    innerContainer: {
    },
    content: {

    },
    contentFirst: {
        paddingLeft: "0px !important"
    },
    message: {
        //textAlign: 'center',
        color: '#6A6C6C',
        //fontSize: '14px',
    },
    messageLinks: {
        //textAlign: 'center',
        color: '#6A6C6C',
        //fontSize: '14px',
        lineHeight: '2.5'
    }
}));

export default function BottomNav() {
    const classes = useStyles();
    //const theme = useTheme();
    return (
        <div style={{paddingTop: "12px"}}>
            <Grid container xs={12} spacing={3} direction="row" justify="center" className={classes.container}>
                <Grid container item sm={11} md={10} lg={9} direction="row">
                    <Grid item xs={4} className={classes.innerContainer}>
                        <Card className={classes.root}> 
                            <CardContent className={classes.contentFirst}>
                                <h3>IMPACT.GG</h3>
                                <Typography variant="subtitle1" component="h1" className={classes.message}> 
                                    <span style={{fontWeight:800}}>Impact.gg</span> is not affiliated with or endorsed by miHoYo.
                                </Typography>
                                <Typography variant="subtitle1" component="h1" className={classes.message}> 
                                    <span style={{fontWeight:800}}>Impact.gg</span> is a Database and Planner for the Genshin Impact 
                                    game for PC, Switch, Playstation 4, and mobile
                                    game app on iOS and Android.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1} className={classes.innerContainer}>
                    </Grid>
                    <Grid item xs={2} className={classes.innerContainer}>
                        <Card className={classes.root}> 
                            <CardContent className={classes.content}>
                                <h3>More Links</h3>
                                <Typography variant="subtitle1" component="h2" className={classes.messageLinks}> 
                                    Contact
                                </Typography>
                                <Typography variant="subtitle1" component="h2" className={classes.messageLinks}> 
                                    Privacy Policy
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} className={classes.innerContainer}>
                        <Card className={classes.root}> 
                            <CardContent className={classes.content}>
                                <h3>Community Links</h3>
                                <Typography variant="subtitle1" component="h2" className={classes.messageLinks}> 
                                    Discord
                                </Typography>
                                <Typography variant="subtitle1" component="h2" className={classes.messageLinks}> 
                                    Reddit
                                </Typography>
                                <Typography variant="subtitle1" component="h2" className={classes.messageLinks}> 
                                    Facebook
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}