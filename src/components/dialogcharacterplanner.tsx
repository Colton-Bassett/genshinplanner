import React, {useState, useEffect } from 'react';
import { Card, makeStyles, CardMedia, Typography, Switch, Checkbox, Tooltip } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Characterbg from '../images/background2.jpg'
import AscensionStar from '../images/Ascension_Star.png'

import SetMaterials from '../logic/setmaterials';
import SetImages from '../logic/setimages'
import CreateNewSummary from '../logic/createNewSummary'
import HandleLevel from '../logic/handleLevel'
import RangeSlider from './slider';


const useStyles = makeStyles((theme) => ({
    character: {
    },
    characterHeader: {
        position: 'relative', 
        display: 'flex', 
        overflow: 'hidden', 
        padding: '1.5rem 0rem',
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        borderBottom: 'solid 0.313rem #2e3944',
        // maxHeight: '6.563rem',
    },
    backgroundImage: {
        position: 'absolute', 
        left: 0, 
        top: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1, 
        backgroundPosition: '40% 65%', 
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
        display: 'flex',
        '@media (max-width: 45em)': {
            marginRight: '1rem',
            marginLeft: '1rem',
		},
    },
    characterImage: {
        width: '100%',
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        backgroundColor: "#2e3944",
        borderRadius: "0.375rem",
        zIndex: 3,
    },
    element: {
        height: "1.75rem", 
        width: "1.75rem",
        float:"left",
        padding: "0.188rem",
        background: "#2e3944",
        borderRadius: "6.25rem",
        top: '0rem',
        left: '0rem',
        position: 'absolute',
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        '@media (max-width: 25em)': {
            width: '1.25rem',
            height: '1.25rem',
		},
    },
    characterTitle: {
        maxWidth: '60%', 
        minWidth: '60%', 
        zIndex: 3, 
        display: 'flex', 
        flexDirection: 'column',
        '@media (max-width: 25em)': {
            maxWidth: '50%',
            minWidth: '50%',
            marginRight: '1rem',
		},
    },
    headerText: {
        width: '50%',
        '@media (max-width: 45em)': {
            width: '70%'
        },
        '@media (max-width: 25em)': {
            width: '100%'
		},
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
        display: 'flex',
        marginRight: '2rem',
        justifyContent: 'center',
        '@media (max-width: 60em)': {
            marginRight: '2rem',
        },
        '@media (max-width: 45em)': {
            //marginRight: '5rem',
            display: 'block',
            marginRight: '0rem'
		},
    },
    checkIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#232D38",
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
         '@media (max-width: 25em)': {
            fontSize: '2.35rem',
		},
    },
    closeIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#232D38",
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
         '@media (max-width: 25em)': {
            fontSize: '2.35rem',
		},
    },
    characterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0,
        maxWidth: '60%',
        flexBasis: '60%',
        margin: 'auto',
        '@media (max-width: 45em)': {
            maxWidth: '80%',
            flexBasis: '80%',
        },
        '@media (max-width: 25em)': {
            maxWidth: '90%',
            flexBasis: '90%',
		},
    },
    ascension: {
        backgroundColor: "#2e3944",
        minHeight: "14rem",
        maxHeight: "14rem",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        padding: '1rem 1.5rem 1.5rem 1.5rem',
        borderRadius: '0.188rem',
    },
    maxCurrent: {
        display: 'flex',
        justifyContent: 'flex-start',
        minWidth: '50%',
        '@media (max-width: 45em)': {
            minWidth: '100%',
            justifyContent: 'center'
		},
    },
    maxDesired: {
        display: 'flex',
        justifyContent: 'flex-end',
        minWidth: '50%',
        '@media (max-width: 45em)': {
            minWidth: '100%',
            justifyContent: 'center'
		},
    },
    ascensionStarContainer: {
        display: 'flex',
        minWidth: '100%',
        justifyContent: 'center',
    },
    ascensionStar: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
         },
    },
    currentStarSix: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -1,
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
        },
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
         
    },
    currentStarFive: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -2,
        '&:hover':  {
            cursor: "pointer",
            opacity: "1",
        },  
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
    },
    currentStarFour: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -3,
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
         }, 
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },   
    },
    currentStarThree: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -4,
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
         },  
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
    },
    currentStarTwo: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -5,
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
         },  
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
    },
    currentStarOne: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -6,
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
         },  
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
    },
    desiredStarSix: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -1,
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
        },
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
         
    },
    desiredStarFive: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -2,
        '&:hover':  {
            cursor: "pointer",
            opacity: "1",
        },  
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
    },
    desiredStarFour: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -3,
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
         }, 
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },   
    },
    desiredStarThree: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -4,
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
         },  
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
    },
    desiredStarTwo: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        display: 'flex',
        order: -5,
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
         },  
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
    },
    desiredStarOne: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: "1",
        display: 'flex',
        order: -6,
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
         },  
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
    },
    talent: {
        backgroundColor: "#2e3944",
        minHeight: "14rem",
        maxHeight: "14rem",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        padding: '1.5rem',
        borderRadius: '0.188rem',
        marginBottom: '2rem'
    },
    talentImage: {
        minHeight: "3.313rem", minWidth:"3.313rem", maxHeight: "3.313rem", maxWidth: "3.313rem", 
        borderRadius: "0.375rem", 
        backgroundColor: "#4d5760", 
        margin: "auto", 
        marginBottom: '0.5rem',
        boxShadow: "0 0.188rem 0.188rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
    },
    talentName: {
        fontWeight: 700, color: "#FFCC62", width: '100%',
    },
    talentNameText: {
        fontWeight: 700, color: "#FFCC62"
    },
    talentSlider: {
        flexBasis: '50%',
        '@media (max-width: 25em)': {
            flexBasis: '80%',
        },
    },
}));

