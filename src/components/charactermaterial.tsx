import React, { useEffect, useState } from 'react';
import { CardMedia, Typography, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Place } from '@material-ui/icons';

const Star = `https://anemo.s3.us-east-2.amazonaws.com/Rarity_Star.png`;



export default function CharacterMaterial( props: any ) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [maxWidth, setMaxWidth] = useState<string>('12.5%');

    const image = props.image;
    const backgroundImage = props.backgroundImage;
    const headerColor = props.headerColor;
    const headerOutline = props.headerOutline;
    const headerBorder = props.headerBorder;

    const useStyles = makeStyles((theme) => ({
        material: {
            paddingBottom: "1.5rem",
            display: "flex",
            boxSizing: "border-box",
            justifyContent: 'center',
            maxWidth: maxWidth,
            flexBasis: maxWidth,
            '@media (max-width: 60em)': {
                maxWidth: '12.5%', 
                flexBasis: '12.5%',
            },
            '@media (max-width: 45em)': {
                maxWidth: '20%', 
                flexBasis: '20%'
            },
            '@media (max-width: 35em)': {
                maxWidth: '25%', 
                flexBasis: '25%'
            },
            '@media (max-width: 30em)': {
                maxWidth: '33.3333%', 
                flexBasis: '33.3333%'
            },
        },
        materialContainer: {
            transition: 'all .2s;', /* Animation */
            overflow: 'visible',
            borderRadius: '0.25rem',
            boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            '&:hover': {
                boxShadow: '0rem 0rem 0rem 0.125rem #e9e5dc;',
                borderRadius: "0.188rem",
                transform: 'scale(1.05);',
                cursor: 'pointer',
             },
            backgroundColor: '#2e3944'
        },
        materialImage: {
            maxHeight: "3rem", 
            maxWidth: "3rem", 
            minHeight: "3rem", 
            minWidth: "3rem", 
            backgroundSize: '100%, cover', 
            backgroundImage: `url("${image}"), url("${backgroundImage}")`,
    
            backgroundOrigin: 'content-box, border-box', 
            padding: '0.25rem', 
            borderTopLeftRadius: '0.25rem',
            borderTopRightRadius: '0.25rem',
            borderBottomRightRadius: '.9rem',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center, 100% 50%',
        },
        materialImageTest: {
            display: imageLoaded ? 'block' : 'none',
            maxHeight: '3rem', 
            maxWidth: '3rem', 
            minWidth: '3rem', 
            minHeight: '3rem', 
            backgroundImage: `url(${backgroundImage})`,

            borderTopLeftRadius: '0.25rem',
            borderTopRightRadius: '0.25rem',
            borderBottomRightRadius: '.9rem',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', 
            backgroundPosition: '100%',
            // backgroundOrigin: 'content-box, border-box', 
            padding: '0.25rem', 
        },
        text: {
            fontWeight: 500,
            //backgroundColor: '#1d1f29', 
            borderBottomLeftRadius: '0.188rem', 
            borderBottomRightRadius: '0.188rem',
            maxHeight: '1.38rem'
    
        },
        dialog: {
            backgroundColor: '#172028', 
            padding: '0rem !important',
            color: 'white',
            top: '0%',
            width: '25.65rem',
            minHeight: '33.375rem',
            maxHeight: '43.875rem',
            borderRadius: '0.1rem'
    
        },
        dialogTitle: {
            outline: "0.188rem solid rgb(145, 82, 41, 1)", 
            padding: "0.5rem 1.5rem", 
            outlineOffset: '-0.313rem',
        },
        materialHeaderBackground: {
            backgroundColor:"#272b30", 
            padding: '.75rem 1.5rem', 
            borderBottom: `${headerBorder}`, 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: '50%', 
            maxHeight: '9.5rem', 
            minHeight: '9.5rem',
            '@media (max-width: 25em)': {
                backgroundPosition: '90%',
            },

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
            minHeight: '1.5rem', minWidth: '1.5rem', borderStyle: 'none', verticalAlign: 'middle'
        },
        sourceContainer: {
            border: '0.15rem solid rgb(255, 255, 255, .25)', 
            marginBottom: '.5rem', 
            minHeight: '3.5rem', 
            display: 'flex'
        },
        source: {
            padding: '0.5rem 0.65rem', 
            maxWidth: '21.875rem', 
            alignItems: 'center', 
            display: 'flex' 
        }
    }));

    const classes = useStyles();

    const name = props.name;
    const quantity = props.quantity;
    const type = props.type;
    const stars = props.stars;
    const description = props.description;
    const sources = props.sources;
    const matType = props.matType;

	var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    const [open, setOpen] = React.useState(false);

	function abbreviateNumber(number: any){
		// what tier? (determines SI symbol)
		let tier = Math.log10(Math.abs(number)) / 3 | 0;

		// if zero, we don't need a suffix
		if(tier === 0) return number;

		// get suffix and determine scale
		let suffix = SI_SYMBOL[tier];
		let scale = Math.pow(10, tier * 3);

		// scale the number
        let scaled = number / scale;

        // truncate float, add suffix
        let scaledFixed = scaled.toFixed(1) + suffix;

        // check if float number === 0. If so, truncate to whole number;
        let decimals = (scaledFixed + "").split(".")[1]; 
        if (decimals[0] === "0") {
            scaledFixed = scaled.toFixed(0) + suffix;
        }

		return scaledFixed
    }
    
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

    function createSources() {
        const sourcesDOM = []
        if (sources.sourceOne.length > 1) {
            sourcesDOM.push( <div className={classes.sourceContainer} key={1}>
            <Typography className={classes.source} variant="h3">
                {sources.sourceOne}
            </Typography>
        </div>)
        }
        if (sources.sourceTwo.length > 1) {
            sourcesDOM.push( <div className={classes.sourceContainer} key={2}>
            <Typography className={classes.source} variant="h3">
                {sources.sourceTwo}
            </Typography>
        </div>)
        }
        if (sources.sourceThree.length > 1) {
            sourcesDOM.push( <div className={classes.sourceContainer} key={3}>
            <Typography className={classes.source} variant="h3">
                {sources.sourceThree}
            </Typography>
        </div>)
        }
        if (sources.sourceFour.length > 1) {
            sourcesDOM.push( <div className={classes.sourceContainer} key={4}>
            <Typography className={classes.source} variant="h3">
                {sources.sourceFour}
            </Typography>
        </div>)
        }
        if (sources.sourceFive.length > 1) {
            sourcesDOM.push( <div className={classes.sourceContainer} key={5}>
            <Typography className={classes.source} variant="h3">
                {sources.sourceFive}
            </Typography>
        </div>)
        }
        return sourcesDOM
    }

    function createRarityStars() {
        var starsDOM = []
        if (stars === "One") {
			for (let i = 0; i < 1; i++) {
				starsDOM.push(<CardMedia
					image= {Star}
					className= {classes.star}
					key= {i}
                />)
			}     
        }   
        if (stars === "Two") {
			for (let i = 0; i < 2; i++) {
				starsDOM.push(<CardMedia
					image= {Star}
					className= {classes.star}
					key= {i}
				/>)
			}     
        }   
        if (stars === "Three") {
			for (let i = 0; i < 3; i++) {
				starsDOM.push(<CardMedia
					image= {Star}
					className= {classes.star}
					key= {i}
				/>)
			}     
        }   
		if (stars === "Four") {
			for (let i = 0; i < 4; i++) {
				starsDOM.push(<CardMedia
					image= {Star}
					className= {classes.star}
					key= {i}
				/>)

			}
        } 
        if (stars === "Five") {
			for (let i = 0; i < 5; i++) {
				starsDOM.push(<CardMedia
					image= {Star}
					className= {classes.star}
					key= {i}
				/>)

			}
        }
		//console.log("CreateRarityStars stars", stars)
		return <div className={classes.stars}>{starsDOM}</div>
	}

    function handleMaxWidth() {
        if (matType === "summary") {
            setMaxWidth('9%');
        }
    }

    function handleImageLoad() {
        setImageLoaded(true);
    }

    useEffect(() => {
        handleMaxWidth();
	}, []);

    return (
        <div className={classes.material}>
            <div className={classes.materialContainer} >
                <div onClick={handleClickOpen}>
                    <div className={classes.materialImage} onLoad={handleImageLoad}>
                    </div>
                    {/* <img className={classes.materialImageTest} src={image} onLoad={handleImageLoad}></img> */}
                    <Typography variant="body1" align="center" className={classes.text}>
                        {abbreviateNumber(quantity)}
                    </Typography>
                </div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    classes={{paper: classes.dialog}}
                    >
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor: `${headerColor}`, padding: "0rem"}}>
                        <div style={{outline: `${headerOutline}`, padding: "0.5rem 1.5rem", outlineOffset: '-0.313rem'}}>
                        <Typography variant="h1">
                            {formatText(name)} 
                        </Typography>
                        </div>
                    </DialogTitle>
                    <DialogContent className={classes.materialHeaderBackground}>
                        <div className={classes.materialHeaderContainer}>
                            <div className={classes.materialHeaderData}>                      
                                <Typography variant="h3" className={classes.materialType}>
                                    {type}
                                </Typography>
                                {createRarityStars()}
                            </div>
                            <div className={classes.materialHeaderImageContainer}>
                                <CardMedia
                                image= {image}
                                className= {classes.materialHeaderImage}
                                />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogContent style={{backgroundColor: "#2e3944", padding: '2rem 1.5rem',}}>
                        <DialogContentText id="alert-dialog-description" variant="h3" style={{marginBottom:  '1.5rem', color: '#c4c4c4'}}>
                            {description}
                        </DialogContentText>
                        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem'}} >
                            <Place style={{fontSize: '1.25rem'}}></Place>
                            <span style={{fontSize:'1.125rem'}}> &nbsp;Source</span>
                        </div>
                        {createSources()}
                    </DialogContent>
                </Dialog>
            </div> 
        </div>
    );
}