import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Router from './components/HomePage/Router/Router';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div>
        <Router/>
    </div>
  );
}

export default App;
