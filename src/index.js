import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import './app/layout/styles.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {configureStore} from "./app/store/configureStore";
import ScrollToTop from "./app/layout/ScrollToTop";

const store = configureStore()
const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop/>
            <App/>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
