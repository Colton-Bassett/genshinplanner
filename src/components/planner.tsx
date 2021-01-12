import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import AddCharacterButton from "./addcharacterbutton"
import CharacterOverview from "./characteroverview"
import MoraImage from '../images/mora.png';

const useStyles = makeStyles((theme) => ({
    planner: {
		backgroundColor: "#222431",
		margin: 'auto',
		minHeight: '1000px',
		padding: '12px 24px 24px 24px',
		color: 'white'
    },
}));

export default function Planner(props: any) {
	const classes = useStyles();
	const characters = props.characters;

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
			<h2>Genshin Impact Planner</h2>
			{characterOverviews}
			<AddCharacterButton characters={characters} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems}></AddCharacterButton>
		</div>
	);
}
