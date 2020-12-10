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

export default function DialogTab(props: any) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const characters = props.characters;
    const dialogClose = props.dialogClose;
    const ascensionDetails = props.ascensionDetails;
    const setAscensionDetails = props.setAscensionDetails;
    const items = props.items;
    const setItems = props.setItems;

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    };
		
    const [showChars, setShowChars] = React.useState(true)
    const [currentCharacter, setCurrentCharacter] = React.useState("Character");

    const openCharacterPlanner = (char: any) => {
        setShowChars(!showChars)	
        setCurrentCharacter(char)
    }

    const populateDialogCharacters = characters.map((character: { name: any; }, index: any) => 
        <Grid item xs={2} onClick={() => {
            openCharacterPlanner(character);
        }}>
        	<DialogCharacter character={character} ></DialogCharacter>
        </Grid>
	);

	const DialogCharacterContainer = () => (
		<Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">

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
				<Grid item xs={11} justify="center" alignItems="center" style={{margin: "auto", paddingTop: "20px"}}>
					<DialogCharacterContainer></DialogCharacterContainer>
				</Grid>

			</TabPanel>
			<TabPanel value={value} index={1}>
				<Grid item xs={11} justify="center" alignItems="center" style={{margin: "auto", paddingTop: "20px"}}>
					Coming soon
				</Grid>
			</TabPanel>	
		</div>
	)

  return (
	<div>
		{ showChars ? <MainStuff></MainStuff> : null }
		{ !showChars ? <DialogCharacterPlanner character={currentCharacter} dialogClose={dialogClose} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems}></DialogCharacterPlanner> : null }
	</div>	
  	);
}