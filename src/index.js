import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./page/login/login";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/* <App /> */}
                <Route path="/login" component={Login} />
                <Route path="/" component={App} />

            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


