import {Fragment, useState} from "react";
import {unstable_renderSubtreeIntoContainer} from "react-dom";

function TestComp(props) {



    return (
        <div className="test-container">
           <p>what is your name?</p>
            {props.children}
        </div>
    )
}

export default TestComp
//validate prop types are correct variable passed in
TestComp.propTypes = {}

//set default prop if none are passed in, (will always render default)
TestComp.defaultProps = {}