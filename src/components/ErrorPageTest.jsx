import {useContext, useEffect, useState, useRef} from 'react'
import {Navigate, useNavigate} from "react-router-dom";

function ErrorPageTest({resetErrorBoundary}) {
const navigate = useNavigate();

    return (
        <>
        <div>Page does not exist. </div>
        <button className={'button'} onClick={() => navigate('/')}>go home</button>
        <button className={'button'} onClick={resetErrorBoundary}>Try again</button>
        </>
    )
}

export {ErrorPageTest}
