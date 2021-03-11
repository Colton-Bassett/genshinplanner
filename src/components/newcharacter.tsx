import React, { useState, useEffect, useRef } from 'react';

import { Card, makeStyles, Dialog, DialogActions, DialogContent, Button, DialogTitle, Tabs, Tab } from '@material-ui/core';

import fetchCharacters from '../apifunctions/fetchcharacters';
import fetchWeapons from '../apifunctions/fetchweapons';

import DialogTab from './dialogtab'
import fetchMaterials from '../apifunctions/fetchmaterials';

const useStyles = makeStyles((theme) => ({
    addCharacter: {
        maxWidth: '100%',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
    },
    addCharacterButton: {
        flexGrow: 1, 
        // maxWidth: '25%', 
        // flexBasis: '25%', 
        boxSizing: 'border-box', 
        padding: '0.75rem',
        '@media (max-width: 60em)': {
            maxWidth: '100%',
            flexBasis: '100%',
        },
        '@media (max-width: 25em)': {
            minWidth: '19em', 
		},    
    },
    addCharacterContent: {
        flexGrow: 1, 
        boxSizing: 'border-box', 
        padding: '0.75rem',
        // '@media (max-width: 60em)': {
        //     display: 'none',
		// },
    },
    card: {
        // backgroundColor: "#232D38",
        backgroundColor: '#232D38', 
        margin: 'auto',
        minHeight: '17rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all .2s;',
        // boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        overflow: 'visible',
        '&:hover': {
            boxShadow: '0rem 0rem 0rem 0.15rem #e9e5dc;',
            borderRadius: "0.188rem",
            transform: 'scale(1.01);',
            cursor: 'pointer',
            color: 'white',
            transition: 'all .2s',
            '& $add': {
                color: 'white',
            }
         },
         '@media (max-width: 45em)': {
            minHeight: '14em',
		},   
    },
    add: {
        // fontSize: '6.25rem',
        fontSize: '1.33rem',
        color: '#A7B1C1',
        margin: '0rem',
        fontWeight: 700,
        letterSpacing: '0.15rem',
        textTransform: 'uppercase',
        padding: '0 0 .75rem',
        borderBottom: '.3125rem solid #03a577',
        transition: 'all .2s',
    },
    blankCard: {
        // backgroundColor: "#232D38",
        backgroundColor: '#2e3944', 
        minWidth: '10.625rem',
        margin: 'auto',
        minHeight: '17.188rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogTitleContainer: {
        display: 'flex', 
        backgroundColor: "#1b242d",
    },
    dialogTitle: {
        '@media (max-width: 25em)': {
            padding: '.5rem .5rem'
		},

    },
    tabLabel: {
        textTransform: "none", 
        fontSize: "1.6rem",
        minWidth: '17rem',
        transition: 'all .2s',
        '&:hover': {
            color: 'white',
        },
        '@media (max-width:45em)': {
            fontSize: "1rem",
            minWidth: '15rem',
        },
        '@media (max-width: 35em)': {
            minWidth: '12rem',
        },
        '@media (max-width: 25em)': {
            minWidth: '10rem',
		},
    },
    dialog: {
        minWidth: '60em',
        maxWidth: '60em',
        minHeight: '56em',
        maxHeight: '56em',
        // borderRadius: '0.625rem',
        backgroundColor: '#172028',
        '@media (max-width: 60em)': {
			minWidth: '45em',
			maxWidth: '45em',
        },
        '@media (max-width: 45em)': {
			minWidth: '35em',
			maxWidth: '35em',
        },
        '@media (max-width: 35em)': {
			minWidth: '100%',
			maxWidth: '100%',
        },
        '@media (max-height: 56em)': {
            minHeight: '95%',
            maxHeight: '95%',
        },
    },
    dialogContent: {
        backgroundColor: '#172028', 
        padding: '0rem !important',
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        minHeight: '100%',
    },
    dialogContentText: {
        outline: 'none'
    },
    dialogCancel: {
        color: "#A7B1C1",
        textTransform: "none", 
        paddingRight: "1.875rem", 
        fontSize: "1.1rem", 
        backgroundColor: 'transparent',
        transition: 'all .2s',
        '&:hover': {
            color: 'white'
         },
    },
    dialogActions: {
        backgroundColor: "#1b242d",
        borderTop: "0.2rem solid #2e3944",   
    },
    indicator: {
        backgroundColor: 'green'
    },
    buttonbaseRoot: {
        minWidth: '50%',
        padding: '1.20rem',
        lineHeight: '1.5em',
		fontSize: '1.6em',
		fontWeight: "bold",
		margin: 0,
        '@media (max-width: 25em)': {
            minHeight: '6.5rem',
            fontSize: '1rem',
		},
    },
    dialogTitleRoot: {
        padding: 0,
        '& h2': {
            minWidth: '100%',
        }
    },
    tabIndicator: {
        backgroundColor: '#03a577',
        height: '.313rem',
    },
    titleRoot: {
        padding: 0,
    },
}));

