import React from 'react';
import { Container } from '@mui/material';
import { Stack } from '@mui/system';

function TitlePage() {
    return ( 
        <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Stack 
                alignItems="center"
            >
                <h1>Joe Craghill's Portfolio</h1>
                <h3>Scroll Down</h3>
            </Stack>
        </Container>
    )
}

export default TitlePage;