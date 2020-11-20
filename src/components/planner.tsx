import React, { } from 'react';
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

export default function Planner() {
	const classes = useStyles();
	const objects = [
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
	const deleteObject = (index: any) => {
		let tempObjects = [...objects]
		console.log("deleteObject has been called!", index)
		tempObjects.splice(index, 1)
		
		console.log("objects:", objects)
	}

	const characterOverviews = objects.map((object, index) => 
	<CharacterOverview key={object.id.toString()} objectInfo={objects[index]} deleteMethod={deleteObject}></CharacterOverview>
	);
	return (
		<Card className={classes.root}> 
			<div className={classes.container}>
				<CardContent>
					<h2>Genshin Impact Planner</h2>
					{characterOverviews}
					<AddCharacterButton></AddCharacterButton>
				</CardContent>
			</div>
		</Card>
	);
}
