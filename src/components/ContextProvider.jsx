import React, {useEffect, useState} from "react";
import {UseFetch} from "./UseFetch.jsx";

const AllContext = React.createContext({})

 function ContextProvider(props) {
    const [userName, setUserName] = useState("squidward")
      let [fetchData, errorHandler, loading] = UseFetch("https://picsum.photos/v2/list?page=4&limit=10");


    return (
       <AllContext.Provider value={{userName, setUserName, fetchData, errorHandler, loading }}>
           {props.children}
       </AllContext.Provider>
    )
}

export {ContextProvider, AllContext }
