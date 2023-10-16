import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from './store/store';
const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);


