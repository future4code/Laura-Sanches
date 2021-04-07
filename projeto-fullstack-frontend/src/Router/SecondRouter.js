import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import MusicLibrary from '../Pages/MusicLibrary/MusicLibrary'
import CreateMusic from '../Pages/CreateMusic/CreateMusic';
import MusicDetails from '../Pages/MusicDetails/MusicDetails';
import Menu from '../components/Menu/menu';
import { ContainerMenuAndRoutes } from '../styled/global'
import Login from '../Pages/Login/Login';

export default function SecondRouter() {
    return (
        <ContainerMenuAndRoutes>
            <BrowserRouter>
                <Menu className="cardAction" />
                <Switch>
                    <Route exact path="/biblioteca" component={MusicLibrary} />
                    <Route exact path="/musica/:id" component={MusicDetails} />
                    <Route exact path="/criarMusica" component={CreateMusic} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        </ContainerMenuAndRoutes>
    );
}