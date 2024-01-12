import Child from "./Child.jsx";
import React, {useContext, useState} from "react";

function Parent(props) {

    const user = useContext(AllContext)

    function handleSubmit(event) {
        event.preventDefault();
        user.setUserName(formData)
    }

    const [formData, setFormData] = useState("")

    return (
        <div className={"col"}>
            <form className={"col"} action="" onSubmit={handleSubmit}>
                <input type="text" value={formData} onChange={(event) => setFormData(event.target.value)}  placeholder={"username"}/>
                <button>change username</button>
            
            </form>
            <Child></Child>
        </div>
    )
}

export default Parent
