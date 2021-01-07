import React from 'react';
import clsx from 'clsx';
import { Card, Grid, CardHeader, CardMedia, CardContent, Collapse, IconButton, Typography, makeStyles, Tooltip } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import CharacterMaterial from './charactermaterial'
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import HandleImage from '../logic/handleImage'

const useStyles = makeStyles((theme) => ({
	plannerDetails: {
		maxWidth: "100%", 
		margin: "auto"
	},
	characterContainer: {
		maxHeight: '275px',
		minHeight: '404px',
		minWidth: '170px',
		//padding: '20px',
	},
	characterDetails: {
		backgroundColor: "#272937", 
		minHeight: '100%',
		minWidth: '170px',
	},
	buttonContainer: {
		padding: "16px"
	},
	editButton: {
		color: '#A6A7AC !important',
		cursor: 'pointer',
		'&:hover': {
			color: "#fff !important",
		 },
	},
	cancelButton: {
		color: '#A6A7AC !important',
		float: 'right',
		cursor: 'pointer',
		'&:hover': {
			color: "#fff !important",
		 },
	},
	characterImage: {
		minHeight: "105px", maxWidth: "105px", borderRadius: "10px", margin: 'auto',
		marginBottom: '16px',
	},
	ascensionStars: {
		minHeight: "15px", maxWidth: "105px", borderRadius: "10px", margin: 'auto',
		marginBottom: '4px',
	},
	materialDetails: {
		backgroundColor: '#272937 !important', 
		minHeight: '380px', 
		minWidth: '100%',
	},
	materialCard: {
		backgroundColor: '#222431 !important', 
		minHeight: '332px', 
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
		padding: '24px',
		"&:last-child": {
            paddingBottom: '26px'
          }
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

export default function CharacterOverview(props: any) {
	const classes = useStyles();

	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const objectInfo = {
		index: props.objectInfo.index,
		type: props.objectInfo.type,
		name: props.objectInfo.name,
		currentLevel: props.objectInfo.currentLevel,
		desiredLevel: props.objectInfo.desiredLevel,
		materials: props.objectInfo.materials,
	}

	const deleteObject = (index: any) => {
		props.deleteMethod(index)
	}

	const characterMaterials = objectInfo.materials.map((material: any, index: any) => 
	<Grid item xs={3}>
		<CharacterMaterial key={index} name={material.name} quantity={material.quantity} image={material.image}></CharacterMaterial>
	</Grid>
	);

	return (
		<Grid container spacing={3} direction="row" justify="center" className={classes.plannerDetails}>
			<Grid item xs={3} className={classes.characterContainer}>
				<Card className={classes.characterDetails}>
					<div className={classes.buttonContainer}>
						<Tooltip title="Edit" arrow>
							<EditIcon className={classes.editButton}></EditIcon>
						</Tooltip>
						<Tooltip title="Delete" arrow>
							<CancelIcon className={classes.cancelButton} onClick={() => deleteObject(objectInfo.index)}></CancelIcon>
						</Tooltip>
					</div>
					<CardMedia
						image= {HandleImage(objectInfo.name)}
						className={classes.characterImage}>		
					</CardMedia>
					<Typography variant="h2" align='center' style={{marginBottom: '4px'}}>
						{objectInfo.name}
					</Typography>
					<CardMedia
						image= {HandleImage("AscensionFour")}
						className={classes.ascensionStars}>
					</CardMedia>
					<Typography variant="body1" align='center' style={{fontWeight: 700}}>
						Level {objectInfo.currentLevel} - {objectInfo.desiredLevel}
					</Typography>
				</Card>
			</Grid>
			<Grid item xs={9} style={{minHeight: '404px'}}>
				<Card className={classes.materialDetails}>
					<div style={{padding: '24px'}}>
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
									style={{backgroundColor: "#36384A", borderRadius: "10%", padding: "0", marginTop: '8px', marginRight: '8px'}}
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
										{characterMaterials}
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
