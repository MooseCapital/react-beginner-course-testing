import React, {Suspense, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";
// import {ErrorBoundary} from "react-error-boundary";



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
             <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
                <App/>
            </ErrorBoundary>
        </Router>
    </React.StrictMode>
)



