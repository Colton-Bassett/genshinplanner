import React, {useState, useEffect} from 'react';
import { Card, makeStyles, CardMedia, Typography, Tooltip, Checkbox } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import AscensionStar from '../images/Ascension_Star.png'
import Characterbg from '../images/background2.jpg'

import SetWeaponMaterials from '../logic/setweaponmaterials';
import CreateNewSummary from '../logic/createNewSummary'
import HandleLevel from '../logic/handleLevel'
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
        borderBottom: 'solid 0.313rem #2e3944'
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
        '@media (max-width: 45em)': {
            marginRight: '1rem',
            marginLeft: '1rem',
		},
    },
    weaponImage: {
        width: '100%',
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        backgroundColor: "#2e3944",
        borderRadius: "0.375rem",
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
    },
    stars: {
        display: 'flex', 
        flexDirection: 'row', 
        maxWidth: '12.5rem',
        position: 'absolute', bottom: '0.25rem', justifyContent: 'center',
        minWidth: '100%',
    },
    star: {
        minHeight: '1.15rem', minWidth: '1.15rem', marginLeft: '-0.20rem', verticalAlign: 'middle', borderStyle: 'none',
        '@media (max-width: 30em)': {
            minHeight: '1rem',
            minWidth: '1rem',
		},
        '@media (max-width: 25em)': {
            minHeight: '.9rem',
            minWidth: '.9rem',
		},
    },
    weaponTitle: {
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
            //color: 'white',
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
    weaponContainer: {
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

    const [currentMax, setCurrentMax] = React.useState(false);
    const [desiredMax, setDesiredMax] = React.useState(true);

    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const [desiredLevel, setDesiredLevel] = useState<number>(40);

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
    
    function dialogAddMaterial(material: any, newSummary: any) {
        let duplicateMaterial = newSummary.find((m: { name: any; }) => m.name === material.name);
        if (duplicateMaterial) {
            duplicateMaterial.quantity += material.quantity
        } else {
            newSummary.push(material);
        }
    }

    async function submitDialog() {
        let i = [...items]
        let a = {...ascensionDetails}

        a.index = items.length;
        a.type = 'weapon';
        a.name = weapon.name;
        a.image = weapon.image;
        a.stars = weapon.stars;
        a.currentAscension = countCurrentStars();
        a.desiredAscension = countDesiredStars();
        a.currentMax = currentMax;
        a.desiredMax = desiredMax;

        a.materials = SetWeaponMaterials(weapon, a, materials);
        const matties = await SetImages(a.materials);
        const tempMatties = JSON.parse(JSON.stringify(matties));
        a.materials = matties;

        i.push(a)
        setItems(i);

        //// adding this weapon's materials to summary
        let newSummary = CreateNewSummary(tempMatties, summary);
        //// sorting newSummary
        newSummary?.sort((a: { position: string; }, b: { position: string; }) => parseFloat(a.position) - parseFloat(b.position));

        //console.log("dialogWeaponPlanner Summary::", newSummary);
        setSummary(newSummary)

        dialogClose()
    }

    function handleDesiredMax() {
        setDesiredMax(!desiredMax);
    }

    function handleCurrentMax() {
        setCurrentMax(!currentMax);
    }

    const scrollToTop = () => {
        if (null !== theRef.current) {
            theRef.current.scrollIntoView();
        }
    }

    // initial mount
    useEffect(() => {
        scrollToTop();

    }, []);
    
    // clicking currentMax or desiredMax
    useEffect(() => {
        let currentLevel = HandleLevel(countCurrentStars(), currentMax) || 0;
        setCurrentLevel(currentLevel)

        let desiredLevel = HandleLevel(countDesiredStars(), desiredMax) || 0;
        setDesiredLevel(desiredLevel)

    }, [currentMax, desiredMax]);

    return (
        <div className={classes.weapon} ref={theRef}>
            <div className={classes.weaponHeader}>
                <div className={classes.backgroundImage}>
                </div>
                <div className={classes.weaponImageContainer}>
                    {/* <div style={{position: 'relative', justifyContent: 'center'}}>
                        <CardMedia
                            image={weapon.image}
                            className={classes.weaponImage}>
                            {createRarityStars()}
                        </CardMedia>
                    </div>   */}
                    <div style={{maxWidth: '6rem', maxHeight: '6rem', position: 'relative'}}>
                        {/* <CardMedia
                            image={character.image}
                            className={classes.characterImage}>
                            <img src={character.typeImage} alt="element" className={classes.element}></img>	
                        </CardMedia> */}
                        <img src={weapon.image} className={classes.weaponImage}></img>
                        {createRarityStars()}            
                    </div>
                </div>
                <div className={classes.weaponTitle}>
                    <Typography variant="h3" className={classes.headerText}>
                        Genshin Impact
                    </Typography>
                    <Typography variant="h1" className={classes.headerText}>
                        {weapon.name} Ascension Planner
                    </Typography>
                    <Typography variant="h5" className={classes.headerText}>
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
                            style={{padding: '0rem 0rem 1rem 0rem'}}
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
                            style={{paddingTop: 0, paddingRight: 0}}
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
        </div>
    );
}
