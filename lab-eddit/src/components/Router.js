import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from ".LoginPage";

const Router = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"}>
                    <LoginPage/>
                </Route>
            </Switch>
            <Switch>
                <Route exact path={"/signup"}></Route>
            </Switch>
            <Switch>
                <Route exact path={"/feed"}></Route>
            </Switch>
            <Switch>
                <Route exact path={"/post/:postId"}></Route>
            </Switch>
        </BrowserRouter>
    )
}