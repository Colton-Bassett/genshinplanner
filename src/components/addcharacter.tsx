import React, { Component } from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

import { Add } from '@material-ui/icons';

class AddCharacter extends Component {
    render() {
        let centerItem = 'center-item'
        return (
            <Grid container spacing={3} direction="row" justify="center" alignItems="center" style={{maxWidth: "100%", margin: "auto"}}>
                <Grid item xs={3} style={{}}>


				<Card style={{backgroundColor: "#272937", minWidth: "100%", margin: "auto", minHeight: "250px"}}> 
                    <Grid item xs={3} style={{margin: "auto", position: "relative", minHeight: "240px"}}>
                                <Add className={centerItem}></Add>
                    </Grid>

				</Card>
                </Grid>
                <Grid item xs={9} style={{}}>


				<Card style={{backgroundColor: "#272937", minWidth: "100%", margin: "auto", minHeight: "250px"}}> 
					<div style={{padding: "0px 20px"}}>
						<CardContent style={{}}>
						</CardContent>
					</div>
				</Card>
                </Grid>
            </Grid>
        );
    }
}

export default AddCharacter;