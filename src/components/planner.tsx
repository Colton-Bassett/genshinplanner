import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import NewCharacter from "./newcharacter"
import CharacterOverview from "./characteroverview"

const useStyles = makeStyles((theme) => ({
    planner: {
		backgroundColor: "#222431",
		minHeight: '62.5rem',
		minWidth: '100%',
		padding: '1.5rem',
		boxSizing: 'border-box',
		color: 'white'
    },
}));

export default function Planner(props: any) {
	const classes = useStyles();
	const characters = props.characters;
	const weapons = props.weapons;

	interface materialTemplate {
		name: string,
		quantity: string,
		image: string,
	}
	interface ItemTemplate {
		index: number,
		type: string,
		name: string,
		currentLevel: number,
		desiredLevel: number,
		abilityOneCurrent: number,
		abilityOneDesired: number,
		abilityTwoCurrent: number,
		abilityTwoDesired: number,
		abilityThreeCurrent: number,
		abilityThreeDesired: number,
		image: string,
		materials: Array<materialTemplate>
	}
	const initialItems: Array<ItemTemplate> = []
	
	const initialAscensionDetails = {
		index: '',
		type: '',
		name: 'Razor',
		image: '',
		stars: '',

		currentLevel: '',
		desiredLevel: '',

		abilityOneCurrent: '',
		abilityOneDesired: '',

		abilityTwoCurrent: '',
		abilityTwoDesired: '',

		abilityThreeCurrent: '',
		abilityThreeDesired: '',

		materials: [
			{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
			{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
			{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
			{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
			{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
			{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		]
	}
	const [ascensionDetails, setAscensionDetails] = useState<{}>(initialAscensionDetails);
	const [items, setItems] = React.useState(initialItems)

	const deleteObject = (index: any) => {
		console.log("deleteObjects id:", items)
		let tempObjects = [...items]
		console.log("deleteObject has been called!", tempObjects)
		const filteredObjects = tempObjects.filter(item => item.index !== index);
		setItems(filteredObjects);
		console.log("objects:", items)
	}

	const characterOverviews = items.map((item) => 
	<CharacterOverview key={item.index} objectInfo={item} deleteMethod={deleteObject} characters={characters}></CharacterOverview>
	);

	return (
		<div className={classes.planner}> 
			<h2 style={{paddingLeft: '0.75rem'}}>Genshin Impact Planner</h2>
			{characterOverviews}
			<NewCharacter characters={characters} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems} weapons={weapons}></NewCharacter>
		</div>
	);
}
