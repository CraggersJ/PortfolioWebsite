import React from "react";
import { Card, Container, Grid } from "@mui/material";
import InfectedPhoto from '../resources/Infected.png'

function FPSProject() {
    return (
            <Grid container spacing={4} style={{overflow: 'hidden', margin: 'auto', height: '100vh', width: '95vw'}}>
                <Grid item xs={6}>
                    <Container>
                        <h3>Pratice with 3D Games</h3>
                        <body>
                            After working on 2D, I naturally progressed to 3D. This came relatively easy due to my strong maths background. 3D maths is something I have a lot of experience with from my academia. For animations and character models I used free resources online such as Mixamo. This was also my first time using unreal and c++ so there was some learning to do there but this came fairly easy due also to my computer science education. Unfortunately I lost the files for this work and have only one screenshot of it but it was more about practice anyway. During this project, I created the mechanics for an infection mode involving a monster type playable enemy and a soldier player that has a gun to fight back.
                        </body>
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    <img src={InfectedPhoto} style={{height: 'auto', width: '100%'}}/>
                </Grid>
            </Grid>
    )
}

export default FPSProject;