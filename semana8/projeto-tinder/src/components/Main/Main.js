import React, {useState, useEffect} from 'react';
import style from 'styled-components';
import axios from 'axios'
import MatchListPage from '../MatchListPage/MatchListPage';
import AppBar from '../AppBar/AppBar';
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage';

const MainContainer = style.div`
    border: 1px solid black;
    border-radius: 3px;
    width: 400px;
    height: 600px;
    margin: 30px;
    display: flex;
    flex-direction: column;
`

function Main (props) {
    const [selectedPage, setSelectedPage] = useState('choose-profile')
    const renderSelectedPage = () => {
        switch(selectedPage) {
            case'choose-profile':
                return <ChooseProfilePage/>
            case 'match-list':
                return <MatchListPage/>
            default:
                return<ChooseProfilePage/>
        }
    }
    
    const goToChooseProfilePage = () => {
        setSelectedPage('choose-profile')
    }

    const goToMatchListPage = () => {
        setSelectedPage('match-list')
    }

    return(
        <MainContainer>
            <AppBar 
            goToChooseProfilePage={goToChooseProfilePage} 
            goToMatchListPage={goToMatchListPage} 
            />
            {renderSelectedPage()}
        </MainContainer>
    )
}

export default Main;