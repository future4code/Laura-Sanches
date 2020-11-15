import React, {useState, useEffect} from 'react';
//import style from 'styled-components';
//import axios from 'axios'
import Main from './components/Main/Main';
import ResetButton from './components/ResetButton/ResetButton';

function App () {
    return(
        <div>
            <Main/>
            <ResetButton/>
        </div>
    )
}

export default App;