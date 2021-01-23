import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
		backgroundColor: "#222431 !important",
		minWidth: '70%',
		margin: 'auto',
		minHeight: '62.5rem',
    },
    container: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
    },
}));

export default function DatabasePage() {
	const classes = useStyles();
	return (
		<Card className={classes.root}> 
			<div className={classes.container}>
				<CardContent>
					<h2>Database <span style={{color: "#A6A7AC"}}>(Coming Soon)</span></h2>
				</CardContent>
			</div>
		</Card>
	);
}
