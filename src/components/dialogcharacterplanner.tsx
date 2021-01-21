import React, {useState, useEffect} from 'react';
import { Card, CardContent, makeStyles, Grid, CardMedia, Typography, Slider } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Characterbg from '../images/characterbg.png'
import AscensionStar from '../images/Ascension_Star.png'
import { Storage } from 'aws-amplify';

import SetMaterials from '../logic/setmaterials';
import RangeSlider from './slider';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#20212C !important',
        boxShadow: "none !important",
        position: "relative",
    },
    headerContainer: {
        position: "relative"
    },
    header: {
        padding: "0px",
        "&:last-child": {
            paddingBottom: '0px'
          },
        position: 'absolute',
        top: '0%',
        left: '0%',
        height: '100%',
        width: '100%',
        background: "rgba(29,31,41,.3)"
    },
    characterOuterContainer: {
        height: "100%", 
    },
    characterImageContainer: {
       margin: "auto",
    },
    characterImage: {
        maxHeight: "96px",
        maxWidth: "96px",
        boxShadow: "0 3px 6px rgba(0,0,0,.23), 0 3px 6px rgba(0,0,0,.16)",
        backgroundColor: "#36384a",
        borderRadius: "6px",
        marginRight: "12px",
    },
    element: {
        height: "28px", 
        width: "28px",
        // position: "absolute",
        // top: "26px",
        // right: "696px",
        float:"left",
        padding: "3px",
        background: "#36384a",
        borderRadius: "100px",
        boxShadow: "0 3px 6px rgba(0,0,0,.23), 0 3px 6px rgba(0,0,0,.16)"
    },
    checkIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#272937",
        color: "#58CCA5",
        marginRight: "24px",
        cursor: "pointer"
    },
    closeIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#272937",
        color: "#f56262",
        cursor: "pointer"
    },
    characterInfoContainer: {
        paddingLeft: "8px",
        minHeight: "96px",
    },
    levelContainer: {
        margin: "auto",
    },
    levelPadding: {
  
    },
    ascensionContainer: {
        backgroundColor: "#272937",
        minHeight: "200px",
        maxHeight: "200px",
    },
    ascensionImage: {
        minHeight: "30px", 
        borderRadius: "10px",
    },
    ascensionImageContainer: {
		maxWidth: "150px", 
		margin: 'auto'
    },
    ascensionStar: {
        minWidth:"25px", 
        minHeight: "25px", 
        backgroundSize: "contain",
        margin: "0px 2px",
        opacity: ".3",
        '&:hover': {
            cursor: "pointer"
         },
    },
    talentCard: {
        minHeight: "200px", 
        maxHeight: "200px",
        minWidth: "160px", 
        backgroundColor: "#272937",
        padding: "16px",
        marginBottom: "32px"
    },
    talentImage: {
        minHeight: "53px", minWidth:"53px", maxHeight: "53px", maxWidth: "53px", 
        borderRadius: "6px", 
        backgroundColor: "#36384A", 
        margin: "auto", 
    },
    talentNameText: {
        fontWeight: 700, color: "#FFCC62"
    },
    rootSlider: {
        width: 300,
    }
}));

function valuetext(value: number) {
    return `${value}°C`;
}

const marks = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    },
    {
        value: 9,
        label: '9',
    },
    {
        value: 10,
        label: '10',
    },
  ];

