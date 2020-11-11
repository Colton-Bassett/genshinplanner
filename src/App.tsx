import React, { Component } from 'react';
import './App.css';
import { Container, Grid, ThemeProvider, StylesProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopNav from "./components/topnav"
import AdBar from "./components/adbar"
import Planner from "./components/planner"
import SideBar from "./components/sidebar"


class App extends Component <{},any> {
	constructor(props: any) {
		super(props);
		this.state = {
			isActive: false,
			cheese: "cheese pee",
			testNavName: "Test cum"
		};
	}
	theme = createMuiTheme({
		palette: {
			primary: {
			main: "#222431",
			contrastText: "#FFF"
			},
			// secondary: {
			//   main: green[500],
			// },
			text: {
				primary: "#FFF",
				secondary: "#FFF",
			}
		},
	});

	private testFunc = (state: any) => {
		console.log("initial state", state)
		this.setState({
			isActive: true,
		})
		console.log("after state:", state)
		console.log(state)
	}

	render() {
		// let clickMe = 'menu-test';
		// if (this.state.isActive) {
		// 	clickMe += ' menu-test-active';
		// }

  return (
    <ThemeProvider theme={this.theme}>
    <Router>
		<TopNav testFunc = {this.testFunc}></TopNav>
		<StylesProvider injectFirst>
		<AdBar></AdBar>
		<Grid container spacing={3} direction="row" justify="center" alignItems="flex-start" style={{maxWidth: "70%", margin: "auto"}} >
			<Grid item xs={9} style={{paddingLeft:"0px"}}>
			<Container style={{}}>
				<div>
					<Switch>
					<Route path="/planner">
						<Planner />
					</Route>
					<Route path="/database">

					</Route>
					<Route path="/">
						<Planner />
					</Route>
					</Switch>
				</div>
			</Container>
			</Grid>	
			<Grid item xs={3} style={{paddingRight:"0px"}}>
				<SideBar />
			</Grid>
		</Grid>
		</StylesProvider>
    </Router>
    </ThemeProvider>

  );
}
};

// function Welcome(props: any) {
//   return <h1 color="primary">Hello, {props.name}</h1>;
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function Planners() {
//   return <h2>Planner</h2>;
// }

// function Database() {
//   return <h2>Database</h2>;
// }

// function ReturnPath(props :any, cheese: any) {
// 	const currentRoute = window.location.pathname;
// 	console.log("props:", props);
// 	console.log("currentRoute:", currentRoute);
// 	console.log("qweqwe", cheese)
// }

// function HandleClick(props: any, cheese: any) {
// 	//props.preventDefault();
// 	console.log('The link was clicked.');
// 	ReturnPath(props, cheese)
// }

export default App;
