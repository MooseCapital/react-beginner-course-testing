import {useContext, useEffect, useState, useRef} from 'react'
import {UseFetch} from "./UseFetch.jsx";
import {Navigate} from "react-router-dom";
import {AllContext} from "./ContextProvider.jsx";



function Testing(props) {
    let [fetchData, errorHandler, loading] = UseFetch("https://picsum.photos/v2/list?page=4&limit=10");

    if (errorHandler) {
        return <div> error... {errorHandler}</div>
    } else if(loading) {
        return <div>loading...</div>
    }
    return (
        <div>
            <img src={fetchData[2]?.download_url} className={"test-image"} alt=""/>
        </div>
    )
}

export default Testing
