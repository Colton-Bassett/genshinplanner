import React, {Component, Fragment } from 'react';
import {Button, AppBar, Toolbar, IconButton, Icon, StylesProvider, Grid} from '@material-ui/core';
import websitelogo from '../websitelogo.png'
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from '@material-ui/icons';

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
                        <IconButton edge="start" color="inherit" aria-label="menu" disableRipple style={{backgroundColor: 'transparent'}}>
                        <Link to="/" onClick={() => this.setActive() }>
                        <Icon >
                            <img src={websitelogo} alt="logo" height={32} width={32}/>
                        </Icon>
                        </Link>
                        <Link to="/" onClick={() => this.setActive() }>
                       &nbsp; IMPACT.GG</Link>

                        </IconButton>
                        <Grid container direction={'row'} spacing={5}>
                            <Button style={{paddingLeft: "20px", paddingRight: "20px", marginLeft: "auto" , backgroundColor: 'transparent'}}  href="/" disableRipple color="inherit">
                                <Link to="/" className={clickMe} onClick={() => this.setActive() } >Planner</Link> 
                            </Button>
                            <Button style={{paddingLeft: "20px", paddingRight: "20px",backgroundColor: 'transparent'}} disableRipple color="inherit">
                                <Link to="/database" className={inactiveLink} onClick={() => this.setActiveFalse() }>Database</Link> 
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