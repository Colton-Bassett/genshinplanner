import React, {  } from 'react';

import { makeStyles } from '@material-ui/core';

import DialogItem from './dialogitem';
import DialogPlanner from './dialogplanner'
import TabPanel from './tabpanel'

export default function DialogTab(props: any) {
	const useStyles = makeStyles(() => ({
		itemsContainer: {
			display: 'flex', 
			flexWrap: 'wrap', 
			boxSizing: 'border-box', 
			alignItems: 'flex-start', 
			width: '95%', 
			margin: '1.5rem auto', 
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
	const characters = props.characters;
	const weapons = props.weapons;
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

    const populateDialogCharacters = characters && characters.map((character: { name: any; }, index: any) => 
        <div key={index} className={classes.character} onClick={() => {
            openCharacterPlanner(character);
        }}>
        	<DialogItem item={character} itemType={"character"}></DialogItem>
        </div>
	);

    const populateDialogWeapons = weapons && weapons.map((weapon: { name: any; }, index: any) => 
        <div key={index} className={classes.character} onClick={() => {
            openWeaponPlanner(weapon);
        }}>
        	<DialogItem item={weapon} itemType={"weapon"}></DialogItem>
        </div>
	);

	return (
		<div>
			{ !showPlanner ? 
				<div>
					<TabPanel value={tabPanel} index={0}>
						<div className={classes.itemsContainer}>
							{ populateDialogCharacters } 
						</div>
					</TabPanel>
					<TabPanel value={tabPanel} index={1}>
						<div className={classes.itemsContainer}>
							{ populateDialogWeapons }
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