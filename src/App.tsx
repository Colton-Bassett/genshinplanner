import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
// getCharacter, deleteCharacter as deleteCharacterMutation
import { listCharacters } from './graphql/queries';
// import { createCharacter as createCharacterMutation } from './graphql/mutations';

import { Grid, ThemeProvider, StylesProvider, makeStyles } from '@material-ui/core';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopNav from "./components/topnav"
import AdBar from "./components/adbar"
import Planner from "./components/planner"
import SideBar from "./components/sidebar"
import BottomNav from "./components/bottomnav"
import DatabasePage from "./components/databasepage"

const useStyles = makeStyles((theme) => ({
	container: {
		margin: 'auto',
		display: 'flex'
	},
	innerContainer: {
		margin: 'auto'
	},
	mainContent: {
		marginBottom: '30px',
	}
}));

export default function App() {
	const classes = useStyles();
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

	interface Char { 
		name: string, 
		type: string, 
		typeImage: string,
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
	// const initialChar = { 
	// 	name: '', 
	// 	type: '', 
	// 	typeImage: '',
	// 	weapon: '', 
	// 	stars: '',
	// 	description: '', 
	// 	image: '', 
	// 	abilityOne: { name: '', image: '', description: '' }, 
	// 	abilityTwo: { name: '', image: '', description: '' }, 
	// 	abilityThree: { name: '', image: '', description: '' }, 
	// 	ascensionMats: { matOne: '', matTwo: '', specialty: '', commonMat: '' },
	// 	talentMats: { talentMat: '', bossMat: '' }
	// }
	const [characters, setCharacters] = useState<[Char]>();
	// const [character, setCharacter] = useState<Char>(initialChar);
	
	async function fetchCharacters() {
		const apiData: any = await API.graphql({ query: listCharacters });
		const charactersFromAPI = apiData.data.listCharacters.items;
		await Promise.all(charactersFromAPI.map(async (character: any) => {
			if (character.image) {
				const image = await Storage.get(character.image);
				character.image = image;
			}
			if (character.typeImage) {
				const imageName = "Element_" + character.typeImage;
				//console.log("imageName", imageName)
				const image = await Storage.get(imageName);
				character.typeImage = image;
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
	}

	// async function createCharacterWithoutDom() {
	// 	console.log("createCharacterWithoutDom called")
	// 	const f = { ...character};
	// 	f.name = 'Albedo'
	// 	f.type = 'Geo'
	// 	f.typeImage = 'Geo.png'
	// 	f.weapon = 'Sword'
	// 	f.stars = 'Five'
	// 	f.description = "An alchemist based in Mondstadt, in the service of the Knights of Favonius."
	// 	f.image = 'Albedo.png'

	// 	f.abilityOne.name = 'Favonius Bladework_-_Weiss'
	// 	f.abilityOne.description = 'Normal Attack'
	// 	f.abilityOne.image = 'Favonius Bladework_-_Weiss.png'

	// 	f.abilityTwo.name = "Abiogenesis: Solar Isotoma"
	// 	f.abilityTwo.description = "Albedo creates a Solar Isotoma using alchemy, which deals AoE Geo DMG on appearance."
	// 	f.abilityTwo.image = "Abiogenesis_:_Solar_Isotoma.png"

	// 	f.abilityThree.name = "Rite of Progeniture: Tectonic Tide"
	// 	f.abilityThree.description = "Under Albedo's command, Geo crystals surge and burst forth, dealing AoE Geo DMG in front of him."	
	// 	f.abilityThree.image = "Rite_of_Progeniture_:_Tectonic_Tide.png"

	// 	f.ascensionMats.matOne = 'Prithiva_Topaz'
	// 	f.ascensionMats.matTwo = 'Basalt_Pillar'
	// 	f.ascensionMats.specialty = 'Cecilia'
	// 	f.ascensionMats.commonMat = "Divining_Scroll"
	// 	f.talentMats.talentMat = 'Ballad'
	// 	f.talentMats.bossMat = "Tusk_of_Monoceros_Caeli"
	// 	setCharacter(f);
	// 	if (!character.name || !character.description) return;
	// 	await API.graphql({ query: createCharacterMutation, variables: { input: character } });
	// 	setCharacter(initialChar);
	// }

	useEffect(() => {
		fetchCharacters();
		//createCharacterWithoutDom();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<StylesProvider injectFirst>
					<TopNav></TopNav>
					<AdBar></AdBar>
						<Grid item xs={11} sm={11} md={10} lg={10} className={classes.container}>
							<Grid item sm={12} md={12} lg={9} className={classes.mainContent}>
								<Switch>
									<Route path="/database">
										<DatabasePage />
									</Route>
									<Route path="/">
										<Planner characters={characters}></Planner>
									</Route>
								</Switch>
							</Grid>	
							<SideBar></SideBar>
							</Grid>
					<BottomNav></BottomNav>
				</StylesProvider>
			</Router>
		</ThemeProvider>
	);
};
