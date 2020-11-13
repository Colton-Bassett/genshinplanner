import React from 'react';
import clsx from 'clsx';
import { Card, Grid, CardHeader, CardMedia, CardContent, Collapse, IconButton, Typography, makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import { Character } from "../logic/character";
import CharacterMaterial from './charactermaterial'
import Razor from './Razor.png'
import AscensionFour from './ascension4.png'

const useStyles = makeStyles((theme) => ({
	gridRoot: {
		maxWidth: "100%", 
		margin: "auto"
	},
	characterRoot: {
		backgroundColor: "#272937 !important", 
		minWidth: "100%", 
		margin: "auto", 
		minHeight: "250px"
	},
	characterContainer: {
		margin: "auto", position: "relative", minHeight: "250px"
	},
	root: {
		maxWidth: 345,
	},
	materialRoot: {
		backgroundColor: '#272937 !important', 
		minHeight: '250px', 
		minWidth: '100%'
	},
	materialCard: {
		backgroundColor: '#222431 !important', 
		minHeight: '210px', 
		minWidth: '100%',
	},
	materialHeader: {
		paddingBottom: "6px"
	},
	materialTitle: {
		fontSize: "18px", 
		fontWeight: "bold"
	},
	materialContent: {
		paddingTop: "0px", paddingBottom: "10px"
	},
	expandButton: {
		color: 'white', fontSize: '26px'
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}));

export default function CharacterOverview() {
	const classes = useStyles();
	let centerItemTop = 'center-item-top'
	let centerItemName = 'center-item-name'
	let centerItemAscension = 'center-item-ascension'
	let centerItemLevelRange = 'center-item-level-range'

	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.gridRoot}>
			<Grid item xs={3}>
				<Card className={classes.characterRoot}> 
					<Grid item xs={3} className={classes.characterContainer}>
						<CardMedia
						image= {Razor}
						className={centerItemTop}
						style={{ minHeight: "99px", minWidth: "99px", borderRadius: "10px"}}
						/>
						<Typography className={centerItemName} variant="h6">
							{Character.Razor}
						</Typography>

						<CardMedia
						image= {AscensionFour}
						className={centerItemAscension}
						style={{ minHeight: "20px", minWidth: "100px", borderRadius: "10px"}}
						/>
						<Typography className={centerItemLevelRange} variant="body1" >
							Level 1 - 60
						</Typography>
					</Grid>
				</Card>
			</Grid>

			<Grid item xs={9} style={{}}>
				<Card className={classes.materialRoot}>
					<div style={{padding: '16px'}}>
						<Card className={classes.materialCard}>
							<CardHeader
							className={classes.materialHeader}
							action={
								<IconButton
									disableFocusRipple
									disableRipple
									className={clsx(classes.expand, {
									[classes.expandOpen]: expanded,
									})}
									onClick={handleExpandClick}
									aria-expanded={expanded}
									aria-label="show more"
									style={{backgroundColor: "#36384A", borderRadius: "10%", padding: "0"}}

								>
								<ExpandMore className={classes.expandButton} />
								</IconButton>
							}
							title={
								<Typography className={classes.materialTitle}>
									Materials Overview
								</Typography>
							}
							/>
							<CardContent className={classes.materialContent}>
								<div style={{flexGrow: 1}}>
									<Grid container >
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
										<Grid item xs={3}>
											<CharacterMaterial></CharacterMaterial>
										</Grid>
									</Grid>
								</div>
							</CardContent>
							<Collapse in={expanded} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography paragraph>
										Method:
									</Typography>
									<Typography paragraph>
										Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
										minutes.
									</Typography>
									<Typography paragraph>
										Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
										heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
										browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
										and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
										pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
										saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
									</Typography>
								</CardContent>
							</Collapse>
						</Card>
					</div>
				</Card>
			</Grid>
		</Grid>
	);
}
