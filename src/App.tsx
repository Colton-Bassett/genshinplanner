import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, AppBar, Toolbar, IconButton, Typography, Container, Grid, Icon, ThemeProvider, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { spacing } from '@material-ui/system';
import { StylesProvider } from "@material-ui/core/styles";
import websitelogo from './websitelogo.png'
import { createMuiTheme } from '@material-ui/core/styles';
import TheAppBar from "./components/appbar"
import AdBar from "./components/adbar"
import Planner from "./components/planner"
import OtherBar from "./components/otherbar"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Header from './components/header'

const App = (props: any) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

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
	<TheAppBar></TheAppBar>
      {/* <Button color="primary">Hello World</Button>
      <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      </div> */}
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
			  <OtherBar />
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
  return <Header></Header>
}

function Planners() {
  return <h2>Planner</h2>;
}

function Database() {
  return <h2>Database</h2>;
}

export default App;
