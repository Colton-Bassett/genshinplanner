import React, {useState, } from 'react';
import { Card, makeStyles, CardMedia, Typography, } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import AscensionStar from '../images/Ascension_Star.png'

import { Storage } from 'aws-amplify';

const useStyles = makeStyles(() => ({

    weapon: {

    },
    character: {
    },
    characterHeader: {
        position: 'relative', 
        display: 'flex', 
        overflow: 'hidden', 
        padding: '1.563rem 0rem',
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        borderBottom: 'solid 5px #36384a'
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
        backgroundImage: 'url(https://rerollcdn.com/GENSHIN/UI/character-background.png)', 
        opacity: 0.6,
    },
    characterImageContainer: {
        maxWidth: '20%', 
        minWidth: '20%', 
        zIndex: 3, 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex'
    },
    characterImage: {
        maxHeight: "6rem",
        minWidth: '6rem',
        minHeight: '6rem',
        maxWidth: "6rem",
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        backgroundColor: "#36384a",
        borderRadius: "0.375rem",
        zIndex: 3,
    },
    element: {
        height: "1.75rem", 
        width: "1.75rem",
        float:"left",
        padding: "0.188rem",
        background: "#36384a",
        borderRadius: "6.25rem",
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)"
    },
    characterTitle: {
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
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)"
    },
    closeIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#272937",
        color: "#f56262",
        cursor: "pointer",
        borderRadius: '0.188rem',
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)"
    },
    characterContainer: {
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
            cursor: "pointer"
         },
    },

}));

export default function DialogCharacterPlanner(props: any) {
    const classes = useStyles();
    const character = props.weapon;
    const dialogClose = props.dialogClose;
    const ascensionDetails = props.ascensionDetails;
    //const setAscensionDetails = props.setAscensionDetails;
    const items = props.items;
    const setItems = props.setItems;

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


    async function submitDialog() {
    }

    return (
        <div className={classes.weapon}>
            <div className={classes.characterHeader}>
                <div className={classes.backgroundImage}>
                </div>
                <div className={classes.characterImageContainer}>
                    <CardMedia
                        image={character.image}
                        className={classes.characterImage}>
                    </CardMedia>
                </div>
                <div className={classes.characterTitle}>
                    <Typography variant="h3" style={{width: '50%'}}>
                        Genshin Impact
                    </Typography>
                    <Typography variant="h1" style={{width: '50%'}}>
                        {character.name} Ascension Planner
                    </Typography>
                    <Typography variant="h5" style={{width: '50%'}}>
                        <span>{character.type}</span>{character.weapon}
                    </Typography>
                </div>
                <div className={classes.buttons}>
                    <div className={classes.buttonContainer}>
                        <CheckIcon className={classes.checkIcon} onClick={submitDialog}></CheckIcon>
                        <CloseIcon className={classes.closeIcon} onClick={dialogClose}></CloseIcon>
                    </div>
                </div>
            </div>
            <div className={classes.characterContainer}>
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
