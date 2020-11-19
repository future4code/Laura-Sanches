import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function ListTripsPage() {
    const history = useHistory();


  const goToCreateTripPage = () => {
    history.push("/create-trip");
  };

    return(
        <div>
            <h1>Lista de viagens</h1>
            <button onClick={goToCreateTripPage}>Criar uma viagem</button>
        </div>
    )
}

export default ListTripsPage;