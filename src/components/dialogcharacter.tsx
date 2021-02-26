import React from 'react';
import { CardMedia, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    characterContainer: {
        '&:hover': {
            '& $characterImage': {
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
    characterImage: {
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
        // '&:hover': {
        //     boxShadow: '0rem 0rem 0rem 0.125rem #e9e5dc;',
        //     borderRadius: "0.188rem",
        //     transform: 'scale(1.05);',
        //     cursor: 'pointer',
        //     '& $name': {
        //         color: 'white !important',
        //     }
        //  },
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
    }
}));

export default function DialogCharacter(props: any) {
    const character = props.character;
    const classes = useStyles();

    return (
        <div className={classes.characterContainer}>
            <CardMedia
            image= {character.image}
            className={classes.characterImage}>
            <img src={character.typeImage} alt="element" className={classes.element}></img>	
            </CardMedia>      
            <div className={classes.name}>
                {character.name}
            </div>
        </div>
    );
}



