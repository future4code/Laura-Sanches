import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function CreateTripPage() {
    const history = useHistory();


  const goToListTripPage = () => {
    history.push("/trips-page");
  };
    return(
        <div>
            <h1>Criar uma viagem</h1>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <button onClick={goToListTripPage}>Criar</button>
        </div>
    )
}

export default CreateTripPage;