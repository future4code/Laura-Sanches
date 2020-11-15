import React, {useState, useEffect} from 'react';
import style from 'styled-components';
import axios from 'axios'
import { PinDropSharp } from '@material-ui/icons';

const AppBarContainer = style.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;
    align-items: center;
    padding: 0 8px;
`

function AppBar (props) {
    return(
        <AppBarContainer>
            <button onClick={props.goToChooseProfilePage} >Escolher</button>
            <p>Astromatch</p>
            <button onClick={props.goToMatchListPage} >Lista</button>
        </AppBarContainer>
    )
}

export default AppBar;