import React from 'react';
import {Button, AppBar, Toolbar, IconButton, Icon, Grid, makeStyles, Typography} from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import { Link } from "react-router-dom";

import WebsiteLogo from '../images/websitelogo.svg'

const useStyles = makeStyles((theme) => ({
    appbar: {
        marginBottom: '20px',
        borderBottom: "1px solid #36384a",
    },
	container: {
        margin: 'auto',
        width: '100%',
    },
    toolbar: {
        padding: "0px",
        maxHeight: "55px !important",
        minHeight: "55px !important",
        width: "100%",
    },
    title: {
        fontSize: '16px',
        fontWeight: 700,
    },
    spacer: {
        flexGrow: 1
    },
    button: {
        padding: '0px 20px',
        backgroundColor: 'transparent !important'
    },
    link: {
        color: '#A6A7AC !important',
        textTransform: 'none',
        fontSize: '16px',
    },
    dropdownArrow: {
        color: '#A6A7AC', 
        float: 'right', 
        marginTop: '4px'
    }
}));

export default function TopNav() {
    const classes = useStyles();
    return (
            <AppBar position="static" className={classes.appbar}>
                <Grid item xs={11} sm={11} md={10} lg={10} className={classes.container}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge="start" aria-label="menu" disableRipple>
                            <Link to="/" >
                                <Icon >
                                    <img src={WebsiteLogo} alt="logo" height={32} width={32}/>
                                </Icon>
                            </Link>
                            <Link to="/" className={classes.title}>
                                &nbsp; IMPACT.GG
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
                                <KeyboardArrowDown className={classes.dropdownArrow}></KeyboardArrowDown>
                            </Link> 
                        </Button>
                    </Toolbar>
                </Grid>
            </AppBar>
    );
};
