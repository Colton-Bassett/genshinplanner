import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles, Grid } from '@material-ui/core';

import MoraImage from '../images/mora.png';

const useStyles = makeStyles((theme) => ({
    gridRoot: {
        margin: "auto",
        paddingBottom: "16px",
	},
    root: {
        display: 'flex',
        maxHeight: '42px',
        maxWidth: '109px',
        boxShadow: 'none !important',
        padding: '6px',
        backgroundColor: '#222431 !important'
    },
    imageContainer: {
        backgroundColor: '#36384A', minHeight: '42px', minWidth: '42px', maxHeight: '42px', maxWidth: '42px', borderRadius:'3px', padding: '0px !important'
    },
    details: {
        maxHeight: "42px"
    },
    content: {
        flex: '1 0 auto',
        backgroundColor: '#222431'
    },
    textContainer: {
        maxHeight: "42px", padding: "0px 0px 0px 8px !important", margin: "auto"
    },

    text: {
        margin: 'auto', fontWeight: 700
    }
}));

export default function CharacterMaterial( props: any ) {
    const classes = useStyles();

    const name = props.name;
    const quantity = props.quantity;

    const handleMaterialImage = (name: string) => {
        if (name == "Mora") {
            return MoraImage
        }
    }

    return (
            <Grid container xs={12} spacing={3} direction="row" justify="flex-start" alignItems="flex-start" className={classes.gridRoot}>
                <Grid item xs={4} className={classes.imageContainer}>
                <CardMedia
                image= {handleMaterialImage(name)}
                style={{maxHeight: "34px", maxWidth: "34px", minHeight: "34px", minWidth: "34px", margin: "4px"}}
                />
                </Grid> 
                <Grid item xs={8} className={classes.textContainer}>
                    <div className={classes.details}>
                        <Typography variant="body1" className={classes.text}>
                            x {quantity}
                        </Typography>
                    </div>
                </Grid>


            </Grid>

    );
}