import React, {useState} from 'react';
import './App.css';
import { Container, Grid, ThemeProvider } from '@material-ui/core';
import { StylesProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopNav from "./components/topnav"
import AdBar from "./components/adbar"
import Planner from "./components/planner"
import SideBar from "./components/sidebar"

const App = (props: any) => {
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

  return (
    <ThemeProvider theme={theme}>
    <Router>
		<TopNav></TopNav>
		<StylesProvider injectFirst>
		<AdBar></AdBar>
			<Grid container spacing={3} direction="row" justify="center" alignItems="flex-start" style={{maxWidth: "70%", margin: "auto"}} >
				<Grid item xs={8} style={{paddingLeft:"0px"}}>
				<Container style={{}}>
			<div>
				{/* A <Switch> looks through its children <Route>s and
					renders the first one that matches the current URL. */}
				<Switch>
				<Route path="/planner">
					<Planner />
				</Route>
				<Route path="/database">
					<Planner />
				</Route>
				<Route path="/">
					<Planner />
				</Route>
				</Switch>
			</div>
				</Container>
				</Grid>	
				<Grid item xs={4} sm={4} style={{paddingRight:"0px"}}>
					<SideBar />
				</Grid>
			</Grid>
		</StylesProvider>
    </Router>
    </ThemeProvider>
  );
}

function Welcome(props: any) {
  return <h1 color="primary">Hello, {props.name}</h1>;
}

function Home() {
  return <h2>Home</h2>;
}

function Planners() {
  return <h2>Planner</h2>;
}

function Database() {
  return <h2>Database</h2>;
}

export default App;
