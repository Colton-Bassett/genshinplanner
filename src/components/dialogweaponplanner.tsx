import React, {useState, } from 'react';
import { Card, makeStyles, CardMedia, Typography, } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import AscensionStar from '../images/Ascension_Star.png'
import Characterbg from '../images/characterbg.png'

import SetWeaponMaterials from '../logic/setweaponmaterials';
import CreateNewSummary from '../logic/createNewSummary'
import SetImages from '../logic/setimages'

import Star from '../images/star.png'

const useStyles = makeStyles(() => ({

    weapon: {

    },
    weaponHeader: {
        position: 'relative', 
        display: 'flex', 
        overflow: 'hidden', 
        padding: '1.563rem 0rem',
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        borderBottom: 'solid 0.313rem #36384a'
    },
    backgroundImage: {
        position: 'absolute', 
        left: 0, 
        top: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1, 
        backgroundPosition: '50% 40%', 
        boxSizing: 'border-box', 
        backgroundImage: `url(${Characterbg})`,
        opacity: 0.6,
    },
    weaponImageContainer: {
        maxWidth: '20%', 
        minWidth: '20%', 
        zIndex: 3, 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex',
    },
    weaponImage: {
        maxHeight: "6rem",
        minWidth: '6rem',
        minHeight: '6rem',
        maxWidth: "6rem",
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        backgroundColor: "#36384a",
        borderRadius: "0.375rem",
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
    },
    stars: {
        display: 'flex', 
        flexDirection: 'row', 
        maxWidth: '12.5rem',
        position: 'absolute', bottom: '-.25rem', justifyContent: 'center'
    },
    star: {
        minHeight: '1.15rem', minWidth: '1.15rem', 
    },
    weaponTitle: {
        maxWidth: '60%', 
        minWidth: '60%', 
        zIndex: 3, 
        display: 'flex', 
        flexDirection: 'column'
    },
    buttons: {
        maxWidth: '20%', 
        minWidth: '20%', 
        zIndex: 3, 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex',
    },
    buttonContainer: {
        marginRight: '2rem'
    },
    checkIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#272937",
        color: "#58CCA5",
        marginRight: "1.5rem",
        cursor: "pointer",
        borderRadius: '0.188rem',
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        transition: 'transform .2s;', /* Animation */
        overflow: 'visible',
        '&:hover': {
            boxShadow: '0rem 0rem 0rem 0.125rem #e9e5dc;',
            borderRadius: "0.188rem",
            transform: 'scale(1.05);',
            cursor: 'pointer',
            //color: 'white',
         },
    },
    closeIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#272937",
        color: "#f56262",
        cursor: "pointer",
        borderRadius: '0.188rem',
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        transition: 'transform .2s;', /* Animation */
        overflow: 'visible',
        '&:hover': {
            boxShadow: '0rem 0rem 0rem 0.125rem #e9e5dc;',
            borderRadius: "0.188rem",
            transform: 'scale(1.05);',
            cursor: 'pointer',
         },
    },
    weaponContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0,
        maxWidth: '60%',
        flexBasis: '60%',
        margin: 'auto',
    },
    ascension: {
        backgroundColor: "#272937",
        minHeight: "13.75rem",
        maxHeight: "13.75rem",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        padding: '1rem',
        borderRadius: '0.188rem',
    },
    ascensionStar: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        '&:hover': {
            cursor: "pointer",
         },
    },

}));

