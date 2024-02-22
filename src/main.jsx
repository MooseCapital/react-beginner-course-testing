import React, {Suspense, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";
// import {ErrorBoundary} from "react-error-boundary";

//browser router should almost always be used, it needs the server to have a 'catch all' route
// or fallback routes, so they always to to index.html, then the react router takes over, and move the users request
//to the correct component, like if they refresh the page on /user/dashboard

// hash-router needs to be used when we don't have control over the server, like with GitHub pages,
//we can't pick the catch-all, or fallback there. or with other 'shared' hosting environments.
//remember, <HashRouter> uses the hash portion of the URL to keep track of the application state. The part of
// the URL after the # symbol is never sent to the server, so the server doesn't need to handle it.

//basename can be set to anything, to start the root of all our routes at
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router basename={'/'}>
             <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
                <App/>
            </ErrorBoundary>
        </Router>
    </React.StrictMode>
)



