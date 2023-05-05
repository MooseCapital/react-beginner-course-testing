import React, {useState} from "react";

const AllContext = React.createContext({})

 function ContextProvider(props) {
    const [userName, setUserName] = useState("squidward")

    return (
       <AllContext.Provider value={{userName, setUserName}}>
           {props.children}
       </AllContext.Provider>
    )
}

export {ContextProvider, AllContext }
