import React from 'react';
import { Grid, Tabs, Tab, Typography, Box, AppBar } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import DialogCharacter from './dialogcharacter'

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

    const populateDialogCharacters = dialogCharacters.map((dialogCharacter, index) => 
        <Grid item xs={2}>
        <DialogCharacter name={dialogCharacter.name}></DialogCharacter>
        </Grid>
    );

  return (
    <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: '#151823'}}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{margin: 'auto'}} indicatorColor="secondary">
                <Tab label="Genshin Impact Characters" {...a11yProps(0)}  className={classes.tabLabel} disableRipple/>
                <Tab label="Genshin Impact Weapons" {...a11yProps(1)} className={classes.tabLabel} disableRipple />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
                {populateDialogCharacters}
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
    </div>
  );
}