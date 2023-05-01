import {Fragment, useState} from "react";

function RenderTest(props) {

    const [show, setShow] = useState(true)

    function toggleName() {
        setShow((prev) => !prev)
        console.log("click")
    }
    return (
       <div>
            { props.render1(show, toggleName, "squidward") }
       </div>
    )
}

export default RenderTest

