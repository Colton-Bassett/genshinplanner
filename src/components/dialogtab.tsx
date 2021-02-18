import React from 'react';

import { makeStyles } from '@material-ui/core';

import DialogCharacter from './dialogcharacter'
import DialogWeapon from './dialogweapon';
import DialogCharacterPlanner from './dialogcharacterplanner'
import DialogWeaponPlanner from './dialogweaponplanner'
import TabPanel from './tabpanel'

const useStyles = makeStyles(() => ({
	charactersContainer: {
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
		width: '16.666667%',
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
	weaponsContainer: {
		display: 'flex', 
		flexWrap: 'wrap', 
		boxSizing: 'border-box', 
		alignItems: 'flex-start', 
		width: '95%', 
		margin: 'auto', 
		marginTop: '0.5rem'
	},
}));


export default function DialogTab(props: any) {
	const classes = useStyles();

	const characters = props.characters;
	const weapons = props.weapons;
    const dialogClose = props.dialogClose;
    const ascensionDetails = props.ascensionDetails;
    const setAscensionDetails = props.setAscensionDetails;
    const items = props.items;
    const setItems = props.setItems;
    const displayTabsTitle = props.displayTabsTitle;
	const tabPanel = props.tabPanel;
	const materials = props.materials;
	const summary = props.summary;
	const setSummary= props.setSummary;
		
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
        	<DialogCharacter character={character} ></DialogCharacter>
        </div>
	);

    const populateDialogWeapons = weapons && weapons.map((weapon: { name: any; }, index: any) => 
        <div key={index} className={classes.character} onClick={() => {
            openWeaponPlanner(weapon);
        }}>
        	<DialogWeapon weapon={weapon} ></DialogWeapon>
        </div>
	);

	const DialogTabMain = () => (
		<div>
			<TabPanel value={tabPanel} index={0}>
				<div className={classes.charactersContainer}>
					{ populateDialogCharacters } 
				</div>
			</TabPanel>
			<TabPanel value={tabPanel} index={1}>
				<div className={classes.weaponsContainer}>
					{ populateDialogWeapons }
				</div>
			</TabPanel>	
		</div>
	)

	return (
		<div>
			{ !showPlanner ? <DialogTabMain></DialogTabMain> : null }
			{ showCharacterPlanner ? <DialogCharacterPlanner materials={materials} character={currentCharacter} dialogClose={dialogClose} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems} summary={summary} setSummary={setSummary}></DialogCharacterPlanner> : null }
			{ showWeaponPlanner ? <DialogWeaponPlanner materials={materials} weapon={currentWeapon} dialogClose={dialogClose} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems} summary={summary} setSummary={setSummary}></DialogWeaponPlanner> : null }
		</div>	
	);
}