import React from "react";
import { Card, Container, Grid } from "@mui/material";
import AppleClover from '../resources/Android-UsePage.mp4'
import AndroidClover from '../resources/Android-HomePage.mp4'

function Clover() {
    return (
        <Grid container spacing={2} style={{overflow: 'hidden', margin: 'auto', minHeight: '100vh', width: '95vw'}}>
            <Grid item xs={3}>
               <video src={AndroidClover} autoPlay loop muted style={{height: '75vh', width: 'auto'}}/> 
            </Grid>
            <Grid item xs={3}>
               <video src={AppleClover} autoPlay loop muted style={{height: '75vh', width: 'auto'}}/> 
            </Grid>
            <Grid item xs={6}>
                <Container>
                    <h3>Work Experience</h3>
                    <body>
                        For the summer of 2022, I worked for an early stage start-up helping develop a Xamarin application that allows users to manage their employee benefits. I worked on the front-end, using designs created by other members of the team to create the UI. It was a great opportunity to learn from industry veterans and really helped me progress as a software engineer. The accompanying videos show the UI of two of the pages I wrote the UI for.
                    </body>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Clover;