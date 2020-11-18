import React from 'react';
import { Grid, CardMedia, makeStyles, Theme } from '@material-ui/core';

import RazorImage from '../images/Razor.png'
import VentiImage from '../images/Venti.png'
import XingqiuImage from '../images/Xingqiu.png'

const useStyles = makeStyles((theme: Theme) => ({
    textContainer: {
        textAlign: "center", 
        paddingTop: "8px", 
        color: '#A7B1C1' 
    }
}));

export default function DialogueCharacter(props: any) {
    const name = props.name;
    const classes = useStyles();

    const handleCharacterImage = (name: string) => {
        if (name == "Razor") {
            return RazorImage
        }
        if (name == 'Xingqiu') {
            return XingqiuImage
        }
        if (name == "Venti") {
            return VentiImage
        }
        else {
            return RazorImage
        }
    }

    return (
        <Grid container xs={12} spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item xs={12}>
                <Grid item xs={12} style={{}}>
                    <CardMedia
                    image= {handleCharacterImage(name)}
                    style={{ minHeight: "70px", minWidth: "70px", maxHeight: "70px", maxWidth: "70px", margin:"auto", backgroundColor: '#36384A', borderRadius: '6px', cursor: "pointer"}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.textContainer}>
                        {name}
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}



