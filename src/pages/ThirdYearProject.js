import React from "react";
import { Card, Container, Grid } from "@mui/material";

function ThirdYearProject() {
    return (
        <Grid container spacing={4} style={{overflow: 'hidden', margin: 'auto', minHeight: '100vh', width: '95vw'}}>
            <Grid item xs={4}>
                <Container>
                    <h3>Current Project</h3>
                    <body>
                        At Warwick, the third year of Computer Science includes a year-long project that we get to choose. For my project I am creating a mobile game that utilises Bluetooth Low Energy to allow users to play multiplayer in an offline environment. The game will be a run and gun style platformer in the same art style as the first two projects in this portfolio. This project will use all the skills I have learned up to this point and will require I learn more about networking. This will be a finished product rather than a gameplay snippet and my current intention is to publish it once it is complete. 
                    </body>
                </Container>
            </Grid>
            <Grid item xs={8}>
               
            </Grid>
        </Grid>
    )
}

export default ThirdYearProject;