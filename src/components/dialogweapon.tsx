import React from 'react';
import { CardMedia, makeStyles, Theme } from '@material-ui/core';

import Star from '../images/star.png'

const useStyles = makeStyles((theme: Theme) => ({
    weaponContainer: {
        '&:hover': {
            '& $weaponImage': {
                boxShadow: '0rem 0rem 0rem 0.125rem #e9e5dc;',
                borderRadius: "0.188rem",
                transform: 'scale(1.05);',
                cursor: 'pointer',
            },
            '& $name': {
                color: 'white',
            }
        }
    },
    weaponImage: {
        minHeight: "4.375rem", 
        minWidth: "4.375rem", 
        maxHeight: "4.375rem", 
        maxWidth: "4.375rem", 
        margin:"auto", 
        backgroundColor: '#2e3944', 
        borderRadius: '0.375rem', 
        cursor: "pointer",
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        transition: 'transform .2s;', /* Animation */
        overflow: 'visible',
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            boxShadow: '0rem 0rem 0rem 0.125rem #e9e5dc;',
            borderRadius: "0.188rem",
            transform: 'scale(1.05);',
            cursor: 'pointer',
            color: 'white',
         },
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
        height: "1.125rem", 
        width: "1.125rem",
        float: "left",
        padding: "0.188rem",
        background: "#2e3944",
        borderRadius: "6.25rem",
        boxShadow: "0 0.188rem 0.375rem  rgba(0,0,0,.23), 0 0.188rem 0.375rem  rgba(0,0,0,.16)"
    },
    stars: {
        display: 'flex', 
        flexDirection: 'row', 
        maxWidth: '12.5rem',
        position: 'absolute', bottom: '0.25rem', justifyContent: 'center'
    },
    star: {
        minHeight: '0.8rem', minWidth: '0.8rem', overflow: 'auto', boxSizing: 'border-box', marginLeft: '-0.15rem', verticalAlign: 'middle', borderStyle: 'none',
        //backgroundColor: "#2e3944",
    },
}));



export default function DialogWeapon(props: any) {
    const weapon = props.weapon;
    const classes = useStyles();

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

    return (
        <div className={classes.weaponContainer}>
            <div style={{position: 'relative', justifyContent: 'center'}}>
                <CardMedia
                image= {weapon.image}
                className={classes.weaponImage}>
                {/* {createRarityStars()} */}
                </CardMedia>  
            </div>    
            <div className={classes.name}>
                {weapon.name}
            </div>

        </div>
    );
}



