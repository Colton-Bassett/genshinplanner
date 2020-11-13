import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

import Mora from './mora.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxHeight: '40px',
        maxWidth: '109px',
        boxShadow: 'none !important',
        padding: '6px',
        backgroundColor: '#222431 !important'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
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
        <Card className={classes.root}>
            <CardMedia
            className={classes.cover}
            image= {Mora}
            style={{backgroundColor: "#36384A", maxHeight: "40px", maxWidth: "40px"}}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="body1">
                        1.1M
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}