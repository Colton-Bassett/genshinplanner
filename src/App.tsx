import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
//getCharacter, deleteCharacter as deleteCharacterMutation
import { listCharacters, listWeapons, listMaterials } from './graphql/queries';
// import { createCharacter as createCharacterMutation } from './graphql/mutations';
import { createWeapon as createWeaponMutation } from './graphql/mutations';
import { createMaterial as createMaterialMutation } from './graphql/mutations';

import { ThemeProvider, StylesProvider, makeStyles } from '@material-ui/core';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopNav from "./components/nav"
import AdBar from "./components/adbar"
import Planner from "./components/planner"
import SideBar from "./components/sidebar"
import BottomNav from "./components/footer"
import DatabasePage from "./components/databasepage"
import Summary from "./components/summary"

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex', 
		margin: 'auto', 
		maxWidth: '65rem', 
		overflow: 'auto', 
		marginBottom: '1.5rem'
	},
	mainContainer: {
		display: "block", 
		maxWidth: '100%', 
		flexBasis: '100%',
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
	interface Material {
		name: string,
		type: string,
		stars: string,
		position: string,
		description: string,
		image: string,
		sources: { sourceOne: string, sourceTwo: string, sourceThree: string, sourceFour: string, sourceFive: string }
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

	const initialMaterial = {
		name: '', 
		type: '', 
		stars: '',
		position: '',
		description: '', 
		image: '', 
		sources: { sourceOne: '', sourceTwo: '', sourceThree: '', sourceFour: '', sourceFive: '' },		
	}

	const [characters, setCharacters] = useState<[Char]>();
	// const [character, setCharacter] = useState<Char>(initialChar);
	const [weapons, setWeapons] = useState<[Weap]>();
	const [weapon, setWeapon] = useState<Weap>(initialWeap);
	const [materials, setMaterials] = useState<[Material]>();
	const [material, setMaterial] = useState<Material>(initialMaterial);
	
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

		// sorting alphabetically
		const c = (apiData.data.listCharacters.items);
		c?.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
		setCharacters(c)
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
		const w = (apiData.data.listWeapons.items);
		
		// sort by stars, then alphabetically
		w?.sort((a: { stars: any; name: any; }, b: { stars: any; name: any; }) => (a.stars > b.stars) ? 1 : (a.stars === b.stars) ? ((a.name > b.name) ? 1 : -1) : -1 )
		setWeapons(w)
	}

	async function fetchMaterials() {
		const apiData: any = await API.graphql({ query: listMaterials });
		const materialsFromAPI = apiData.data.listMaterials.items;
		await Promise.all(materialsFromAPI.map(async (material: any) => {
			if (material.image) {
				const image = await Storage.get(material.image);
				material.image = image;
			}
			return material;
		}))
		console.log("fetchMaterial:", apiData.data.listMaterials.items)
		const m = (apiData.data.listMaterials.items);
		
		// sort by stars, then alphabetically
		//m?.sort((a: { stars: any; name: any; }, b: { stars: any; name: any; }) => (a.stars > b.stars) ? 1 : (a.stars === b.stars) ? ((a.name > b.name) ? 1 : -1) : -1 )
		m?.sort((a: { position: string; }, b: { position: any; }) => a.position.localeCompare(b.position));

		setMaterials(m)
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
	async function createMaterialWithoutDom() {
		console.log("createMaterialWithoutDom called")
		const f = { ...material};
		f.name = "Chunk of Aerosiderite"
		f.type = 'Weapon Ascension Material'
		f.stars = 'Five'
		f.position = "148"
		f.description = "When Khaenri'ah was destroyed, a great sinner created endless monsters with alien, dark blood flowing through their veins. They rampaged across the land, destroying all in their paths. Their lives were mutations, caused by powers beyond this world. The black serpentine dragon Durin that attacked Mondstadt was such a mutation."
		f.image = "Chunk_of_Aerosiderite.png"

		f.sources.sourceOne = "Domain of Forgery: Trial Grounds of Thunder (Wednesday/Saturday/Sunday)"
		f.sources.sourceTwo = "Crafted"
		f.sources.sourceThree = ""
		f.sources.sourceFour = ""
		f.sources.sourceFive = ""

		setMaterial(f);
		if (!material.name || !material.description) return; 
		await API.graphql({ query: createMaterialMutation, variables: { input: material } });
		console.log("createMaterialWithoutDom complete ");
		// reset
		setMaterial(initialMaterial);
	}

	useEffect(() => {
		// async function createWeaponWithoutDom() {
		// 	console.log("createWeaponWithoutDom called")
		// 	const f = { ...weapon};
		// 	f.name = "Whiteblind"
		// 	f.type = 'Claymore'
		// 	f.stars = 'Four'
		// 	f.description = "An exotic sword with one section of the blade left blunt. It made its way into Liyue via the hands of foreign traders. Incredibly powerful in the hands of someone who knows how to use it."
		// 	f.image = "Whiteblind.png"
	
		// 	f.ascensionMats.matOne = "Luminous_Sands_from_Guyun"
		// 	f.ascensionMats.matTwo = "Hunter's_Sacrificial_Knife"
		// 	f.ascensionMats.specialty = 'N/A'
		// 	f.ascensionMats.commonMat = "Treasure_Hoarder_Insignia"
		// 	setWeapon(f);
		// 	if (!weapon.name || !weapon.description) return; 
		// 	await API.graphql({ query: createWeaponMutation, variables: { input: weapon } });
		// 	console.log("createWeaponWithoutDom complete ");
		// 	// reset
		// 	setWeapon(initialWeap);
		// }



		//createCharacterWithoutDom();
		//createWeaponWithoutDom();
		//createMaterialWithoutDom();

		fetchCharacters()
		fetchWeapons();
		fetchMaterials();


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
									<Planner characters={characters} weapons={weapons} materials={materials}></Planner>
									<Summary></Summary>
								</Route>	
							</Switch>
						</div>
						{/* <div className={classes.sidebarContainer}>
							<SideBar></SideBar>
						</div> */}
					</div>	
					<BottomNav></BottomNav>
				</StylesProvider>
			</Router>
		</ThemeProvider>
	);
};
