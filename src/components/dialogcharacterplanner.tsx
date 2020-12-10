import React, {useState} from 'react';
import { Card, CardContent, makeStyles, Grid, CardMedia, Typography, Slider } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Characterbg from '../images/characterbg.png'
import AscensionStar from '../images/Ascension_Star.png'


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
    checkIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#272937",
        color: "#58CCA5",
        marginRight: "20px",
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
        value: 3,
        label: '3',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 9,
        label: '9',
    },
  ];

function RangeSlider() {
    //const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([1, 9]);
  
    const handleChange = (event: any, newValue: number | number[]) => {
      setValue(newValue as number[]);
      console.log("rangeSlider values",value)
    };
  
    return (
      <div>
        <Typography id="range-slider" gutterBottom>

        </Typography>
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            //color="secondary"
            marks={marks}
            style={{backgroundColor: "#36384A",}}
            min={1}
            max={9}
        />
      </div>
    );
}

export default function DialogCharacterPlanner(props: any) {
    const classes = useStyles();
    const character = props.character;
    const dialogClose = props.dialogClose;
    const ascensionDetails = props.ascensionDetails;
    const setAscensionDetails = props.setAscensionDetails;
    const items = props.items;
    const setItems = props.setItems;

    let elementColor = character.type;

    const initialCurrentStars = [
        {starOne: {opacity: "0.3"}},
        {starTwo: {opacity: "0.3"}},
        {starThree: {opacity: "0.3"}},
        {starFour: {opacity: "0.3"}},
        {starFive: {opacity: "0.3"}},
        {starSix: {opacity: "0.3"}},
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
        for (var i = 0; i <= 5; i++) {
            starsTemp[i].opacity = "0.3";
        }
        // set stars based on index
        for (var i =0; i <= index; i++) {
            starsTemp[i].opacity = "1";
        }
        setCurrentStars(starsTemp)
        //console.log("currentStars:", currentStars);
    }

    function setDesiredStarsClick(index: any) {

            const starsTemp = [...desiredStars]
            // reset stars
            for (var i = 0; i <= 5; i++) {
                starsTemp[i].opacity = "0.3";
            }
            // set stars based on index
            for (var i =0; i <= index; i++) {
                starsTemp[i].opacity = "1";
            }
            setDesiredStars(starsTemp)
            //console.log("desiredStars:", desiredStars);


    }

    function submitDialog() {
        let i = [...items]
        console.log("here is temp i", i);
        let a = {...ascensionDetails}
        a.index = items.length;
        a.type = 'Character';
        console.log("character name:", character.name);
        a.name = character.name;
        a.currentLevel = 0;
        a.desiredLevel = 6;
        
        a.abilityOneCurrent = 0;
        a.abilityOneDesired = 6;
        a.abilityTwoCurrent = 0;
        a.abilityTwoDesired = 6;
        a.abilityThreeCurrent = 0;
        a.abilityThreeDesired = 0;

        a.materials = [
            {name: "Mora", quantity: "2.1M"}, {name: "Mora", quantity: "1.1M"},
            {name: "Mora", quantity: "2.1M"}, {name: "Mora", quantity: "1.1M"},
            {name: "Mora", quantity: "2.1M"}, {name: "Mora", quantity: "1.1M"},
            {name: "Mora", quantity: "2.1M"}, {name: "Mora", quantity: "1.1M"},
            {name: "Mora", quantity: "2.1M"}, {name: "Mora", quantity: "1.1M"},
            {name: "Mora", quantity: "2.1M"}, {name: "Mora", quantity: "1.1M"},
        ]
        //setAscensionDetails(a);
        i.push(a)
        setItems(i);
        //console.log("ascensionDetails", ascensionDetails);
        dialogClose()
    }

    const createCurrentStars = currentStars.map((star: any, index: any) => 
        <div>
        <CardMedia
            image= {AscensionStar}
            className={classes.ascensionStar}
            style={{opacity: star.opacity}}
            onClick={(e) => {setCurrentStarsClick(index)}}
        />
        </div>
    );

    const createDesiredStars = desiredStars.map((star: any, index: any) => 
    <div>
    <CardMedia
        image= {AscensionStar}
        className={classes.ascensionStar}
        style={{opacity: star.opacity}}
        onClick={(e) => {setDesiredStarsClick(index)}}
    />
    </div>
);
    
    //const createDesiredStars;
    
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
                            className={classes.characterImage}
                            />
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
                                        <RangeSlider></RangeSlider>
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
                                        <RangeSlider></RangeSlider>
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
                                        <RangeSlider></RangeSlider>
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