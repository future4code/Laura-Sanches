import React, {useState, useEffect} from 'react';
import style from 'styled-components';
import axios from 'axios'

function ResetButton () {
const onClickReset = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Laura Sanches Dumont/clear').then(response => {

    })
}

    return(
        <div>
            <button onClick={onClickReset}>Resetar curtidas e matches</button>
        </div>
    )
}

export default ResetButton;