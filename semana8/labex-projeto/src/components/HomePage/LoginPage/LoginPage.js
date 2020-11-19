import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function LoginPage() {
    const history = useHistory();


  const goToListTripPage = () => {
    history.push("/trips-page");
  };
    return(
        <div>
            <input></input>
            <input></input>
            <button onClick={goToListTripPage}>Enviar</button>
        </div>
    )
}

export default LoginPage;