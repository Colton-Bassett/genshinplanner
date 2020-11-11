import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

import Mora from './mora.png';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxHeight: '40px',
        maxWidth: '109px',

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
        controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
        playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MaterialCard() {
    const classes = useStyles();
    //const theme = useTheme();

  return (
    <Card className={classes.root} style={{   boxShadow: "none", padding:"6px",     backgroundColor: '#222431'}}>
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