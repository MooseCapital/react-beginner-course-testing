import React, {useEffect, useState} from "react";
import {UseFetch} from "./UseFetch.jsx";

const AllContext = React.createContext({})

 function ContextProvider(props) {
    const [userName, setUserName] = useState("squidward")



    return (
       <AllContext.Provider value={{userName, setUserName }}>
           {props.children}
       </AllContext.Provider>
    )
}

export {ContextProvider, AllContext }
