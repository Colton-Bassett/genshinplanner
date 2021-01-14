import React from 'react';
import { CardMedia, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    textContainer: {
        textAlign: "center", 
        paddingTop: "8px", 
        color: '#A7B1C1',
        fontSize: '14px',
        fontWeight: 500
        
    },
    element: {
        height: "18px", 
        width: "18px",
        position: "absolute",
        top: "-4px",
        right: "18px",
        padding: "3px",
        background: "#36384a",
        borderRadius: "100px",
        boxShadow: "0 3px 6px rgba(0,0,0,.23), 0 3px 6px rgba(0,0,0,.16)"
    }
}));

export default function DialogueCharacter(props: any) {
    const character = props.character;
    const classes = useStyles();

    return (
        <div style={{position: "relative"}}>
            <CardMedia
            image= {character.image}
            style={{ minHeight: "70px", minWidth: "70px", maxHeight: "70px", maxWidth: "70px", margin:"auto", backgroundColor: '#36384A', borderRadius: '6px', cursor: "pointer"}}
            />
            <img src={character.typeImage} alt="element" className={classes.element}></img>
            <div className={classes.textContainer}>
                {character.name}
            </div>
        </div>
    );
}



