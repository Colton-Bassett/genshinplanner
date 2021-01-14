import React from 'react';
import { CardMedia, Typography, makeStyles, Grid, Tooltip } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Place } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    gridRoot: {
        margin: "auto",
        paddingBottom: "16px",
	},
    root: {
        display: 'flex',
        maxHeight: '42px',
        maxWidth: '109px',
        boxShadow: 'none !important',
        padding: '6px',
        backgroundColor: '#222431 !important'
    },
    imageContainer: {
        //backgroundColor: '#36384A', minHeight: '42px', minWidth: '42px', maxHeight: '42px', maxWidth: '42px', borderRadius:'3px', padding: '0px !important',
        transition: 'transform .2s;', /* Animation */
        overflow: 'visible',
        '&:hover': {
            boxShadow: '0px 0px 0 2px #e9e5dc;',
            borderRadius: "3px",
            transform: 'scale(1.05);',
            cursor: 'pointer',
         },

    },
    details: {
        maxHeight: "42px"
    },
    content: {
        flex: '1 0 auto',
        backgroundColor: '#222431'
    },
    textContainer: {
        maxHeight: "42px", padding: "0px 0px 0px 8px !important", margin: 'auto'
    },

    text: {
        fontWeight: 700
    },
    dialog: {
        backgroundColor: '#1d1f29', 
        padding: '0px !important',
        color: 'white',
        top: '-10%',
        width: '400px',
    },
    dialogTitle: {
        outline: "3px solid rgb(44, 46, 53, .5)", padding: "8px 24px", outlineOffset: '-5px'
    },
}));

export default function CharacterMaterial( props: any ) {
    const classes = useStyles();

    const name = props.name;
    const quantity = props.quantity;
    const image = props.image;

    // function setBackgroundColor() {

    // }

	var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

	function abbreviateNumber(number: any){

		// what tier? (determines SI symbol)
		var tier = Math.log10(Math.abs(number)) / 3 | 0;

		// if zero, we don't need a suffix
		if(tier === 0) return number;

		// get suffix and determine scale
		var suffix = SI_SYMBOL[tier];
		var scale = Math.pow(10, tier * 3);

		// scale the number
		var scaled = number / scale;

		// format number and add suffix
		return scaled.toFixed(1) + suffix;
    }
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    function formatText(text: string) {
        let newText = text.replace(/_/g, " ");
        return newText
    }

    return (
            <Grid container direction="row" justify="center" className={classes.gridRoot}>
                <Grid item className={classes.imageContainer} >

                <Tooltip title={formatText(name)} placement="bottom">



                    <div onClick={handleClickOpen}>
                        <CardMedia
                        image= {image}
                        style={{maxHeight: "40px", maxWidth: "40px", minHeight: "40px", minWidth: "40px", backgroundSize: 'contain', backgroundColor: '#36384A', backgroundOrigin: 'content-box', padding: '4px', borderTopLeftRadius: '3px', borderTopRightRadius: '3px'}}
                        />
                        <Typography variant="body1" align="center" className={classes.text} style={{backgroundColor: '#1d1f29', borderBottomLeftRadius: '3px', borderBottomRightRadius: '3px'}}>
                            {abbreviateNumber(quantity)}
                        </Typography>
                    </div>
                    </Tooltip>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        classes={{paper: classes.dialog}}
                        
                    >
                        <DialogTitle id="alert-dialog-title" style={{backgroundColor: "#474a56", padding: "0px"}}>
                            <div className={classes.dialogTitle}>


                            <Typography variant="h1">
                                {formatText(name)} 
                            </Typography>
                            </div>
                        </DialogTitle>
                        <DialogContent style={{backgroundColor:"#272b30"}}>
                            <div>
                                <Typography variant="h2" style={{maxWidth: '200px'}}>
                                    Character Level Up Material
                                </Typography>
                                <div style={{display: 'flex', marginBottom: '16px'}}>
                                    <div style={{width: '55%'}}>
                                    </div>
                                    <div style={{width: '45%'}}>
                                        <CardMedia
                                        image= {image}
                                        style={{maxHeight: "64px", maxWidth: "64px", minHeight: "64px", minWidth: "64px", backgroundSize: 'contain', backgroundOrigin: 'content-box', padding: '4px', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', margin: 'auto'}}
                                        />
                                    </div>

                                </div>
                            </div>

                        </DialogContent>
                        <DialogContent style={{backgroundColor: "#36384A", paddingBottom: '32px'}}>
                            <DialogContentText id="alert-dialog-description" variant="h5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </DialogContentText>
                            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: '16px'}} >
                                <Place></Place>
                                <span> &nbsp;Source</span>
                            </div>
                            <div>
                                <Typography style={{border: '1px solid rgb(255, 255, 255, .5)', padding: '8px'}} variant="h5">
                                    Dropped by lorem ipsum 
                                </Typography>
                            </div>
                        </DialogContent>
                        {/* <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Disagree
                        </Button>
                        <Button onClick={handleClose} color="secondary" autoFocus>
                            Agree
                        </Button>
                        </DialogActions> */}
                    </Dialog>

                </Grid> 
                {/* <div style={{justifyContent: 'center', alignItems: 'center', minHeight: '52px', display: 'flex'}}>
                        <Typography variant="body1" align="left" className={classes.text}>
                            x {quantity}
                        </Typography>
                </div> */}


            </Grid>

    );
}