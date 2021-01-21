import React from 'react';
import { Card, makeStyles, Dialog, DialogActions, DialogContent, DialogContentText, Button, Tooltip, DialogTitle, Tabs, Tab } from '@material-ui/core';
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
        flexGrow: 0, 
        maxWidth: '25%', 
        flexBasis: '25%', 
        boxSizing: 'border-box', 
        padding: '0.75rem',
    },
    addCharacterContent: {
        flexGrow: 0, 
        maxWidth: '75%', 
        flexBasis: '75%', 
        boxSizing: 'border-box', 
        padding: '0.75rem'
    },
    card: {
        backgroundColor: "#272937 !important",
        minWidth: '10.625rem',
        margin: 'auto',
        minHeight: '17.188rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
            '& $add': {
                color: "#fff",
            }
         },
    },
    add: {
        fontSize: '6.25rem',
        color: '#A6A7AC',
        margin: '0rem',
    },
    dialogTitleContainer: {
        display: 'flex', 
        backgroundColor: '#222431',
    },
    tabLabel: {
        textTransform: "none", fontSize: "1.25rem",

    },
    dialog: {
        minWidth: '53.125rem;',
        maxWidth: '53.125rem;',
        minHeight: '37.5rem;',
        maxHeight: '37.5rem;',
    },
    dialogContent: {
        backgroundColor: '#1d1f29', 
        padding: '0rem !important',
    },
    dialogContentText: {
        outline: 'none'
    },
    dialogCancel: {
        color:"white", 
        textTransform: "none", 
        paddingRight: "1.875rem", 
        fontSize: "1.1rem", 
        backgroundColor: 'transparent'
    },
    dialogActions: {
        backgroundColor: '#222431',    
    },
    indicator: {
        backgroundColor: 'green'
    }
}));

export default function NewCharacter(props: any) {
    const classes = useStyles();

    const characters = props.characters;
    const ascensionDetails = props.ascensionDetails;
    const setAscensionDetails = props.setAscensionDetails;

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
                    <Tooltip title="Add Character" arrow>
                        <Add className={classes.add}>
                        </Add>
                    </Tooltip>
                </Card>
            </div>
            <div className={classes.addCharacterContent}>
                <Card className={classes.card}>     
                </Card>
            </div>

            <Dialog
                open={openDialog}
                onClose={dialogClose}
                onExited = {showTabsTitle}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                classes={{paper: classes.dialog}}
            >
                <DialogTitle id="scroll-dialog-title" style={{display: tabsTitle ? 'flex' : 'none', backgroundColor: '#222431', justifyContent: 'center'}}>
                    <Tabs value={tabPanel} onChange={tabChange} aria-label="tabs" indicatorColor="secondary">
                        <Tab label="Genshin Impact Characters" {...tabID(0)} className={classes.tabLabel}  disableRipple/>
                        <Tab label="Genshin Impact Weapons" {...tabID(1)} className={classes.tabLabel} disableRipple />
                    </Tabs>
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogTab characters={characters} dialogClose={dialogClose} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems} tabPanel={tabPanel} displayTabsTitle={displayTabsTitle}>
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