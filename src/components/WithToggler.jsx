import {Fragment} from "react";
import HighOrderToggle from "./HighOrderToggle.jsx";

function WithToggler(props) {

    console.log(props)
    return (
        <Fragment>
            <button onClick={props.toggle}>set name</button>
            {props.toggled && <p>my name is: {props.name}</p>}
        </Fragment>
    )
}
export default HighOrderToggle(WithToggler);
