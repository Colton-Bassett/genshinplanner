import React from 'react';
import { Grid, CardMedia, makeStyles, Theme } from '@material-ui/core';

import HandleImage from '../logic/handleImage'

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

    return (
        <Grid container xs={12} spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item xs={12}>
                <Grid item xs={12} style={{}}>
                    <CardMedia
                    image= {HandleImage(name)}
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



