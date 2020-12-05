import React, { useState } from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';

import AddCharacterButton from "./addcharacterbutton"
import CharacterOverview from "./characteroverview"

const useStyles = makeStyles((theme) => ({
    root: {
		backgroundColor: "#222431 !important",
		minWidth: '70%',
		margin: 'auto',
		minHeight: '1000px',
    },
    container: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
    },
}));

export default function Planner(props: any) {
	console.log("Rendered Planner")
	const classes = useStyles();
	const characters = props.characters;
	const defaultItems = [
		{
			id: 0, type: "Character", name: "Razor", ascension: "AscensionFour", levelStart: 1, levelEnd: 60, 
			materials: [
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
			]
		},
		{
			id: 1, type: "Character", name: "Xingqiu", ascension: "AscensionFour", levelStart: 1, levelEnd: 50, 
			materials: [
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
			]
		},
		{
			id: 2, type: "Character", name: "Venti", ascension: "AscensionFour", levelStart: 1, levelEnd: 40, 
			materials: [
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
				{name: "Mora", quantity: "1.1M"}, {name: "Mora", quantity: "1.1M"},
			]
		},
	]
	const initialAscensionDetails = {
		character: 'Razor',

		currentLevel: '',
		desiredLevel: '',

		abilityOneCurrent: '',
		abilityOneDesired: '',

		abilityTwoCurrent: '',
		abilityTwoDesired: '',

		abilityThreeCurrent: '',
		abilityThreeDesired: '',
	}
	const [ascensionDetails, setAscensionDetails] = useState<{}>(initialAscensionDetails);
	
	const [items, setItems] = React.useState(defaultItems)

	const deleteObject = (id: any) => {
		console.log("deleteObjects id:", id)
		let tempObjects = [...items]
		console.log("deleteObject has been called!", id)
		const filteredObjects = tempObjects.filter(item => item.id !== id);
		setItems(filteredObjects);
		console.log("objects:", items)
	}

	const characterOverviews = items.map((item) => 
	<CharacterOverview key={item.id} objectInfo={item} deleteMethod={deleteObject}></CharacterOverview>
	);
	return (
		<Card className={classes.root}> 
			<div className={classes.container}>
				<CardContent>
					<h2>Genshin Impact Planner</h2>
					{characterOverviews}
					<AddCharacterButton characters={characters} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails}></AddCharacterButton>
				</CardContent>
			</div>
		</Card>
	);
}
