import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage/LoginPage';
import TripDetailsPage from '../TripDetailsPage/TripeDetailsPage';
import ListTripsPage from '../ListTripsPage/ListTripsPage';
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../CreateTripPage/CreateTripPage';

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/login'>
                    <LoginPage/>
                </Route>
                <Route exact path='/details'>
                    <TripDetailsPage/>
                </Route>
                <Route exact path='/trips-page'>
                    <ListTripsPage/>
                </Route>
                <Route exact path='/form-page'>
                    <ApplicationFormPage/>
                </Route>
                <Route exact path='/create-trip'>
                    <CreateTripPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;