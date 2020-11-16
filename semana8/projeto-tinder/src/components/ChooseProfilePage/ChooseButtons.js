import React from 'react';
import style from 'styled-components';

const ButtonsContainer = style.div`
    display: flex;
    justify-content: space-around;
`

function ChooseButtons (props) {
    
    return(
        <ButtonsContainer>
            <button onClick={props.onClickNo}>Num Quero</button>
            <button onClick={props.onClickSim}>Quero</button>
        </ButtonsContainer>
    )
}

export default ChooseButtons;