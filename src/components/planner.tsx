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

	const initialItems = [
		{
			index: 0, type: "Character", name: "Razor", currentLevel: 0, desiredLevel: 3, abilityOneCurrent: 1, abilityOneDesired: 5, abilityTwoCurrent: 1, abilityTwoDesired: 5, abilityThreeCurrent: 1, abilityThreeDesired: 5, 
			materials: [
				{name: "Mora", quantity: "1.1M", image: MoraImage}, {name: "Mora", quantity: "1.1M", image: MoraImage},
				{name: "Mora", quantity: "1.1M", image: MoraImage}, {name: "Mora", quantity: "1.1M", image: MoraImage},
				{name: "Mora", quantity: "1.1M", image: MoraImage}, {name: "Mora", quantity: "1.1M", image: MoraImage},
				{name: "Mora", quantity: "1.1M", image: MoraImage}, {name: "Mora", quantity: "1.1M", image: MoraImage},
				{name: "Mora", quantity: "1.1M", image: MoraImage}, {name: "Mora", quantity: "1.1M", image: MoraImage},
				{name: "Mora", quantity: "1.1M", image: MoraImage}, {name: "Mora", quantity: "1.1M", image: MoraImage},
				{name: "Mora", quantity: "1.1M", image: MoraImage}, {name: "Mora", quantity: "1.1M", image: MoraImage},
				{name: "Mora", quantity: "1.1M", image: MoraImage}, {name: "Mora", quantity: "1.1M", image: MoraImage},
			]
		},
		// {
		// 	id: 1, type: "Character", name: "Xingqiu", ascension: "AscensionFour", levelStart: 1, levelEnd: 50, 
		// 	materials: [
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 	]
		// },
		// {
		// 	id: 2, type: "Character", name: "Venti", ascension: "AscensionFour", levelStart: 1, levelEnd: 40, 
		// 	materials: [
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 		{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
		// 	]
		// },
	]
	const initialAscensionDetails = {
		index: '',
		type: '',
		name: 'Razor',

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
	<CharacterOverview key={item.index} objectInfo={item} deleteMethod={deleteObject}></CharacterOverview>
	);

	return (
		<div className={classes.planner}> 
			<h2>Genshin Impact Planner</h2>
			{characterOverviews}
			<AddCharacterButton characters={characters} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems}></AddCharacterButton>
		</div>
	);
}
