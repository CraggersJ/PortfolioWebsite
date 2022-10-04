import { Card, Container, Grid } from "@mui/material";
import React from "react";
import Presentation from '../resources/Group28_VideoPresentation.mp4';

function GroupProject() {
    return (
        <Grid container spacing={4} style={{overflow: 'hidden', margin: 'auto', minHeight: '100vh', width: '95vw'}}>
            <Grid item xs={4}>
                <Container>
                    <h3>Project Management</h3>
                    <body>
                        In my second year of University, in association with Deutsche Bank, me and 6 of my peers were tasked with building an application that could help employees find mentors and schedule mentoring sessions. My role in the group was Project Manager. This entailed delegating workload amongst the group, leading group discussion, making final design decisions and writing the various design documents required for marking. Along with this, I also had my own stories to work on each week. The application was written in React with a Node/Express backend and a Mongo database. For this project we received an overall grade of 90%.
                    </body>
                    <body>
                        I am the person that does the introduction. I also have parts at 2:05 and 7:50.
                    </body>
                </Container>
            </Grid>
            <Grid item xs={8}>
               <video src={Presentation} controls loop muted style={{height: 'auto', width: '100%'}}/> 
            </Grid>
        </Grid>
    )
}

export default GroupProject;