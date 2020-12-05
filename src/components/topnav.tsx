import React from 'react';
import {Button, AppBar, Toolbar, IconButton, Icon, StylesProvider, Grid, makeStyles} from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import { Link } from "react-router-dom";

import WebsiteLogo from '../images/websitelogo.svg'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 'auto',
	},
	content: {
		backgroundColor: "#272937 !important",
		minWidth: '100%',
		margin: 'auto',
		minHeight: '250px',
	},
	container: {
		margin: 'auto',
    },
    toolbar: {
        //borderBottom: "1px solid #36384a"
        padding: "0px",
        maxHeight: "55px !important"
    },
    toolBarContainer: {
        paddingTop: "0px !important", 
        paddingBottom: "0px !important"
    },
    plannerButton: {
        paddingLeft: "20px", 
        paddingRight: "20px", 
        marginLeft: "auto" , 
        backgroundColor: 'transparent !important'
    },
    databaseButton: {
        paddingLeft: "20px", 
        //paddingRight: "20px",
        backgroundColor: 'transparent !important'
    },
    navContainer: {
        paddingBottom: "12px",
    },
    link: {
        color: '#A6A7AC !important',
        textTransform: 'none',
        fontSize: '16px',
    }
}));

export default function TopNav() {
    const classes = useStyles();
    let dropdownArrow = 'nav-dropdown-arrow'
    let navTitle = 'nav-title'
    return (
        <div className={classes.navContainer}>
            <AppBar position="static" >
                <StylesProvider injectFirst>
                    <Grid container sm={11} md={10} lg={10} xl={10} spacing={3} direction="row" className={classes.container}>
                        <Grid item xs={12} className={classes.toolBarContainer}>
                            <Toolbar className={classes.toolbar}>
                                <IconButton edge="start" color="inherit" aria-label="menu" disableRipple>
                                    <Link to="/" >
                                        <Icon >
                                            <img src={WebsiteLogo} alt="logo" height={32} width={32}/>
                                        </Icon>
                                    </Link>
                                    <Link to="/" className={navTitle}>
                                        &nbsp; IMPACT.GG
                                    </Link>
                                </IconButton>

                                <Button className={classes.plannerButton} disableRipple color="inherit">
                                    <Link to="/" className={classes.link}>
                                        Planner
                                    </Link> 
                                </Button>
                                <Button className={classes.databaseButton} disableRipple color="inherit">
                                    <Link to="/database" className={classes.link}>
                                        Database
                                        <KeyboardArrowDown className={dropdownArrow} style={{color: '#A6A7AC', float: 'right', marginTop: '4'}}></KeyboardArrowDown>
                                    </Link> 
                                </Button>
                            </Toolbar>
                        </Grid>
                    </Grid>
                </StylesProvider>
            </AppBar>
        </div>
    );
};