export default function NewCharacter(props: any) {
    const classes = useStyles();

    const characters = props.characters;
    const weapons = props.weapons;
    const materials = props.materials;
    const ascensionPlans = props.ascensionPlans;
    const summary = props.summary;

    const setCharacters = props.setCharacters;
    const setWeapons = props.setWeapons;
    const setMaterials = props.setMaterials;
    const setAscensionPlans = props.setAscensionPlans;
    const setSummary = props.setSummary;

    const [openDialog, setOpenDialog] = useState(false);
    const [tabPanel, setTabPanel] = useState(0);
    const [tabsTitle, setTabsTitle] = useState(true);
    const initialDialogRender = useRef(true);
  
    const dialogOpen = () => {
        setOpenDialog(true);
    };

    const dialogClose = () => {
        setOpenDialog(false);

    };

    function tabID(index: any) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    const displayTabsTitle = () => {
        setTabsTitle(!tabsTitle)
    }

    const showTabsTitle = () => {
        setTabsTitle(true)
        setTabPanel(0);
    }

    const tabChange = (event: React.ChangeEvent<{}>, value: number) => {
        setTabPanel(value);
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null); // dialog
    // runs on dialog startup
    useEffect(() => {
        if (openDialog) {
            const { current: descriptionElement } = descriptionElementRef;
            // first fetch, checks if first render
            if (initialDialogRender.current) {
                initialDialogRender.current = false;
                fetchCharacters(setCharacters);
                fetchWeapons(setWeapons);
                fetchMaterials(setMaterials);
            } else {
                // do nothing, characters/weapons/materials are already fetched
            }    
        if (descriptionElement !== null) {
            descriptionElement.focus();
            }
        }
    }, [openDialog]);

    return (
        <div className={classes.addCharacter}>
            <div className={classes.addCharacterButton}>
                <Card className={classes.card} onClick={dialogOpen}> 
                    <span className={classes.add}>
                        + Add Plan
                    </span>
                </Card>
            </div>
            <Dialog
                open={openDialog}
                onClose={dialogClose}
                onExited = {showTabsTitle}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                // transitionDuration={1}
                classes={{paper: classes.dialog}}
                >
                <DialogTitle id="scroll-dialog-title" classes={{root: classes.dialogTitleRoot}} className={classes.dialogTitle} style={{display: tabsTitle ? 'flex' : 'none', backgroundColor: '#1b242d', justifyContent: 'center', borderBottom: "0.188rem solid #2e3944" }}>
                    <Tabs classes={{indicator: classes.tabIndicator}} value={tabPanel} onChange={tabChange} aria-label="tabs" indicatorColor="secondary">
                        <Tab classes={{root: classes.buttonbaseRoot}}label={<span>Genshin Impact <br></br> Characters</span>} {...tabID(0)} className={classes.tabLabel}  disableRipple/>
                        <Tab classes={{root: classes.buttonbaseRoot}} label={<span>Genshin Impact <br></br> Weapons</span>} {...tabID(1)} className={classes.tabLabel} disableRipple />
                    </Tabs>
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogTab 
                        characters={characters} weapons={weapons} materials={materials} ascensionPlans={ascensionPlans} summary={summary} tabPanel={tabPanel} 
                        setAscensionPlans={setAscensionPlans} setSummary={setSummary} dialogClose={dialogClose} displayTabsTitle={displayTabsTitle}>
                    </DialogTab>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={dialogClose} color="primary" className={classes.dialogCancel} disableRipple>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}