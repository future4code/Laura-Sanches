import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/SignUp/SignUp'
import SecondRouter from './SecondRouter'
//import MusicLibrary from '../Pages/MusicLibrary/index.js'
//import Menu from '../components/Menu/index.js'
//import Inicio from '../Pages/Inicio/index.js';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <SecondRouter />
            </Switch>
        </BrowserRouter>
    );
}