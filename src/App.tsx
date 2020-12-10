import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
// getCharacter, deleteCharacter as deleteCharacterMutation
import { listCharacters } from './graphql/queries';
import { createCharacter as createCharacterMutation } from './graphql/mutations';

import { Grid, ThemeProvider, StylesProvider, createMuiTheme, makeStyles } from '@material-ui/core';
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
		marginBottom: '20px',
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
	
	async function fetchCharacters() {
		const apiData: any = await API.graphql({ query: listCharacters });
		const charactersFromAPI = apiData.data.listCharacters.items;
		await Promise.all(charactersFromAPI.map(async (character: any) => {
			console.log(character)
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
		console.log("fetchCharacters state:", characters);
	}

	async function createCharacterWithoutDom() {
		const f = { ...formData};
		f.name = 'Traveler (Geo)'
		f.type = 'Geo'
		f.weapon = 'Sword'
		f.stars = 'Five'
		f.description = "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven."
		f.image = 'Traveler (Geo).png'

		f.abilityOne.name = 'Foreign Rockblade'
		f.abilityOne.description = 'Normal Attack'
		f.abilityOne.image = 'Foreign_Rockblade.png'

		f.abilityTwo.name = "Starfell Sword"
		f.abilityTwo.description = "You disgorge a meteorite from the depths of the earth, dealing AoE Geo DMG. The meteorite is considered a Geo Construct, and can be climbed or used to block attacks."
		f.abilityTwo.image = "Starfell_Sword.png"

		f.abilityThree.name = "Wake of Earth"
		f.abilityThree.description = "Energizing the Geo elements deep underground, you set off expanding shockwaves. Launches surrounding enemies back and deals AoE Geo DMG. A stone wall is erected at the edges of the shockwave."	
		f.abilityThree.image = "Wake_of_Earth.png"

		f.ascensionMats.matOne = 'Diamond'
		f.ascensionMats.matTwo = 'Divining Scroll'
		f.ascensionMats.specialty = 'Windwheel Aster'
		f.ascensionMats.commonMat = "Damaged Mask"
		f.talentMats.talentMat = 'Resistance'
		f.talentMats.bossMat = "Dvalin's Sigh"
		setFormData(f);
		if (!formData.name || !formData.description) return;
		await API.graphql({ query: createCharacterMutation, variables: { input: formData } });
		//setCharacters([ formData ]);
		setFormData(initialChar);
	}

	useEffect(() => {
		fetchCharacters();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<StylesProvider injectFirst>
					<TopNav></TopNav>
					<AdBar></AdBar>
						<Grid item sm={12} md={10} lg={10} className={classes.container}>
							<Grid item sm={12} md={12} lg={8} className={classes.mainContent}>
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
