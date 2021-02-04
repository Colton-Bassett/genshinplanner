import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        // backgroundColor: '#20212C',
        backgroundColor: '#222431',
        minWidth: "calc(100% - 1.5rem)",
        boxShadow: "none",
        marginLeft: '1.5rem',
    },
    plannerContainer: {
		maxWidth: "100%", 
		minWidth: "100%",
		margin: "auto",
		justifyContent: "center",
		display: "flex",
		flexWrap: "wrap",
		boxSizing: "border-box",
	},
}));

export default function SideBar()  {
    const classes = useStyles();
        return (
        <Card className={classes.sidebar}> 
        {/* <div className={classes.plannerContainer}>
            <CardContent style={{minWidth: '100%', padding: '1.5rem 2.25rem', boxSizing: 'border-box'}}>
                <h2>Planner Summary</h2>
                <Typography variant="h2" style={{marginBottom: '0.5rem'}}>
                    General
                </Typography>
                <Card style={{backgroundColor: '#222431', marginBottom: '1rem', display: 'flex', flexWrap: 'wrap'}}>
                    <div style={{padding: '.5rem'}}>
                        <Card style={{minWidth: '3.125rem', minHeight: '4.125rem', maxWidth: '3.125rem', maxHeight: '4.125rem', backgroundColor: '#272937'}}>
                        </Card>
                    </div>
                    <div style={{padding: '.5rem'}}>
                        <Card style={{minWidth: '3.125rem', minHeight: '4.125rem', maxWidth: '3.125rem', maxHeight: '4.125rem', backgroundColor: '#272937'}}>
                        </Card>
                    </div>
                    <div style={{padding: '.5rem'}}>
                        <Card style={{minWidth: '3.125rem', minHeight: '4.125rem', maxWidth: '3.125rem', maxHeight: '4.125rem', backgroundColor: '#272937'}}>
                        </Card>
                    </div>
                    <div style={{padding: '.5rem'}}>
                        <Card style={{minWidth: '3.125rem', minHeight: '4.125rem', maxWidth: '3.125rem', maxHeight: '4.125rem', backgroundColor: '#272937'}}>
                        </Card>
                    </div>
                    <div style={{padding: '.5rem'}}>
                        <Card style={{minWidth: '3.125rem', minHeight: '4.125rem', maxWidth: '3.125rem', maxHeight: '4.125rem', backgroundColor: '#272937'}}>
                        </Card>
                    </div>
                    <div style={{padding: '.5rem'}}>
                        <Card style={{minWidth: '3.125rem', minHeight: '4.125rem', maxWidth: '3.125rem', maxHeight: '4.125rem', backgroundColor: '#272937'}}>
                        </Card>
                    </div>
                    
                    
                </Card>
                <Typography variant="h2" style={{marginBottom: '0.5rem'}}>
                    Common
                </Typography>
                <Card style={{backgroundColor: '#272937', marginBottom: '1rem'}}>
                </Card>
                <Typography variant="h2" style={{marginBottom: '0.5rem'}}>
                    Character Ascension
                </Typography>
                <Card style={{backgroundColor: '#272937', marginBottom: '1rem'}}>
                </Card>
                <Typography variant="h2" style={{marginBottom: '0.5rem'}}>
                    Talent Level Up
                </Typography>
                <Card style={{backgroundColor: '#272937', marginBottom: '1rem'}}>
                </Card>
                <Typography variant="h2" style={{marginBottom: '0.5rem'}}>
                    Weapon Ascension
                </Typography>
                <Card style={{backgroundColor: '#272937', marginBottom: '1rem'}}>
                </Card>
            </CardContent>
        </div> */}

        </Card>
        );
    }
