import {Fragment, useEffect} from "react";
import * as propTypes from "prop-types";



function Test_Comp(props) {


    return (
        <Fragment>
            <div>{props.name}</div>
            {props.age && <div>{props.age}</div>}
            <div>{props.hobby}</div>
        </Fragment>
    )
}

export default Test_Comp

Test_Comp.defaultProps = {
age: 100

}
Test_Comp.propTypes = {
name: propTypes.string,
height: propTypes.array
}

