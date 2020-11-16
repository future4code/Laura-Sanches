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
            <button onClick={props.goToChooseProfilePage} >voltar</button>
            <img src='https://tecnoblog.net/wp-content/uploads/2018/06/tinder-logo.png' width="80px" height="50px"></img>
            <button onClick={props.goToMatchListPage} >Lista Matches</button>
        </AppBarContainer>
    )
}

export default AppBar;