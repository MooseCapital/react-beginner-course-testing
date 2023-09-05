import {useContext, useEffect, useState, useRef} from 'react'
import {UseFetch} from "./UseFetch.jsx";
import {Navigate} from "react-router-dom";
import {AllContext} from "./ContextProvider.jsx";



function Testing(props) {
   let context = useContext(AllContext);
    if (context.errorHandler) {
        return <div> error... {context.errorHandler}</div>
    } else if(context.loading) {
        return <div>loading...</div>
    }
    return (
        <div>
            <img src={context?.fetchData[2]?.download_url} className={"test-image"} alt=""/>
        </div>
    )
}

export default Testing
