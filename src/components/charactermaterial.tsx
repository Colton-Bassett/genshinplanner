import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles, Grid } from '@material-ui/core';

import Mora from './mora.png';

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
    details: {
        maxHeight: "42px"
    },
    content: {
        flex: '1 0 auto',
        backgroundColor: '#222431'
    },
    cover: {
        width: 151,
    },
}));

export default function CharacterMaterial() {
    const classes = useStyles();
    return (


            <Grid container xs={12} spacing={3} direction="row" justify="flex-start" alignItems="flex-start" className={classes.gridRoot}>
                <Grid item xs={4} style={{backgroundColor: '#36384A', minHeight: '42px', minWidth: '42px', maxHeight: '42px', maxWidth: '42px', borderRadius:'3px', padding: 0}}>
                <CardMedia
                className={classes.cover}
                image= {Mora}
                style={{maxHeight: "34px", maxWidth: "34px", minHeight: "34px", minWidth: "34px", margin: "4px"}}
                />
                </Grid> 
                <Grid item xs={8} style={{maxHeight: "42px", padding: "0px 0px 0px 8px", margin: "auto"}}>
                    <div className={classes.details}>
                        <Typography variant="body1" style={{margin: 'auto', fontWeight: 700}}>
                            x 1.1M
                        </Typography>
                    </div>
                </Grid>


            </Grid>

    );
}