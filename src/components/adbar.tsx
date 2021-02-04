import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    adbar: {
        minWidth: '100%', 
        maxWidth: '100%', 
        boxSizing: 'border-box', 
        padding: '0rem 1rem', 
        marginBottom: '1.5rem',
    },
    adbarContainer: {
        backgroundColor: '#20212C',
        height: "5.625rem",
        margin: "auto",
		display: 'flex', 
		maxWidth: '65rem', 
		overflow: 'auto', 
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        '@media (max-width: 80em)': {
            minWidth: '65em', 
            maxWidth: '65em', 
		},
		'@media (max-width: 60em)': {
			minWidth: '43.75em',
			maxWidth: '43.75em',
		},
		'@media (max-width: 45em)': {
			minWidth: '31.25em',
			maxWidth: '31.25em',
		},
		'@media (max-width: 35em)': {
			minWidth: '100%',
            maxWidth: '100%',
            padding: '0rem 1rem',
            boxSizing: 'border-box',
		},
    },
    text: {
        color: '#6A6C6C',
        fontWeight: 500,
        fontSize: '1rem',
    },
}));

export default function AdBar() {
    const classes = useStyles();
    return (
        <div className={classes.adbar}>
            <div className={classes.adbarContainer}>
                <p className={classes.text}> 
                    This website is supported by ads.
                </p>
            </div>
        </div>
    );
}