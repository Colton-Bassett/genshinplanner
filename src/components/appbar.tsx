import React, {Component, Fragment} from 'react';
import {Button, AppBar, Toolbar, IconButton, Typography, Icon, ThemeProvider, StylesProvider} from '@material-ui/core';
import websitelogo from '../websitelogo.png'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class TheAppBar extends Component {
    render() {
        return (
            <AppBar position="static" >
        
            <StylesProvider injectFirst>
            <Toolbar style={{borderBottom: "1px solid #36384a"}}>
              <IconButton edge="start" color="inherit" aria-label="menu" disableRipple style={{backgroundColor: 'transparent'}} href="/">
              
              <Icon >
                <img src={websitelogo} height={32} width={32}/>
                <Link to="/"></Link>

              </Icon>
              &nbsp; IMPACT.GG
              </IconButton>
              <Typography variant="h6" >
                
              </Typography>
              <Button style={{marginLeft: "auto" , backgroundColor: 'transparent'}} href="/planner" disableRipple color="inherit">Planner</Button>
              <Button style={{backgroundColor: 'transparent'}} disableRipple href="/database" color="inherit">Database</Button>
    
            </Toolbar>
            </StylesProvider>
    
          </AppBar>
        )
    }
}



export default TheAppBar;