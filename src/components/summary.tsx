import React, { useState } from 'react';
import clsx from 'clsx';
import { Card, makeStyles, Collapse, IconButton } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import CharacterMaterial from './charactermaterial'
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
        alignItems: 'center',
        borderRadius: '0.25rem'
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
    summaryInnerTitle: {
        minWidth: '90%',
        padding: '0rem 2.25rem',
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

    // const [generalMaterials, setGeneralMaterials] = React.useState(false);
    // const [weaponMaterials, setWeaponMaterials] = React.useState(false);
    // const [talentMaterials, setTalentMaterials] = React.useState(false);

    const summary = props.summary;
    const handleExpandClick = () => {
		setExpanded(!expanded);
    };
    
    const talentMaterials = summary && summary.map((material: any, index: any) => {
        if (material.position >= 97 && material.position <= 124) {
            return <CharacterMaterial key={index} name={material.name} quantity={material.quantity} image={material.image} type={material.type} description={material.description} sources={material.sources} stars={material.stars}></CharacterMaterial>
        }
    });

    const generalMaterials = summary && summary.map((material: any, index: any) => {
        // materials /w position 1-4, 8-44, 63-96
        if (material.position >= 1 && material.position <= 4 || material.position >= 8 && material.position <= 44 || material.position >= 63 && material.position <= 96) {
            return <CharacterMaterial key={index} name={material.name} quantity={material.quantity} image={material.image} type={material.type} description={material.description} sources={material.sources} stars={material.stars}></CharacterMaterial>
        }
    });

    const weaponMaterials = summary && summary.map((material: any, index: any) => {
        // materials /w position 5-7, 45-62, 125-148
        if (material.position >= 5 && material.position <= 7 || material.position >= 45 && material.position <= 62 || material.position >= 125 && material.position <= 148) {
            return <CharacterMaterial key={index} name={material.name} quantity={material.quantity} image={material.image} type={material.type} description={material.description} sources={material.sources} stars={material.stars}></CharacterMaterial>
        }
    });

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
            <Collapse in={expanded} timeout="auto" unmountOnExit style={{minWidth: '100%'}}>
            <div style={{display: "flex", boxSizing: "border-box", flexWrap: "wrap", width: "100%"}}>
                <h3 className={classes.summaryInnerTitle}>General</h3>
                    {generalMaterials}
                <h3 className={classes.summaryInnerTitle}>Talent</h3>
                    {talentMaterials}
                <h3 className={classes.summaryInnerTitle}>Weapon</h3>
                    {weaponMaterials}
            </div>
            </Collapse>
        </div>
        
    );
}