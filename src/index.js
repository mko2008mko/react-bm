import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Login from "./page/login/login";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {/* <App /> */}
            <Route  path="/login" component={Login} />
            <Route  path="/" component={App} />
           
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));


