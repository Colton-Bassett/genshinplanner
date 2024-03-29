import './App.css';
import React, { useState, useEffect } from 'react';

import { ThemeProvider, StylesProvider, makeStyles } from '@material-ui/core';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import createNewMaterial from './apifunctions/createnewmaterial'
import createNewWeapon from './apifunctions/createnewweapon'
import createNewCharacter from './apifunctions/createnewcharacter'
import fetchCharacters from './apifunctions/fetchcharacters';

import TopNav from "./components/nav"
import AdBar from "./components/adbar"
import Planner from "./components/planner"
import BottomNav from "./components/footer"
import DatabasePage from "./components/databasepage"
import Summary from "./components/summary"
import Material from "./logic/material"
import AscensionPlan from "./logic/ascensionPlan"

interface Character { 
	name: string, 
	type: string, 
	typeImage: string,
	weapon: string, 
	stars: string,
	description: string, 
	image: string, 
	abilityOne: { name: string, image: string, description: string }, 
	abilityTwo: { name: string, image: string, description: string }, 
	abilityThree: { name: string, image: string, description: string }, 
	ascensionMats: { matOne: string, matTwo: string, specialty: string, commonMat: string },
	talentMats: { talentMat: string, bossMat: string }
}

const characterTemplate = { 
	name: '', 
	type: '', 
	typeImage: '',
	weapon: '', 
	stars: '',
	description: '', 
	image: '', 
	abilityOne: { name: '', image: '', description: '' }, 
	abilityTwo: { name: '', image: '', description: '' }, 
	abilityThree: { name: '', image: '', description: '' }, 
	ascensionMats: { matOne: '', matTwo: '', specialty: '', commonMat: '' },
	talentMats: { talentMat: '', bossMat: '' }
}

interface Weapon {
	name: string,
	type: string,
	stars: string,
	description: string,
	image: string,
	ascensionMats: { matOne: string, matTwo: string, specialty: string, commonMat: string },
}

const weaponTemplate = {
	name: '', 
	type: '', 
	stars: '',
	description: '', 
	image: '', 
	ascensionMats: { matOne: '', matTwo: '', specialty: '', commonMat: '' },		
}

// interface Material {
// 	name: string,
// 	type: string,
// 	stars: string,
// 	position: string,
// 	description: string,
// 	image: string,
// 	sources: { sourceOne: string, sourceTwo: string, sourceThree: string, sourceFour: string, sourceFive: string }
// }

const materialTemplate = {
	name: '', 
	type: '', 
	stars: '',
	position: '',
	description: '', 
	image: '', 
	sources: { sourceOne: '', sourceTwo: '', sourceThree: '', sourceFour: '', sourceFive: '' },		
}


// interface AscensionPlan {
// 	id: string,
// 	index: number,
// 	name: string,
// 	type: string,
// 	typeImage: string,
// 	stars: string,
// 	image: string,

// 	currentMax: boolean,
// 	desiredMax: boolean,
// 	startAscension: number,
// 	endAscension: number,

// 	talentOneStart: number,
// 	talentOneEnd: number,
// 	talentTwoStart: number,
// 	talentTwoEnd: number,
// 	talentThreeStart: number,
// 	talentThreeEnd: number,

// 	talentMat: string,
// 	materials: Array<Material>
// }

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex', 
		margin: 'auto', 
		maxWidth: '65rem', 
		minWidth: '20rem',
		overflow: 'auto', 
		marginBottom: '1.5rem'
	},
	mainContainer: {
		display: "block", 
		maxWidth: '100%', 
		flexBasis: '100%',
		boxSizing: 'border-box',
		margin: 'auto',
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
			padding: '0em 1em',
		},
	},
	sidebarContainer: {
		display: 'flex', 
		maxWidth: '25%', 
		flexBasis: '25%',
		'@media (max-width: 80em)': {
            display: "none",
        }
	},
}));

export default function App() {
	const classes = useStyles();
	const theme = createMuiTheme({
		palette: {
			primary: {
			main: "#1b242d",
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
		fontSize: '1.5rem',
		fontWeight: 700,
		margin: 0,
		'@media (max-width: 45em)': {
			fontSize: '1.25rem',
		},
		'@media (max-width: 25em)': {
			fontSize: '1.15rem',
		},
	};
	theme.typography.h2 = {
		lineHeight: '1.3em',
		fontSize: '1.25rem',
		fontWeight: 600,
		margin: 0
	};
	theme.typography.h3 = {
		lineHeight: '1.3em',
		fontSize: '1.125rem',
		fontWeight: 500,
		margin: 0,
	};
	theme.typography.h5 = {
		lineHeight: '1.3em',
		fontSize: '1rem',
		fontWeight: 400,
		margin: 0	
	};
	theme.typography.h6 = {
		lineHeight: '1.3em',
		fontSize: '0.875rem',
		fontWeight: 400,
		margin: 0	
	}

	const [characters, setCharacters] = useState<[Character]>();
	const [weapons, setWeapons] = useState<[Weapon]>();
	const [materials, setMaterials] = useState<[Material]>();
	const [summary, setSummary] = useState<[]>([]);
	const [ascensionPlans, setAscensionPlans] = useState<AscensionPlan[]>([]);
	//const [plannerSummary, setPlannerSummary] = useState<[Character]>();

	const [character, setCharacter] = useState<Character>(characterTemplate);
	const [weapon, setWeapon] = useState<Weapon>(weaponTemplate);
	// const [material, setMaterial] = useState<Material>(materialTemplate);

	useEffect(() => {
		//createNewCharacter(character, setCharacter, characterTemplate);
		//createNewWeapon(weapon, setWeapon, weaponTemplate);
		//createNewMaterial(material, setMaterial, materialTemplate);
		// fetchCharacters(setCharacters);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<StylesProvider injectFirst>
					<TopNav></TopNav>
					<AdBar></AdBar>
					<div className={classes.container}>
						<div className={classes.mainContainer}>
							<Switch>
								<Route path="/database">
									<DatabasePage />
								</Route>
								<Route path="/">
									<Planner 
										characters={characters} weapons={weapons} materials={materials} ascensionPlans={ascensionPlans} summary={summary} 
										setCharacters={setCharacters} setWeapons={setWeapons} setMaterials={setMaterials} setAscensionPlans={setAscensionPlans} 
										setSummary={setSummary}>										
									</Planner>
								
									{summary.length > 0 ? <Summary summary={summary}>
									</Summary> : null}
								</Route>	
							</Switch>
						</div>
					</div>	
					<BottomNav></BottomNav>
				</StylesProvider>
			</Router>
		</ThemeProvider>
	);
};
