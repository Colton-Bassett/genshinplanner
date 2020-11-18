import React from 'react';
import './App.css';
import { Grid, ThemeProvider, StylesProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopNav from "./components/topnav"
import AdBar from "./components/adbar"
import Planner from "./components/planner"
import SideBar from "./components/sidebar"
import BottomNav from "./components/bottomnav"
import DatabasePage from "./components/databasepage"

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 'auto'
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
			secondary: {
			  main: "#FFF",
			},
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
			<TopNav></TopNav>
			<StylesProvider injectFirst>
			<AdBar></AdBar>
			<Grid container sm={12} md={11} lg={9} spacing={3} direction="row" justify="center" alignItems="flex-start" className={classes.root}>
				<Grid item sm={12} md={11} lg={9}>
					<Switch>
						<Route path="/planner">
							<Planner />
						</Route>
						<Route path="/database">
							<DatabasePage />
						</Route>
						<Route path="/">
							<Planner />
						</Route>
					</Switch>
				</Grid>	
					<SideBar />
			</Grid>
			</StylesProvider>
			<BottomNav></BottomNav>
		</Router>
		</ThemeProvider>
	);
};
