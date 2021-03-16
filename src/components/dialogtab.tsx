import React, { useRef } from 'react';

import { makeStyles, CircularProgress } from '@material-ui/core';

import DialogItem from './dialogitem';
import DialogPlanner from './dialogplanner'
import TabPanel from './tabpanel'

export default function DialogTab(props: any) {
	const characters = props.characters;	
	const weapons = props.weapons;
	const charCount = useRef(0);
	const weaponCount = useRef(0);
	const useStyles = makeStyles(() => ({
		itemsContainer: {
			display: charCount.current >= characters?.length ? 'flex' : 'none',
			// display: 'none',
			flexWrap: 'wrap', 
			boxSizing: 'border-box', 
			alignItems: 'flex-start', 
			width: '95%', 
			margin: '1.5rem auto', 
		},
		weaponItemsContainer: {
			display: weaponCount.current >= weapons?.length ? 'flex' : 'none',
			// display: 'none',
			flexWrap: 'wrap', 
			boxSizing: 'border-box', 
			alignItems: 'flex-start', 
			width: '95%', 
			margin: '1.5rem auto', 
		},
		spinnerContainer: {
			display: charCount.current < characters?.length ? 'flex' : 'none',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#1b242d',
			borderRadius: '1rem',
			height: '6.5rem',
			width: '6.5rem',
		},
		weaponSpinnerContainer: {
			display: weaponCount.current < weapons?.length ? 'flex' : 'none',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#1b242d',
			borderRadius: '1rem',
			height: '6.5rem',
			width: '6.5rem',
		},
		spinner: {
			display: 'flex',
			color: 'white', margin: 'auto',
			width: '4.25rem !important',
			height: '4.25rem !important',
		},
		weaponSpinner: {
			display: 'flex',
			color: 'white', margin: 'auto',
			width: '4.25rem !important',
			height: '4.25rem !important',
		},
		character: {
			boxSizing: 'border-box', 
			display: 'flex', 
			padding: '0.625rem', 
			justifyContent: 'center', 
			width: '14.28%',
			'@media (max-width: 60em)': {
				width: '20%'
			},
			'@media (max-width: 45em)': {
				width: '25%'
			},
			'@media (max-width: 35em)': {
				width: '25%'
			},
			'@media (max-width: 25em)': {
				width: '33.3333%'
			},
		},
	}));

	const classes = useStyles();
	const materials = props.materials;
	const ascensionPlans = props.ascensionPlans;
	const summary = props.summary;

	const setAscensionPlans = props.setAscensionPlans;
	const setSummary= props.setSummary;

	const dialogClose = props.dialogClose;
    const displayTabsTitle = props.displayTabsTitle;
	const tabPanel = props.tabPanel;
		
	const [showPlanner, setShowPlanner] = React.useState(false)
	const [showWeaponPlanner, setShowWeaponPlanner] = React.useState(false)
	const [showCharacterPlanner, setShowCharacterPlanner] = React.useState(false)
	const [currentCharacter, setCurrentCharacter] = React.useState("Character");
	const [currentWeapon, setCurrentWeapon] = React.useState("Weapon");
	const [reRender, setReRender] = React.useState(false);
	const [reRenderWeapon, setReRenderWeapon] = React.useState(false);


    const openCharacterPlanner = (char: any) => {
        displayTabsTitle();
		setShowPlanner(!showPlanner)	
		setShowCharacterPlanner(!showCharacterPlanner)
        setCurrentCharacter(char)
	}
	
    const openWeaponPlanner = (weapon: any) => {
		displayTabsTitle();
		setShowPlanner(!showPlanner)	
        setShowWeaponPlanner(!showWeaponPlanner)	
        setCurrentWeapon(weapon)
    }

	// const asyncPopulateChars = async () => {
	// 	let promises = []
	// 	promises = ( characters && characters.map((character: { name: any; }, index: any) => 
	// 	<div key={index} className={classes.character} onClick={() => {
	// 		openCharacterPlanner(character)
	// 	}}>
	// 		<DialogItem item={character} itemType={"character"} charCount={charCount}></DialogItem>
	// 	</div>)
	// 	);

	// 	const data = await Promise.all(promises);
	// 	console.log("data here:", data);
	// 	console.log("charCount", charCount.current)
		
	// 	setTestState(data);
	// }


    const populateDialogCharacters = characters && characters.map((character: { name: any; }, index: any) => 
        <div key={index} className={classes.character} onClick={() => {
            openCharacterPlanner(character);
        }}>
        	<DialogItem item={character} itemType={"character"} charCount={charCount} setReRender={setReRender} characters={characters}></DialogItem>
        </div>
	);

    const populateDialogWeapons = weapons && weapons.map((weapon: { name: any; }, index: any) => 
        <div key={index} className={classes.character} onClick={() => {
            openWeaponPlanner(weapon);
        }}>
        	<DialogItem item={weapon} itemType={"weapon"} weaponCount={weaponCount} setReRender={setReRenderWeapon} weapons={weapons}></DialogItem>
        </div>
	);

	return (
		<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '100%', minHeight: '100%'}}>
			{ !showPlanner ? 
				<div>
					<TabPanel value={tabPanel} index={0}>
						<div className={classes.itemsContainer}>
							{ populateDialogCharacters }
						</div>
						<div className={classes.spinnerContainer}>
							<CircularProgress className={classes.spinner} />
						</div>
					</TabPanel>
					<TabPanel value={tabPanel} index={1}>
						<div className={classes.weaponItemsContainer}>
							{ populateDialogWeapons }
						</div>
						<div className={classes.weaponSpinnerContainer}>
							<CircularProgress className={classes.weaponSpinner} />
						</div>

					</TabPanel>	
				</div>	
			: null }
			{ showCharacterPlanner ? 
				<DialogPlanner
					plannerType={"character"} item={currentCharacter} materials={materials} ascensionPlans={ascensionPlans} summary={summary} 
					setAscensionPlans={setAscensionPlans} setSummary={setSummary} dialogClose={dialogClose}>
				</DialogPlanner>
			: null }
			{ showWeaponPlanner ? 
				<DialogPlanner
					plannerType={"weapon"} item={currentWeapon} materials={materials} ascensionPlans={ascensionPlans} summary={summary} 
					setAscensionPlans={setAscensionPlans} setSummary={setSummary} dialogClose={dialogClose}>
				</DialogPlanner>
			: null }
		</div>	
	);
}