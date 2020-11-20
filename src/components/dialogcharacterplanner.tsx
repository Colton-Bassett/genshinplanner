import React from 'react';
import { Card, CardContent, makeStyles, Grid, CardMedia, Typography, Slider } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Characterbg from '../images/characterbg.png'
import AscensionFour from '../images/ascension4.png'
import SteelFang from '../images/steelfang.png'
import ClawAndThunder from '../images/clawandthunder.png'
import LightningFang from '../images/lightningfang.png'

import HandleImage from '../logic/handleImage'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#20212C !important',
        boxShadow: "none !important",
        position: "relative",
    },
    headerContainer: {
        position: "relative"
    },
    header: {
        padding: "0px",
        "&:last-child": {
            paddingBottom: '0px'
          },
        position: 'absolute',
        top: '0%',
        left: '0%',
        height: '100%',
        width: '100%',
        background: "rgba(29,31,41,.8)"
    },
    characterOuterContainer: {
        height: "100%", 
    },
    characterImageContainer: {
       margin: "auto",
    },
    characterImage: {
        maxHeight: "96px",
        maxWidth: "96px",
        boxShadow: "0 3px 6px rgba(0,0,0,.23), 0 3px 6px rgba(0,0,0,.16)",
        backgroundColor: "#36384a",
        borderRadius: "6px",
        marginRight: "12px",
    },
    checkIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#272937",
        color: "#58CCA5",
        marginRight: "20px",
        cursor: "pointer"
    },
    closeIcon: {
        fontSize: "2.75rem;",
        backgroundColor: "#272937",
        color: "#DEDEDE",
        cursor: "pointer"
    },
    characterInfoContainer: {
        paddingLeft: "8px",
        minHeight: "96px",
    },
    levelContainer: {
        margin: "auto",
    },
    levelPadding: {
        padding: "8px",
    },
    ascensionContainer: {
        backgroundColor: "#272937"
    },
    ascensionImage: {
        minHeight: "30px", 
        borderRadius: "10px",
    },
    ascensionImageContainer: {
		maxWidth: "150px", 
		margin: 'auto'
    },
    talentCard: {
        height: "190px", 
        minWidth: "160px", 
        backgroundColor: "#272937"
    },
    talentImage: {
        minHeight: "53px", minWidth:"53px", maxHeight: "53px", maxWidth: "53px", 
        borderRadius: "6px", 
        backgroundColor: "#36384A", 
        margin: "auto", 
        marginBottom: "8px"
    },
    talentNameText: {
        fontWeight: 700, marginBottom: "8px", color: "#FFCC62"
    },
    rootSlider: {
        width: 300,
    }
}));

function valuetext(value: number) {
    return `${value}°C`;
}

function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([1, 8]);
  
    const handleChange = (event: any, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };
  
    return (
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>

        </Typography>
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            //color="secondary"
            style={{backgroundColor: "#36384A",}}
            min={1}
            max={8}
        />
      </div>
    );
}

export default function DialogCharacterPlanner(props: any) {
    const classes = useStyles();
    const characterName = props.name;

    
    return (
        <Card className={classes.root}> 
            <div className={classes.headerContainer}>
                <CardMedia
                component="img"
                alt="Character Background"
                height="160"
                image={Characterbg}
                />
                <div className={classes.header}>
                    <Grid container xs={12} direction="row" justify="flex-start" style={{height: "100%"}}>
                        <Grid container xs={2} direction="row" justify="flex-end" className={classes.characterImageContainer}>
                            <CardMedia
                            component="img"
                            alt="Character Image"
                            image={HandleImage(characterName)}
                            className={classes.characterImage}
                            />
                        </Grid>
                        <Grid container xs={6} direction="row" justify="flex-start" alignItems="center" className={classes.characterOuterContainer}>
                            <Grid container xs={12} direction="column" justify="center" alignItems="flex-start" className={classes.characterInfoContainer}>
                                <Grid item style={{marginBottom: "6px"}}>
                                    <Typography variant="h3">
                                        Genshin Impact
                                    </Typography>

                                </Grid>
                                <Grid item style={{marginBottom: "6px"}}>
                                    <Typography variant="h1">
                                        {characterName} Character Planner
                                    </Typography>
                                </Grid>
                                <Grid item style={{marginBottom: "0px" }}> 
                                    <Typography variant="h5">
                                        <span style={{color: "#F5BEF0"}}>Electro</span> &#8226; Claymore
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container xs={4} direction="row" justify="center" style={{margin: "auto"}}>
                            <CheckIcon className={classes.checkIcon}></CheckIcon>
                            <CloseIcon className={classes.closeIcon}></CloseIcon>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <CardContent>
                <Grid container xs={8} direction="row" justify="center" alignItems="center" className={classes.levelContainer}>
                    <Grid item xs={12}>
                        <Typography variant="h1" style={{marginBottom:"16px"}}>
                            Levels
                        </Typography>
                        <Grid container xs={12} direction="row" justify="center" alignItems="center" className={classes.ascensionContainer}>
                            <Grid item xs={12} className={classes.levelPadding}>
                                <Typography variant="h2" align="center">
                                    Current Level
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.levelPadding}>
                                <div className={classes.ascensionImageContainer}>
                                    <CardMedia
                                        image= {AscensionFour}
                                        className={classes.ascensionImage}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} className={classes.levelPadding}>
                                <Typography variant="h2" align="center">
                                    Desired Level
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.levelPadding}>
                                <div className={classes.ascensionImageContainer}>
                                    <CardMedia
                                        image= {AscensionFour}
                                        className={classes.ascensionImage}
                                    />
                                </div>
                            </Grid>
                        </Grid>

                        <Typography variant="h1" style={{marginTop: "16px", marginBottom: "16px"}}>
                            Talents
                        </Typography>
                        <Grid container xs={12} direction="row" justify="space-between" alignItems="center">
                            <Grid item xs={3} className={classes.talentCard}>
                                <div style={{paddingTop:"16px"}}>
                                    <CardMedia
                                        image= {SteelFang}
                                        className={classes.talentImage}
                                    />
                                </div>
                                    <Typography variant="h5" align="center" className={classes.talentNameText}>
                                        Steel Fang
                                    </Typography>
                                    <Typography variant="h6" align="center">
                                        Normal Attack
                                    </Typography>
                                    <Grid item xs={10} style={{margin: 'auto', paddingTop:"8px"}}>
                                        <RangeSlider></RangeSlider>
                                    </Grid>
                            </Grid>
                            <Grid item xs={3} className={classes.talentCard}>
                                <div style={{paddingTop:"16px"}}>
                                    <CardMedia
                                        image= {ClawAndThunder}
                                        className={classes.talentImage}
                                    />
                                </div>
                                <Typography variant="h5" align="center" className={classes.talentNameText}>
                                    Claw and Thunder
                                </Typography>
                                <Typography variant="h6" align="center">
                                    Elemental Skill
                                </Typography>
                                <Grid item xs={10} style={{margin: 'auto', paddingTop:"8px"}}>
                                    <RangeSlider></RangeSlider>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} className={classes.talentCard}>
                                <div style={{paddingTop:"16px"}}>
                                    <CardMedia
                                        image= {LightningFang}
                                        className={classes.talentImage}
                                    />
                                </div>
                                <Typography variant="h5" align="center" className={classes.talentNameText}>
                                    Lightning Fang
                                </Typography>
                                <Typography variant="h6" align="center">
                                    Elemental Burst
                                </Typography>
                                <Grid item xs={10} style={{margin: 'auto', paddingTop:"8px"}}>
                                    <RangeSlider></RangeSlider>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}