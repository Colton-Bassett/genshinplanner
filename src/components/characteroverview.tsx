import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, Collapse, IconButton, Typography, makeStyles, Tooltip } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import Star from '../images/star.png'

import CharacterMaterial from './charactermaterial'
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import AscensionStar from '../images/Ascension_Star.png'
import FivestarBackground from '../images/fourstar_background_sm.png'

const useStyles = makeStyles((theme) => ({
	plannerContainer: {
		maxWidth: "100%", 
		minWidth: "100%",
		margin: "auto",
		justifyContent: "center",
		display: "flex",
		flexWrap: "wrap",
		boxSizing: "border-box",
	},
	character: {
		maxWidth: '25%',
		flexBasis: '25%',
		flexGrow: 0,
		boxSizing: 'border-box',
		padding: '0.75rem',
		// add media sizes
	},
	characterCard: {
		//backgroundColor: "#353749", 
		backgroundColor: '#272937',
		minHeight: '100%',
		minWidth: '10.625rem',
	},
	characterButtons: {
		padding: "1rem"
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
		minHeight: "6.563rem", maxWidth: "6.563rem", borderRadius: "0.625rem", margin: 'auto',
		marginBottom: '1rem',
		backgroundColor: "rgb(54, 56, 74)",
		boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
	},
	characterImageContainer: {
		// backgroundImage: `url(${FivestarBackground})`, 
		// minHeight: "6.563rem", 
		// maxWidth: "6.563rem", 
		// borderRadius: "0.625rem", 
		// margin: 'auto', 
		// backgroundSize: 'cover', 
		position: 'relative'
	},
    stars: {
        display: 'flex', 
        flexDirection: 'row', 
		//maxWidth: '12.5rem',
		position: 'absolute',
		bottom: '-0.25rem',
		left: 0,
		justifyContent: 'center',
		width: '100%'
    },
    star: {
        minHeight: '1.15rem', minWidth: '1.15rem'
    },
    element: {
        height: "1.75rem", 
        width: "1.75rem",
        // position: "absolute",
        // // top: "0rem",
		// right: "50rem",
		float: "left",
        padding: "0.188rem",
        background: "#36384a",
        borderRadius: "6.25rem",
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)"
	},
    ascensionStar: {
        minWidth:"1.25rem", 
        minHeight: "1.25rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
    },
	ascensionStars: {
		minHeight: "1rem", maxWidth: "6.563rem", borderRadius: "0.625rem", margin: 'auto',
		marginBottom: '0.25rem',
	},
	materials: {
		minWidth: '26.25rem', 
		flexGrow: 0, 
		maxWidth: '75%', 
		flexBasis: '75%', 
		padding: '0.75rem', 
		boxSizing: 'border-box',
		// add media sizes
	},
	materialContainer: {
		backgroundColor: '#272937 !important', 
		padding: '1.5rem',
	},
	materialCard: {
		backgroundColor: '#222431 !important', 
		minHeight: '21.625rem', 
		minWidth: '100%',
	},
	materialHeader: {
		paddingLeft: '1.5rem',
		paddingRight: '1.5rem'
	},
	materialTitle: {
	},
	materialContent: {
		padding: '1rem',
		"&:last-child": {
            paddingBottom: '1rem'
          }
	},
	expandButton: {
		color: 'white', fontSize: '1.625rem'
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

	const initialAscensionStars = [
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
	]
	
	const objectInfo = {
		index: props.objectInfo.index,
		type: props.objectInfo.type,
		typeImage: props.objectInfo.typeImage,
		name: props.objectInfo.name,
		stars: props.objectInfo.stars,
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

	const [expanded, setExpanded] = React.useState(false);
	const [ascensionStars, setAscensionStars] = useState<any[]>(initialAscensionStars);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const deleteObject = (index: any) => {
		props.deleteMethod(index)
	}

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

	function elementImage() {
		if (objectInfo.type === "character") {
			return <img src={objectInfo.typeImage} alt="element" className={classes.element}></img>
		}
	}

	function weaponRarity() {
		//console.log(objectInfo)
		if (objectInfo.type === "weapon") {
			return createRarityStars()
		}
	}

	function createRarityStars() {
		var stars = []
		if (objectInfo.stars === "Four") {
			//console.log("CreateRarityStars Four")
			for (let i = 0; i < 4; i++) {
				stars.push(<CardMedia
					image= {Star}
					className= {classes.star}
					key= {i}
				/>)

			}

		} else{
			//console.log("CreateRarityStars Five")
			for (let i = 0; i < 5; i++) {
				stars.push(<CardMedia
					image= {Star}
					className= {classes.star}
					key= {i}
				/>)
			}

		}
		//console.log("CreateRarityStars stars", stars)
		return <div className={classes.stars}>{stars}</div>
	}

	const characterMaterials = objectInfo.materials.map((material: any, index: any) => 
		<CharacterMaterial key={index} name={material.name} quantity={material.quantity} image={material.image} type={material.type} description={material.description} sources={material.sources} stars={material.stars}></CharacterMaterial>
	);

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

	const setAscensionStarsOther = () => {
		const ascensionLevel = objectInfo.desiredLevel;
		const starsTemp = [...ascensionStars]

		for (let i = 0; i < ascensionLevel; i++) {
			//console.log(i);
			starsTemp[i].opacity = "1";
		}
		setAscensionStars(starsTemp)
	}

	useEffect(() => {
		setAscensionStarsOther();
	}, []);

	return (
		<div className={classes.plannerContainer}>
			<div className={classes.character}>
				<Card className={classes.characterCard}>		
					<div className={classes.characterButtons}>
						<Tooltip title="Edit" arrow>
							<EditIcon className={classes.editButton}></EditIcon>
						</Tooltip>
						<Tooltip title="Delete" arrow>
							<CancelIcon className={classes.cancelButton} onClick={() => deleteObject(objectInfo.index)}></CancelIcon>
						</Tooltip>
					</div>
					<div className={classes.characterImageContainer}>
						<CardMedia
							image= {objectInfo.image}
							className={classes.characterImage}>	
							{elementImage()}
							
						</CardMedia>
							{weaponRarity()}
					</div>


					<Typography variant="h2" align='center' style={{maxWidth: '10rem', margin: '0rem auto 0.4rem auto'}}>
						{objectInfo.name}
					</Typography>
					<div style={{display: 'flex', justifyContent: 'center', marginBottom: '0.25rem'}}>
						{createAscensionStars}

					</div>
					<Typography variant="body1" align='center' style={{fontWeight: 700}}>
						Lv. {getCurrentLevel()} - {getDesiredLevel()}
					</Typography>
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
			</div>
			<div className={classes.materials}>
				<Card className={classes.materialContainer}>
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
								style={{backgroundColor: "#36384A", borderRadius: "10%", padding: "0", marginTop: '0.5rem', marginRight: '0.5rem'}}
								disabled
							>
							<ExpandMore className={classes.expandButton} />
							</IconButton>
						}
						title={
							<Typography className={classes.materialTitle} variant="h2">
								Material Overview
							</Typography>
						}
						/>
						<CardContent className={classes.materialContent}>
								<div style={{display: "flex", boxSizing: "border-box", flexWrap: "wrap", width: "100%"}}>
									{characterMaterials}
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
				</Card>
			</div>
		</div>
	);
}
