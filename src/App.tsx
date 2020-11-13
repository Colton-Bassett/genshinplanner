import React from 'react';
import './App.css';
import { Grid, ThemeProvider, StylesProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopNav from "./components/topnav"
import AdBar from "./components/adbar"
import Planner from "./components/planner"
import SideBar from "./components/sidebar"
import BottomNav from "./components/bottomnav"

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
		position: 'relative',
		minHeight: '250px'
	},
}));

export default function App() {
	const theme = createMuiTheme({
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

	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
		<Router>
			{/* <TopNav testFunc = {this.testFunc}></TopNav> */}
			<TopNav></TopNav>
			<StylesProvider injectFirst>
			<AdBar></AdBar>
			<Grid container xs={9} spacing={3} direction="row" justify="center" alignItems="flex-start" className={classes.root}>
				<Grid item xs={9}>
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
				</Grid>	
				<Grid item xs={3} >
					<SideBar />
				</Grid>
			</Grid>
			</StylesProvider>
			<BottomNav></BottomNav>
		</Router>
		</ThemeProvider>
	);
};
