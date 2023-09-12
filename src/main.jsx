import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LogRocket from "logrocket";
import {ContextProvider} from "./components/ContextProvider.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import {store} from './store.js';
import {Provider } from 'react-redux';


/* LogRocket.init('jgr5zk/beginner-learning-react');
LogRocket.identify('jgr5zk', {
  name: 'Moose Capital',
}); */


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
             <Provider store={store}>
                    <App/>
             </Provider>
        </Router>
    </React.StrictMode>
)



