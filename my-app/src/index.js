import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import StoreContext, {Provider} from "./StoreContext";

let render=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App />
            </Provider>
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

