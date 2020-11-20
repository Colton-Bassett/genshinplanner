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

	theme.typography.h1 = {
		lineHeight: '1.3em',
		fontSize: '24px',
		fontWeight: 700,
		margin: 0
		// '@media (min-width:600px)': {
		//   fontSize: '1.5rem',
		// },
		// [theme.breakpoints.up('md')]: {
		//   fontSize: '2.4rem',
		// },
	};
	theme.typography.h2 = {
		lineHeight: '1.3em',
		fontSize: '20px',
		fontWeight: 600,
		margin: 0
	};
	theme.typography.h3 = {
		lineHeight: '1.3em',
		fontSize: '18px',
		fontWeight: 500,
		margin: 0
	};
	theme.typography.h5 = {
		lineHeight: '1.3em',
		fontSize: '16px',
		fontWeight: 400,
		margin: 0	
	};
	theme.typography.h6 = {
		lineHeight: '1.3em',
		fontSize: '14px',
		fontWeight: 400,
		margin: 0	
	}

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
