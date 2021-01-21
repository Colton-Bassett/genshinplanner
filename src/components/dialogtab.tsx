import React from 'react';

import { makeStyles } from '@material-ui/core';

import DialogCharacter from './dialogcharacter'
import DialogCharacterPlanner from './dialogcharacterplanner'
import TabPanel from './tabpanel'

const useStyles = makeStyles(() => ({
	charactersContainer: {
		display: 'flex', 
		flexWrap: 'wrap', 
		boxSizing: 'border-box', 
		alignItems: 'flex-start', 
		width: '95%', 
		margin: 'auto', 
		marginTop: '0.5rem'
	},
	character: {
		boxSizing: 'border-box', 
		display: 'flex', 
		padding: '0.625rem', 
		justifyContent: 'center', 
		width: '16.666667%'
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
    const dialogClose = props.dialogClose;
    const ascensionDetails = props.ascensionDetails;
    const setAscensionDetails = props.setAscensionDetails;
    const items = props.items;
    const setItems = props.setItems;
    const displayTabsTitle = props.displayTabsTitle;
    const tabPanel = props.tabPanel;
		
    const [showChars, setShowChars] = React.useState(true)
    const [currentCharacter, setCurrentCharacter] = React.useState("Character");

    const openCharacterPlanner = (char: any) => {
        displayTabsTitle();
        setShowChars(!showChars)	
        setCurrentCharacter(char)
    }

    const populateDialogCharacters = characters.map((character: { name: any; }, index: any) => 
        <div key={index} className={classes.character} onClick={() => {
            openCharacterPlanner(character);
        }}>
        	<DialogCharacter character={character} ></DialogCharacter>
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
					Coming soon
				</div>
			</TabPanel>	
		</div>
	)

	return (
		<div>
			{ showChars ? <DialogTabMain></DialogTabMain> : null }
			{ !showChars ? <DialogCharacterPlanner character={currentCharacter} dialogClose={dialogClose} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems}></DialogCharacterPlanner> : null }
		</div>	
	);
}