// function valuetext(value: number) {
//     return `${value}°C`;
// }

// rangeSlider steps
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
    const items = props.items;
    const setItems = props.setItems;
    const materials = props.materials;
    const summary = props.summary;
    const setSummary = props.setSummary;

    let elementColor = character.type;
    const theRef = React.createRef<HTMLDivElement>();

    const initialCurrentStars = [
        {starOne: {opacity: "0.3"}},
        {starTwo: {opacity: "0.3"}},
        {starThree: {opacity: "0.3"}},
        {starFour: {opacity: "0.3"}},
        {starFive: {opacity: "0.3"}},
        {starSix: {opacity: "0.3"}},

    ]
    const initialDesiredStars = [
        {starOne: {opacity: "1"}},
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

    const [levelOpacity, setLevelOpacity] = React.useState<number>(1);
    const [levelPointer, setLevelPointer] = React.useState<any>("auto");

    const [talentOpacity, setTalentOpacity] = React.useState<number>(1);
    const [talentPointer, setTalentPointer] = React.useState<any>("auto");

    const [currentMax, setCurrentMax] = React.useState(false);
    const [desiredMax, setDesiredMax] = React.useState(true);

    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const [desiredLevel, setDesiredLevel] = useState<number>(40);

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
        a.currentAscension = countCurrentStars();
        a.desiredAscension = countDesiredStars();

        a.currentMax = currentMax;
        a.desiredMax = desiredMax;
        
        a.abilityOneCurrent = abilityOne[0];
        a.abilityOneDesired = abilityOne[1];

        a.abilityTwoCurrent = abilityTwo[0];
        a.abilityTwoDesired = abilityTwo[1];

        a.abilityThreeCurrent = abilityThree[0];
        a.abilityThreeDesired = abilityThree[1];

        a.materials = SetMaterials(character, a, materials);

        const matties = await SetImages(a.materials);
        const tempMatties = JSON.parse(JSON.stringify(matties));
        a.materials = matties;

        //setAscensionDetails(a);
        //console.log("ascensionDetails", a);
        i.push(a)
        setItems(i);

        //// adding this characters's materials to summary
        let newSummary = CreateNewSummary(tempMatties, summary);
        //// sorting newSummary
        newSummary?.sort((a: { position: string; }, b: { position: string; }) => parseFloat(a.position) - parseFloat(b.position));

        console.log("newSummary:", newSummary);
        setSummary(newSummary)

        dialogClose()
    }

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

    const scrollToTop = () => {
        if (null !== theRef.current) {
            theRef.current.scrollIntoView({behavior: "smooth"});
          }
    }

    function setCurrentStarsDOM(index: number) {
        const starsTemp = [...currentStars]
        let currentLevel = 1;
        for (let i = 0; i <= 5; i++) {
            starsTemp[i].opacity = "0.3";
        }
        setCurrentStars(starsTemp);
        switch(index) {
            case 0:
                for (let i = 0; i <= 5; i++) {
                    starsTemp[i].opacity = "0.3";
                }
                setCurrentStars(starsTemp);
                currentLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currentLevel)
                return
            case 1:
                starsTemp[0].opacity = "1";
                setCurrentStars(starsTemp)
                currentLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currentLevel)
                if (desiredStars[index].opacity === "1") {
                    // do nothing
                } else {
                    setDesiredStarsDOM(index)
                }
                return
            case 2:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                setCurrentStars(starsTemp);
                currentLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currentLevel)
                if (desiredStars[index].opacity === "1") {
                    // do nothing
                } else {
                    setDesiredStarsDOM(index)
                }
                return
            case 3:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                starsTemp[2].opacity = "1";
                setCurrentStars(starsTemp);
                currentLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currentLevel)
                if (desiredStars[index].opacity === "1") {
                    // do nothing
                } else {
                    setDesiredStarsDOM(index)
                }
                return
            case 4:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                starsTemp[2].opacity = "1";
                starsTemp[3].opacity = "1";
                setCurrentStars(starsTemp);
                currentLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currentLevel)
                if (desiredStars[index].opacity === "1") {
                    // do nothing
                } else {
                    setDesiredStarsDOM(index)
                }
                return
            case 5:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                starsTemp[2].opacity = "1";
                starsTemp[3].opacity = "1";
                starsTemp[4].opacity = "1";
                setCurrentStars(starsTemp);
                currentLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currentLevel)
                if (desiredStars[index].opacity === "1") {
                    // do nothing
                } else {
                    setDesiredStarsDOM(index)
                }
                return
            case 6:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                starsTemp[2].opacity = "1";
                starsTemp[3].opacity = "1";
                starsTemp[4].opacity = "1";
                starsTemp[5].opacity = "1";
                setCurrentStars(starsTemp);
                currentLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currentLevel)
                if (desiredStars[index-1].opacity === "1") {
                    // do nothing
                } else {
                    setDesiredStarsDOM(index)
                }
                return
        }
    }

    function setDesiredStarsDOM(index: number) {
        const starsTemp = [...desiredStars]
        let desiredLevel = 40;
        for (let i = 0; i <= 5; i++) {
            starsTemp[i].opacity = "0.3";
        }
        setDesiredStars(starsTemp);
        switch(index) {
            case 0:
                for (let i = 0; i <= 5; i++) {
                    starsTemp[i].opacity = "0.3";
                }
                setDesiredStars(starsTemp);
                desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
                setDesiredLevel(desiredLevel)
                return
            case 1:
                starsTemp[0].opacity = "1";
                if (currentStars[index].opacity === "1") {
                    setCurrentStarsDOM(index)
                }
                setDesiredStars(starsTemp);
                desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
                setDesiredLevel(desiredLevel)
                return
            case 2:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                if (currentStars[index].opacity === "1") {
                    setCurrentStarsDOM(index)
                }
                setDesiredStars(starsTemp);
                desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
                setDesiredLevel(desiredLevel)
                return
            case 3:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                starsTemp[2].opacity = "1";
                if (currentStars[index].opacity === "1") {
                    setCurrentStarsDOM(index)
                }
                setDesiredStars(starsTemp);
                desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
                setDesiredLevel(desiredLevel)
                return
            case 4:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                starsTemp[2].opacity = "1";
                starsTemp[3].opacity = "1";
                if (currentStars[index].opacity === "1") {
                    setCurrentStarsDOM(index)
                }
                setDesiredStars(starsTemp);
                desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
                setDesiredLevel(desiredLevel)
                return
            case 5:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                starsTemp[2].opacity = "1";
                starsTemp[3].opacity = "1";
                starsTemp[4].opacity = "1";
                if (currentStars[index].opacity === "1") {
                    setCurrentStarsDOM(index)
                }
                setDesiredStars(starsTemp);
                desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
                setDesiredLevel(desiredLevel)
                return
            case 6:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                starsTemp[2].opacity = "1";
                starsTemp[3].opacity = "1";
                starsTemp[4].opacity = "1";
                starsTemp[5].opacity = "1";
                setDesiredStars(starsTemp);
                desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
                setDesiredLevel(desiredLevel)
                return
        }
    }

    function handleLevelSwitch() {
        if (levelOpacity === 1) {
            setLevelOpacity(0.3);
            setLevelPointer('none');
            // set currentStars to 0.3
            setCurrentStarsDOM(0);
            // set desiredStars to 0.3
            setDesiredStarsDOM(0);
        } else {
            setLevelOpacity(1)
            setLevelPointer('auto');
            // set desiredStars[0] = 1;
            setDesiredStarsDOM(1);
        }
    }

    function handleTalentSwitch() {
        const abilityOneTemp = [...abilityOne];
        const abilityTwoTemp = [...abilityTwo];
        const abilityThreeTemp = [...abilityThree];
        if (talentOpacity === 1) {
            setTalentOpacity(0.3);
            setTalentPointer('none');
            // set upperTalents to 0 or 1;
            abilityOneTemp[0] = 1;
            abilityOneTemp[1] = 1;

            abilityTwoTemp[0] = 1;
            abilityTwoTemp[1] = 1;

            abilityThreeTemp[0] = 1;
            abilityThreeTemp[1] = 1;
        } else {
            setTalentOpacity(1);
            setTalentPointer('auto');
            // set upperTalent to 10;
            abilityOneTemp[0] = 1;
            abilityOneTemp[1] = 10;
            
            abilityTwoTemp[0] = 1;
            abilityTwoTemp[1] = 10;
            
            abilityThreeTemp[0] = 1;
            abilityThreeTemp[1] = 10;
        }
        setAbilityOne(abilityOneTemp);
        setAbilityTwo(abilityTwoTemp);
        setAbilityThree(abilityThreeTemp);
    }

    function resetAbilities() {
        const abilityOneTemp = [...abilityOne];
        const abilityTwoTemp = [...abilityTwo];
        const abilityThreeTemp = [...abilityThree];

        abilityOneTemp[0] = 1;
        abilityOneTemp[1] = 10;
        
        abilityTwoTemp[0] = 1;
        abilityTwoTemp[1] = 10;
        
        abilityThreeTemp[0] = 1;
        abilityThreeTemp[1] = 10;

    }

    function handleDesiredMax() {
        setDesiredMax(!desiredMax);
    }

    function handleCurrentMax() {
        setCurrentMax(!currentMax);
    }

    // initial mount
    useEffect(() => {
        scrollToTop();
        // reset currentStars, desiredStars
        setDesiredStarsDOM(1);
        // reset abilityOne, abilityTwo, abilityThree
        resetAbilities();
    }, []);

    // clicking currentMax or desiredMax
    useEffect(() => {
        let currentLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
        setCurrentLevel(currentLevel)

        let desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
        setDesiredLevel(desiredLevel)

    }, [currentMax, desiredMax]);
      
    return (
        <div className={classes.character} ref={theRef}> 
            <div className={classes.characterHeader} >
                <div className={classes.backgroundImage}>
                </div>
                <div className={classes.characterImageContainer}>
                    <div style={{maxWidth: '6rem', maxHeight: '6rem', position: 'relative'}}>
                        {/* <CardMedia
                            image={character.image}
                            className={classes.characterImage}>
                            <img src={character.typeImage} alt="element" className={classes.element}></img>	
                        </CardMedia> */}
                        <img src={character.image} className={classes.characterImage}></img>
                        <img src={character.typeImage} alt="element" className={classes.element}></img>	             
                    </div>
                </div>
                <div className={classes.characterTitle}>
                    <Typography variant="h3" className={classes.headerText}>
                        Genshin Impact
                    </Typography>
                    <Typography variant="h1" className={classes.headerText}>
                        {character.name} Ascension Planner
                    </Typography>
                    <Typography variant="h5" className={classes.headerText}>
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
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant="h1" style={{margin: '1.5rem 0rem', flex: 1, opacity: `${levelOpacity}`}}>
                        Levels
                    </Typography>
                    <Switch
                        defaultChecked
                        onChange={handleLevelSwitch}
                        color="secondary"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                </div>
                <div style={{opacity: `${levelOpacity}`, pointerEvents: levelPointer}}>
                    <Card className={classes.ascension}>
                        <div className={classes.maxCurrent}>
                            <Tooltip title={"Uses highest level for current ascension. (E.g., Current ascension 0 = Level 20)"} placement="top">
                                <Typography variant="h5" style={{cursor: 'help',}}>
                                    Current Max
                                </Typography>
                            </Tooltip>
                            <Checkbox
                                color="default"
                                checked={currentMax}
                                onChange={handleCurrentMax}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                disableRipple
                                style={{padding: '0rem 0rem 0rem 0.5rem'}}
                            /> 
                        </div>
                        <div className={classes.maxDesired}>
                            <Tooltip title="Uses highest level for desired ascension (E.g., Desired ascension 6 = Level 90)" placement="top">
                                <Typography variant="h5" style={{cursor: 'help'}}>
                                    Desired Max
                                </Typography>
                            </Tooltip>
                            <Checkbox
                                checked={desiredMax}
                                onChange={handleDesiredMax}
                                color="default"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                disableRipple
                                style={{padding: '0rem 0rem 0rem 0.5rem'}}
                            /> 
                        </div>
                        <Typography variant="h3" align="center" style={{width: '100%', color: '#fff', fontWeight: 700,}}>
                            Current Level: &nbsp; &nbsp;{currentLevel}
                        </Typography>
                        <div className={classes.ascensionStarContainer}>
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.currentStarSix}
                            style={{opacity: currentStars[5].opacity}}
                            onClick={(e) => {setCurrentStarsDOM(6)}}
                            />
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.currentStarFive}
                            style={{opacity: currentStars[4].opacity}}
                            onClick={(e) => {setCurrentStarsDOM(5)}}
                            />
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.currentStarFour}
                            style={{opacity: currentStars[3].opacity}}
                            onClick={(e) => {setCurrentStarsDOM(4)}}
                            />
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.currentStarThree}
                            style={{opacity: currentStars[2].opacity}}
                            onClick={(e) => {setCurrentStarsDOM(3)}}
                            />
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.currentStarTwo}
                            style={{opacity: currentStars[1].opacity}}
                            onClick={(e) => {setCurrentStarsDOM(2)}}
                            />
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.currentStarOne}
                            style={{opacity: currentStars[0].opacity}}
                            onClick={(e) => {setCurrentStarsDOM(1)}}
                            />
                        </div>
                        <Typography variant="h3" align="center" style={{width: '100%', color: '#fff', fontWeight: 700,}}>
                            Desired Level: &nbsp; &nbsp;{desiredLevel}
                        </Typography>
                        <div className={classes.ascensionStarContainer}>
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.desiredStarSix}
                            style={{opacity: desiredStars[5].opacity}}
                            onClick={(e) => {setDesiredStarsDOM(6)}}
                            />
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.desiredStarFive}
                            style={{opacity: desiredStars[4].opacity}}
                            onClick={(e) => {setDesiredStarsDOM(5)}}
                            />
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.desiredStarFour}
                            style={{opacity: desiredStars[3].opacity}}
                            onClick={(e) => {setDesiredStarsDOM(4)}}
                            />
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.desiredStarThree}
                            style={{opacity: desiredStars[2].opacity}}
                            onClick={(e) => {setDesiredStarsDOM(3)}}
                            />
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.desiredStarTwo}
                            style={{opacity: desiredStars[1].opacity}}
                            onClick={(e) => {setDesiredStarsDOM(2)}}
                            />
                            <CardMedia
                            image= {AscensionStar}
                            className={classes.desiredStarOne}
                            style={{opacity: desiredStars[0].opacity}}
                            onClick={(e) => {setDesiredStarsDOM(1)}}
                            />
                        </div>
                    </Card>
                </div>

                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant="h1" style={{margin: '1.5rem 0rem', flex: 1, opacity: `${talentOpacity}`,}}>
                        Talents
                    </Typography>
                    <Switch
                        defaultChecked
                        onChange={handleTalentSwitch}
                        color="secondary"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />                           
                </div>
                <div style={{opacity: `${talentOpacity}`, pointerEvents: talentPointer}}>
                    <Card className={classes.talent}>
                        <CardMedia
                            image= {character.abilityOne.image}
                            className={classes.talentImage}
                        />
                        <Typography variant="h5" align="center" className={classes.talentName}>
                            {character.abilityOne.name}
                        </Typography>
                        <Typography variant="h6" align="center" style={{width: '100%', marginBottom: '0.5rem'}}>
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
                        <Typography variant="h6" align="center" style={{width: '100%', marginBottom: '0.5rem'}}>
                            Elemental Skill
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
                        <Typography variant="h6" align="center" style={{width: '100%', marginBottom: '0.5rem'}}>
                            Elemental Burst
                        </Typography>
                        <div className={classes.talentSlider}>
                            <Typography variant="body2" style={{float: "left"}}>Current Level</Typography>
                            <Typography variant="body2" style={{float: "right"}}>Desired Level</Typography>
                            <RangeSlider marks={marks} ability={abilityThree} setAbility={setAbilityThree} />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}