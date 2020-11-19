import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function HomePage() {
    const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login/");
  };

  const goToApplicationFormPage = () => {
    history.push("/form-page");
  };

    return(
        <div>
            <h1>LabeX</h1>
            <button onClick={goToLoginPage}>Área de administrador</button>
            <button onClick={goToApplicationFormPage}>Quero me candidatar</button>
        </div>
    )
}

export default HomePage;