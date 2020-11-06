import React, {Component, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {Grid, Container} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class OtherBar extends Component {
    render() {
        return (
            <Grid direction="column" justify="center" alignItems="center">
            <Card style={{backgroundColor: "#20212C", minWidth: "70%", margin: "auto", minHeight: "600px", boxShadow: "none" }}> 
			<div style={{padding: "0px 20px"}}>


            <CardContent style={{}}>

            </CardContent>
			</div>
            </Card>
            </Grid>

        );
    }
}

export default OtherBar;