import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, Collapse, IconButton, Typography, makeStyles, Tooltip } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import Star from '../images/star.png'

import CharacterMaterial from './charactermaterial'
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import AscensionStar from '../images/Ascension_Star.png'

import HandleLevel from '../logic/handleLevel'

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
		'@media (max-width: 60em)': {
			maxWidth: '100%',
			flexBasis: '100%',
			minWidth: '20rem'
		},
	},
	characterCard: {
		backgroundColor: "#2e3944", 
		// backgroundColor: '#232D38',
		minHeight: '100%',
		minWidth: '10.625rem',
		display: 'flex',
		flexDirection: 'column',
	},
	characterCardContainer: {
		borderBottomRightRadius: '3.5rem', 
		//borderBottomLeftRadius: '1rem', 
		backgroundColor: '#232D38', 
		paddingBottom: '1.25rem',
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		minHeight: '16.5rem'
	},
	talentLevelContainer: {
		display: 'flex', 
		justifyContent: 'center', 
		flexDirection: 'column', 
		flex: 1, 
		backgroundColor: '#2e3944', 
		alignItems: 'center',
		'@media (max-width: 60em)': {
			marginTop: '1.5rem'
		},
	},
	characterCardContainerWeapon: {
		backgroundColor: '#232D38', 
		flex: 1,
	},
	characterButtons: {
		padding: "1rem",
		display: 'flex',
		justifyContent: 'flex-end'
	},
	editButton: {
		color: '#A6A7AC !important',
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1.15);',
			cursor: 'pointer',
			color: "#fff !important",
        },
	},
	cancelButton: {
		color: '#A6A7AC !important',
		float: 'right',
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1.15);',
			cursor: 'pointer',
			color: "#fff !important",
        },
	},
	characterImage: {
		minHeight: "6.563rem", maxWidth: "6.563rem", borderRadius: "0.625rem", margin: 'auto',
		marginBottom: '1rem',
		backgroundColor: "#2e3944",
		boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
	},
	characterImageContainer: {
		position: 'relative'
	},
	characterLevel: {
		minWidth: '60%',
		fontWeight: 700,
		marginBottom: '.15rem',

		'@media (max-width: 60em)': {
			paddingBottom: '1.5rem', 
		},
	},
	talentLevel: {
		minWidth: '60%',
		fontWeight: 700,
		marginBottom: '.15rem',
		color: '#a7b1c1',

		'@media (max-width: 60em)': {
			paddingBottom: '1.5rem', 
		},
	},
    stars: {
		position: 'absolute',
		bottom: '.25rem',
		left: 0,
		width: '100%',
		zIndex: 5,
		display: 'flex',
		justifyContent: 'center',

    },
    star: {
		minHeight: '1.15rem', minWidth: '1.15rem', marginLeft: '-0.20rem', verticalAlign: 'middle', borderStyle: 'none',
    },
    element: {
        height: "1.75rem", 
        width: "1.75rem",
        // position: "absolute",
        // // top: "0rem",
		// right: "50rem",
		float: "left",
        padding: "0.188rem",
        background: "#2e3944",
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
		minWidth: '20rem', 
		flexGrow: 0, 
		maxWidth: '75%', 
		flexBasis: '75%', 
		padding: '0.75rem', 
		boxSizing: 'border-box',
		'@media (max-width: 60em)': {
			maxWidth: '100%',
			flexBasis: '100%',
		},
	},
	materialContainer: {
		backgroundColor: '#2e3944',
		//padding: '1.5rem',
		minHeight: '24.625rem', 
	},
	materialCard: {
		backgroundColor: '#2e3944', 
		minHeight: '21.625rem', 
		minWidth: '100%',
		boxSizing: 'border-box',
		padding: '1.5rem'
	},
	materialHeader: {
		// marginLeft: '.75rem',
		// marginRight: '.75rem',
		// marginBottom: '1.5rem',
		margin: 0,
		padding: '1.5rem 2rem',
		borderBottom: '3px solid #1b242d',
		'@media (max-width: 80em)': {
			// marginLeft: '.5rem',
			// marginRight: '.5rem',
		},
	},
	materialTitle: {
	},
	materialContent: {
		padding: '1.5rem',
		// width: 'calc(100% + 2rem)',
		// margin: '-1rem',
		"&:last-child": {
            paddingBottom: '0rem'
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
		currentAscension: props.objectInfo.currentAscension,
		desiredAscension: props.objectInfo.desiredAscension,
		currentMax: props.objectInfo.currentMax,
		desiredMax: props.objectInfo.desiredMax,
		abilityOneCurrent: props.objectInfo.abilityOneCurrent,
		abilityOneDesired: props.objectInfo.abilityOneDesired,
		abilityTwoCurrent: props.objectInfo.abilityTwoCurrent,
		abilityTwoDesired: props.objectInfo.abilityTwoDesired,
		abilityThreeCurrent: props.objectInfo.abilityThreeCurrent,
		abilityThreeDesired: props.objectInfo.abilityThreeDesired,
		materials: props.objectInfo.materials,
		image: props.objectInfo.image,
		id: props.objectInfo.id,
	}
	const setItems = props.setItems;
	const items = props.items;
	const summary = props.summary;
	const setSummary = props.setSummary;

	const [expanded, setExpanded] = React.useState(false);
	const [ascensionStars, setAscensionStars] = useState<any[]>(initialAscensionStars);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const deleteObject = (id: any, items: any, setItems: any, summary: any, setSummary: any) => {
		console.log("deleteObject() characterOverview id:", objectInfo.id);
		props.deleteMethod(id, items, setItems, summary, setSummary);
	}

	function getcurrentAscension() {
		let level = objectInfo.currentAscension;
		//console.log("getcurrentAscension", objectInfo);

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

	function getdesiredAscension() {
		let level = objectInfo.desiredAscension;
		//console.log("getdesiredAscension", objectInfo.desiredAscension);

		if (level === 0) {
			level = 1
		}
		else if (level === 1) {
			level = 20
		}
		else if (level === 2) {
			level = 40
		}
		else if (level === 3) {
			level = 50
		}
		else if (level === 4) {
			level = 60
		}
		else if (level === 5) {
			level = 70
		}
		else if (level === 6) {
			level = 80
		}

		return level;
	}

	function showLevel(current: number, desired: number) {
		if (current === 1 && desired === 1) {
			// do nothing
			return
		}
		else {
			let currentLevel = HandleLevel(objectInfo.currentAscension, objectInfo.currentMax);
			let desiredLevel = HandleLevel(objectInfo.desiredAscension, objectInfo.desiredMax);
			return (<Typography variant="body1" align='center' className={classes.characterLevel}>
						Lv. {currentLevel} - {desiredLevel}
					</Typography>)
		}
	}

	function getCurrentTalentLevel(num: number) {
		// accounting for -1 is because all talents are +1 in setMaterials.ts
		if (objectInfo.type === "character") {
			switch(num) {
				case 1:
					return objectInfo.abilityOneCurrent - 1;
				case 2:
					return objectInfo.abilityTwoCurrent - 1;
				case 3:
					return objectInfo.abilityThreeCurrent - 1;
			}
		}
	}

	function getDesiredTalentLevel(num: number) {
		if (objectInfo.type === "character") {
			switch(num) {
				case 1:
					return objectInfo.abilityOneDesired;
				case 2:
					return objectInfo.abilityTwoDesired;
				case 3:
					return objectInfo.abilityThreeDesired;
			}
		}
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
				if (i === 0) {
					stars.push(<CardMedia
						image= {Star}
						className= {classes.star}
						style={{marginLeft: 0}}
						key= {i}
					/>)					
				} else {
					stars.push(<CardMedia
						image= {Star}
						className= {classes.star}
						key= {i}
					/>)
				}
			}
		} else{
			for (let i = 0; i < 5; i++) {
				if (i === 0) {
					stars.push(<CardMedia
						image= {Star}
						className= {classes.star}
						style={{marginLeft: 0}}
						key= {i}
					/>)					
				} else {
					stars.push(<CardMedia
						image= {Star}
						className= {classes.star}
						key= {i}
					/>)
				}
			}
		}
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
		const ascensionLevel = objectInfo.desiredAscension;
		const starsTemp = [...ascensionStars]

		for (let i = 0; i < ascensionLevel; i++) {
			//console.log(i);
			starsTemp[i].opacity = "1";
		}
		setAscensionStars(starsTemp)
	}

	function showTalentLevels() {
		if (objectInfo.type === "character" && getCurrentTalentLevel(1) !== 0) {
			return 	<div className={classes.talentLevelContainer}>
			<Typography variant="body1" align='center' className={classes.talentLevel}>
				<span style={{float: 'left'}}>Atk Lv. </span> <span style={{float: 'right'}}>{getCurrentTalentLevel(1)} - {getDesiredTalentLevel(1)}</span>
			</Typography>
			<Typography variant="body1" align='center' className={classes.talentLevel}>
				<span style={{float: 'left'}}>Skill Lv.</span><span style={{float: 'right'}}>{getCurrentTalentLevel(2)} - {getDesiredTalentLevel(2)}</span>
			</Typography>
			<Typography variant="body1" align='center' className={classes.talentLevel}>
				<span style={{float: 'left'}}>Burst Lv.</span> <span style={{float: 'right'}}>{getCurrentTalentLevel(3)} - {getDesiredTalentLevel(3)}</span>
			</Typography>
		</div>
		}
		else {
		}

	}

	useEffect(() => {
		setAscensionStarsOther();
	}, []);

	return (
		<div className={classes.plannerContainer}>
			<div className={classes.character}>
				<Card className={classes.characterCard}>		
					<div className={ objectInfo.type === "character" ? classes.characterCardContainer : classes.characterCardContainerWeapon}>
						<div className={classes.characterButtons}>
							{/* <Tooltip title="Edit" arrow>
								<EditIcon className={classes.editButton}></EditIcon>
							</Tooltip> */}
							<Tooltip title="Delete" arrow>
								<CancelIcon className={classes.cancelButton} onClick={() => deleteObject(objectInfo.id, items, setItems, summary, setSummary)}></CancelIcon>
							</Tooltip>
						</div>
						<div className={classes.characterImageContainer}>
							<CardMedia
								image= {objectInfo.image}
								className={classes.characterImage}>	
								{elementImage()}
								{weaponRarity()}							
							</CardMedia>

						</div>


						<Typography variant="h2" align='center' style={{maxWidth: '10rem', margin: '0rem auto 0.4rem auto'}}>
							{objectInfo.name}
						</Typography>
						{showLevel(getcurrentAscension(), getdesiredAscension())}
						<div style={{display: 'flex', justifyContent: 'center', marginBottom: '0.25rem'}}>
							{createAscensionStars}
						</div>
					</div>
					

					{showTalentLevels()}

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
					{/* <Card className={classes.materialCard}> */}
						<CardHeader
						className={classes.materialHeader}
						// action={
						// 	<IconButton
						// 		disableFocusRipple
						// 		disableRipple
						// 		className={clsx(classes.expand, {
						// 		[classes.expandOpen]: expanded,
						// 		})}
						// 		onClick={handleExpandClick}
						// 		aria-expanded={expanded}
						// 		aria-label="show more"
						// 		style={{backgroundColor: "#2e3944", borderRadius: "10%", padding: "0", marginTop: '0.5rem', marginRight: '0.5rem'}}
						// 		disabled
						// 	>
						// 	<ExpandMore className={classes.expandButton} />
						// 	</IconButton>
						// }
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
					{/* </Card> */}
				</Card>
			</div>
		</div>
	);
}
