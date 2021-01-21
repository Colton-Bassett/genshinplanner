import React from 'react';
import { CardMedia, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    characterImage: {
        minHeight: "4.375rem", 
        minWidth: "4.375rem", 
        maxHeight: "4.375rem", 
        maxWidth: "4.375rem", 
        margin:"auto", 
        backgroundColor: '#36384A', 
        borderRadius: '0.375rem', 
        cursor: "pointer",
        boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
    },
    name: {
        textAlign: "center", 
        marginTop: "0.625rem",
        color: '#A7B1C1',
        fontSize: '0.875rem',
        fontWeight: 500,
        overflow: 'hidden',
    },
    element: {
        height: "1.125rem", 
        width: "1.125rem",
        float: "left",
        padding: "0.188rem",
        background: "#36384a",
        borderRadius: "6.25rem",
        boxShadow: "0 0.188rem 0.375rem  rgba(0,0,0,.23), 0 0.188rem 0.375rem  rgba(0,0,0,.16)"
    }
}));

export default function DialogCharacter(props: any) {
    const character = props.character;
    const classes = useStyles();

    return (
        <div>
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



