import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import {v4 as uuidv4} from 'uuid';

import NewCharacter from "./newcharacter"
import CharacterOverview from "./characteroverview"
import DeleteObject from '../logic/deleteObject';

const useStyles = makeStyles((theme) => ({
    planner: {
		backgroundColor: "#1b242d",
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

interface materialTemplate {
	name: string,
	quantity: string,
	image: string,
}
interface ItemTemplate {
	index: number,
	type: string,
	name: string,
	currentAscension: number,
	desiredAscension: number,
	abilityOneCurrent: number,
	abilityOneDesired: number,
	abilityTwoCurrent: number,
	abilityTwoDesired: number,
	abilityThreeCurrent: number,
	abilityThreeDesired: number,
	image: string,
	id: string,
	materials: Array<materialTemplate>
}

export default function Planner(props: any) {
	const classes = useStyles();
	const characters = props.characters;
	const weapons = props.weapons;
	const materials = props.materials;
	const summary = props.summary;
	const setSummary = props.setSummary;

	const initialItems: Array<ItemTemplate> = []
	
	const initialAscensionDetails = {
		index: '',
		type: '',
		name: 'Razor',
		image: '',
		stars: '',

		currentAscension: '',
		desiredAscension: '',

		abilityOneCurrent: '',
		abilityOneDesired: '',

		abilityTwoCurrent: '',
		abilityTwoDesired: '',

		abilityThreeCurrent: '',
		abilityThreeDesired: '',

		currentMax: false,
		desiredMax: true,

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

	const characterOverviews = items && items.map((item: any, index: any) => {
		const id = uuidv4();
		item.id = id;
		// console.log("item id:", item.id)
		return <CharacterOverview key={index} objectInfo={item} deleteMethod={DeleteObject} items={items} setItems={setItems} characters={characters} summary={summary} setSummary={setSummary} id={id}></CharacterOverview>
	});

	return (
		<div className={classes.planner}> 
			<h2 style={{paddingLeft: '0.75rem'}}>Genshin Impact Planner</h2>
			{characterOverviews}
			<NewCharacter characters={characters} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems} weapons={weapons} materials={materials} summary={summary} setSummary={setSummary}></NewCharacter>
		</div>
	);
}
