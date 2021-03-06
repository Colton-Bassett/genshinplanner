import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import NewCharacter from "./newcharacter"
import CharacterOverview from "./characteroverview"
import DeleteObject from '../logic/deleteObject';

export default function Planner(props: any) {
	const useStyles = makeStyles((theme) => ({
		planner: {
			backgroundColor: "#1b242d",
			minHeight: '62.5rem',
			minWidth: '100%',
			padding: '1.5rem',
			boxSizing: 'border-box',
			color: 'white',
			borderRadius: '0.25rem',
			boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
			'@media (max-width: 25em)': {
				padding: '0.5rem',
			},
		},
		plannerTitle: {
			paddingLeft: '0.75rem',
		}
	}));

	const classes = useStyles();
	const characters = props.characters;
	const weapons = props.weapons;
	const materials = props.materials;
	const ascensionPlans = props.ascensionPlans;
	const summary = props.summary;

	const setCharacters = props.setCharacters;
	const setWeapons = props.setWeapons;
	const setMaterials = props.setMaterials;
	const setAscensionPlans = props.setAscensionPlans;
	const setSummary = props.setSummary;

	const characterOverviews = ascensionPlans && ascensionPlans.map((ascensionPlan: any, index: any) => {
		return <CharacterOverview 
					key={index} ascensionPlan={ascensionPlan} ascensionPlans={ascensionPlans} summary={summary} 
					setAscensionPlans={setAscensionPlans} setSummary={setSummary} 
					deleteMethod={DeleteObject}>
				</CharacterOverview>
	});

	return (
		<div className={classes.planner}> 
			<h2 className={classes.plannerTitle}>
				Genshin Impact Planner
			</h2>
			{characterOverviews}
			<NewCharacter 
				characters={characters} weapons={weapons} materials={materials} ascensionPlans={ascensionPlans} summary={summary} 
				setCharacters={setCharacters} setWeapons={setWeapons} setMaterials={setMaterials} setAscensionPlans={setAscensionPlans} 
				setSummary={setSummary}>
			</NewCharacter>
		</div>
	);
}
