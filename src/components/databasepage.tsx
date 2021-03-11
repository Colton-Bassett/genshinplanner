import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
		backgroundColor: "#1b242d",
		minHeight: '62.5rem',
		minWidth: '100%',
		padding: '1.5rem',
		boxSizing: 'border-box',
		color: 'white',
		'@media (max-width: 25em)': {
			padding: '0.5rem',
		},
    },
    container: {

    },
}));

export default function DatabasePage() {
	const classes = useStyles();
	return (
		<Card className={classes.root}> 
			<div className={classes.container}>
				<h2 style={{paddingLeft: '0.75rem'}}>Database <span style={{color: "#A7B1C1"}}>(Coming Soon)</span></h2>
			</div>
		</Card>
	);
}
