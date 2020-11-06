import React, {Component, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {Grid} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AdBar extends Component {
    render() {
        return (
            <Grid direction="column" justify="center" alignItems="center">
            <Card style={{backgroundColor: "#20212C", maxWidth: "70%", margin: "1.5em auto .75em auto", boxShadow: "none" }}> 
            <CardContent style={{padding: "40px"}}>
              <Typography style={{textAlign: "center", color:"#6A605F", fontSize:"14px"}} variant="h5" component="h2">
                This website is supported by ads.
              </Typography>
            </CardContent>
            </Card>
            </Grid>

        );
    }
}

export default AdBar;