import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
// import { makeStyles, Theme } from '@material-ui/core/styles';

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



// const useStyles = makeStyles((theme: Theme) => ({
// }));

export default function DialogTab(props: any) {
    // const classes = useStyles();
    const characters = props.characters;
    const dialogClose = props.dialogClose;
    const ascensionDetails = props.ascensionDetails;
    const setAscensionDetails = props.setAscensionDetails;
    const items = props.items;
    const setItems = props.setItems;
    const displayTabsTitle = props.displayTabsTitle;

    const tabPanel = props.tabPanel;
		
    const [showChars, setShowChars] = React.useState(true)
    const [currentCharacter, setCurrentCharacter] = React.useState("Character");

    const openCharacterPlanner = (char: any) => {
        displayTabsTitle();
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
			{ populateDialogCharacters } 
		</Grid>
	);

	const DialogTabMain = () => (
		<div >
			<TabPanel value={tabPanel} index={0}>
				<Grid item xs={11}  style={{margin: "auto", }}>
					<DialogCharacterContainer></DialogCharacterContainer>
				</Grid>

			</TabPanel>
			<TabPanel value={tabPanel} index={1}>
				<Grid item xs={11} style={{margin: "auto", }}>
					Coming soon
				</Grid>
			</TabPanel>	
		</div>
	)

  return (
	<div>
		{ showChars ? <DialogTabMain></DialogTabMain> : null }
		{ !showChars ? <DialogCharacterPlanner character={currentCharacter} dialogClose={dialogClose} ascensionDetails={ascensionDetails} setAscensionDetails={setAscensionDetails} items={items} setItems={setItems}></DialogCharacterPlanner> : null }
	</div>	
  	);
}