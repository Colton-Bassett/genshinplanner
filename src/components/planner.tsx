import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

class Planner extends Component {
    render() {
        return (
            <Grid direction="column" justify="center" alignItems="center">
				<Card style={{backgroundColor: "#222431", minWidth: "70%", margin: "auto", minHeight: "600px"}}> 
					<div style={{padding: "0px 20px"}}>
						<CardContent style={{}}>
							<h2 className="text-center">Genshin Impact Planner</h2>
						</CardContent>
					</div>
				</Card>
            </Grid>
        );
    }
}

export default Planner;