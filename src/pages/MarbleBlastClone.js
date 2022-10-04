import { Card, Container, Grid } from "@mui/material";
import React from "react";

function MarbleBlastClone() {
    return (
        <Grid container spacing={4} style={{overflow: 'hidden', margin: 'auto', minHeight: '100vh', width: '95vw'}}>
            <Grid item xs={8}>
               <video autoPlay loop muted style={{height: 'auto', width: '100%'}} type="video/mp4"/> 
            </Grid>
            <Grid item xs={4}>
                <Container>
                    <h3>Recreating Game Mechanics</h3>
                    <body>
                        I tried to take a game I knew well and recreate its mechanics to the best of my ability. The game I chose was Marble Blast Ultra which was a game on the Xbox 360. I recreated one of the most memorable maps, bunny slope, to test it.
                    </body>
                </Container>
            </Grid>
        </Grid>
    )
}

export default MarbleBlastClone;