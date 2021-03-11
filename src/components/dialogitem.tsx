import React, { useState } from 'react';
import { CardMedia, makeStyles, Theme } from '@material-ui/core';

export default function DialogItem(props: any) {
    const [imageLoaded, setImageLoaded] = useState(true);
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            transition: 'all .2s',
            cursor: 'pointer',
            position: 'relative',
            minWidth: "4.688rem", 
            maxWidth: "4.2rem", 
            display: imageLoaded? 'block': 'none',
            '&:hover': {
                '& $image': {
                    boxShadow: '0rem 0rem 0rem 0.125rem #e9e5dc;',
                    borderRadius: "0.188rem",
                    transform: 'scale(1.05);',
                    transition: 'all .2s'
                },
                '& $name': {
                    color: 'white',
                    transition: 'all .2s',
                }
            }
        },
        image: {
            display: 'flex',
            justifyContent: 'center',
            minHeight: "4.688rem", 
            minWidth: "4.688rem", 
            maxHeight: "4.688rem", 
            maxWidth: "4.688rem", 
            margin:"auto", 
            backgroundColor: '#2e3944', 
            borderRadius: '0.375rem', 
            cursor: "pointer",
            boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
            transition: 'transform .2s;', /* Animation */
            overflow: 'visible',
        },
        name: {
            textAlign: "center", 
            marginTop: "0.625rem",
            color: '#A7B1C1',
            fontSize: '0.875rem',
            fontWeight: 600,
            overflow: 'hidden',
        },
        element: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: "1.125rem", 
            width: "1.125rem",
            float: "left",
            padding: "0.188rem",
            background: "#2e3944",
            borderRadius: "6.25rem",
            boxShadow: "0 0.188rem 0.375rem  rgba(0,0,0,.23), 0 0.188rem 0.375rem  rgba(0,0,0,.16)"
        },
        // stars: {
        //     display: 'flex', 
        //     flexDirection: 'row', 
        //     maxWidth: '12.5rem',
        //     position: 'absolute', bottom: '0.25rem', justifyContent: 'center'
        // },
        // star: {
        //     minHeight: '0.8rem', 
        //     minWidth: '0.8rem', 
        //     overflow: 'auto', 
        //     boxSizing: 'border-box', 
        //     marginLeft: '-0.15rem', 
        //     verticalAlign: 'middle', 
        //     borderStyle: 'none',
        // },
    }));

    const classes = useStyles();
    const item = props.item;
    const itemType = props.itemType;

    const charCount = props.charCount;
    const weaponCount = props.weaponCount;
    const characters = props.characters;
    const weapons = props.weapons;
    const setReRender = props.setReRender;

    function handleImageLoadChar() {
        if (charCount.current >= characters.length) {
            // do nothing 
            //console.log("doing nothing");
        } else {
            charCount.current += 1;
            //console.log('charCount:', charCount.current);

            if (charCount.current >= characters.length) {
                setReRender(true);
                //console.log("setting reRender")
            }          
        }
        setImageLoaded(true);
    }

    function handleImageLoadWeapon() {
        if (weaponCount.current >= weapons.length) {
            // do nothing
            //console.log("doing nothing");
        } else {
            weaponCount.current += 1;
            //console.log('charCount:', weaponCount.current);

            if (weaponCount.current >= weapons.length) {
                setReRender(true);
                //console.log("setting reRender")
            }          
        }
        setImageLoaded(true);
    }

    return (
        <div>
            {itemType === 'character' &&
            <div className={classes.container}>
                <CardMedia
                    className={classes.image}>
                    <img src={item.image} className={classes.image} onLoad={handleImageLoadChar}></img>
                    
                    <img src={item.typeImage} alt="element" className={classes.element}></img>	                
                </CardMedia>      
                <div className={classes.name}>
                    {item.name}
                </div>
            </div>        
            }
            {itemType === 'weapon' &&
            <div className={classes.container} style={{maxWidth: '6rem'}}>
                <CardMedia
                    className={classes.image}>
                    <img src={item.image} className={classes.image} onLoad={handleImageLoadWeapon}></img>
                </CardMedia>      
                <div className={classes.name}>
                    {item.name}
                </div>
            </div>
            }
        </div>

    );
}