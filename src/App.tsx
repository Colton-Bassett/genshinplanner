import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
//getCharacter, deleteCharacter as deleteCharacterMutation
import { listCharacters, listWeapons } from './graphql/queries';
// import { createCharacter as createCharacterMutation } from './graphql/mutations';
import { createWeapon as createWeaponMutation } from './graphql/mutations';

import { ThemeProvider, StylesProvider, makeStyles } from '@material-ui/core';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopNav from "./components/nav"
import AdBar from "./components/adbar"
import Planner from "./components/planner"
import SideBar from "./components/sidebar"
import BottomNav from "./components/footer"
import DatabasePage from "./components/databasepage"

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex', 
		margin: 'auto', 
		maxWidth: '75rem', 
		overflow: 'auto', 
		marginBottom: '1.5rem'
	},
	mainContainer: {
		display: "flex", 
		maxWidth: '75%', 
		flexBasis: '75%',
		minWidth: '56.25rem',
		boxSizing: 'border-box',
		'@media (max-width: 80em)': {
            margin: 'auto',
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
		fontSize: '1.5rem',
		fontWeight: 700,
		margin: 0
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
		margin: 0
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

	interface Char { 
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

	interface Weap {
		name: string,
		type: string,
		stars: string,
		description: string,
		image: string,
		ascensionMats: { matOne: string, matTwo: string, specialty: string, commonMat: string },
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

	const initialWeap = {
		name: '', 
		type: '', 
		stars: '',
		description: '', 
		image: '', 
		ascensionMats: { matOne: '', matTwo: '', specialty: '', commonMat: '' },		
	}

	const [characters, setCharacters] = useState<[Char]>();
	// const [character, setCharacter] = useState<Char>(initialChar);
	const [weapons, setWeapons] = useState<[Weap]>();
	const [weapon, setWeapon] = useState<Weap>(initialWeap);
	
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

	async function fetchWeapons() {
		const apiData: any = await API.graphql({ query: listWeapons });
		const weaponsFromAPI = apiData.data.listWeapons.items;
		await Promise.all(weaponsFromAPI.map(async (weapon: any) => {
			if (weapon.image) {
				const image = await Storage.get(weapon.image);
				weapon.image = image;
			}
			return weapon;
		}))
		console.log("fetchWeapons:", apiData.data.listWeapons.items)
		setWeapons(apiData.data.listWeapons.items);
	}

	// async function createCharacterWithoutDom() {
	// 	console.log("createCharacterWithoutDom called")
	// 	const f = { ...character};
	// 	f.name = 'Ganyu'
	// 	f.type = 'Cryo'
	// 	f.typeImage = 'Cryo.png'
	// 	f.weapon = 'Bow'
	// 	f.stars = 'Five'
	// 	f.description = "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins."
	// 	f.image = 'Ganyu.png'

	// 	f.abilityOne.name = 'Liutian Archery'
	// 	f.abilityOne.description = 'Normal Attack'
	// 	f.abilityOne.image = 'Liutian_Archery.png'

	// 	f.abilityTwo.name = "Trail of the Qilin"
	// 	f.abilityTwo.description = "Leaving a single Ice Lotus behind, Ganyu dashes backward, shunning all impurity and dealing AoE Cryo DMG."
	// 	f.abilityTwo.image = "Trail_of_the_Qilin.png"

	// 	f.abilityThree.name = "Celestial Shower"
	// 	f.abilityThree.description = "Coalesces frost and snow to summon a Sacred Cryo Pearl that exorcises evil. "	
	// 	f.abilityThree.image = "Celestial_Shower.png"

	// 	f.ascensionMats.matOne = 'Shivada_Jade'
	// 	f.ascensionMats.matTwo = 'Hoarfrost_Core'
	// 	f.ascensionMats.specialty = 'Qingxin'
	// 	f.ascensionMats.commonMat = "Whopperflower_Nectar"
	// 	f.talentMats.talentMat = 'Diligence'
	// 	f.talentMats.bossMat = "Shadow_of_the_Warrior"
	// 	setCharacter(f);
	// 	if (!character.name || !character.description) return;
	// 	await API.graphql({ query: createCharacterMutation, variables: { input: character } });
	// 	console.log("createCharacterWithoutDom complete");
	// 	setCharacter(initialChar);
	// }





	useEffect(() => {
		async function createWeaponWithoutDom() {
			console.log("createWeaponWithoutDom called")
			const f = { ...weapon};
			f.name = "Prototype Starglitter"
			f.type = 'Polearm'
			f.stars = 'Four'
			f.description = "A grudge discovered in the Blackcliff Forge. The glimmers along the sharp edge are like stars in the night."
			f.image = "Prototype_Starglitter.png"
	
			f.ascensionMats.matOne = "Grain_of_Aerosiderite"
			f.ascensionMats.matTwo = "Fragile_Bone_Shard"
			f.ascensionMats.specialty = 'N/A'
			f.ascensionMats.commonMat = "Damaged_Mask"
			setWeapon(f);
			if (!weapon.name || !weapon.description) return; 
			await API.graphql({ query: createWeaponMutation, variables: { input: weapon } });
			console.log("createWeaponWithoutDom complete ");
			// reset
			setWeapon(initialWeap);
		}

		fetchCharacters();
		//createWeaponWithoutDom();
		fetchWeapons();
		//createCharacterWithoutDom();

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
									<Planner characters={characters} weapons={weapons}></Planner>
								</Route>	
							</Switch>
						</div>
						<div className={classes.sidebarContainer}>
							<SideBar></SideBar>
						</div>
					</div>	
					<BottomNav></BottomNav>
				</StylesProvider>
			</Router>
		</ThemeProvider>
	);
};
