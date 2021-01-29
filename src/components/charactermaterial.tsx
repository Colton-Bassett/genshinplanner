import React from 'react';
import { CardMedia, Typography, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Place } from '@material-ui/icons';

import Star from '../images/star.png'
import BackgroundImage from '../images/fivestar_background.png'

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
         backgroundColor: '#1d1f29'
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
        borderTopRightRadius: '0.188rem',
        borderBottomRightRadius: '.9rem',
    },
    text: {
        fontWeight: 700,
        //backgroundColor: '#1d1f29', 
        borderBottomLeftRadius: '0.188rem', 
        borderBottomRightRadius: '0.188rem'
    },
    dialog: {
        backgroundColor: '#1d1f29', 
        padding: '0rem !important',
        color: 'white',
        top: '0%',
        width: '25.5rem',

    },
    dialogTitle: {
        outline: "0.188rem solid rgb(145, 82, 41, 1)", padding: "0.5rem 1.5rem", outlineOffset: '-0.313rem'
    },
    materialHeader: {
        backgroundColor:"#272b30", 
        padding: '.75rem 1.5rem', 
        borderBottom: "0.4rem solid #b99050", 
        backgroundImage: `url(${BackgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: '50%',
    },
    materialHeaderContainer: {
        display: 'flex'
    },
    materialHeaderData: {
        display: 'flex', 
        flexDirection: 'column'
    },
    materialType: {
        maxWidth: '12.5rem', 
        flex: 1
    },
    materialHeaderImageContainer: {
       display: 'flex', 
       margin: 'auto',
    },
    materialHeaderImage: {
        maxHeight: "7rem", 
        maxWidth: "7rem", 
        minHeight: "7rem", 
        minWidth: "7rem", 
        backgroundSize: 'contain', 
        backgroundOrigin: 'content-box', 
        padding: '1.25rem', 
        borderTopLeftRadius: '0.188rem', 
        borderTopRightRadius: '0.188rem', 
        margin: 'auto'
    },
    stars: {
        display: 'flex', 
        flexDirection: 'row', 
        maxWidth: '12.5rem'
    },
    star: {
        minHeight: '1.5rem', minWidth: '1.5rem'
    },

    materialDescription: {

    }
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
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor: "#bd6932", padding: "0rem"}}>
                        <div className={classes.dialogTitle}>
                        <Typography variant="h1">
                            {formatText(name)} 
                        </Typography>
                        </div>
                    </DialogTitle>
                    <DialogContent className={classes.materialHeader}>
                        <div className={classes.materialHeaderContainer}>
                            <div className={classes.materialHeaderData}>                      
                                <Typography variant="h3" className={classes.materialType}>
                                    Character Level Up Material
                                </Typography>
                                <div className={classes.stars}>
                                    <CardMedia
                                        image= {Star}
                                        className= {classes.star}
                                        />
                                    <CardMedia
                                        image= {Star}
                                        className= {classes.star}
                                    />
                                    <CardMedia
                                        image= {Star}
                                        className= {classes.star}
                                    />
                                    <CardMedia
                                        image= {Star}
                                        className= {classes.star}
                                    />
                                    <CardMedia
                                        image= {Star}
                                        className= {classes.star}
                                    />
                                </div>
                            </div>
                            <div className={classes.materialHeaderImageContainer}>
                                <CardMedia
                                image= {image}
                                className= {classes.materialHeaderImage}
                                />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogContent style={{backgroundColor: "#36384A", padding: '2rem 1.5rem', height: '17.5rem'}}>
                        <DialogContentText id="alert-dialog-description" variant="h3" style={{marginBottom:  '1.5rem'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </DialogContentText>
                        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem'}} >
                            <Place style={{fontSize: '1.25rem'}}></Place>
                            <span style={{fontSize:'1.125rem'}}> &nbsp;Source</span>
                        </div>
                        <div style={{border: '0.063rem solid rgb(255, 255, 255, .25)', marginBottom: '.5rem', minHeight: '3.5rem' }}>
                            <Typography style={{padding: '0.5rem 0.65rem', maxWidth: '21.875rem'  }} variant="h3">
                                Domain of Forgery: Trial Grounds of Thunder <span style={{color: '#ffcc32'}}>(Wednesday/Saturday/Sunday)</span>
                            </Typography>
                        </div>
                        <div style={{border: '0.063rem solid rgb(255, 255, 255, .25)', marginBottom: '.5rem', minHeight: '3.5rem', display: 'flex' }}> 
                            <Typography style={{padding: '0.5rem 0.65rem', maxWidth: '21.875rem', alignItems: 'center', display: 'flex'  }} variant="h3">
                                Crafted
                            </Typography>
                        </div>
                    </DialogContent>
                </Dialog>
            </div> 
        </div>
    );
}