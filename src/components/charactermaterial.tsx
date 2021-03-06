import React, { useEffect, useState } from 'react';
import { CardMedia, Typography, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Place } from '@material-ui/icons';

const Star = `https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Rarity_Star.png`;



export default function CharacterMaterial( props: any ) {
    const [maxWidth, setMaxWidth] = useState<string>('12.5%');
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
    
            backgroundOrigin: 'content-box, border-box', 
            padding: '0.25rem', 
            borderTopLeftRadius: '0.25rem',
            borderTopRightRadius: '0.25rem',
            borderBottomRightRadius: '.9rem',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center, 100% 50%',
            opacity: '1, 0.5'
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
            outline: "0.188rem solid rgb(145, 82, 41, 1)", padding: "0.5rem 1.5rem", outlineOffset: '-0.313rem',
        },
        // materialHeader: {
        //     backgroundColor:"#272b30", 
        //     padding: '.75rem 1.5rem', 
        //     borderBottom: "0.4rem solid #b99050", 
        //     backgroundImage: `url(${backgroundImage})`, 
        //     backgroundSize: 'cover', 
        //     backgroundPosition: '50%',
        // },
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
    const image = props.image;
    const type = props.type;
    const stars = props.stars;
    const description = props.description;
    const sources = props.sources;
    const matType = props.matType;
    const [backgroundImage, setBackgroundImage] = useState<string>();
    const [titleColor, setTitleColor] = useState<string>();
    const [titleOutline, setTitleOutline] = useState<string>();
    const [headerBorder,setHeaderBorder] = useState<string>();

	var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

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

    function handleBackgroundImage() {
        switch(stars) {
            case "One":
                setBackgroundImage(`https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Onestar_background.png`);
                return
            case "Two":
                setBackgroundImage(`https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Twostar_background.png`);
                return
            case "Three":
                setBackgroundImage(`https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Threestar_background.png`);
                return
            case "Four":
                setBackgroundImage(`https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Fourstar_background.png`);
                return
            case "Five":
                setBackgroundImage(`https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Fivestar_background.png`);
                return
        }
    }

    function handleTitleColor() {
        switch(stars) {
            case "One":
                // silver
                setTitleColor("#72778b");
                setTitleOutline("0.188rem solid rgb(89, 92, 107)");
                setHeaderBorder("0.4rem solid #5a5d66");

                return
            case "Two":
                // green
                setTitleColor("#2a9072");
                setTitleOutline("0.188rem solid rgb(35, 111, 89)");
                setHeaderBorder("0.4rem solid #44635e");
                return
            case "Three":
                // blue
                setTitleColor("#5180cc");
                setTitleOutline("0.188rem solid rgb(64, 99, 156)");
                setHeaderBorder("0.4rem solid #47687d");
                return
            case "Four":
                // purple
                setTitleColor("#a156e0");
                setTitleOutline("0.188rem solid rgb(124, 68, 171)");
                setHeaderBorder("0.4rem solid #745b87");
                return
            case "Five":
                // orange
                setTitleColor("#bd6932");
                setTitleOutline("0.188rem solid rgb(145, 82, 41, 1)");
                setHeaderBorder("0.4rem solid #846750");
                return
        }
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

    useEffect(() => {
        handleBackgroundImage();
        handleTitleColor();
        handleMaxWidth();

	}, []);

    return (
        <div className={classes.material}>
            <div className={classes.materialContainer} >
                <div onClick={handleClickOpen}>
                    <div className={classes.materialImage} style={{backgroundImage: `url(${image}), url(${backgroundImage})`}}>
                    </div>
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
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor: `${titleColor}`, padding: "0rem"}}>
                        <div style={{outline: `${titleOutline}`, padding: "0.5rem 1.5rem", outlineOffset: '-0.313rem'}}>
                        <Typography variant="h1">
                            {formatText(name)} 
                        </Typography>
                        </div>
                    </DialogTitle>
                    <DialogContent style={{ backgroundColor:"#272b30", padding: '.75rem 1.5rem', borderBottom: `${headerBorder}`, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: '50%', maxHeight: '9.5rem', minHeight: '9.5rem'}}>
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