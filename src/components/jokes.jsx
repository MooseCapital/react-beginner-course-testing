import React from "react";


export default function Joke(props) {

     const [isShown, setIsShown] = React.useState(false)

    function toggle() {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div >
            {props.setup && <h3>{props.setup}</h3>}
            { isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown ? "hide" : "Show"}</button>
            <hr />
        </div>
    )
}