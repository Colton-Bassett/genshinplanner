import React from 'react';
import { Card, Grid, makeStyles, Dialog, DialogActions, DialogContent, DialogContentText, Button, Tooltip, DialogTitle, Tabs, Tab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import DialogTab from './dialogtab'

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: '100%',
        margin: 'auto',
    },
    card: {
        backgroundColor: "#272937 !important",
        minWidth: '170px',
        margin: 'auto',
        minHeight: '275px',
        '&:hover': {
            cursor: 'pointer',
            '& $add': {
                color: "#fff",
            }
         },
    },
    addContainer: {
        margin: 'auto',
        position: 'relative',
        minHeight: '275px',
        cursor: 'pointer'
    },
    add: {
        fontSize: '100px',
        color: '#A6A7AC',
        margin: '0px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    dialogTitleContainer: {
        display: 'flex', 
        backgroundColor: '#222431',
    },
    tabLabel: {
        textTransform: "none", fontSize: "20px",

    },
    dialogContent: {
        backgroundColor: '#1d1f29', 
        padding: '0px !important',
    },
    dialogContentText: {
        outline: 'none'
    },
    dialogCancel: {
        color:"white", 
        textTransform: "none", 
        paddingRight: "30px", 
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

export default function AddCharacterButton(props: any) {
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
        <Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.container}>
            <Grid item xs={3}>
                <Card className={classes.card} onClick={dialogOpen}> 
                    <div className={classes.addContainer} >
                    <Tooltip title="Add Character" arrow>
                        <Add className={classes.add}>
                        </Add>
                    </Tooltip>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={9}>
                <Card className={classes.card}>     
                </Card>
            </Grid>
            <Dialog
                open={openDialog}
                onClose={dialogClose}
                onExited = {showTabsTitle}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <div className={classes.dialogTitleContainer}>
                <DialogTitle id="scroll-dialog-title" style={{display: tabsTitle ? 'block' : 'none', margin: 'auto'}}>
                <Tabs value={tabPanel} onChange={tabChange} aria-label="tabs" indicatorColor="secondary">
                    <Tab label="Genshin Impact Characters" {...tabID(0)} className={classes.tabLabel}  disableRipple/>
					<Tab label="Genshin Impact Weapons" {...tabID(1)} className={classes.tabLabel} disableRipple />
                </Tabs>
                </DialogTitle>
                </div>
                <DialogContent className={classes.dialogContent}>
                <DialogTab characters={characters} dialogClose={dialogClose} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems} tabPanel={tabPanel} displayTabsTitle={displayTabsTitle}></DialogTab>
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                    className={classes.dialogContentText}
                >
                </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={dialogClose} color="primary" className={classes.dialogCancel} disableRipple>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}