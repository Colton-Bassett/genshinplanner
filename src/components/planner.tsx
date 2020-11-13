import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';

import AddCharacterButton from "./addcharacterbutton"
import CharacterOverview from "./characteroverview"

const useStyles = makeStyles((theme) => ({
    root: {
		backgroundColor: "#222431 !important",
		minWidth: '70%',
		margin: 'auto',
		minHeight: '600px',
    },
    container: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
    },
}));

export default function Planner() {
	const classes = useStyles();
	return (
		<Card className={classes.root}> 
			<div className={classes.container}>
				<CardContent>
					<h2>Genshin Impact Planner</h2>
					<CharacterOverview></CharacterOverview>
					<AddCharacterButton></AddCharacterButton>
				</CardContent>
			</div>
		</Card>
	);
}
