import React, { Component } from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';


class SideBar extends Component {
    render() {
        return (
            <Grid>
                <Card style={{backgroundColor: "#20212C", minWidth: "70%", margin: "auto", minHeight: "655px", boxShadow: "none" }}> 
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