import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';


class SideBar extends Component {
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

export default SideBar;