import React from 'react';
import { Grid, Tabs, Tab, Typography, Box, AppBar } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import DialogCharacter from './dialogcharacter'
import DialogCharacterPlanner from './dialogcharacterplanner'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
    flexGrow: 1,
        //backgroundColor: theme.palette.background.paper,

    },
    tabLabel: {
        textTransform: "none", fontSize: "20px"
    }
}));

export default function DialogTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const dialogCharacters = [
        {name: "Razor"}, {name: "Xingqiu"}, {name: "Venti"}, {name: "Razor"}, {name: "Xingqiu"}, {name: "Venti"},
        {name: "Razor"}, {name: "Xingqiu"}, {name: "Venti"}, {name: "Razor"}, {name: "Xingqiu"}, {name: "Venti"},
        {name: "Razor"}, {name: "Xingqiu"}, {name: "Venti"}, {name: "Razor"}, {name: "Xingqiu"}, {name: "Venti"},
        {name: "Razor"}, {name: "Xingqiu"}, {name: "Venti"}, {name: "Razor"}, {name: "Xingqiu"}, {name: "Venti"},
        {name: "Razor"}, {name: "Xingqiu"}, {name: "Venti"}, {name: "Razor"},
    ]

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
	};
		
	const [showChars, setShowChars] = React.useState(true)
	// const [showPlanner, setShowPlanner] = React.useState(false)
	const clickMe = () => 
		setShowChars(!showChars)	
		// setShowPlanner(!showPlanner)


    const populateDialogCharacters = dialogCharacters.map((dialogCharacter, index) => 
        <Grid item xs={2} onClick={clickMe}>
        	<DialogCharacter name={dialogCharacter.name} ></DialogCharacter>
        </Grid>
	);

	const DialogCharacterContainer = () => (
		<Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
			{populateDialogCharacters} 
			{/* <DialogCharacter name={"Razor"}></DialogCharacter> */}
		</Grid>
	)

	const MainStuff = () => (
		<div className={classes.root}>
			<AppBar position="static" style={{backgroundColor: '#151823'}}>
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{margin: 'auto'}} indicatorColor="secondary">
					<Tab label="Genshin Impact Characters" {...a11yProps(0)}  className={classes.tabLabel} disableRipple/>
					<Tab label="Genshin Impact Weapons" {...a11yProps(1)} className={classes.tabLabel} disableRipple />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				{/* <Button onClick={clickMe}>Hello</Button>
				{ showChars ? <DialogCharacterContainer></DialogCharacterContainer> : null} */}
				{/* <Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
					{populateDialogCharacters}
				</Grid> */}
				<DialogCharacterContainer></DialogCharacterContainer>

			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			
		</div>
	)

  return (
	<div>
		{ showChars ? <MainStuff></MainStuff> : null }
		{ !showChars ? <DialogCharacterPlanner></DialogCharacterPlanner> : null }
	</div>
    
	
  	);
}