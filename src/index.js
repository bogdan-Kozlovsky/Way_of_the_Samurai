import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provide} from "./StoreContext";


const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provide store={store}>
                <App/>
            </Provide>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
});