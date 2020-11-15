import React, {useState, useEffect} from 'react';
import style from 'styled-components';
import axios from 'axios'

const ButtonsContainer = style.div`
    display: flex;
    justify-content: space-around;
`

function ChooseButtons (props) {
    
    return(
        <ButtonsContainer>
            <button onClick={props.onClickNo}>Não</button>
            <button onClick={props.onClickYes}>Yes</button>
        </ButtonsContainer>
    )
}

export default ChooseButtons;