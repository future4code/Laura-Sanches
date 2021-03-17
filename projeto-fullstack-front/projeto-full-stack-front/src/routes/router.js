import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from "../pages/LoginPage/LoginPage";
import AddPlaylistPage from '../pages/AddPlaylistPage/AddPlaylistPage';
import PlaylistDetailPage from '../pages/PlaylistDetailPage/PlaylistDetailPage';
import PlaylistListPage from '../pages/PlaylistListPage/PlaylistListPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = ({setRightButtonText}) => {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path="/signup">
                    <SignUpPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path="/">
                    <PlaylistListPage/>
                </Route>
                <Route exact path="/add">
                    <AddPlaylistPage/>
                </Route>
                <Route exact path="/detail/:id">
                    <PlaylistDetailPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;