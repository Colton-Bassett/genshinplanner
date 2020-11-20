import React from 'react';
import { Card, Grid, makeStyles, Dialog, DialogProps, DialogActions, DialogContent, DialogContentText, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import DialogTab from './dialogtab'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        margin: 'auto',
    },
    content: {
        backgroundColor: "#272937 !important",
        minWidth: '100%',
        margin: 'auto',
        minHeight: '275px',
    },
    container: {
        margin: 'auto',
        position: 'relative',
        minHeight: '275px',
        cursor: 'pointer'
    },
    dialogContent: {
        backgroundColor: '#1D1F29 !important', 
        padding: '0px !important'
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
        backgroundColor: '#1D1F29 !important',    
    }
}));

export default function AddCharacterButton() {
    const classes = useStyles();
    let centerItem = 'center-item'

    const [open, setOpen] = React.useState(false); // dialogue
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper'); // dialogue
  
    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => { // dialogue
      setOpen(true);
      setScroll(scrollType);
    };
  
    const handleClose = () => { // dialogue
      setOpen(false);
    };
  
    const descriptionElementRef = React.useRef<HTMLElement>(null); // dialogue
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return (
        <Grid container spacing={3} direction="row" justify="center" alignItems="center" className={classes.root}>
            <Grid item xs={3}>
                <Card className={classes.content}> 
                    <div className={classes.container} >
                        <Add className={centerItem} onClick={handleClickOpen('paper')}>
                        </Add>
                    </div>
                    <div>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            {/* <DialogTitle id="scroll-dialog-title" style={{backgroundColor: '#1D1F29', }}>
                            </DialogTitle> */}
                            <DialogContent dividers={scroll === 'paper'} className={classes.dialogContent}>
                            <DialogTab></DialogTab>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}
                                className={classes.dialogContentText}
                            >
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions className={classes.dialogActions}>
                                <Button onClick={handleClose} color="primary" className={classes.dialogCancel} disableRipple>
                                    Cancel
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Card>
            </Grid>

            <Grid item xs={9} style={{}}>
                <Card className={classes.content}>     
                </Card>
            </Grid>
        </Grid>
    );
}