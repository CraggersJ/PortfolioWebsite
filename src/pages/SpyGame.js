import React from "react";
import { Card, Container, Grid } from "@mui/material";
import SpyGameVideo from '../resources/SilhouetteSpy_AdobeExpress.mp4';

function SpyGame() {
    return (
        <Grid container spacing={4} style={{overflow: 'hidden', margin: 'auto', minHeight: '100vh', width: '95vw'}}>
            <Grid item xs={8}>
               <video src={SpyGameVideo} controls loop style={{height: 'auto', width: '100%'}}/> 
            </Grid>
            <Grid item xs={4}>
                <Container>
                    <h3>Learning Animation</h3>
                    <body>
                        One of my biggest weaknesses in game-making was and still is my artistic ability. I can't draw and my 3d modelling skill are limited. This project I wanted to use an animated character but didn't have the necessary skills. This lead me to a technique I am using today. I film myself infront of a white background and frame by frame extract my silhouette. These act as the frames for the character. It worked well and provides a pretty intersting looking art style. The snippet was made in Unity.
                    </body>
                </Container>
            </Grid>
        </Grid>
    )
}

export default SpyGame;