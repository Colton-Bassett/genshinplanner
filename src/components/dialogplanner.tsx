import React, { useState, useEffect, useRef } from 'react';
import { Card, makeStyles, CardMedia, Typography, Switch, Checkbox, Tooltip, IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import {v4 as uuidv4} from 'uuid';

import SetMaterials from '../logic/setmaterials';
import SetWeaponMaterials from '../logic/setweaponmaterials';
import SetImages from '../logic/setimages'
import CreateNewSummary from '../logic/createNewSummary'
import HandleLevel from '../logic/handleLevel'
import NumberPicker from './numberpicker';
import HandleNumberPicker from '../logic/handleNumberPicker'
import AscensionPlan from '../logic/ascensionPlan'

const RarityStar = `https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Rarity_Star.png`;
const AscensionStar = `https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Ascension_Star.png`;

export default function DialogPlanner(props: any) {
    const [levelContainerOpacity, setLevelContainerOpacity] = React.useState<number>(1);
    const [levelCursor, setLevelCursor] = React.useState<any>("auto");
    const [talentContainerOpacity, setTalentContainerOpacity] = React.useState<number>(1);
    const [talentCursor, setTalentCursor] = React.useState<any>("auto");

    const [talentAttackImageLoaded, setTalentAttackImageLoaded] = React.useState(false);
    const [talentSkillImageLoaded, setTalentSkillImageLoaded] = React.useState(false);
    const [talentBurstImageLoaded, setTalentBurstImageLoaded] = React.useState(false);

    const useStyles = makeStyles((theme) => ({
        dialogPlanner: {
            minWidth: '100%',
            minHeight: '100%',
        },
        header: {
            position: 'relative', 
            display: 'flex', 
            overflow: 'hidden', 
            padding: '1.5rem 0rem',
            boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
            //borderBottom: 'solid 0.25rem #2e3944',
        },
        headerBackground: {
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
        headerImageContainer: {
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
        headerImageInnerContainer: {
            maxWidth: '6rem', 
            maxHeight: '6rem', 
            position: 'relative',
            '@media (max-width: 60em)': {
                maxWidth: '5rem', 
                maxHeight: '5rem', 
            },
        },
        headerImage: {
            width: '100%',
            maxHeight: '6rem',
            maxWidth: '6rem',
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
        rarityStars: {
            display: 'flex', 
            flexDirection: 'row', 
            maxWidth: '12.5rem',
            position: 'absolute', 
            bottom: '0.25rem', 
            justifyContent: 'center',
            minWidth: '100%',
            '@media (max-width: 45em)': {
                bottom: '0.40rem', 
            },
        },
        rarityStar: {
            minHeight: '1.15rem', minWidth: '1.15rem', marginLeft: '-0.20rem', verticalAlign: 'middle', borderStyle: 'none',
            '@media (max-width: 60em)': {
                minWidth: '1rem',
                minHeight: '1rem',
            },
            '@media (max-width: 30em)': {
                minWidth: '.75rem',
                minHeight: '.75rem',
            },
            '@media (max-width: 25em)': {
                minWidth: '.70rem',
                minHeight: '.70rem',
            },
        },
        headerTitleContainer: {
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
        headerTitle: {
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
        headerButtonContainer: {
            maxWidth: '15%', 
            minWidth: '15%', 
            zIndex: 3, 
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex',
        },
        headerButtonInnerContainer: {
            display: 'flex',
            marginRight: '2rem',
            justifyContent: 'center',
            '@media (max-width: 60em)': {
                marginRight: '2rem',
                flexDirection: 'column',
            },
        },
        submitButton: {
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
        closeButton: {
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
            borderRadius: 0,
        },
        plannerNavContainer: {
            backgroundColor: '#2e3944',
            boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        },
        plannerNav: {
            maxWidth: '70%',
            flexBasis: '70%',
            margin: 'auto',
            display: 'flex',
            '@media (max-width: 45em)': {
                maxWidth: '90%',
                flexBasis: '90%',
            },
        },
        linkFirst: {
            textTransform: 'none',
            fontSize: '1rem',
            color: '#fff',
            display: 'flex',
            minHeight: '3.5rem',
            alignItems: 'center',
            transition: 'all .2s',
            padding: '0rem 1rem 0rem 0rem',
            cursor: 'pointer',
            '@media (max-width: 25em)': {
                maxWidth: '4.5rem',
                flexBasis: '4.5rem',
                padding: 0,
            },
        },
        link: {
            textTransform: 'none',
            fontSize: '1rem',
            color: '#A7B1C1',
            display: 'flex',
            minHeight: '3.5rem',
            alignItems: 'center',
            transition: 'all .2s',
            padding: '0rem 1rem',
            cursor: 'default',
        },
        content: {
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
        contentTitleContainer: {
            display: 'flex', alignItems: 'center'
        },
        contentTitle: {
            margin: '1rem 0rem', 
            flex: 1, 
            opacity: `${levelContainerOpacity}`,

        },
        levelContainer: {
            opacity: `${levelContainerOpacity}`, 
            pointerEvents: levelCursor,

        },
        level: {
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
        levelMaxText: {
            cursor: 'help',
            transition: 'all .2s',
            '&:hover': {
                color: '#ffd780',
            }
        },
        startLevelMax: {
            display: 'flex',
            justifyContent: 'flex-start',
            minWidth: '50%',
            alignItems: 'center',
            transform: 'all 2s',
            fontSize: '1.125rem',
        },
        endLevelMax: {
            display: 'flex',
            justifyContent: 'flex-end',
            minWidth: '50%',
            alignItems: 'center',
            fontSize: '1.125rem',
        },
        levelMaxCheckbox: {
            padding: '0rem',
            marginLeft: '0.5rem',
        },
        levelMaxTooltip: {
            backgroundColor: "#40484f", 
            maxWidth: '10rem',
            padding: '.75rem',
            fontSize: '.75rem',
            fontWeight: 400,
            lineHeight: '1.3em',
            borderRadius: 0,
        },
        startLevel: {
            width: '100%', 
            fontWeight: 700, 
            marginBottom: '0.25rem', 
            marginTop: '-0.25rem', 
            color: "#fff",
        },
        endLevel: {
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
        startStarSix: {
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
        startStarFive: {
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
        startStarFour: {
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
        startStarThree: {
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
        startStarTwo: {
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
        startStarOne: {
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
        endStarSix: {
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
        endStarFive: {
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
        endStarFour: {
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
        endStarThree: {
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
        endStarTwo: {
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
        endStarOne: {
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
        talentContainer: {
            display: 'flex', maxWidth: 'calc(100% - 2.5rem)',
            marginBottom: '1.5rem',
            '@media (max-width: 60em)': {
                display: 'block',
                maxWidth: '100%'
            },
        },
        talentContainerAttack: {
            paddingRight: '0.75rem', minWidth: '33%',
            '@media (max-width: 60em)': {
                minWidth: '100%',
                padding: 0,
            },
        },
        talentContainerSkill: {
            paddingLeft: '0.75rem', paddingRight: '0.75rem', minWidth: '33%',
            '@media (max-width: 60em)': {
                minWidth: '100%',
                padding: 0,
            },
        },
        talentContainerBurst: {
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
        talentImageContainer: {
            minHeight: "3rem", minWidth:"3rem", maxHeight: "3rem", maxWidth: "3rem", 
            borderRadius: "0.375rem", 
            backgroundColor: "#40484f", 
            margin: "0 auto", 
            marginBottom: "0.75rem",
            boxShadow: "0 0.188rem 0.188rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        },
        talentAttackImage: {
            display: talentAttackImageLoaded? 'block' : 'none',
            width: '100%',
            borderRadius: "0.375rem", 
        },
        talentSkillImage: {
            display: talentSkillImageLoaded? 'block' : 'none',
            width: '100%',
            borderRadius: "0.375rem", 
        },
        talentBurstImage: {
            display: talentBurstImageLoaded? 'block' : 'none',
            width: '100%',
            borderRadius: "0.375rem", 
        },
        talentName: {
            fontWeight: 700, color: '#ffd780', width: '100%', marginBottom: '0.15rem'
        },
        talentType: {
            width: '100%', 
            marginBottom: '0.5rem', 
            flexGrow: 1
        },
        talentLevelTitle: {
            textAlign: 'center', marginBottom: '0.25rem'
        },
        numberPickerContainer: {
            minWidth: '100%', 
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex', 
            marginBottom: '0.5rem'
        },
    }));
    const classes = useStyles();
    const plannerType = props.plannerType;
    
    
    // character or weapon depending on plannerType
    const item = props.item;
    let elementColor = props.item.type;
    const materials = props.materials;
    const ascensionPlans = props.ascensionPlans;
    const summary = props.summary;

    const setAscensionPlans = props.setAscensionPlans;
    const setSummary = props.setSummary;
    const dialogClose = props.dialogClose

    const [startLevelMax, setStartLevelMax] = React.useState(false);
    const [endLevelMax, setEndLevelMax] = React.useState(true);
    const [startLevel, setStartLevel] = useState<number>(1);
    const [endLevel, setEndLevel] = useState<number>(40);
    const [startLevelStars, setStartLevelStars] = useState<any[]>([{},{},{},{},{},{}]);
    const [endLevelStars, setEndLevelStars] = useState<any[]>([{opacity: '1'},{},{},{},{},{}]);

    const [numberPickerAttackStart, setNumberPickerAttackStart] = React.useState<number>(1);
    const [numberPickerAttackEnd, setNumberPickerAttackEnd] = React.useState<number>(6);
    const [numberPickerSkillStart, setNumberPickerSkillStart] = React.useState<number>(1);
    const [numberPickerSkillEnd, setNumberPickerSkillEnd] = React.useState<number>(6);
    const [numberPickerBurstStart, setNumberPickerBurstStart] = React.useState<number>(1);
    const [numberPickerBurstEnd, setNumberPickerBurstEnd] = React.useState<number>(6);

    const scrollTopRef = React.createRef<HTMLDivElement>();
    const initialRender = useRef(true);
    const [submitDialogDisabled, setSubmitDialogDisabled] = useState(false);

    // helper functions
    function countAscensionStars(type: string) {
        let count = 0;
        switch(type) {
            case "start":
                for (let i = 0; i < startLevelStars.length; i++) {
                    if (startLevelStars[i].opacity === "1") {
                        count++
                    }
                }
                return count;
            case "end":
                for (let i = 0; i < endLevelStars.length; i++) {
                    if (endLevelStars[i].opacity === "1") {
                        count++
                    }
                }
                return count;     
        }
    }

    const scrollToTop = () => {
        if (null !== scrollTopRef.current) {
            scrollTopRef.current.scrollIntoView({behavior: "smooth"});
          }
    }

    function handleSwitchLevel() {
        if (levelContainerOpacity === 1) {
            setLevelContainerOpacity(0.3);
            setLevelCursor('none');
            // set startStars to 0.3
            setAscensionStars("start", 0);
            // set endStars to 0.3
            setAscensionStars("end", 0);

            setStartLevelMax(false);
            setEndLevelMax(false);

        } else {
            setLevelContainerOpacity(1)
            setLevelCursor('auto');

            // reset endStars to default
            setAscensionStars("end", 1);

            setStartLevelMax(false);
            setEndLevelMax(true);
        }
    }

    function handleSwitchTalent() {
        if (talentContainerOpacity === 1) {
            setTalentContainerOpacity(0.3);
            setTalentCursor('none');

            // set all talents to 1;
            setAllTalents(1, 1);
        } else {
            setTalentContainerOpacity(1);
            setTalentCursor('auto');

            // reset talents to default;
            setAllTalents(1, 6);
        }
    }

    function setAllTalents(start: number, end: number) {
        setNumberPickerAttackStart(start);
        setNumberPickerAttackEnd(end);

        setNumberPickerSkillStart(start);
        setNumberPickerSkillEnd(end);

        setNumberPickerBurstStart(start);
        setNumberPickerBurstEnd(end);
    }

    function handleStartLevelMax() {
        setStartLevelMax(!startLevelMax);
    }

    function handleEndLevelMax() {
        setEndLevelMax(!endLevelMax);
    }

    function handleRarityStars() {
		var rarityStars = []
		if (item.stars === "Four") {
			//console.log("CreateRarityStars Four")
			for (let i = 0; i < 4; i++) {
				if (i === 0) {
					rarityStars.push(<CardMedia
						image= {RarityStar}
						className= {classes.rarityStar}
						style={{marginLeft: 0}}
						key= {i}
					/>)					
				} else {
					rarityStars.push(<CardMedia
						image= {RarityStar}
						className= {classes.rarityStar}
						key= {i}
					/>)
				}
			}
		} else{
			for (let i = 0; i < 5; i++) {
				if (i === 0) {
					rarityStars.push(<CardMedia
						image= {RarityStar}
						className= {classes.rarityStar}
						style={{marginLeft: 0}}
						key= {i}
					/>)					
				} else {
					rarityStars.push(<CardMedia
						image= {RarityStar}
						className= {classes.rarityStar}
						key= {i}
					/>)
				}
			}
		}
		return <div className={classes.rarityStars}>{rarityStars}</div>
    }

    function handleImageLoadTalent(type: number) {
        if (type === 1) {
            setTalentAttackImageLoaded(true);
        }
        if (type === 2) {
            setTalentSkillImageLoaded(true);
        }
        if (type === 3) {
            setTalentBurstImageLoaded(true);
        }
    }

    // main functions
    async function submitDialog() {
        // disables multiple clicks on submit button
        setSubmitDialogDisabled(true);
        let newAscensionPlans = [...ascensionPlans]
        let ascensionPlan: AscensionPlan = {};

        if (plannerType === "character") {
            ascensionPlan.id = uuidv4();
            ascensionPlan.name = item.name;
            ascensionPlan.type = 'character';
            ascensionPlan.typeImage = item.typeImage;
            ascensionPlan.stars = item.stars;
            ascensionPlan.image = item.image;

            ascensionPlan.currentMax = startLevelMax;
            ascensionPlan.desiredMax = endLevelMax;
            ascensionPlan.startAscension = countAscensionStars("start") || 0;
            ascensionPlan.endAscension = countAscensionStars("end") || 0;

            ascensionPlan.talentOneStart = numberPickerAttackStart;
            ascensionPlan.talentOneEnd = numberPickerAttackEnd;
            ascensionPlan.talentTwoStart = numberPickerSkillStart;
            ascensionPlan.talentTwoEnd = numberPickerSkillEnd;
            ascensionPlan.talentThreeStart = numberPickerBurstStart;
            ascensionPlan.talentThreeEnd = numberPickerBurstEnd;

            ascensionPlan.talentMat = item.talentMats.talentMat;

            ascensionPlan.materials = SetMaterials(item, ascensionPlan, materials);
        } else if (plannerType === "weapon") {
            ascensionPlan.id = uuidv4();
            ascensionPlan.name = item.name;
            ascensionPlan.type = 'weapon';
            ascensionPlan.stars = item.stars;
            ascensionPlan.image = item.image;

            ascensionPlan.currentMax = startLevelMax;
            ascensionPlan.desiredMax = endLevelMax;
            ascensionPlan.startAscension = countAscensionStars("start") || 0;
            ascensionPlan.endAscension = countAscensionStars("end") || 0;

            ascensionPlan.materials = SetWeaponMaterials(item, ascensionPlan, materials);
        } else {
            console.log("submitDialog issue")
        }
        
        // set images for all materials (should be done elsewhere)
        const matties = await SetImages(ascensionPlan.materials);
        const tempMatties = JSON.parse(JSON.stringify(matties));
        ascensionPlan.materials = matties;

        // add ascensionPlan to ascensionPlans
        newAscensionPlans.push(ascensionPlan)
        setAscensionPlans(newAscensionPlans);

        //// adding this characters's materials to summary
        let newSummary = CreateNewSummary(tempMatties, summary);
        //// sorting newSummary
        newSummary?.sort((a: { position: string; }, b: { position: string; }) => parseFloat(a.position) - parseFloat(b.position));
        setSummary(newSummary)
        dialogClose()
    }

    function setAscensionStars(type: string, index: number) {
        let newAscensionStars;
        let setAscensionStars;
        let otherAscensionStars;
        let setOtherAscensionStars;

        let opacityOne;
        let opacityTwo;

        let levelMax;
        let otherLevelMax;
        let setLevel;
        let setOtherLevel;

        let level = 1;
        let otherLevel = 1;

        // check if startStars or endStars
        if (type === "start") {
            newAscensionStars = [...startLevelStars];
            setAscensionStars = setStartLevelStars;
            otherAscensionStars = [...endLevelStars];
            setOtherAscensionStars = setEndLevelStars;
            levelMax = startLevelMax;
            setLevel = setStartLevel;
            setOtherLevel = setEndLevel;
            otherLevelMax = endLevelMax;
            opacityOne = newAscensionStars[0].opacity;
            opacityTwo = newAscensionStars[1].opacity;

        } else {
            newAscensionStars = [...endLevelStars];
            setAscensionStars = setEndLevelStars;
            otherAscensionStars = [...startLevelStars];
            setOtherAscensionStars = setStartLevelStars;
            levelMax = endLevelMax;
            setLevel = setEndLevel;
            setOtherLevel = setStartLevel;
            otherLevelMax = startLevelMax;
            opacityOne = newAscensionStars[0].opacity;
            opacityTwo = newAscensionStars[1].opacity;
        }

        // reset ascensionStars
        for (let i = 0; i <= 5; i++) {
            newAscensionStars[i].opacity = "0.3";
        }
        setAscensionStars(newAscensionStars);

        if (index === 0) {
            level = HandleLevel(countAscensionStars(type) || 0, levelMax) || 0;
            setLevel(level)
            return
        }

        // handles condition where user clicks startStar[0] after it's already on (resets startLevel to 1)
        if (type === "start" && opacityOne === "1" && opacityTwo === "0.3" && index == 1) {
            console.log("condition met poggers")
            for (let i = 0; i <= 5; i++) {
                newAscensionStars[i].opacity = "0.3";
            }
        } else {
            // assign ascensionStars noormally
            for (let i = 0; i <= index - 1; i++) {
                newAscensionStars[i].opacity = "1";
            }
        }

        // handles condition where startStar[i] > endStar[i]
        if (type === "start" && otherAscensionStars[index-1].opacity !== "1") {
            for (let i = 0; i <= index - 1; i++) {
                otherAscensionStars[i].opacity = "1";
            }
            setOtherAscensionStars(otherAscensionStars);
            otherLevel = HandleLevel(countAscensionStars("end") || 0, otherLevelMax) || 0;
            setOtherLevel(otherLevel);
        }

        // handles condition where endStar[i] < startStar[i]
        if (type === "end" && otherAscensionStars[index-1].opacity === "1") {
            // reset ascensionStars
            for (let i = 0; i <= 5; i++) {
                otherAscensionStars[i].opacity = "0.3";
            }
            for (let i = 0; i <= index - 1; i++) {
                otherAscensionStars[i].opacity = "1";
            }
            setOtherAscensionStars(otherAscensionStars);
            otherLevel = HandleLevel(countAscensionStars("start") || 0, otherLevelMax) || 0;
            setOtherLevel(otherLevel);
        }

        // set ascensionStars and level
        setAscensionStars(newAscensionStars);
        level = HandleLevel(countAscensionStars(type) || 0, levelMax) || 0;
        setLevel(level);
    }

    // initial mount
    useEffect(() => {
        scrollToTop();

        // check dialogPlannerType
        if (plannerType === "character") {
            // reset talentAttack, talentSkill, talentBurst
            setAllTalents(1, 6);
        } else if (plannerType === "weapon") {
            // do nothing, everything is handled
        } else {
            console.log("plannerType Error")
        }

        // set initial endLevel to 40
        let level = HandleLevel(countAscensionStars("end") || 0, endLevelMax) || 0;
        setEndLevel(level)
    }, []);

    // fires when clicking startLevelMax or endLevelMax (isn't called on initial mount);
    useEffect(() => {
        if(initialRender.current) {
            initialRender.current = false;
        } else {
            let startLevel = HandleLevel(countAscensionStars("start") || 0, startLevelMax) || 0;
            setStartLevel(startLevel)

            let endLevel = HandleLevel(countAscensionStars("end") || 0, endLevelMax) || 0;
            setEndLevel(endLevel)
        }
    }, [startLevelMax, endLevelMax]);

    return (
        <div className={classes.dialogPlanner} ref={scrollTopRef}> 
            <div className={classes.header} >
                <div className={classes.headerBackground}>
                </div>
                <div className={classes.headerImageContainer}>
                    <div className={classes.headerImageInnerContainer}>
                        <img src={item.image} alt="character or weapon" className={classes.headerImage}></img>
                        {/* only show if plannerType == "character" */}
                        {plannerType === "character" &&
                           <img src={item.typeImage} alt="element" className={classes.element}></img>	                        
                        }
                        {plannerType === "weapon" &&
                            <div>
                                {handleRarityStars()}
                            </div>
                        }
                    </div>
                </div>
                <div className={classes.headerTitleContainer}>
                    <Typography variant="h3" className={classes.headerTitle}>
                        Genshin Impact
                    </Typography>
                    <Typography variant="h1" className={classes.headerTitle}>
                        {item.name} Ascension Planner
                    </Typography>
                    {plannerType === "character" &&
                        <Typography variant="h5" className={classes.headerTitle}>
                            <span className={elementColor}>{item.type}</span> &#8226; {item.weapon}
                        </Typography>                  
                    }
                    {plannerType === "weapon" &&
                        <Typography variant="h5" className={classes.headerTitle}>
                            <span>{item.type}</span>
                        </Typography>           
                    }

                </div>
                <div className={classes.headerButtonContainer}>
                    <div className={classes.headerButtonInnerContainer}>
                        <IconButton
                            disableRipple
                            onClick={submitDialog}
                            disabled={submitDialogDisabled}
                            classes={{root: classes.iconButtonRoot}}
                        >   
                            <CheckIcon className={classes.submitButton}></CheckIcon>
                        </IconButton>
                        <IconButton
                            disableRipple
                            onClick={dialogClose}
                            classes={{root: classes.iconButtonRoot}}
                        >
                            <CloseIcon className={classes.closeButton}></CloseIcon>
                        </IconButton>
                    </div>
                </div>
            </div>
            {plannerType === "character" &&
                <div className={classes.plannerNavContainer}>
                    <div className={classes.plannerNav}>
                        <span className={classes.linkFirst}>Levels & Talents</span>
                        <Tooltip classes={{tooltip: classes.levelMaxTooltip}} title="Coming Soon" arrow>
                            <span className={classes.link}>Weapon</span>
                        </Tooltip>
                        <Tooltip classes={{tooltip: classes.levelMaxTooltip}} title="Coming Soon" arrow>
                            <span className={classes.link}>Artifacts</span>
                        </Tooltip>
                    </div>
                </div>            
            }

            {plannerType === "weapon" &&
                <div className={classes.plannerNavContainer}>
                    <div className={classes.plannerNav}>
                        <span className={classes.linkFirst}>Levels</span>
                    </div>
                </div>            
            }

            <div className={classes.content}>
                <div className={classes.contentTitleContainer}>
                    <Typography variant="h1" className={classes.contentTitle} >
                        Levels
                    </Typography>
                    <Switch
                        defaultChecked
                        onChange={handleSwitchLevel}
                        color="secondary"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                </div>
                <div className={classes.levelContainer}>
                    <Card className={classes.level}>
                        <div className={classes.startLevelMax}>
                            <Tooltip classes={{tooltip: classes.levelMaxTooltip}} title="Uses highest level for current ascension. (E.g. Ascension 0 = Level 20" arrow>
                            <Typography variant="h5" className={classes.levelMaxText}>
                                Current Max
                            </Typography>

                            </Tooltip>
                            <Checkbox
                                color="default"
                                checked={startLevelMax}
                                onChange={handleStartLevelMax}
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                disableRipple
                                className={classes.levelMaxCheckbox}
                            /> 
                        </div>
                        <div className={classes.endLevelMax}>
                            <Tooltip classes={{tooltip: classes.levelMaxTooltip}} title="Uses highest level for desired ascension (E.g. Ascension 6 = Level 90)" arrow>
                                <Typography variant="h5" className={classes.levelMaxText}>
                                    Desired Max
                                </Typography>
                            </Tooltip>
                            <Checkbox
                                checked={endLevelMax}
                                onChange={handleEndLevelMax}
                                color="default"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                disableRipple
                                className={classes.levelMaxCheckbox}
                            /> 
                        </div>
                        <div style={{minWidth: '100%'}}>
                            <Typography variant="h3" align="center" className={classes.startLevel}>
                                Current Level:  &nbsp; &nbsp;{startLevel}
                            </Typography>
                            <div className={classes.ascensionStarContainer}>
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.startStarSix}
                                style={{opacity: startLevelStars[5].opacity}}
                                onClick={(e) => {setAscensionStars("start", 6)}}
                                />
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.startStarFive}
                                style={{opacity: startLevelStars[4].opacity}}
                                onClick={(e) => {setAscensionStars("start", 5)}}
                                />
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.startStarFour}
                                style={{opacity: startLevelStars[3].opacity}}
                                onClick={(e) => {setAscensionStars("start", 4)}}
                                />
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.startStarThree}
                                style={{opacity: startLevelStars[2].opacity}}
                                onClick={(e) => {setAscensionStars("start", 3)}}
                                />
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.startStarTwo}
                                style={{opacity: startLevelStars[1].opacity}}
                                onClick={(e) => {setAscensionStars("start", 2)}}
                                />
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.startStarOne}
                                style={{opacity: startLevelStars[0].opacity}}
                                onClick={(e) => {setAscensionStars("start", 1)}}
                                />
                            </div>
                        </div>
                        
                        <div style={{minWidth: '100%'}}>
                            <Typography variant="h3" align="center" className={classes.endLevel}>
                                Desired Level: &nbsp; &nbsp;{endLevel}
                            </Typography>
                            <div className={classes.ascensionStarContainer}>
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.endStarSix}
                                style={{opacity: endLevelStars[5].opacity}}
                                onClick={(e) => {setAscensionStars("end", 6)}}
                                />
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.endStarFive}
                                style={{opacity: endLevelStars[4].opacity}}
                                onClick={(e) => {setAscensionStars("end", 5)}}
                                />
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.endStarFour}
                                style={{opacity: endLevelStars[3].opacity}}
                                onClick={(e) => {setAscensionStars("end", 4)}}
                                />
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.endStarThree}
                                style={{opacity: endLevelStars[2].opacity}}
                                onClick={(e) => {setAscensionStars("end", 3)}}
                                />
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.endStarTwo}
                                style={{opacity: endLevelStars[1].opacity}}
                                onClick={(e) => {setAscensionStars("end", 2)}}
                                />
                                <CardMedia
                                image= {AscensionStar}
                                className={classes.endStarOne}
                                style={{opacity: endLevelStars[0].opacity}}
                                onClick={(e) => {setAscensionStars("end", 1)}}
                                />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* only show if plannertype === "character" */}
                {plannerType === "character" &&
                    <div>
                        <div className={classes.contentTitleContainer}>
                            <Typography variant="h1" style={{margin: '1rem 0rem', flex: 1, opacity: `${talentContainerOpacity}`,}}>
                                Talents
                            </Typography>
                            <Switch
                                defaultChecked
                                onChange={handleSwitchTalent}
                                color="secondary"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />                           
                        </div>
                        <div className={classes.talentContainer} style={{opacity: `${talentContainerOpacity}`, pointerEvents: talentCursor}}>
                            <div className={classes.talentContainerAttack}>
                                <Card className={classes.talent}>
                                    <div className={classes.talentImageContainer}>
                                        <img src={item.abilityOne.image} className={classes.talentAttackImage} onLoad={(event) => handleImageLoadTalent(1)}></img>
                                    </div>
                                    <Typography variant="h5" align="center" className={classes.talentName}>
                                        {item.abilityOne.name}
                                    </Typography>
                                    <Typography variant="h6" align="center" className={classes.talentType}>
                                        Normal Attack
                                    </Typography>
                                    <Typography variant="body2" className={classes.talentLevelTitle}>Current Lv.</Typography>
                                    <div className={classes.numberPickerContainer}>
                                        <NumberPicker numberPicker={numberPickerAttackStart} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerAttackStart} otherNumberPicker={numberPickerAttackEnd} setOtherNumberPicker={setNumberPickerAttackEnd} current={true}></NumberPicker>
                                    </div>
                                    <Typography variant="body2" className={classes.talentLevelTitle}>Desired Lv.</Typography>
                                    <div className={classes.numberPickerContainer}>
                                        <NumberPicker numberPicker={numberPickerAttackEnd} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerAttackEnd} otherNumberPicker={numberPickerAttackStart} setOtherNumberPicker={setNumberPickerAttackStart} current={false}></NumberPicker>
                                    </div>
                                </Card>
                            </div>
                            <div className={classes.talentContainerSkill}>
                                <Card className={classes.talent}>
                                    <div className={classes.talentImageContainer}>
                                        <img src={item.abilityTwo.image} className={classes.talentSkillImage} onLoad={(event) => handleImageLoadTalent(2)}></img>
                                    </div>
                                    <Typography variant="h5" align="center" className={classes.talentName}>
                                        {item.abilityTwo.name}
                                    </Typography>
                                    <Typography variant="h6" align="center" className={classes.talentType}>
                                        Elemental Skill
                                    </Typography>
                                    <Typography variant="body2" className={classes.talentLevelTitle}>Current Lv.</Typography>
                                    <div className={classes.numberPickerContainer}>
                                        <NumberPicker numberPicker={numberPickerSkillStart} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerSkillStart} otherNumberPicker={numberPickerSkillEnd} setOtherNumberPicker={setNumberPickerSkillEnd} current={true}></NumberPicker>
                                    </div>
                                    <Typography variant="body2" className={classes.talentLevelTitle}>Desired Lv.</Typography>
                                    <div className={classes.numberPickerContainer}>
                                        <NumberPicker numberPicker={numberPickerSkillEnd} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerSkillEnd} otherNumberPicker={numberPickerSkillStart} setOtherNumberPicker={setNumberPickerSkillStart} current={false}></NumberPicker>
                                    </div>
                                </Card>
                            </div>
                            <div className={classes.talentContainerBurst}>
                                <Card className={classes.talent}>
                                    <div className={classes.talentImageContainer}>
                                        <img src={item.abilityThree.image} className={classes.talentBurstImage} onLoad={(event) => handleImageLoadTalent(3)}></img>
                                    </div>
                                    <Typography variant="h5" align="center" className={classes.talentName}>
                                        {item.abilityThree.name}
                                    </Typography>
                                    <Typography variant="h6" align="center" className={classes.talentType}>
                                        Elemental Burst
                                    </Typography>

                                    <Typography variant="body2" className={classes.talentLevelTitle}>Current Lv.</Typography>
                                    <div className={classes.numberPickerContainer}>
                                        <NumberPicker numberPicker={numberPickerBurstStart} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerBurstStart} otherNumberPicker={numberPickerBurstEnd} setOtherNumberPicker={setNumberPickerBurstEnd} current={true}></NumberPicker>
                                    </div>
                                    <Typography variant="body2" className={classes.talentLevelTitle}>Desired Lv.</Typography>
                                    <div className={classes.numberPickerContainer}>
                                        <NumberPicker numberPicker={numberPickerBurstEnd} handleNumberPicker={HandleNumberPicker} setNumberPicker={setNumberPickerBurstEnd} otherNumberPicker={numberPickerBurstStart} setOtherNumberPicker={setNumberPickerBurstStart} current={false}></NumberPicker>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>                     
                }
            </div>
        </div>
    );
}