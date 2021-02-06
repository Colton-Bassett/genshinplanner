import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import NewCharacter from "./newcharacter"
import CharacterOverview from "./characteroverview"
import Summary from "./summary"
import DeleteObject from '../logic/deleteObject';

const useStyles = makeStyles((theme) => ({
    planner: {
		backgroundColor: "#222431",
		minHeight: '62.5rem',
		minWidth: '100%',
		padding: '1.5rem',
		boxSizing: 'border-box',
		color: 'white',
		borderRadius: '0.25rem',
		'@media (max-width: 25em)': {
			padding: '0.5rem',
		},
    },
}));

export default function Planner(props: any) {
	const classes = useStyles();
	const characters = props.characters;
	const weapons = props.weapons;
	const materials = props.materials;
	const summary = props.summary;
	const setSummary = props.setSummary;

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

	const characterOverviews = items.map((item) => 
	<CharacterOverview key={item.index} objectInfo={item} deleteMethod={DeleteObject} items={items} setItems={setItems} characters={characters} summary={summary} setSummary={setSummary}></CharacterOverview>
	);

	return (
		<div className={classes.planner}> 
			<h2 style={{paddingLeft: '0.75rem'}}>Genshin Impact Planner</h2>
			{characterOverviews}
			<NewCharacter characters={characters} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems} weapons={weapons} materials={materials} summary={summary} setSummary={setSummary}></NewCharacter>
		</div>
	);
}