export default function DialogCharacterPlanner(props: any) {
    const classes = useStyles();
    const character = props.character;
    const dialogClose = props.dialogClose;
    const ascensionDetails = props.ascensionDetails;
    //const setAscensionDetails = props.setAscensionDetails;
    const items = props.items;
    const setItems = props.setItems;

    let elementColor = character.type;

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

    const [abilityOne, setAbilityOne] = React.useState<number[]>([1, 10]);
    const [abilityTwo, setAbilityTwo] = React.useState<number[]>([1, 10]);
    const [abilityThree, setAbilityThree] = React.useState<number[]>([1, 10]);

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

	async function fetchImage(name: any) {  
        const image = await Storage.get(name);
        //console.log("fetchImage image:", image);
		return image;
    }
    
    async function setImages(materials: any) {
        for (let i = 0; i < materials.length; i++) {
            //console.log('running materials loop')
            const materialImage = await(fetchImage(materials[i].name + '.png'))
            materials[i].image = materialImage
        }
        return materials
    }

    async function submitDialog() {
        let i = [...items]
        //console.log("here is temp i", i);
        //console.log("here is value:", abilityOne);
        let a = {...ascensionDetails}
        a.index = items.length;
        a.type = 'Character';
        //console.log("character name:", character);
        a.name = character.name;
        a.image = character.image;
        a.typeImage = character.typeImage;
        a.talentMat = character.talentMats.talentMat
        a.currentLevel = countCurrentStars();
        a.desiredLevel = countDesiredStars();
        
        a.abilityOneCurrent = abilityOne[0];
        a.abilityOneDesired = abilityOne[1];

        a.abilityTwoCurrent = abilityTwo[0];
        a.abilityTwoDesired = abilityTwo[1];

        a.abilityThreeCurrent = abilityThree[0];
        a.abilityThreeDesired = abilityThree[1];

        // a.materials = [
        //     {name: "Vajrada_Amethyst_Sliver", quantity: "1", image: MoraImage}, {name: "Mora", quantity: "1.1M", image: MoraImage},
        //     {name: "Vajrada_Amethyst_Fragment", quantity: "9", image: MoraImage}, {name: "Hero's_Wit", quantity: "150", image: MoraImage},
        //     {name: "Vajrada_Amethyst_Chunk", quantity: "9", image: MoraImage}, {name: "Damaged_Mask", quantity: "33", image: MoraImage},
        //     {name: "Vajrada_Amethyst_Gemstone", quantity: "7", image: MoraImage}, {name: "Stained_Mask", quantity: "96", image: MoraImage},
        //     {name: "Lightning_Prism", quantity: "46", image: MoraImage}, {name: "Ominous_Mask", quantity: "66", image: MoraImage},
        //     {name: "Wolfhook", quantity: "168", image: MoraImage}, {name: "Guide_to_Resistance", quantity: "9", image: MoraImage}, 
        //     {name: "Teachings_of_Resistance", quantity: "63", image: MoraImage}, {name: "Philosophies_of_Resistance", quantity: "30", image: MoraImage}, {name: "Dvalins_Claw", quantity: "6", image: MoraImage},
        // ]


        a.materials = SetMaterials(character, a);

        const matties = await setImages(a.materials);
        a.materials = matties;

        //setAscensionDetails(a);
        //console.log("ascensionDetails", a);
        i.push(a)
        setItems(i);

        dialogClose()
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
    
    //const createDesiredStars;

    // useEffect(() => {
    //     console.log("Slider value: " + abilityOne);
    //   }, [abilityOne]);
      
    
    return (
        <Card className={classes.root}> 
            <div className={classes.headerContainer}>
                <CardMedia
                component="img"
                alt="Character Background"
                height="160"
                image={Characterbg}
                />
                <div className={classes.header}>
                    <Grid container direction="row" justify="flex-start" style={{height: "100%"}}>
                        <Grid container xs={2} direction="row" justify="flex-end" className={classes.characterImageContainer}>
                            <CardMedia
                            component="img"
                            alt="Character Image"
                            image={character.image}
                            className={classes.characterImage}>
                            {/* <img src={character.typeImage} alt="element" className={classes.element}></img> */}
                            </CardMedia>
                        </Grid>
                        <Grid container xs={5} direction="row" justify="flex-start" alignItems="center" className={classes.characterOuterContainer}>
                            <Grid container xs={12} direction="column" justify="center" alignItems="flex-start" className={classes.characterInfoContainer}>
                                <Grid item style={{marginBottom: "6px"}}>
                                    <Typography variant="h3">
                                        Genshin Impact
                                    </Typography>

                                </Grid>
                                <Grid item style={{marginBottom: "6px"}}>
                                    <Typography variant="h1">
                                        {character.name} Ascension Planner
                                    </Typography>
                                </Grid>
                                <Grid item style={{marginBottom: "0px" }}> 
                                    <Typography variant="h5">
                                        <span className={elementColor}>{character.type}</span> &#8226; {character.weapon}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container xs={4} direction="row" justify="center" style={{margin: "auto"}}>
                            <CheckIcon className={classes.checkIcon} onClick={submitDialog}></CheckIcon>
                            <CloseIcon className={classes.closeIcon} onClick={dialogClose}></CloseIcon>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <CardContent>
                <Grid container xs={7} direction="row" justify="center" alignItems="center" className={classes.levelContainer}>
                    <Grid item xs={12}>
                        <Typography variant="h1" style={{marginBottom:"16px"}}>
                            Levels
                        </Typography>
                        <Grid container direction="row" justify="center" alignItems="center" className={classes.ascensionContainer}>
                            <Grid item xs={12} style={{marginTop: "16px"}}>
                                <Typography variant="h2" align="center">
                                    Current Level
                                </Typography>
                            </Grid>
                            <div style={{ display: "flex", marginBottom: "16px"}} >
                                {createCurrentStars}
                            </div>

                            <Grid item xs={12} className={classes.levelPadding}>
                                <Typography variant="h2" align="center">
                                    Desired Level
                                </Typography>
                            </Grid>
                            <div style={{ display: "flex", marginBottom: "16px" }}className={classes.levelPadding}>
                                {createDesiredStars}
                            </div>
                        </Grid>

                        <Typography variant="h1" style={{marginTop: "16px", marginBottom: "16px"}}>
                            Talents
                        </Typography>

                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <Grid container justify="center" className={classes.talentCard}>
                                <Grid item xs={12}>
                                    <CardMedia
                                        image= {character.abilityOne.image}
                                        className={classes.talentImage}
                                    />
                                    <Typography variant="h5" align="center" className={classes.talentNameText}>
                                        {character.abilityOne.name}
                                    </Typography>
                                    <Typography variant="h6" align="center" style={{marginBottom: "16px"}}>
                                        Normal Attack
                                    </Typography>
                                </Grid>
                                <Grid container justify="center" alignItems="flex-end">
                                    <Grid item xs={6}>
                                        <Typography variant="body2" style={{float: "left"}}>Current Level</Typography>
                                        <Typography variant="body2" style={{float: "right"}}>Desired Level</Typography>
                                        <RangeSlider marks={marks} ability={abilityOne} setAbility={setAbilityOne} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justify="center" className={classes.talentCard}>
                                <Grid item xs={12}>
                                    <CardMedia
                                        image= {character.abilityTwo.image}
                                        className={classes.talentImage}
                                    />
                                    <Typography variant="h5" align="center" className={classes.talentNameText}>
                                        {character.abilityTwo.name}
                                    </Typography>
                                    <Typography variant="h6" align="center" style={{marginBottom: "16px"}}>
                                        Elemental Skill
                                    </Typography>
                                </Grid>
                                <Grid container justify="center" alignItems="flex-end">
                                    <Grid item xs={6}>
                                        <Typography variant="body2" style={{float: "left"}}>Current Level</Typography>
                                        <Typography variant="body2" style={{float: "right"}}>Desired Level</Typography>
                                        <RangeSlider marks={marks} ability={abilityTwo} setAbility={setAbilityTwo} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justify="center" className={classes.talentCard}>
                                <Grid item xs={12}>
                                    <CardMedia
                                        image= {character.abilityThree.image}
                                        className={classes.talentImage}
                                    />
                                    <Typography variant="h5" align="center" className={classes.talentNameText}>
                                        {character.abilityThree.name}
                                    </Typography>
                                    <Typography variant="h6" align="center" style={{marginBottom: "16px"}}>
                                        Elemental Burst
                                    </Typography>
                                </Grid>
                                <Grid container justify="center" alignItems="flex-end">
                                    <Grid item xs={6}>
                                        <Typography variant="body2" style={{float: "left"}}>Current Level</Typography>
                                        <Typography variant="body2" style={{float: "right"}}>Desired Level</Typography>
                                        <RangeSlider marks={marks} ability={abilityThree} setAbility={setAbilityThree} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}