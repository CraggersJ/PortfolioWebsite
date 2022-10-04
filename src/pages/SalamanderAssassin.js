import { Card, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SalamanderAssassinVideo from 'https://portfoliovideosstore.s3.eu-west-2.amazonaws.com/SalamanderAssassin_AdobeExpress.mp4';

function SalamanderAssassin() {
    return (
        <Grid container spacing={4} style={{overflow: 'hidden', margin: 'auto', minHeight: '100vh', width: '95vw'}}>
            <Grid item xs={4}>
                <Container>
                    <h3>Early Practice</h3>
                    <body>
                        This was one of the first things I worked on and got me used of basic game programming. It is clearly unfinished but allowed me to understand the unity development environment and the various game engine features. It is obviously limited and doesn't really utilise animation which is what lead me on to start the next project.  The snippet was made in Unity.
                    </body>
                </Container>
            </Grid>
            <Grid item xs={8}>
               <video src={SalamanderAssassinVideo} autoPlay loop muted style={{height: 'auto', width: '100%'}}/> 
            </Grid>
        </Grid>
    )
}

export default SalamanderAssassin;