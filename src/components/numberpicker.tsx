import React from "react";
import { makeStyles, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    remove: {
        backgroundColor: 'white', 
        borderRadius: '1rem', 
        color: '#172028', 
        fontSize: '1.5rem',
        cursor: 'pointer',
        marginLeft: '.2rem',
        '&:hover': {
            backgroundColor: '#A7B1C1',
        },
    },
    add: {
        backgroundColor: 'white', 
        borderRadius: '1rem', 
        color: '#172028', 
        fontSize: '1.5rem',
        cursor: 'pointer',
        marginRight: '.2rem', 
        '&:hover': {
            backgroundColor: '#A7B1C1',
        },

    },
    container: {
        backgroundColor: '#4D5760', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        maxWidth: '80%', 
        minWidth: '80%', 
        display: 'flex', 
        minHeight: '1.75rem', 
        borderRadius: '1rem',
        '@media (max-width: 60em)': {
            maxWidth: '40%', 
            minWidth: '40%', 
        },
        '@media (max-width: 25em)': {
            maxWidth: '60%', 
            minWidth: '60%', 
		},
    },
}));

const NumberPicker = (props: any) => {
    const classes = useStyles();
    const numberPicker = props.numberPicker;
    const setNumberPicker = props.setNumberPicker;
    const handleNumberPickerFunc = props.handleNumberPicker;
    const otherNumberPicker = props.otherNumberPicker;
    const setOtherNumberPicker = props.setOtherNumberPicker;
    const current = props.current;


    function handleNumberPicker(numberPicker: number, type: string, setNumberPicker: any, otherNumberPicker: number, setOtherNumberPicker: any, current: boolean) {
        handleNumberPickerFunc(numberPicker, type, setNumberPicker, otherNumberPicker, setOtherNumberPicker, current); 
    }
  
    return (
      <div className={classes.container}>
        <RemoveIcon className={classes.remove} onClick={() => handleNumberPicker(numberPicker, "subtract", setNumberPicker, otherNumberPicker, setOtherNumberPicker, current)}></RemoveIcon>
        <Typography variant="h2">{numberPicker}</Typography>
        <AddIcon className={classes.add} onClick={() => handleNumberPicker(numberPicker, "add", setNumberPicker, otherNumberPicker, setOtherNumberPicker, current)}></AddIcon>
      </div>
    );
};

export default NumberPicker;