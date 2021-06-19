import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import store from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);