import React, {useState, } from 'react';
import { Card, makeStyles, CardMedia, Typography, } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Characterbg from '../images/characterbg.png'
import AscensionStar from '../images/Ascension_Star.png'

import SetMaterials from '../logic/setmaterials';
import SetImages from '../logic/setimages'
import CreateNewSummary from '../logic/createNewSummary'
import RangeSlider from './slider';


const useStyles = makeStyles((theme) => ({
    character: {
    },
    characterHeader: {
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
            cursor: "pointer",
         },
    },
    talent: {
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
        marginBottom: '2rem'
    },
    talentImage: {
        minHeight: "3.313rem", minWidth:"3.313rem", maxHeight: "3.313rem", maxWidth: "3.313rem", 
        borderRadius: "0.375rem", 
        backgroundColor: "#36384A", 
        margin: "auto", 
        boxShadow: "0 0.188rem 0.188rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
    },
    talentName: {
        fontWeight: 700, color: "#FFCC62", width: '100%'
    },
    talentNameText: {
        fontWeight: 700, color: "#FFCC62"
    },
    talentSlider: {
        flexBasis: '50%'
    },
}));

// function valuetext(value: number) {
//     return `${value}°C`;
// }

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
    const materials = props.materials;
    const summary = props.summary;
    const setSummary = props.setSummary;

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

    // function dialogAddMaterial(material: any, newSummary: any) {
    //     let duplicateMaterial = newSummary.find((m: { name: any; }) => m.name === material.name);
    //     if (duplicateMaterial) {
    //         duplicateMaterial.quantity += material.quantity
    //     } else {
    //         newSummary.push(material);
    //     }
    // }

    // function createNewSummary(materials: any) {
    //     let n = summary;
    //     if (n.length < 1) {
    //         return n = materials;
    //     } else {
    //         for (let i = 0; i < materials.length; i++) {
    //             dialogAddMaterial(materials[i], n);
    //         }
    //     }
    //     return n;
    // }

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

    function dialogAddMaterial(material: any, newSummary: any) {
        console.log("dialogAddMaterial was called")
        let duplicateMaterial = newSummary.find((m: { name: any; }) => m.name === material.name);
        console.log("duplicateMaterial:", duplicateMaterial);
        if (duplicateMaterial) {
            duplicateMaterial.quantity += material.quantity
        } else {
            newSummary.push(material);
        }
    }

    async function submitDialog() {
        let i = [...items]
        //console.log("here is temp i", i);
        //console.log("here is value:", abilityOne);
        let a = {...ascensionDetails}
        a.index = items.length;
        a.type = 'character';
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

        a.materials = SetMaterials(character, a, materials);

        const matties = await SetImages(a.materials);
        a.materials = matties;

        //setAscensionDetails(a);
        //console.log("ascensionDetails", a);
        i.push(a)
        setItems(i);



        //// adding this characters's materials to summary
        let newSummary = CreateNewSummary(matties, summary);
        //// sorting newSummary
        newSummary?.sort((a: { position: string; }, b: { position: string; }) => parseFloat(a.position) - parseFloat(b.position));

        console.log("newSummary:", newSummary);
        setSummary(newSummary)

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
        <div className={classes.character}> 
            <div className={classes.characterHeader}>
                <div className={classes.backgroundImage}>
                </div>
                <div className={classes.characterImageContainer}>
                    <CardMedia
                        image={character.image}
                        className={classes.characterImage}>
                        <img src={character.typeImage} alt="element" className={classes.element}></img>	
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
                        <span className={elementColor}>{character.type}</span> &#8226; {character.weapon}
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
                <Typography variant="h1" style={{margin: '1.5rem 0rem'}}>
                    Talents
                </Typography>
                <Card className={classes.talent}>
                    <CardMedia
                        image= {character.abilityOne.image}
                        className={classes.talentImage}
                    />
                    <Typography variant="h5" align="center" className={classes.talentName}>
                        {character.abilityOne.name}
                    </Typography>
                    <Typography variant="h6" align="center" style={{width: '100%'}}>
                        Normal Attack
                    </Typography>
                    <div className={classes.talentSlider}>
                        <Typography variant="body2" style={{float: "left"}}>Current Level</Typography>
                        <Typography variant="body2" style={{float: "right"}}>Desired Level</Typography>
                        <RangeSlider marks={marks} ability={abilityOne} setAbility={setAbilityOne} />
                    </div>
                </Card>
                <Card className={classes.talent}>
                    <CardMedia
                        image= {character.abilityTwo.image}
                        className={classes.talentImage}
                    />
                    <Typography variant="h5" align="center" className={classes.talentName}>
                        {character.abilityTwo.name}
                    </Typography>
                    <Typography variant="h6" align="center" style={{width: '100%'}}>
                        Normal Attack
                    </Typography>
                    <div className={classes.talentSlider}>
                        <Typography variant="body2" style={{float: "left"}}>Current Level</Typography>
                        <Typography variant="body2" style={{float: "right"}}>Desired Level</Typography>
                        <RangeSlider marks={marks} ability={abilityTwo} setAbility={setAbilityTwo} />
                    </div>
                </Card>
                <Card className={classes.talent}>
                    <CardMedia
                        image= {character.abilityThree.image}
                        className={classes.talentImage}
                    />
                    <Typography variant="h5" align="center" className={classes.talentName}>
                        {character.abilityThree.name}
                    </Typography>
                    <Typography variant="h6" align="center" style={{width: '100%'}}>
                        Normal Attack
                    </Typography>
                    <div className={classes.talentSlider}>
                        <Typography variant="body2" style={{float: "left"}}>Current Level</Typography>
                        <Typography variant="body2" style={{float: "right"}}>Desired Level</Typography>
                        <RangeSlider marks={marks} ability={abilityThree} setAbility={setAbilityThree} />
                    </div>
                </Card>
            </div>
        </div>
    );
}