import React from 'react';
import clsx from 'clsx';
import { Card, Grid, CardHeader, CardMedia, CardContent, Collapse, IconButton, Typography, makeStyles, Tooltip } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import CharacterMaterial from './charactermaterial'
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import HandleImage from '../logic/handleImage'

const useStyles = makeStyles((theme) => ({
	gridRoot: {
		maxWidth: "100%", 
		margin: "auto"
	},
	characterRoot: {
		backgroundColor: "#272937 !important", 
		maxHeight: '275px',
		minHeight: '275px',
		minWidth: '170px'
	},
	characterContainer: {
		margin: "auto", 
	
	},
	characterButtons: {
		padding: "12px 12px 0px 12px"
	},
	cardmediaContainer: {
		maxWidth: "105px", 
		margin: 'auto'
	},
	editIcon: {
		color: '#A6A7AC !important',
		cursor: 'pointer',
		'&:hover': {
			color: "#fff !important",
		 },
	},
	cancelIcon: {
		color: '#A6A7AC !important',
		float: 'right',
		cursor: 'pointer',
		'&:hover': {
			color: "#fff !important",
		 },
	},
	root: {
		maxWidth: 345,
	},
	materialRoot: {
		backgroundColor: '#272937 !important', 
		minHeight: '275px', 
		minWidth: '100%',
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
		//paddingTop: "0px", paddingBottom: "10px"
		"&:last-child": {
            paddingBottom: '6px'
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
		id: props.objectInfo.id,
		type: props.objectInfo.type,
		name: props.objectInfo.name,
		ascension: props.objectInfo.ascension,
		levelStart: props.objectInfo.levelStart,
		levelEnd: props.objectInfo.levelEnd,
		materials: props.objectInfo.materials,
	}

	const deleteObject = (id: any) => {
		props.deleteMethod(id)
	}

	const characterMaterials = objectInfo.materials.map((material: any, index: any) => 
	<Grid item xs={3}>
		<CharacterMaterial name={material.name} quantity={material.quantity}></CharacterMaterial>
	</Grid>
	);

	return (
		<Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.gridRoot}>
			<Grid item xs={3}>
				<Card className={classes.characterRoot}> 
					<Grid item xs={12} className={classes.characterButtons}>
						<Tooltip title="Edit" arrow>
							<EditIcon className={classes.editIcon}></EditIcon>
						</Tooltip>
						<Tooltip title="Delete" arrow>
							<CancelIcon className={classes.cancelIcon} onClick={() => deleteObject(objectInfo.id)}></CancelIcon>
						</Tooltip>

					</Grid>
					<Grid item xs={8} className={classes.characterContainer}>
						<div className={classes.cardmediaContainer}>
						<CardMedia
						image= {HandleImage(objectInfo.name)}
						style={{ minHeight: "105px",  borderRadius: "10px"}}
						/>
						</div>
					</Grid>
					<Grid item xs={8} style={{margin: 'auto'}}>
						<Typography variant="h2" align='center'>
							{objectInfo.name}
						</Typography>
					</Grid>
					<Grid item xs={6} style={{margin: 'auto'}}>
					<div className={classes.cardmediaContainer}>
					<CardMedia
						image= {HandleImage(objectInfo.ascension)}
						style={{ minHeight: "15px", borderRadius: "10px" }}
					/>
					</div>
					</Grid>
					<Grid item xs={8} style={{margin: 'auto'}}>
						<Typography variant="body1" align='center' style={{fontWeight: 700}}>
							Level {objectInfo.levelStart} - {objectInfo.levelEnd}
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
