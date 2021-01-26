import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        width: '100%',
        backgroundColor: '#222431',
        borderTop: '0.063rem solid #36384a',
        //justifyContent: 'center',
        //boxSizing: 'border-box',
        //flexWrap: 'wrap',
    },
    footerContainer: {
        maxWidth: '75rem', 
        margin: 'auto',
        minWidth: '56.25rem',
        '@media (max-width: 60em)': {
			minWidth: '43.75em',
			maxWidth: '43.75em',
		},
		'@media (max-width: 45em)': {
			minWidth: '31.25em',
			maxWidth: '31.25em',
		},
		'@media (max-width: 35em)': {
			minWidth: '100%',
			maxWidth: '100%',
		},
    },
    container: {
        borderTop: "0.063rem solid #36384a",
        backgroundColor: '#222431',
    },
    footerMain: {
        display: 'flex',
        padding: '1.5rem 0rem',
        maxWidth: '75%',
        minWidth: '56.25rem',
        overflow: 'auto',
        '@media (max-width: 80em)': {
            margin: 'auto',
        },
		'@media (max-width: 60em)': {
			minWidth: '43.75em',
			maxWidth: '43.75em',
		},
		'@media (max-width: 45em)': {
			minWidth: '31.25em',
			maxWidth: '31.25em',
		},
		'@media (max-width: 35em)': {
			minWidth: '100%',
            maxWidth: '100%',
            flexWrap: 'wrap',
		},
    },
    footerOne: {
        minWidth: '50%',
        boxSizing: 'border-box',

        '@media (max-width: 35em)': {
			minWidth: '100%',
            maxWidth: '100%',
            padding: '0rem 1rem',
		},
    },
    footerTwo: {
        minWidth: '20%',
        marginLeft: '1.5rem',
        boxSizing: 'border-box',
        '@media (max-width: 35em)': {
            marginLeft: 0,
			minWidth: '50%',
            maxWidth: '50%',
            padding: '0rem 1rem',
		},
    },
    footerThree: {
        minWidth: '20%',
        marginLeft: '1.5rem',
        boxSizing: 'border-box',
        '@media (max-width: 35em)': {
            marginLeft: 0,
			minWidth: '50%',
            maxWidth: '50%',
            padding: '0rem 1rem',
		},
    },
    title: {
        color: 'white'
    },
    linkContainer: {
        marginLeft: '1.5rem'
    },
    contentFirst: {
        paddingLeft: "0rem !important"
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
        <div className={classes.footer}>
            <div className={classes.footerContainer}>
                <div className={classes.footerMain}> 
                    <div className={classes.footerOne}>
                        <h3 className={classes.title}>IMPACT.GG</h3>
                        <Typography variant="subtitle1" component="h1" className={classes.message}> 
                            <span style={{fontWeight:800}}>Impact.gg</span> is not affiliated with or endorsed by miHoYo.
                        </Typography>
                        <Typography variant="subtitle1" component="h1" className={classes.message}> 
                            <span style={{fontWeight:800}}>Impact.gg</span> is a Database and Planner for the Genshin Impact 
                            game for PC, Switch, Playstation 4, and mobile
                            game app on iOS and Android.
                        </Typography>
                    </div>
                    <div className={classes.footerTwo}>
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
                    </div>
                    <div className={classes.footerThree}>
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
                    </div>
                </div>
            </div>
        </div>
    );
}