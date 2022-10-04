import { Stack } from '@mui/system';
import React from 'react';
import TitlePage from './TitlePage';
import SalamanderAssassin from './SalamanderAssassin';
import SpyGame from './SpyGame';
import MarbleBlastClone from './MarbleBlastClone';
import FPSProject from './FPSProject';
import ThirdYearProject from './ThirdYearProject';
import Clover from './Clover';
import GroupProject from './GroupProject';


function PageContainer() {
    return ( 
        <Stack spacing={12}>
            <TitlePage/>
            <SalamanderAssassin/>
            <SpyGame/>
            <FPSProject/>
            <MarbleBlastClone/>
            <ThirdYearProject/>
            <Clover/>
            <GroupProject/>
        </Stack>
    )
}

export default PageContainer;