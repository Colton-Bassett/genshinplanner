import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { Card, Grid, CardHeader, CardMedia, CardContent, Collapse, IconButton, Typography, makeStyles, Tooltip } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import CharacterMaterial from './charactermaterial'
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import AscensionStar from '../images/Ascension_Star.png'

const useStyles = makeStyles((theme) => ({
	plannerDetails: {
		maxWidth: "100%", 
		minWidth: "100%",
		margin: "auto",
		minHeight: "420px",
	},
	characterContainer: {
		//maxHeight: '275px',
		//minHeight: '274px',
		minWidth: '170px',
		//display: 'flex',
		//padding: '20px',
	},
	characterDetails: {
		//backgroundColor: "#353749", 
		backgroundColor: '#272937',
		minHeight: '100%',
		minWidth: '170px',
	},
	characterDetailsInside: {
		backgroundColor: "#272937", 
		borderBottomLeftRadius: "20px", 
		borderBottomRightRadius: "20px", 
		paddingBottom: '16px'
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
		backgroundColor: "rgb(54, 56, 74)",
	},
    element: {
        height: "18px", 
        width: "18px",
        position: "absolute",
        top: "-4px",
        right: "18px",
        padding: "3px",
        background: "#36384a",
        borderRadius: "100px",
        boxShadow: "0 3px 6px rgba(0,0,0,.23), 0 3px 6px rgba(0,0,0,.16)"
	},
    ascensionStar: {
        minWidth:"20px", 
        minHeight: "20px", 
        backgroundSize: "contain",
        margin: "0px 2px",
        opacity: ".3",
    },
	ascensionStars: {
		minHeight: "15px", maxWidth: "105px", borderRadius: "10px", margin: 'auto',
		marginBottom: '4px',
	},
	materialDetails: {
		backgroundColor: '#272937 !important', 
		//minHeight: '394px', 
		//minWidth: '100%',
	},
	materialCard: {
		backgroundColor: '#222431 !important', 
		minHeight: '346px', 
		minWidth: '100%',
	},
	materialHeader: {
		//paddingBottom: "6px"
	},
	materialTitle: {
		// fontSize: "18px", 
		// fontWeight: "bold"
	},
	materialContent: {
		padding: '16px',
		"&:last-child": {
            paddingBottom: '16px'
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
		typeImage: props.objectInfo.typeImage,
		name: props.objectInfo.name,
		talentMat: props.objectInfo.talentMat,
		currentLevel: props.objectInfo.currentLevel,
		desiredLevel: props.objectInfo.desiredLevel,
		abilityOneCurrent: props.objectInfo.abilityOneCurrent,
		abilityOneDesired: props.objectInfo.abilityOneDesired,
		abilityTwoCurrent: props.objectInfo.abilityTwoCurrent,
		abilityTwoDesired: props.objectInfo.abilityTwoDesired,
		abilityThreeCurrent: props.objectInfo.abilityThreeCurrent,
		abilityThreeDesired: props.objectInfo.abilityThreeDesired,
		materials: props.objectInfo.materials,
		image: props.objectInfo.image,
	}

	const deleteObject = (index: any) => {
		props.deleteMethod(index)
	}

	const characterMaterials = objectInfo.materials.map((material: any, index: any) => 
	<Grid item key={index} style={{flexGrow: 0, maxWidth: '12.5%', flexBasis: '15%'}}>
		<CharacterMaterial key={index} name={material.name} quantity={material.quantity} image={material.image}></CharacterMaterial>
	</Grid>
	);

	const initialAscensionStars = [
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
    ]
	const [ascensionStars, setAscensionStars] = useState<any[]>(initialAscensionStars);

	const createAscensionStars = ascensionStars.map((star: any, index: any) => 
	<div key={index}>

	<CardMedia
		image= {AscensionStar}
		className={classes.ascensionStar}
		style={{opacity: star.opacity}}
		//onClick={(e) => {setCurrentStarsClick(index)}}
	/>
	</div>
	);

	function getCurrentLevel() {
		let level = objectInfo.currentLevel;
		//console.log("getCurrentLevel", level);

		if (level === 0) {
			level = 1
		} else if (level === 1) {
			level = 20
		} else if (level === 2) {
			level = 40
		} else if (level === 3) {
			level = 50
		} else if (level === 4) {
			level = 60
		} else if (level === 5) {
			level = 70
		} else if (level === 6) {
			level = 80
		}

		return level;
	}

	function getDesiredLevel() {
		let level = objectInfo.desiredLevel;
		//console.log("getDesiredLevel", level);

		if (level === 0) {
			level = 1
		}
		if (level === 1) {
			level = 20
		}
		if (level === 2) {
			level = 40
		}
		if (level === 3) {
			level = 50
		}
		if (level === 4) {
			level = 60
		}
		if (level === 5) {
			level = 70
		}
		if (level === 6) {
			level = 80
		}

		return level;
	}

	useEffect(() => {
		const setAscensionStarsOther = () => {
			//console.log("called setAscensionStarOther", ascensionStars)
			const ascensionLevel = objectInfo.desiredLevel;
			//console.log("ascensionLevel:", ascensionLevel)
			const starsTemp = [...ascensionStars]
	
			for (let i = 0; i < ascensionLevel; i++) {
				//console.log(i);
				starsTemp[i].opacity = "1";
			}
			setAscensionStars(starsTemp)
		}
		setAscensionStarsOther();
	}, []);


	return (
		<Grid container spacing={3} direction="row" justify="center" className={classes.plannerDetails}>
			<Grid item xs={3} className={classes.characterContainer}>
				<Card className={classes.characterDetails}>
					<div className={classes.characterDetailsInside}>
					
					<div className={classes.buttonContainer}>
						<Tooltip title="Edit" arrow>
							<EditIcon className={classes.editButton}></EditIcon>
						</Tooltip>
						<Tooltip title="Delete" arrow>
							<CancelIcon className={classes.cancelButton} onClick={() => deleteObject(objectInfo.index)}></CancelIcon>
						</Tooltip>
					</div>
					<CardMedia
						image= {objectInfo.image}
						className={classes.characterImage}>		
					</CardMedia>
					{/* <img src={objectInfo.typeImage} alt="element" className={classes.element}></img> */}
					<Typography variant="h2" align='center' style={{marginBottom: '4px'}}>
						{objectInfo.name}
					</Typography>
					<div style={{display: 'flex', justifyContent: 'center', marginBottom: '4px'}}>
						{createAscensionStars}

					</div>
					<Typography variant="body1" align='center' style={{fontWeight: 700}}>
						Level {getCurrentLevel()} - {getDesiredLevel()}
					</Typography>
					</div>
					{/* <div style={{backgroundColor: '#353749', minHeight: '116px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<Typography variant="body1" align='center' style={{fontWeight: 700, maxWidth: "120px", maxHeight: "72px", color: '#DEDEDE',}}>
							Talent Level-Up Material: <p style={{margin: '0'}}>"{objectInfo.talentMat}"</p>
						</Typography>
					</div> */}
					<Collapse in={expanded} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography paragraph>
										Method:
									</Typography>
									<Typography paragraph>
										Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
										minutes.
										Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
										minutes.
									</Typography>
								</CardContent>
						</Collapse>

				</Card>
			</Grid>
			<Grid item xs={9} style={{minWidth: '420px'}}>
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
									disabled
								>
								<ExpandMore className={classes.expandButton} />
								</IconButton>
							}
							title={
								<Typography className={classes.materialTitle} variant="h2">
									Materials Overview
								</Typography>
							}
							/>
							<CardContent className={classes.materialContent}>
									<Grid container>
										{characterMaterials}
									</Grid>
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
