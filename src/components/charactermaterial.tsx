import React from 'react';
import { CardMedia, Typography, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Place } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    material: {
        paddingBottom: "1rem",
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        justifyContent: "center",
        flexGrow: 0, 
        maxWidth: '12.5%', 
        flexBasis: '12.5%'
	},
    materialContainer: {
        transition: 'transform .2s;', /* Animation */
        overflow: 'visible',
        '&:hover': {
            boxShadow: '0rem 0rem 0rem 0.125rem #e9e5dc;',
            borderRadius: "0.188rem",
            transform: 'scale(1.05);',
            cursor: 'pointer',
         },
    },
    materialImage: {
        maxHeight: "2.625rem", 
        maxWidth: "2.625rem", 
        minHeight: "2.625rem", 
        minWidth: "2.625rem", 
        backgroundSize: 'contain', 
        backgroundColor: '#36384A', 
        backgroundOrigin: 'content-box', 
        padding: '0.25rem', 
        borderTopLeftRadius: '0.188rem', 
        borderTopRightRadius: '0.188rem'
    },
    text: {
        fontWeight: 700,
        backgroundColor: '#1d1f29', 
        borderBottomLeftRadius: '0.188rem', 
        borderBottomRightRadius: '0.188rem'
    },
    dialog: {
        backgroundColor: '#1d1f29', 
        padding: '0rem !important',
        color: 'white',
        top: '-10%',
        width: '25rem',
    },
    dialogTitle: {
        outline: "0.188rem solid rgb(44, 46, 53, .5)", padding: "0.5rem 1.5rem", outlineOffset: '-0.313rem'
    },
}));

export default function CharacterMaterial( props: any ) {
    const classes = useStyles();

    const name = props.name;
    const quantity = props.quantity;
    const image = props.image;

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
        <div className={classes.material}>
            <div className={classes.materialContainer} >
            {/* <Tooltip title={formatText(name)} placement="bottom"> */}
                <div onClick={handleClickOpen}>
                    <CardMedia
                    image= {image}
                    className={classes.materialImage}
                    />
                    <Typography variant="body1" align="center" className={classes.text}>
                        {abbreviateNumber(quantity)}
                    </Typography>
                </div>
                {/* </Tooltip> */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    classes={{paper: classes.dialog}}
                    >
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor: "#474a56", padding: "0rem"}}>
                        <div className={classes.dialogTitle}>
                        <Typography variant="h1">
                            {formatText(name)} 
                        </Typography>
                        </div>
                    </DialogTitle>
                    <DialogContent style={{backgroundColor:"#272b30"}}>
                        <div>
                            <Typography variant="h2" style={{maxWidth: '12.5rem'}}>
                                Character Level Up Material
                            </Typography>
                            <div style={{display: 'flex', marginBottom: '1rem'}}>
                                <div style={{width: '55%'}}>
                                </div>
                                <div style={{width: '45%'}}>
                                    <CardMedia
                                    image= {image}
                                    style={{maxHeight: "4rem", maxWidth: "4rem", minHeight: "4rem", minWidth: "4rem", backgroundSize: 'contain', backgroundOrigin: 'content-box', padding: '0.25rem', borderTopLeftRadius: '0.188rem', borderTopRightRadius: '0.188rem', margin: 'auto'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogContent style={{backgroundColor: "#36384A", paddingBottom: '2rem'}}>
                        <DialogContentText id="alert-dialog-description" variant="h5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </DialogContentText>
                        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem'}} >
                            <Place></Place>
                            <span> &nbsp;Source</span>
                        </div>
                        <div>
                            <Typography style={{border: '0.063rem solid rgb(255, 255, 255, .5)', padding: '0.5rem'}} variant="h5">
                                Dropped by lorem ipsum 
                            </Typography>
                        </div>
                    </DialogContent>
                </Dialog>
            </div> 
        </div>
    );
}