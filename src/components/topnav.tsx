import React, { Component } from 'react';
import {Button, AppBar, Toolbar, IconButton, Icon, StylesProvider, Grid} from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import { Link } from "react-router-dom";

import websitelogo from '../websitelogo.png'

interface AppProps {
    testFunc?: any;
}

interface AppState {
    isActive?: any;
}

class TopNav extends Component<AppProps, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
			isActive: true,
		};

    }

    private setActive = () => {
        console.log("testFuncInTopNav: ", this.props)
        //this.props.testFunc()
        this.setState({
			isActive: true,
		})

    }

    private setActiveFalse = () => {
        this.setState({
			isActive: false,
		})
    }
    
    render() {
        let clickMe = 'menu-test';
		if (!this.state.isActive) {
			clickMe += ' menu-test-active';
        }

        let inactiveLink = 'inactive-link'
        let dropdownArrow = 'dropdown-arrow'

        
        return (
            <AppBar position="static" >
                <StylesProvider injectFirst>
                    <Toolbar style={{borderBottom: "1px solid #36384a"}}>
                        <IconButton onClick={() => this.setActive()} edge="start" color="inherit" aria-label="menu" disableRipple style={{backgroundColor: 'transparent'}}>
                        <Link to="/" >

                        <Icon >
                            <img src={websitelogo} alt="logo" height={32} width={32}/>
                        </Icon>
                        </Link>
                        <Link to="/" >
                            &nbsp; IMPACT.GG
                        </Link>


                        </IconButton>
                        <Grid container direction={'row'} spacing={5}>
                            <Button onClick={() => this.setActive()} style={{paddingLeft: "20px", paddingRight: "20px", marginLeft: "auto" , backgroundColor: 'transparent'}} disableRipple color="inherit">
                                <Link to="/" className={clickMe} >Planner</Link> 
                            </Button>
                            <Button onClick={() => this.setActiveFalse()} style={{paddingLeft: "20px", paddingRight: "20px",backgroundColor: 'transparent'}} disableRipple color="inherit">
                                <Link to="/database" className={inactiveLink}>Database</Link> 
                                <Icon >
                                    <KeyboardArrowDown className={dropdownArrow}></KeyboardArrowDown>
                                </Icon>
                            </Button>
                        </Grid>    
                    </Toolbar>
                </StylesProvider>
            </AppBar>

        );
    }
};





export default TopNav;