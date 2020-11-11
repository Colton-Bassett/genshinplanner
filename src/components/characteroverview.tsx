import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Add } from '@material-ui/icons';
import MaterialCard from './material'
import Paper from '@material-ui/core/Paper';
import Razor from './Razor.png'
import AscensionFour from './ascension4.png'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CharacterOverview() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let centerItemTop = 'center-item-top'
  let centerItemName = 'center-item-name'
  let centerItemAscension = 'center-item-ascension'
  let centerItemLevelRange = 'center-item-level-range'
  return (


	<Grid container spacing={3} direction="row" justify="center" alignItems="center" style={{maxWidth: "100%", margin: "auto"}}>
	<Grid item xs={3} style={{}}>


	<Card style={{backgroundColor: "#272937", minWidth: "100%", margin: "auto", minHeight: "250px"}}> 
		<Grid item xs={3} justify="center" alignItems="center" style={{margin: "auto", position: "relative", minHeight: "250px"}}>
			<CardMedia
			image= {Razor}
			className={centerItemTop}
			style={{ minHeight: "99px", minWidth: "99px", borderRadius: "10px"}}
			/>

			<Typography className={centerItemName} variant="h6">
			Razor
			</Typography>

			<CardMedia
			image= {AscensionFour}
			className={centerItemAscension}
			style={{ minHeight: "20px", minWidth: "100px", borderRadius: "10px"}}
			/>
			<Typography className={centerItemLevelRange} variant="body1" >
			Level 1 - 60
			</Typography>

		</Grid>


	</Card>
	</Grid>

	<Grid item xs={9} style={{}}>
    <Card className={classes.root} style={{ backgroundColor: '#272937', minHeight: '250px', minWidth: '100%'}}>
		<div style={{padding: '16px'}}>
	<Card className={classes.root} style={{ backgroundColor: '#222431', minHeight: '210px', minWidth: '100%', }}>
      <CardHeader
	  	style={{paddingBottom: "6px"}}
        action={
			<IconButton
				disableFocusRipple
				disableRipple
				className={clsx(classes.expand, {
				[classes.expandOpen]: expanded,
				})}
				onClick={handleExpandClick}
				aria-expanded={expanded}
				aria-label="show more"
				style={{backgroundColor: "#36384A", borderRadius: "10%", padding: "0"}}

		  >
			<ExpandMoreIcon style={{color: 'white', fontSize: '26px'}} />
		  </IconButton>
		}
        title={
			<Typography style={{fontSize: "18px", fontWeight: "bold"}}>
				Materials Overview
			</Typography>
		}
      />
      <CardContent style={{paddingTop: "0px", paddingBottom: "10px"}}>
		  <div style={{flexGrow: 1}}>
			<Grid container >
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
			<Grid item xs={3}>
				<MaterialCard></MaterialCard>
			</Grid>
		</Grid>
		  </div>
		  {/* <MaterialCard></MaterialCard>
		  <MaterialCard></MaterialCard>
		  <MaterialCard></MaterialCard> */}
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
	  </Card>
	  </div>
    </Card>

	</Grid>

	</Grid>
  );
}
