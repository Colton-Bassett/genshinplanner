import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { getCharacter, listCharacters } from './graphql/queries';
import { createCharacter as createCharacterMutation, deleteCharacter as deleteCharacterMutation } from './graphql/mutations';

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

	interface Char { 
		name: string, 
		type: string, 
		weapon: string, 
		stars: string,
		description: string, 
		image: string, 
		abilityOne: { name: string, image: string, description: string}, 
		abilityTwo: { name: string, image: string, description: string}, 
		abilityThree: { name: string, image: string, description: string}, 
		ascensionMats: { matOne: string, matTwo: string, specialty: string, commonMat: string},
		talentMats: {talentMat: string, bossMat: string}
	}
	const initialChar = { 
		name: '', 
		type: '', 
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

	const [characters, setCharacters] = useState<[Char]>();
	const [formData, setFormData] = useState<Char>(initialChar);

	
	useEffect(() => {
		fetchCharacters();
	  }, []);

	async function fetchCharacters() {
		const apiData: any = await API.graphql({ query: listCharacters });
		const charactersFromAPI = apiData.data.listCharacters.items;
		await Promise.all(charactersFromAPI.map(async (character: any) => {
		  if (character.image) {
			const image = await Storage.get(character.image);
			character.image = image;
		  }
		  if (character.abilityOne.image) {
			  const image = await Storage.get(character.abilityOne.image);
			  character.abilityOne.image = image;
		  }
		  if (character.abilityTwo.image) {
			const image = await Storage.get(character.abilityTwo.image);
			character.abilityTwo.image = image;
		  }
		  if (character.abilityThree.image) {
			const image = await Storage.get(character.abilityThree.image);
			character.abilityThree.image = image;
		  }
		  return character;
		}))
		console.log("fetchCharacters:", apiData.data.listCharacters.items)
		setCharacters(apiData.data.listCharacters.items);
		//console.log("fetchCharacters state:", characters);
	}

	async function createCharacterWithoutDom() {
		const f = { ...formData};
		f.name = 'Mona'
		f.type = 'Hydro'
		f.weapon = 'Catalyst'
		f.stars = 'Five'
		f.description = "A mysterious young astrologer who proclaims herself to be 'Astrologist Mona Megistus,' and who possesses abilities to match the title."
		f.image = 'Mona.png'

		f.abilityOne.name = 'Ripple of Fate'
		f.abilityOne.description = 'Normal Attack'
		f.abilityOne.image = 'Ripple_of_Fate.png'

		f.abilityTwo.name = "Reflection of Doom"
		f.abilityTwo.description = "Creates an illusory Phantom of fate from coalesced waterspouts."
		f.abilityTwo.image = "Reflection_of_Doom.png"

		f.abilityThree.name = "Stellaris Phantasm"
		f.abilityThree.description = "Mona summons the sparkling waves and creates a reflection of the starry sky, applying the Illusory Bubble status to opponents in a large AoE."	
		f.abilityThree.image = "Stellaris_Phantasm.png"

		f.ascensionMats.matOne = 'Varunada'
		f.ascensionMats.matTwo = 'Cleansing Heart'
		f.ascensionMats.specialty = 'Philanemo Mushroom'
		f.ascensionMats.commonMat = "Whopperflower Nectar"
		f.talentMats.talentMat = 'Resistance'
		f.talentMats.bossMat = "Ring of Boreas"
		setFormData(f);
		if (!formData.name || !formData.description) return;
		await API.graphql({ query: createCharacterMutation, variables: { input: formData } });
		//setCharacters([ formData ]);
		setFormData(initialChar);
	}

	return (
		<ThemeProvider theme={theme}>
		<Router>
			<TopNav></TopNav>
			<StylesProvider injectFirst>
			<AdBar></AdBar>
			<Grid container sm={11} md={11} lg={10} xl={10} spacing={3} direction="row" justify="center" alignItems="flex-start" className={classes.root}>
				<Grid item sm={12} md={11} lg={9}>
					<Switch>
						<Route path="/planner">
							<Planner></Planner>
						</Route>
						<Route path="/database">
							<DatabasePage />
						</Route>
						<Route path="/">
							<Planner characters={characters}></Planner>
						</Route>
					</Switch>
				</Grid>	
				<SideBar />
			</Grid>
			</StylesProvider>
			<BottomNav></BottomNav>
			{/* <button onClick={createCharacterWithoutDom}>Click me</button> */}
		</Router>
		</ThemeProvider>
	);
};
