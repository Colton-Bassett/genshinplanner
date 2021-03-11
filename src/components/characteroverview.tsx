import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, Collapse, IconButton, Typography, makeStyles, Tooltip } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';


import CharacterMaterial from './charactermaterial'
import CancelIcon from '@material-ui/icons/Cancel';

import HandleLevel from '../logic/handleLevel'
const Star = `https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Rarity_Star.png`;
const AscensionStar = `https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Ascension_Star.png`;

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
			minWidth: '19rem',
		},
	},
	characterCard: {
		backgroundColor: "#2e3944", 
		minHeight: '100%',
		minWidth: '10.625rem',
		display: 'flex',
		flexDirection: 'column',
	},
	characterCardContainer: {
		borderBottomRightRadius: '3.5rem', 
		backgroundColor: '#232D38', 
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		minHeight: '17.75rem'
	},
	characterCardInnerContainer: {
		padding: '0rem 0rem 1.5rem 0rem',
	},
	talentLevelContainer: {
		display: 'flex', 
		justifyContent: 'flex-start', 
		marginTop: '1rem',
		flexDirection: 'column', 
		flex: 1, 
		backgroundColor: '#2e3944', 
		alignItems: 'center',
		'@media (max-width: 60em)': {
			margin: '1.5rem 0rem',
		},
	},
	characterCardContainerWeapon: {
		backgroundColor: '#232D38', 
		boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
		minHeight: '16.5rem',
		flex: 1,
	},
	characterButtons: {
		padding: "1rem",
		display: 'flex',
		justifyContent: 'flex-end'
	},
	editButton: {
		color: '#A7B1C1',
		cursor: 'pointer',
		transition: 'all .2s',
		'&:hover': {
			transform: 'scale(1.15);',
			cursor: 'pointer',
			color: "#fff !important",
        },
	},
	cancelButton: {
		color: '#A7B1C1',
		float: 'right',
		cursor: 'pointer',
		transition: 'all .2s',
		'&:hover': {
			transform: 'scale(1.15);',
			cursor: 'pointer',
			color: "#fff",
        },
	},
    tooltip: {
        backgroundColor: "#40484f", 
        maxWidth: '10rem',
        padding: '.5rem',
        fontSize: '.75rem',
        fontWeight: 400,
		lineHeight: '1.3em',
		borderRadius: 0,
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
		},
	},
	talentLevel: {
		minWidth: '60%',
		fontWeight: 700,
		marginBottom: '.15rem',
		color: '#a7b1c1',
		'@media (max-width: 60em)': {
			paddingBottom: '.5rem', 
			minWidth: '25%',
		},
		'@media (max-width: 45em)': {
			minWidth: '35%',
		},
		'@media (max-width: 35em)': {
			minWidth: '40%',
		},
		'@media (max-width: 25em)': {
			minWidth: '50%',
		},
	},
	talentLevelBurst: {
		minWidth: '60%',
		fontWeight: 700,
		marginBottom: '.15rem',
		color: '#a7b1c1',
		'@media (max-width: 60em)': {
			minWidth: '25%',
		},
		'@media (max-width: 45em)': {
			minWidth: '35%',
		},
		'@media (max-width: 35em)': {
			minWidth: '40%',
		},
		'@media (max-width: 25em)': {
			minWidth: '50%',
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
		minWidth: '19rem', 
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
		backgroundColor: '#232D38',
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
		margin: 0,
		padding: '1.5rem 2rem',
		borderBottom: '3px solid #1b242d',
		'@media (max-width: 80em)': {
		},
	},
	materialTitle: {
	},
	materialContent: {
		padding: '1.75rem 1.5rem 1.5rem 1.5rem',
		"&:last-child": {
            paddingBottom: '.5rem'
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
	testClass: {
		backgroundColor: 'pink',
	}
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
	
	const ascensionPlan = {
		id: props.ascensionPlan.id,
		index: props.ascensionPlan.index,
		name: props.ascensionPlan.name,
		type: props.ascensionPlan.type,
		typeImage: props.ascensionPlan.typeImage,
		stars: props.ascensionPlan.stars,
		image: props.ascensionPlan.image,

		currentMax: props.ascensionPlan.currentMax,
		desiredMax: props.ascensionPlan.desiredMax,
		startAscension: props.ascensionPlan.startAscension,
		endAscension: props.ascensionPlan.endAscension,

		talentOneStart: props.ascensionPlan.talentOneStart,
		talentOneEnd: props.ascensionPlan.talentOneEnd,
		talentTwoStart: props.ascensionPlan.talentTwoStart,
		talentTwoEnd: props.ascensionPlan.talentTwoEnd,
		talentThreeStart: props.ascensionPlan.talentThreeStart,
		talentThreeEnd: props.ascensionPlan.talentThreeEnd,

		talentMat: props.ascensionPlan.talentMat,
		materials: props.ascensionPlan.materials,
	}
	const setAscensionPlans = props.setAscensionPlans;
	const ascensionPlans = props.ascensionPlans;
	const summary = props.summary;
	const setSummary = props.setSummary;

	const [expanded, setExpanded] = React.useState(false);
	const [ascensionStars, setAscensionStars] = useState<any[]>(initialAscensionStars);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const deleteObject = (id: any, items: any, setItems: any, summary: any, setSummary: any) => {
		console.log("deleteObject() characterOverview id:", ascensionPlan.id);
		props.deleteMethod(id, items, setItems, summary, setSummary);
	}

	function getStartAscension() {
		let level = ascensionPlan.startAscension;
		console.log("getStartAscension level:", level)
		//console.log("getstartAscension", ascensionPlan);

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

	function getEndAscension() {
		let level = ascensionPlan.endAscension;
		//console.log("getendAscension", ascensionPlan.endAscension);

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
		console.log("showing current and desired", current, desired);
		if (current === 1 && desired === 1) {
			// do nothing
			return
		}
		else {
			let currentLevel = HandleLevel(ascensionPlan.startAscension, ascensionPlan.currentMax);
			let desiredLevel = HandleLevel(ascensionPlan.endAscension, ascensionPlan.desiredMax);
			return (<Typography variant="body1" align='center' className={classes.characterLevel}>
						Lv. {currentLevel} - {desiredLevel}
					</Typography>)
		}
	}

	function getCurrentTalentLevel(num: number) {
		// accounting for -1 is because all talents are +1 in setMaterials.ts
		if (ascensionPlan.type === "character") {
			switch(num) {
				case 1:
					return ascensionPlan.talentOneStart - 1;
				case 2:
					return ascensionPlan.talentTwoStart - 1;
				case 3:
					return ascensionPlan.talentThreeStart - 1;
			}
		}
	}

	function getDesiredTalentLevel(num: number) {
		if (ascensionPlan.type === "character") {
			switch(num) {
				case 1:
					return ascensionPlan.talentOneEnd;
				case 2:
					return ascensionPlan.talentTwoEnd;
				case 3:
					return ascensionPlan.talentThreeEnd;
			}
		}
	}

	function elementImage() {
		if (ascensionPlan.type === "character") {
			return <img src={ascensionPlan.typeImage} alt="element" className={classes.element}></img>
		}
	}

	function weaponRarity() {
		//console.log(ascensionPlan)
		if (ascensionPlan.type === "weapon") {
			return createRarityStars()
		}
	}

	function createRarityStars() {
		var stars = []
		if (ascensionPlan.stars === "Four") {
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

	const characterMaterials = ascensionPlan.materials && ascensionPlan.materials.map((material: any, index: any) => 
		<CharacterMaterial key={index} name={material.name} quantity={material.quantity} image={material.image} type={material.type} description={material.description} sources={material.sources} stars={material.stars}></CharacterMaterial>
	);

	const createAscensionStars = ascensionStars && ascensionStars.map((star: any, index: any) => 
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
		const ascensionLevel = ascensionPlan.endAscension;
		const starsTemp = [...ascensionStars]

		for (let i = 0; i < ascensionLevel; i++) {
			//console.log(i);
			starsTemp[i].opacity = "1";
		}
		setAscensionStars(starsTemp)
	}

	function showTalentLevels() {
		if (ascensionPlan.type === "character" && getCurrentTalentLevel(1) !== 0) {
			return 	<div className={classes.talentLevelContainer}>
			<Typography variant="body1" align='center' className={classes.talentLevel}>
				<span style={{float: 'left'}}>Atk Lv. </span> <span style={{float: 'right'}}>{getCurrentTalentLevel(1)} - {getDesiredTalentLevel(1)}</span>
			</Typography>
			<Typography variant="body1" align='center' className={classes.talentLevel}>
				<span style={{float: 'left'}}>Skill Lv.</span><span style={{float: 'right'}}>{getCurrentTalentLevel(2)} - {getDesiredTalentLevel(2)}</span>
			</Typography>
			<Typography variant="body1" align='center' className={classes.talentLevelBurst}>
				<span style={{float: 'left'}}>Burst Lv.</span> <span style={{float: 'right'}}>{getCurrentTalentLevel(3)} - {getDesiredTalentLevel(3)}</span>
			</Typography>
		</div>
		}
		else {
		}

	}

	useEffect(() => {
		// fetchMaterials;
		setAscensionStarsOther();
	}, []);

	return (
		<div className={classes.plannerContainer}>
			<div className={classes.character}>
				<Card className={classes.characterCard}>		
					<div className={ ascensionPlan.type === "character" ? classes.characterCardContainer : classes.characterCardContainerWeapon}>

						<div className={classes.characterButtons}>
							<Tooltip classes={{tooltip: classes.tooltip}}title="Delete this plan" arrow>
								<CancelIcon className={classes.cancelButton} onClick={() => deleteObject(ascensionPlan.id, ascensionPlans, setAscensionPlans, summary, setSummary)}></CancelIcon>
							</Tooltip>
						</div>
						<div className={ classes.characterCardInnerContainer}>
							<div className={classes.characterImageContainer}>
								<CardMedia
									image= {ascensionPlan.image}
									className={classes.characterImage}>	
									{elementImage()}
									{weaponRarity()}							
								</CardMedia>
							</div>

							<Typography variant="h2" align='center' style={{maxWidth: '10rem', margin: '0rem auto 0.4rem auto'}}>
								{ascensionPlan.name}
							</Typography>
							{showLevel(getStartAscension(), getEndAscension())}
							<div style={{display: 'flex', justifyContent: 'center', marginBottom: '0.25rem'}}>
								{createAscensionStars}
							</div>
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
