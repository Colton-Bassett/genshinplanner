import React, {useState, useEffect, useRef } from 'react';
import { Card, makeStyles, CardMedia, Typography, Switch, Checkbox, Tooltip, IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import SetMaterials from '../logic/setmaterials';
import SetImages from '../logic/setimages'
import CreateNewSummary from '../logic/createNewSummary'
import HandleLevel from '../logic/handleLevel'
import NumberPicker from './numberpicker';
import HandleNumberPicker from '../logic/handleNumberPicker'

const AscensionStar = `https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Ascension_Star.png`;


const useStyles = makeStyles((theme) => ({
    character: {
    },
    characterHeader: {
        position: 'relative', 
        display: 'flex', 
        overflow: 'hidden', 
        padding: '1.5rem 0rem',
		boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        borderBottom: 'solid 0.25rem #2e3944',
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
        backgroundImage: `url(https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Liyue_background.jpg)`,
        opacity: 0.6,
    },
    characterImageContainer: {
        maxWidth: '15%', 
        minWidth: '15%', 
        zIndex: 3, 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex',
        '@media (max-width: 45em)': {
            marginRight: '2.5%',
            marginLeft: '2.5%',
		},
    },
    characterImageInnerContainer: {
        maxWidth: '6rem', 
        maxHeight: '6rem', 
        position: 'relative',
        '@media (max-width: 60em)': {
            maxWidth: '5rem', 
            maxHeight: '5rem', 
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
        '@media (max-width: 60em)': {
            width: '1.55rem',
            height: '1.55rem',
        },
        '@media (max-width: 45em)': {
            width: '1.35rem',
            height: '1.35rem',
        },
        '@media (max-width: 25em)': {
            width: '1rem',
            height: '1rem',
		},
    },
    characterTitle: {
        maxWidth: '70%', 
        minWidth: '70%', 
        zIndex: 3, 
        display: 'flex', 
        flexDirection: 'column',
        '@media (max-width: 45em)': {
            maxWidth: '65%',
            minWidth: '65%',
		},
    },
    headerText: {
        width: '38%',
        '@media (max-width: 60em)': {
            width: '50%'
        },
        '@media (max-width: 35em)': {
            width: '60%'
        },
        '@media (max-width: 25em)': {
            width: '80%'
        },
    },
    buttons: {
        maxWidth: '15%', 
        minWidth: '15%', 
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
            flexDirection: 'column',
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
        transition: 'all .2s;', /* Animation */
        overflow: 'visible',
        '&:hover': {
            boxShadow: '0rem 0rem 0rem 0.125rem #e9e5dc;',
            borderRadius: "0.188rem",
            transform: 'scale(1.05);',
            cursor: 'pointer',
         },
        '@media (max-width: 60em)': {
            marginBottom: '1rem',
            fontSize: '2.65rem',
            marginRight: '0rem',
        },
        '@media (max-width: 45em)': {
            marginBottom: '0.75rem',
        },
        '@media (max-width: 25em)': {
            marginBottom: '0.35rem',
            fontSize: '2.5rem',
		},
    },
    closeIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#232D38",
        color: "#f56262",
        cursor: "pointer",
        borderRadius: '0.188rem',
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        transition: 'all .2s;', /* Animation */
        overflow: 'visible',
        '&:hover': {
            boxShadow: '0rem 0rem 0rem 0.125rem #e9e5dc;',
            borderRadius: "0.188rem",
            transform: 'scale(1.05);',
            cursor: 'pointer',
         },
         '@media (max-width: 60em)': {
            fontSize: '2.65rem',
        },
        '@media (max-width: 25em)': {
            fontSize: '2.5rem',
		},
    },
    iconButtonRoot: {
        padding: 0,
    },
    characterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0,
        maxWidth: '70%',
        flexBasis: '70%',
        margin: 'auto',
        '@media (max-width: 45em)': {
            maxWidth: '90%',
            flexBasis: '90%',
        },
    },
    titleContainer: {
        display: 'flex', alignItems: 'center'
    },
    ascension: {
        backgroundColor: "#232D38",
        minHeight: "10.5rem",
        maxHeight: "10.5rem",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        padding: '1rem 1.5rem 1.5rem 1.5rem',
        borderRadius: '0.188rem',
        '@media (max-width: 60em)': {
            minHeight: '17rem',
            maxHeight: '17rem',
		},
    },
    maxText: {
        cursor: 'help',
        transition: 'all .2s',
        '&:hover': {
            color: '#ffd780',
        }
    },
    maxCurrent: {
        display: 'flex',
        justifyContent: 'flex-start',
        minWidth: '50%',
        alignItems: 'center',
        transform: 'all 2s'
    },
    maxDesired: {
        display: 'flex',
        justifyContent: 'flex-end',
        minWidth: '50%',
        alignItems: 'center',
    },
    checkbox: {
        padding: '0rem',
        marginLeft: '0.5rem',
    },
    tooltip: {
        backgroundColor: "#40484f", 
        maxWidth: '10rem',
        padding: '.75rem',
        fontSize: '.75rem',
        fontWeight: 400,
        lineHeight: '1.3em',
        borderRadius: 0,
    },
    currentLevel: {
        width: '100%', 
        fontWeight: 700, 
        marginBottom: '0.25rem', 
        marginTop: '-0.25rem', 
        color: "#fff",
    },
    desiredLevel: {
       width: '100%', 
       fontWeight: 700, 
       marginBottom: '0.25rem', 
       marginTop: '-0.25rem', 
       color: "#fff",
    },
    ascensionStarContainer: {
        display: 'flex',
        minWidth: '100%',
        marginBottom: '0.5rem',
        justifyContent: 'center',
    },
    ascensionStar: {
        minWidth:"1.563rem", 
        minHeight: "1.563rem", 
        backgroundSize: "contain",
        margin: "0rem 0.125rem",
        opacity: ".3",
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
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
        transition: 'all .2s',
        '&:hover': {
            cursor: "pointer",
            opacity: "1",
         },  
        '&:hover ~ *':  {
            cursor: "pointer",
            opacity: "1",
        },  
    },
    talentsContainer: {
        display: 'flex', maxWidth: 'calc(100% - 2.5rem)',
        marginBottom: '1.5rem',
        '@media (max-width: 60em)': {
            display: 'block',
            maxWidth: '100%'
		},
    },
    talentContainer1: {
        paddingRight: '0.75rem', minWidth: '33%',
        '@media (max-width: 60em)': {
            minWidth: '100%',
            padding: 0,
		},
    },
    talentContainer2: {
        paddingLeft: '0.75rem', paddingRight: '0.75rem', minWidth: '33%',
        '@media (max-width: 60em)': {
            minWidth: '100%',
            padding: 0,
		},
    },
    talentContainer3: {
        paddingLeft: '0.75rem', minWidth: '33%',
        '@media (max-width: 60em)': {
            minWidth: '100%',
            padding: 0,
		},
    },
    talent: {
        backgroundColor: "#232D38",
        minHeight: "19rem",
        maxHeight: "19rem",
        maxWidth: '100%',
        boxSizing: 'border-box',
        padding: '1.5rem 1.5rem 1rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        //borderRadius: '0.188rem',

        // alignItems: 'center',
        // flexWrap: 'wrap',
        '@media (max-width: 60em)': {
            marginBottom: '1.5rem',
            minHeight: '17rem',
            maxHeight: '17rem',
		},
    },
    talentImage: {
        minHeight: "3rem", minWidth:"3rem", maxHeight: "3rem", maxWidth: "3rem", 
        borderRadius: "0.375rem", 
        backgroundColor: "#40484f", 
        marginBottom: "0.75rem",
        margin: "0 auto", 
        boxShadow: "0 0.188rem 0.188rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
    },
    talentName: {
        fontWeight: 700, color: '#ffd780', width: '100%', marginBottom: '0.15rem'
    },
    talentType: {
        width: '100%', 
        marginBottom: '0.5rem', 
        flexGrow: 1
    },
    numberPickerContainerA: {
        minWidth: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex', 
        marginBottom: '0.5rem'
    },
    numberPickerContainerB: {
        minWidth: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex', 
        marginBottom: '0.5rem'
    },
    talentLevelText: {
        textAlign: 'center', marginBottom: '0.25rem'
    },
}));

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
        {},
        {},
        {},
        {},
        {},
        {},

    ]
    const initialDesiredStars = [
        {opacity: "1"},
        {},
        {},
        {},
        {},
        {},
    ]

    const [currentStars, setCurrentStars] = useState<any[]>(initialCurrentStars);
    const [desiredStars, setDesiredStars] = useState<any[]>(initialDesiredStars);

    const [numberPickerOne, setNumberPickerOne] = React.useState<number>(1);
    const [numberPickerTwo, setNumberPickerTwo] = React.useState<number>(6);
    const [numberPickerThree, setNumberPickerThree] = React.useState<number>(1);
    const [numberPickerFour, setNumberPickerFour] = React.useState<number>(6);
    const [numberPickerFive, setNumberPickerFive] = React.useState<number>(1);
    const [numberPickerSix, setNumberPickerSix] = React.useState<number>(6);

    const [levelOpacity, setLevelOpacity] = React.useState<number>(1);
    const [levelPointer, setLevelPointer] = React.useState<any>("auto");

    const [talentOpacity, setTalentOpacity] = React.useState<number>(1);
    const [talentPointer, setTalentPointer] = React.useState<any>("auto");

    const [currentMax, setCurrentMax] = React.useState(false);
    const [desiredMax, setDesiredMax] = React.useState(true);

    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const [desiredLevel, setDesiredLevel] = useState<number>(40);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    const initialRender = useRef(true);

    async function submitDialog() {
        setSubmitDisabled(true);
        let i = [...items]
        let a = {...ascensionDetails}
        a.index = items.length;
        a.type = 'character';

        a.name = character.name;
        a.image = character.image;
        a.typeImage = character.typeImage;
        a.talentMat = character.talentMats.talentMat
        a.currentAscension = countCurrentStars();
        a.desiredAscension = countDesiredStars();

        a.currentMax = currentMax;
        a.desiredMax = desiredMax;
        
        a.abilityOneCurrent = numberPickerOne;
        a.abilityOneDesired = numberPickerTwo;

        a.abilityTwoCurrent = numberPickerThree;
        a.abilityTwoDesired = numberPickerFour;

        a.abilityThreeCurrent = numberPickerFive;
        a.abilityThreeDesired = numberPickerSix;

        a.materials = SetMaterials(character, a, materials);

        const matties = await SetImages(a.materials);
        const tempMatties = JSON.parse(JSON.stringify(matties));
        a.materials = matties;

        i.push(a)
        setItems(i);

        //// adding this characters's materials to summary
        let newSummary = CreateNewSummary(tempMatties, summary);
        //// sorting newSummary
        newSummary?.sort((a: { position: string; }, b: { position: string; }) => parseFloat(a.position) - parseFloat(b.position));

        //console.log("newSummary:", newSummary);
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
        console.log("countDesiredStars:", count);
        return count; 
    }

    const scrollToTop = () => {
        if (null !== theRef.current) {
            theRef.current.scrollIntoView({behavior: "smooth"});
          }
    }

    function setCurrentStarsDOM(index: number) {
        const starsTemp = [...currentStars]
        let currLevel = 1;
        for (let i = 1; i <= 5; i++) {
            starsTemp[i].opacity = "0.3";
        }
        setCurrentStars(starsTemp);
        switch(index) {
            case 0:
                for (let i = 0; i <= 5; i++) {
                    starsTemp[i].opacity = "0.3";
                }
                setCurrentStars(starsTemp);
                currLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currLevel)
                return
            case 1:
                // if user re-clicks
                if (starsTemp[0].opacity === "1" && currentLevel === 20) {
                    starsTemp[0].opacity = "0.3";
                    starsTemp[1].opacity = "0.3";
                    starsTemp[2].opacity = "0.3";
                    starsTemp[3].opacity = "0.3";
                    starsTemp[4].opacity = "0.3";
                    starsTemp[5].opacity = "0.3";
                    setCurrentStars(starsTemp)
                    currLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                    setCurrentLevel(currLevel)
                } else { // regular click
                    starsTemp[0].opacity = "1";
                    setCurrentStars(starsTemp)
                    currLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                    setCurrentLevel(currLevel)
                    if (desiredStars[index].opacity === "1") {
                        // do nothing
                    } else {
                        setDesiredStarsDOM(index)
                    }
                }

                return
            case 2:
                starsTemp[0].opacity = "1";
                starsTemp[1].opacity = "1";
                setCurrentStars(starsTemp);
                currLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currLevel)
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
                currLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currLevel)
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
                currLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currLevel)
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
                currLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currLevel)
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
                currLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
                setCurrentLevel(currLevel)
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
        if (talentOpacity === 1) {
            setTalentOpacity(0.3);
            setTalentPointer('none');

            // set all talents to 1;
            setNumberPickerOne(1);
            setNumberPickerTwo(1);

            setNumberPickerThree(1);
            setNumberPickerFour(1);

            setNumberPickerFive(1);
            setNumberPickerSix(1);
        } else {
            setTalentOpacity(1);
            setTalentPointer('auto');

            // reset talents to default;
            resetTalents();
        }
    }

    function resetTalents() {
        setNumberPickerOne(1);
        setNumberPickerTwo(6);

        setNumberPickerThree(1);
        setNumberPickerFour(6);

        setNumberPickerFive(1);
        setNumberPickerSix(6);

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
        // reset talentOne, talentTwo, talentThree
        resetTalents();

        // set initial desiredLevel to 40
        let desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
        setDesiredLevel(desiredLevel)
    }, []);

    // clicking currentMax or desiredMax (makes sure isn't called on initial mount);
    useEffect(() => {
        if(initialRender.current) {
            initialRender.current = false;
        } else {
            let currentLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
            setCurrentLevel(currentLevel)

            let desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
            setDesiredLevel(desiredLevel)
        }
    }, [currentMax, desiredMax]);
      
    return (
        <div className={classes.character} ref={theRef}> 
            <div className={classes.characterHeader} >
                <div className={classes.backgroundImage}>
                </div>
                <div className={classes.characterImageContainer}>
                    <div className={classes.characterImageInnerContainer}>
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
                        <IconButton
                            disableRipple
                            onClick={submitDialog}
                            disabled={submitDisabled}
                            classes={{root: classes.iconButtonRoot}}
                        >   
                            <CheckIcon className={classes.checkIcon}></CheckIcon>
                        </IconButton>
                        <IconButton
                            disableRipple
                            onClick={dialogClose}
                            classes={{root: classes.iconButtonRoot}}
                        >
                            <CloseIcon className={classes.closeIcon}></CloseIcon>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className={classes.characterContainer}>
                <div className={classes.titleContainer}>
                    <Typography variant="h1" style={{margin: '1rem 0rem', flex: 1, opacity: `${levelOpacity}`}}>
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
                            <Tooltip classes={{tooltip: classes.tooltip}} title="Uses highest level for current ascension. (E.g. Ascension 0 = Level 20" arrow>
                            <Typography variant="h5" className={classes.maxText}>
                                Current Max
                            </Typography>

                            </Tooltip>
                            <Checkbox
                                color="default"
                                checked={currentMax}
                                onChange={handleCurrentMax}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                disableRipple
                                className={classes.checkbox}
                            /> 
                        </div>
                        <div className={classes.maxDesired}>
                            <Tooltip classes={{tooltip: classes.tooltip}} title="Uses highest level for desired ascension (E.g. Ascension 6 = Level 90)" arrow>
                                <Typography variant="h5" className={classes.maxText}>
                                    Desired Max
                                </Typography>
                            </Tooltip>
                            <Checkbox
                                checked={desiredMax}
                                onChange={handleDesiredMax}
                                color="default"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                disableRipple
                                className={classes.checkbox}
                            /> 
                        </div>
                        <div style={{minWidth: '100%'}}>
                        <Typography variant="h3" align="center" className={classes.currentLevel}>
                            Current Level:  &nbsp; &nbsp;{currentLevel}
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
                        </div>
                        
                        <div style={{minWidth: '100%'}}>
                        <Typography variant="h3" align="center" className={classes.desiredLevel}>
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
                        </div>
                    </Card>
                </div>

                <div className={classes.titleContainer}>
                    <Typography variant="h1" style={{margin: '1rem 0rem', flex: 1, opacity: `${talentOpacity}`,}}>
                        Talents
                    </Typography>
                    <Switch
                        defaultChecked
                        onChange={handleTalentSwitch}
                        color="secondary"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />                           
                </div>
                <div className={classes.talentsContainer} style={{opacity: `${talentOpacity}`, pointerEvents: talentPointer}}>
                    <div className={classes.talentContainer1}>
                        <Card className={classes.talent}>
                            <CardMedia
                                image= {character.abilityOne.image}
                                className={classes.talentImage}
                            />
                            <Typography variant="h5" align="center" className={classes.talentName}>
                                {character.abilityOne.name}
                            </Typography>
                            <Typography variant="h6" align="center" className={classes.talentType}>
                                Normal Attack
                            </Typography>
                            <Typography variant="body2" className={classes.talentLevelText}>Current Lv.</Typography>
                            <div className={classes.numberPickerContainerA}>
                                <NumberPicker numberPicker={numberPickerOne} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerOne} otherNumberPicker={numberPickerTwo} setOtherNumberPicker={setNumberPickerTwo} current={true}></NumberPicker>
                            </div>
                            <Typography variant="body2" className={classes.talentLevelText}>Desired Lv.</Typography>
                            <div className={classes.numberPickerContainerB}>
                                <NumberPicker numberPicker={numberPickerTwo} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerTwo} otherNumberPicker={numberPickerOne} setOtherNumberPicker={setNumberPickerOne} current={false}></NumberPicker>
                            </div>
                        </Card>
                    </div>
                    <div className={classes.talentContainer2}>
                        <Card className={classes.talent}>
                            <CardMedia
                                image= {character.abilityTwo.image}
                                className={classes.talentImage}
                            />
                            <Typography variant="h5" align="center" className={classes.talentName}>
                                {character.abilityTwo.name}
                            </Typography>
                            <Typography variant="h6" align="center" className={classes.talentType}>
                                Elemental Skill
                            </Typography>
                            <Typography variant="body2" className={classes.talentLevelText}>Current Lv.</Typography>
                            <div className={classes.numberPickerContainerA}>
                                <NumberPicker numberPicker={numberPickerThree} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerThree} otherNumberPicker={numberPickerFour} setOtherNumberPicker={setNumberPickerFour} current={true}></NumberPicker>
                            </div>
                            <Typography variant="body2" className={classes.talentLevelText}>Desired Lv.</Typography>
                            <div className={classes.numberPickerContainerB}>
                                <NumberPicker numberPicker={numberPickerFour} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerFour} otherNumberPicker={numberPickerThree} setOtherNumberPicker={setNumberPickerThree} current={false}></NumberPicker>
                            </div>
                        </Card>
                    </div>
                    <div className={classes.talentContainer3}>
                        <Card className={classes.talent}>
                            <CardMedia
                                image= {character.abilityThree.image}
                                className={classes.talentImage}
                            />
                            <Typography variant="h5" align="center" className={classes.talentName}>
                                {character.abilityThree.name}
                            </Typography>
                            <Typography variant="h6" align="center" className={classes.talentType}>
                                Elemental Burst
                            </Typography>

                            <Typography variant="body2" className={classes.talentLevelText}>Current Lv.</Typography>
                            <div className={classes.numberPickerContainerA}>
                                <NumberPicker numberPicker={numberPickerFive} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerFive} otherNumberPicker={numberPickerSix} setOtherNumberPicker={setNumberPickerSix} current={true}></NumberPicker>
                            </div>
                            <Typography variant="body2" className={classes.talentLevelText}>Desired Lv.</Typography>
                            <div className={classes.numberPickerContainerB}>
                                <NumberPicker numberPicker={numberPickerSix} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerSix} otherNumberPicker={numberPickerFive} setOtherNumberPicker={setNumberPickerFive} current={false}></NumberPicker>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}