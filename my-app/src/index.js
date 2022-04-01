import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";

let render=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
render(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    render(state);
})

