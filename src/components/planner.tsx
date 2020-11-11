import React, { Component } from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

import AddCharacter from "./addcharacter"
import CharacterOverview from "./characteroverview"

class Planner extends Component {
    render() {
        return (
            <Grid>

				<Card style={{backgroundColor: "#222431", minWidth: "70%", margin: "auto", minHeight: "600px"}}> 
					<div style={{padding: "0px 20px"}}>
						<CardContent style={{}}>
							<h2 className="text-center">Genshin Impact Planner</h2>
							<CharacterOverview></CharacterOverview>
							<AddCharacter></AddCharacter>
						</CardContent>
					</div>
				</Card>
            </Grid>
        );
    }
}

export default Planner;