export default function DialogWeaponPlanner(props: any) {
    const classes = useStyles();
    const weapon = props.weapon;
    const dialogClose = props.dialogClose;
    const ascensionDetails = props.ascensionDetails;
    //const setAscensionDetails = props.setAscensionDetails;
    const items = props.items;
    const setItems = props.setItems;
    const materials = props.materials;
    const summary = props.summary;
    const setSummary = props.setSummary;

    const initialCurrentStars = [
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},
        {opacity: "0.3"},

    ]
    const initialDesiredStars = [
        {starOne: {opacity: "0.3"}},
        {starTwo: {opacity: "0.3"}},
        {starThree: {opacity: "0.3"}},
        {starFour: {opacity: "0.3"}},
        {starFive: {opacity: "0.3"}},
        {starSix: {opacity: "0.3"}},
    ]
    const [currentStars, setCurrentStars] = useState<any[]>(initialCurrentStars);
    const [desiredStars, setDesiredStars] = useState<any[]>(initialDesiredStars);

    function setCurrentStarsClick(index: any) {
        if (index === 5) {
            setDesiredStarsClick(index)
            
        } else if (desiredStars[index + 1].opacity === "1") {

        } else {
            setDesiredStarsClick(index)
        }

        const starsTemp = [...currentStars]
        // reset stars
        for (let i = 0; i <= 5; i++) {
            starsTemp[i].opacity = "0.3";
        }
        // set stars based on index
        for (let i =0; i <= index; i++) {
            starsTemp[i].opacity = "1";
        }
        setCurrentStars(starsTemp)
        //console.log("currentStars:", currentStars);
    }

    function setDesiredStarsClick(index: any) {

            const starsTemp = [...desiredStars]
            // reset stars
            for (let i = 0; i <= 5; i++) {
                starsTemp[i].opacity = "0.3";
            }
            // set stars based on index
            for (let i =0; i <= index; i++) {
                starsTemp[i].opacity = "1";
            }
            setDesiredStars(starsTemp)
            //console.log("desiredStars:", desiredStars);
    }

    const createCurrentStars = currentStars.map((star: any, index: any) => 
        <div key={index}>
            <CardMedia
                image= {AscensionStar}
                className={classes.ascensionStar}
                style={{opacity: star.opacity}}
                onClick={(e) => {setCurrentStarsClick(index)}}
            />
        </div>
    );

    const createDesiredStars = desiredStars.map((star: any, index: any) => 
        <div key={index}>
            <CardMedia
                image= {AscensionStar}
                className={classes.ascensionStar}
                style={{opacity: star.opacity}}
                onClick={(e) => {setDesiredStarsClick(index)}}
            />
        </div>
    );

    function countCurrentStars() {
        let count = 0;
        for (let i = 0; i < currentStars.length; i++) {
            if (currentStars[i].opacity === "1") {
                count++
            }
         }
        //console.log("countCurrentStars:", count);
        return count;
    }

    function countDesiredStars() {
        let count = 0;
        for (let i = 0; i < desiredStars.length; i++) {
            if (desiredStars[i].opacity === "1") {
                count++
            }
         }
        //console.log("countDesiredStars:", count);
        return count; 
    }

    function createRarityStars() {
		var stars = []
		if (weapon.stars === "Four") {
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
    
    function dialogAddMaterial(material: any, newSummary: any) {
        let duplicateMaterial = newSummary.find((m: { name: any; }) => m.name === material.name);
        if (duplicateMaterial) {
            duplicateMaterial.quantity += material.quantity
        } else {
            newSummary.push(material);
        }
    }

    function createNewSummary(materials: any) {
        let newSummary = summary;
        if (newSummary.length < 1) {
            return newSummary = materials;
        } else {
            for (let i = 0; i < materials.length; i++) {
                dialogAddMaterial(materials[i], newSummary);
            }
        }
        return newSummary;
    }


    async function submitDialog() {
        let i = [...items]
        //console.log("here is temp i", i);
        //console.log("here is value:", abilityOne);
        let a = {...ascensionDetails}
        a.index = items.length;
        a.type = 'weapon';
        //console.log("character name:", character);
        a.name = weapon.name;
        a.image = weapon.image;
        a.stars = weapon.stars;
        a.currentLevel = countCurrentStars();
        a.desiredLevel = countDesiredStars();

        //console.log("submitDialog ascensionDetails:", a);

        // a.materials = [
        //     {name: "Firm_Arrowhead", quantity: "15", image: ""}, {name: "Sharp_Arrowhead", quantity: "23", image: ""},
        //     {name: "Weathered_Arrowhead", quantity: "27", image: ""}, {name: "Heavy_Horn", quantity: "23", image: ""}, 
        //     {name: "Black_Bronze_Horn", quantity: "27", image: ""}, {name: "Black_Crystal_Horn", quantity: "41", image: ""}, 
        //     {name: "Tile_of_Decarabian's_Tower", quantity: "5", image: ""}, {name: "Debris_of_Decarabian's_City", quantity: "14", image: ""}, 
        //     {name: "Fragment_of_Decarabian's_Epic", quantity: "14", image: ""}, {name: "Scattered_Piece_of_Decarabian's_Dream", quantity: "6", image: ""}, 
        // ]

        a.materials = SetWeaponMaterials(weapon, a, materials);
        const matties = await SetImages(a.materials);
        a.materials = matties;

        //setAscensionDetails(a);
        //console.log("ascensionDetails", a);
        i.push(a)
        setItems(i);

        //// adding this weapon's materials to summary
        let newSummary = CreateNewSummary(matties, summary);
        //// sorting newSummary
        newSummary?.sort((a: { position: string; }, b: { position: string; }) => parseFloat(a.position) - parseFloat(b.position));

        console.log("newSummary:", newSummary);
        setSummary(newSummary)

        dialogClose()
    }
    

    return (
        <div className={classes.weapon}>
            <div className={classes.weaponHeader}>
                <div className={classes.backgroundImage}>
                </div>
                <div className={classes.weaponImageContainer}>
                <div style={{position: 'relative', justifyContent: 'center'}}>

                    
                    <CardMedia
                        image={weapon.image}
                        className={classes.weaponImage}>
                        {createRarityStars()}
                    </CardMedia>
                </div>  
                </div>
                <div className={classes.weaponTitle}>
                    <Typography variant="h3" style={{width: '50%'}}>
                        Genshin Impact
                    </Typography>
                    <Typography variant="h1" style={{width: '50%'}}>
                        {weapon.name} Ascension Planner
                    </Typography>
                    <Typography variant="h5" style={{width: '50%'}}>
                        <span>{weapon.type}</span>{weapon.weapon}
                    </Typography>
                </div>
                <div className={classes.buttons}>
                    <div className={classes.buttonContainer}>
                        <CheckIcon className={classes.checkIcon} onClick={submitDialog}></CheckIcon>
                        <CloseIcon className={classes.closeIcon} onClick={dialogClose}></CloseIcon>
                    </div>
                </div>
            </div>
            <div className={classes.weaponContainer}>
                <Typography variant="h1" style={{margin: '1.5rem 0rem'}}>
                    Levels
                </Typography>
                <Card className={classes.ascension}>
                        <Typography variant="h2" align="center" style={{width: '100%'}}>
                            Current Level
                        </Typography>
                    <div style={{ display: "flex" }} >
                        {createCurrentStars}
                    </div>
                        <Typography variant="h2" align="center" style={{width: '100%'}}>
                            Desired Level
                        </Typography>
                    <div style={{ display: "flex" }}>
                        {createDesiredStars}
                    </div>
                </Card>
            </div>
        </div>
    );
}
