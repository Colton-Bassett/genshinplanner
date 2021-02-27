import React from 'react';
import {Button, AppBar, Toolbar, IconButton, Icon, makeStyles, Typography, Menu, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import { KeyboardArrowDown } from '@material-ui/icons';
import { Link } from "react-router-dom";

const logo = `https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Logo.png`;

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
        textTransform: 'none',
        fontSize: '1rem',
    },
    dropdownArrow: {
        color: '#A7B1C1', 
        float: 'right', 
        marginTop: '0.25rem'
    },
    paper: {
        backgroundColor: '#2e3944',
        width: '100%',
    },
    buttonbaseRoot: {
        color: 'white',
        fontSize: '2.5rem !important',
    }
}));

export default function TopNav() {
    const classes = useStyles();
    const [plannerColor, setPlannercolor] = React.useState('#fff');
    const [databaseColor, setDatabaseColor] = React.useState('#A7B1C1',);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };

    function handleSelected(type: string) {
        switch(type) {
            case "planner":
                if (plannerColor === '#A7B1C1') {
                    setPlannercolor('#fff');
                    setDatabaseColor('#A7B1C1');
                    return
                } else {
                    // do nothing
                    return
                }
            case "database":
                if (databaseColor === '#A7B1C1') {
                    setDatabaseColor('#fff');
                    setPlannercolor('#A7B1C1');
                    return
                } else {
                    // do nothing
                    return
                }
        }
        
    }
    return (
            <div className={classes.nav}>
                <AppBar position="static" className={classes.appbar}>
                    <div className={classes.navContainer}>
                        <Toolbar className={classes.toolbar}>
                            <IconButton edge="start" aria-label="menu" disableRipple>
                                <Link style={{height: '2rem', width: '2rem'}} to="/" >
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
                                <Link to="/" className={classes.link} style={{color: plannerColor}} onClick={(e) => {handleSelected("planner")}}>
                                    Planner
                                </Link> 
                            </Button>
                            <Button disableRipple className={classes.button} >
                                <Link to="/database" className={classes.link} style={{color: databaseColor}} onClick={(e) => {handleSelected("database")}}>
                                    Database
                                </Link> 
                            </Button>
                            {/* <div>
                                <IconButton
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    disableRipple
                                    onClick={handleOpenMenu}
                                >
                                    <MenuIcon classes={{root: classes.buttonbaseRoot}}/>
                                </IconButton>
                                <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                                classes={{paper: classes.paper}}
                            >
                                <MenuItem onClick={handleCloseMenu}>Planner</MenuItem>
                                <MenuItem onClick={handleCloseMenu}>Database</MenuItem>
                                </Menu>
                            </div> */}
                        </Toolbar>
                    </div>
                </AppBar>
            </div>
    );
};
