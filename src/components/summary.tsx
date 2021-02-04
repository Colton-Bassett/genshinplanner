import React, { useState } from 'react';
import clsx from 'clsx';
import { Card, makeStyles, Collapse, IconButton } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    summary: {
		backgroundColor: "#222431",
		minWidth: '100%',
		boxSizing: 'border-box',
        color: 'white',
        marginTop: '1.5rem',
        //marginBottom: '1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '5.625rem',
        alignItems: 'center'
    },
    summaryHeader: {
        minWidth: "calc(100% - 4.5rem)", 
        padding: '0rem 2.25rem', 
        display: 'flex', 
        alignItems: 'center', 
        minHeight: '5.625rem',
    },
    summaryTitle: {
        minWidth: '90%'
    },
    summaryExpand: {
        minWidth: '10%', 
        display: 'flex', 
        alignItems: 'center'
    },
    expandButton: {
		color: 'white', fontSize: '1.625rem'
    },
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
    summaryContent: {
        backgroundColor: "#272937 !important",
        minWidth: '100%',
        display: '',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
}));

export default function NewCharacter(props: any) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
		setExpanded(!expanded);
	};

    function createMockups(count: number) {
        let divs = []
        for (let i = 0; i < count; i++) {
            divs.push(
                <div style={{padding: '.5rem'}} key={i}>
                    <Card style={{minWidth: '3.125rem', minHeight: '4.125rem', maxWidth: '3.125rem', maxHeight: '4.125rem', backgroundColor: '#272937'}}>
                    </Card>
                </div> 
            )
        }
        return <Card style={{backgroundColor: '#222431', display: 'flex', flexWrap: 'wrap', padding: '1rem', justifyContent: 'center'}}>{divs}</Card>
    }

    return (
        <div className={classes.summary}> 
            <div className={classes.summaryHeader}>
                <h2 className={classes.summaryTitle}>Material Summary</h2>
                <div className={classes.summaryExpand}>
                    <IconButton
                        disableFocusRipple
                        disableRipple
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        style={{backgroundColor: "#36384A", borderRadius: "10%", padding: "0"}}
                    >
                        <ExpandMore className={classes.expandButton}/>
                    </IconButton>
                </div>
            </div>    
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            {createMockups(65)} 
            </Collapse>
        </div>
        
    );
}