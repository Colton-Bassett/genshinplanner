import React from 'react';
import { makeStyles, Icon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import logo from '../images/logo.png'

const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        width: '100%',
        backgroundColor: "#1b242d",
        borderTop: '0.063rem solid #2e3944',
    },
    footerContainer: {
        maxWidth: '65rem', 
        margin: 'auto',
        minWidth: '56.25rem',
        '@media (max-width: 80em)': {
            minWidth: '58em', 
            maxWidth: '58em', 
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
		},
    },
    container: {
        borderTop: "0.063rem solid #2e3944",
        backgroundColor: "#1b242d",
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
        color: '#636972',
    },
    link: {
        color: '#636972',
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

                        <h3 className={classes.title} style={{display: 'flex', alignItems: 'center'}}><Icon style={{marginRight: '0.5rem', width: '32px', height: '32px'}}>
                            <img src={logo} alt="logo" height={32} width={32}/>
                        </Icon>ANEMO.GG</h3>
                        <Typography variant="subtitle1" component="h1" className={classes.message}> 
                            <span style={{fontWeight:800}}>Anemo.gg</span> is not endorsed by miHoYo or any parties officially affiliated with Genshin Impact.
                        </Typography>
                        <Typography variant="subtitle1" component="h1" className={classes.message}> 
                            <span style={{fontWeight:800}}>Anemo.gg</span> is a Planner and Resource for players to use for the Genshin Impact 
                            game for PC, Consoles, iOS and Android.
                        </Typography>
                    </div>
                    <div className={classes.footerTwo}>
                        <h3 className={classes.title}>Links</h3>
                        <Typography variant="subtitle1" component="h2" className={classes.link}> 
                            Contact
                        </Typography>
                        <Typography variant="subtitle1" component="h2" className={classes.link}> 
                            About
                        </Typography>
                        <Typography variant="subtitle1" component="h2" className={classes.link}> 
                            Privacy Policy
                        </Typography>
                    </div>
                    <div className={classes.footerThree}>
                        <h3 className={classes.title}>Social</h3>
                        <Typography variant="subtitle1" component="h2" className={classes.link}> 
                            Discord
                        </Typography>
                        <Typography variant="subtitle1" component="h2" className={classes.link}> 
                            Reddit
                        </Typography>
                        <Typography variant="subtitle1" component="h2" className={classes.link}> 
                            Twitter
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}