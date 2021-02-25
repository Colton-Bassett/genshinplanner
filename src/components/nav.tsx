import React from 'react';
import {Button, AppBar, Toolbar, IconButton, Icon, makeStyles, Typography} from '@material-ui/core';
// import { KeyboardArrowDown } from '@material-ui/icons';
import { Link } from "react-router-dom";

import logo from '../images/logo.png'

const useStyles = makeStyles((theme) => ({
    nav: {
        marginBottom: '1.5rem',

    },
    appbar: {
        borderBottom: "0.063rem solid #2e3944",
        display: 'block',
    },
	navContainer: {
        maxWidth: '65rem', 
        margin: 'auto',
        boxSizing: 'border-box',
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
            padding: '0rem 1rem',
		},
    },
    toolbar: {
        padding: "0rem",
        maxHeight: "3.438rem !important",
        minHeight: "3.438rem !important",
        width: "100%",
    },
    title: {
        fontSize: '1rem',
        fontWeight: 700,
    },
    spacer: {
        flexGrow: 1
    },
    button: {
        padding: '0rem 1.5rem',
        backgroundColor: 'transparent !important'
    },
    link: {
        color: '#A6A7AC !important',
        textTransform: 'none',
        fontSize: '1rem',
    },
    dropdownArrow: {
        color: '#A6A7AC', 
        float: 'right', 
        marginTop: '0.25rem'
    }
}));

export default function TopNav() {
    const classes = useStyles();
    return (
            <div className={classes.nav}>
                <AppBar position="static" className={classes.appbar}>
                    <div className={classes.navContainer}>
                        <Toolbar className={classes.toolbar}>
                            <IconButton edge="start" aria-label="menu" disableRipple>
                                <Link to="/" >
                                    <Icon >
                                        <img src={logo} alt="logo" height={32} width={32}/>
                                    </Icon>
                                </Link>
                                <Link to="/" className={classes.title}>
                                    &nbsp; ANEMO.GG
                                </Link>
                            </IconButton>
                            <Typography className={classes.spacer}>
                            </Typography>
                            <Button disableRipple className={classes.button} >
                                <Link to="/" className={classes.link}>
                                    Planner
                                </Link> 
                            </Button>
                            <Button disableRipple className={classes.button} >
                                <Link to="/database" className={classes.link}>
                                    Database
                                    {/* <KeyboardArrowDown className={classes.dropdownArrow}></KeyboardArrowDown> */}
                                </Link> 
                            </Button>
                        </Toolbar>
                    </div>
                </AppBar>
            </div>
    );
};
