import React from 'react';
import { Card, makeStyles, Dialog, DialogActions, DialogContent, Button, Tooltip, DialogTitle, Tabs, Tab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import DialogTab from './dialogtab'

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
            minWidth: '20em', 
            //maxWidth: '20em', 
		},
        
    },
    addCharacterContent: {
        flexGrow: 1, 
        boxSizing: 'border-box', 
        padding: '0.75rem',
        '@media (max-width: 60em)': {
            display: 'none',
		},
    },
    card: {
        // backgroundColor: "#232D38",
        backgroundColor: '#2e3944', 
        margin: 'auto',
        minHeight: '17.188rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform .2s;', /* Animation */
        // boxShadow: "0 0.188rem 0.375rem rgba(0,0,0,.23), 0 0.188rem 0.375rem rgba(0,0,0,.16)",
        overflow: 'visible',
        '&:hover': {
            boxShadow: '0rem 0rem 0rem 0.15rem #e9e5dc;',
            borderRadius: "0.188rem",
            transform: 'scale(1.01);',
            cursor: 'pointer',
            color: 'white',
            '& $add': {
                color: 'white',
            }
         },
    },
    add: {
        // fontSize: '6.25rem',
        fontSize: '1.33rem',
        color: '#A6A7AC',
        margin: '0rem',
        fontWeight: 700,
        letterSpacing: '0.15rem',
        textTransform: 'uppercase',
        padding: '0 0 .75rem',
        borderBottom: '.3125rem solid #03a577'
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
    tabLabel: {
        textTransform: "none", fontSize: "1.25rem",
        '&:hover': {
            color: 'white',
        },
        '@media (max-width:45em)': {
            fontSize: "1rem",
        },
        '@media (max-width:35em)': {
            fontSize: ".8rem",
        },
        '@media (max-width: 25em)': {
			fontSize: ".6rem"
		},
    },
    dialog: {
        minWidth: '64em',
        maxWidth: '64em',
        minHeight: '54em',
        maxHeight: '54em',
        // borderRadius: '0.625rem',
        backgroundColor: '#172028',
        '@media (max-height: 54em)': {
            minHeight: '50em',
            maxHeight: '50em',
        },
        '@media (max-width: 64em)': {
			minWidth: '48em',
			maxWidth: '48em',
        },
        '@media (max-height: 48em)': {
            minHeight: '44em',
            maxHeight: '44em',
        },
		'@media (max-width: 45em)': {
			minWidth: '31.25em',
			maxWidth: '31.25em',
        },
        '@media (max-height: 40em)': {
            minHeight: '35em',
            maxHeight: '35em',
        },
		'@media (max-width: 35em)': {
			minWidth: '100%',
            maxWidth: '100%',

        },
        '@media (max-height: 35em)': {
            minHeight: '100%',
            maxHeight: '100%',
        },
    },
    dialogContent: {
        backgroundColor: '#172028', 
        padding: '0rem !important',
    },
    dialogContentText: {
        outline: 'none'
    },
    dialogCancel: {
        color: "#A6A7AC",
        textTransform: "none", 
        paddingRight: "1.875rem", 
        fontSize: "1.1rem", 
        backgroundColor: 'transparent',
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
    }
}));

export default function NewCharacter(props: any) {
    const classes = useStyles();

    const characters = props.characters;
    const weapons = props.weapons;
    const ascensionDetails = props.ascensionDetails;
    const setAscensionDetails = props.setAscensionDetails;
    const materials = props.materials;
    const summary = props.summary;
    const setSummary = props.setSummary;

    const items = props.items;
    const setItems = props.setItems;

    const [openDialog, setOpenDialog] = React.useState(false);
    const [tabPanel, setTabPanel] = React.useState(0);
    const [tabsTitle, setTabsTitle] = React.useState(true);
  
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

    const descriptionElementRef = React.useRef<HTMLElement>(null); // dialogue
    React.useEffect(() => {
        if (openDialog) {
            const { current: descriptionElement } = descriptionElementRef;
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
            {/* <div className={classes.addCharacterContent}>
                <Card className={classes.blankCard}>     
                </Card>
            </div> */}

            <Dialog
                open={openDialog}
                onClose={dialogClose}
                onExited = {showTabsTitle}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                classes={{paper: classes.dialog}}
            >
                <DialogTitle id="scroll-dialog-title" style={{display: tabsTitle ? 'flex' : 'none', backgroundColor: '#1b242d', justifyContent: 'center', borderBottom: "0.25rem solid #2e3944",}}>
                    <Tabs value={tabPanel} onChange={tabChange} aria-label="tabs" indicatorColor="secondary">
                        <Tab label="Genshin Impact Characters" {...tabID(0)} className={classes.tabLabel}  disableRipple/>
                        <Tab label="Genshin Impact Weapons" {...tabID(1)} className={classes.tabLabel} disableRipple />
                    </Tabs>
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogTab characters={characters} weapons={weapons} materials={materials} dialogClose={dialogClose} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems} tabPanel={tabPanel} displayTabsTitle={displayTabsTitle} summary={summary} setSummary={setSummary}>
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